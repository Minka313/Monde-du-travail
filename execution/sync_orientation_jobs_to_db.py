#!/usr/bin/env python3
"""
Module d'ingestion et de synchronisation déterministe des 535 fiches métiers.
Architecture 3-Couches (Couche 3 : Exécution Déterministe)
Le Monde du Travail — Synchronisation Base de Données Supabase & Espace Admin
"""

import json
import os
import re
import subprocess
from typing import Any, Dict, List, Optional


class JobDatabaseSynchronizer:
    """
    Gestionnaire déterministe d'ingestion et d'alignement des fiches métiers
    entre le catalogue d'orientation et la table PostgreSQL 'jobs' de Supabase.
    """

    DEFAULT_DB_URL = "postgresql://postgres:BayeMoyMinka@db.vbyileuqgzooedcwjoxe.supabase.co:5432/postgres?sslmode=require"

    def __init__(self, catalog_path: str = ".tmp/orientation_jobs_catalog.json", db_url: Optional[str] = None) -> None:
        """
        Initialise le synchronisateur avec les chemins et paramètres de connexion.

        Args:
            catalog_path (str): Chemin vers le catalogue JSON temporaire des métiers.
            db_url (Optional[str]): URL PostgreSQL directe (ou lit backend/.env).
        """
        self.catalog_path = catalog_path
        self.db_url = db_url or self._load_db_url()

    def _load_db_url(self) -> str:
        """
        Récupère l'URL de connexion PostgreSQL depuis l'environnement ou backend/.env.

        Returns:
            str: URL PostgreSQL avec sslmode=require.
        """
        env_path = os.path.join("backend", ".env")
        if os.path.exists(env_path):
            with open(env_path, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line.startswith("DIRECT_URL="):
                        val = line.split("=", 1)[1].strip().strip('"').strip("'")
                        return val
        return self.DEFAULT_DB_URL

    @staticmethod
    def map_category(family_id: Optional[str], title: str, domain: Optional[str]) -> str:
        """
        Mappe la famille d'orientation vers l'enum PostgreSQL JobCategory :
        ['TECH', 'ENERGIE', 'FINANCE', 'SECURITE', 'SANTE', 'EDUCATION', 'AUTRE'].

        Args:
            family_id (Optional[str]): Identifiant technique de la famille.
            title (str): Titre du métier.
            domain (Optional[str]): Domaine ou secteur.

        Returns:
            str: Valeur valide de l'enum JobCategory.
        """
        fid = (family_id or "").lower()
        dom = (domain or "").lower()
        t = title.lower()

        if "cyber" in fid or "cyber" in t or "pentest" in t or "soc" in t:
            return "SECURITE"
        if "numerique" in fid or "informatique" in fid or "ia" in fid or "tech" in fid:
            return "TECH"
        if "finance" in fid or "banque" in fid or "assurance" in fid or "compta" in dom:
            return "FINANCE"
        if "energie" in fid or "electricite" in fid or "petrole" in fid or "gaz" in fid or "mines" in fid:
            return "ENERGIE"
        if "sante" in fid or "medical" in fid or "paramedical" in fid or "soin" in fid or "biochimie" in fid:
            return "SANTE"
        if "education" in fid or "formation" in fid or "pedagogie" in fid or "recherche" in fid:
            return "EDUCATION"
        return "AUTRE"

    @staticmethod
    def escape_sql(value: Optional[Any]) -> str:
        """
        Échappe et formate une valeur pour une insertion SQL PostgreSQL sécurisée.

        Args:
            value (Optional[Any]): Valeur Python à sérialiser.

        Returns:
            str: Chaîne formatée pour SQL.
        """
        if value is None:
            return "NULL"
        if isinstance(value, (int, float)):
            return str(value)
        if isinstance(value, bool):
            return "TRUE" if value else "FALSE"
        if isinstance(value, (dict, list)):
            json_str = json.dumps(value, ensure_ascii=False)
            escaped = json_str.replace("'", "''")
            return f"'{escaped}'::jsonb"
        val_str = str(value).replace("'", "''")
        return f"'{val_str}'"

    @staticmethod
    def format_text_array(items: Optional[List[Any]]) -> str:
        """
        Formate une liste de chaînes ou objets en tableau text[] PostgreSQL.

        Args:
            items (Optional[List[Any]]): Liste d'éléments.

        Returns:
            str: Représentation SQL text[].
        """
        if not items or not isinstance(items, list):
            return "ARRAY[]::text[]"
        cleaned: List[str] = []
        for it in items:
            if it:
                if isinstance(it, dict):
                    val = it.get("name") or it.get("title") or it.get("label") or str(it)
                else:
                    val = str(it)
                s = val.strip().replace("'", "''")
                if s:
                    cleaned.append(f"'{s}'")
        if not cleaned:
            return "ARRAY[]::text[]"
        return f"ARRAY[{', '.join(cleaned)}]::text[]"

    def extract_skills(self, job: Dict[str, Any]) -> List[str]:
        """
        Agrège les compétences techniques et humaines d'une fiche métier.

        Args:
            job (Dict[str, Any]): Données brutes du métier.

        Returns:
            List[str]: Liste dédoublonnée de compétences.
        """
        skills_raw = job.get("skills")
        result: List[str] = []
        if isinstance(skills_raw, list):
            for s in skills_raw:
                if isinstance(s, dict):
                    val = s.get("name") or s.get("title") or str(s)
                else:
                    val = str(s)
                if val.strip():
                    result.append(val.strip())
        elif isinstance(skills_raw, dict):
            for key in ["technical", "human", "tools"]:
                sub = skills_raw.get(key)
                if isinstance(sub, list):
                    for s in sub:
                        if isinstance(s, dict):
                            val = s.get("name") or s.get("title") or str(s)
                        else:
                            val = str(s)
                        if val.strip():
                            result.append(val.strip())
        elif isinstance(skills_raw, str) and skills_raw.strip():
            result.extend([s.strip() for s in skills_raw.split(",") if s.strip()])
        return list(dict.fromkeys(result))[:15]

    def extract_studies(self, job: Dict[str, Any]) -> str:
        """
        Synthétise le parcours d'études en texte clair pour l'administration.

        Args:
            job (Dict[str, Any]): Données brutes du métier.

        Returns:
            str: Parcours condensé (écoles, diplômes).
        """
        studies_raw = job.get("studies")
        if isinstance(studies_raw, str):
            return studies_raw
        if isinstance(studies_raw, dict):
            parts: List[str] = []
            pathway = studies_raw.get("pathway")
            if isinstance(pathway, list):
                for p in pathway:
                    if isinstance(p, dict) and p.get("title"):
                        step = p.get("step", "")
                        parts.append(f"{step} : {p.get('title')}".strip(" :"))
            schools = studies_raw.get("schools")
            if isinstance(schools, list) and schools:
                school_names: List[str] = []
                for s in schools[:5]:
                    if isinstance(s, dict):
                        school_names.append(s.get("name") or str(s))
                    elif isinstance(s, str):
                        school_names.append(s)
                if school_names:
                    parts.append("Écoles & universités : " + ", ".join(school_names))
            if parts:
                return "\n".join(parts)
        return str(job.get("level") or "Cursus universitaire ou technique adapté.")

    def build_upsert_sql(self, jobs: List[Dict[str, Any]]) -> str:
        """
        Construit le script SQL transactionnel d'UPSERT pour les 535 métiers.

        Args:
            jobs (List[Dict[str, Any]]): Liste des fiches métiers du catalogue.

        Returns:
            str: Script SQL prêt à être exécuté par psql.
        """
        sql_lines: List[str] = [
            "-- Script d'ingestion transactionnelle idempotente des 535 métiers",
            "BEGIN;",
            "ALTER TABLE \"jobs\" ADD COLUMN IF NOT EXISTS \"saviezVous\" JSONB;",
            ""
        ]

        for j in jobs:
            job_id = j.get("id") or j.get("slug")
            title = j.get("title", "Métier").strip()
            desc = (
                j.get("shortDescription")
                or j.get("simpleDefinition")
                or j.get("description")
                or f"Fiche complète du métier {title}."
            ).strip()
            content = (j.get("longDescription") or j.get("description") or desc).strip()

            family_id = j.get("familyId")
            family_name = j.get("familyName") or j.get("domain") or "Orientation & Métiers"
            category = self.map_category(family_id, title, family_name)

            icon = j.get("icon") or "💼"
            image = j.get("image") or ""
            salary = j.get("salary") or "Rémunération selon profil & séniorité"
            skills_arr = self.format_text_array(self.extract_skills(j))
            prerequisites = str(j.get("level") or j.get("prerequisites") or "").strip()
            studies_txt = self.extract_studies(j).strip()

            career = j.get("career", {}) if isinstance(j.get("career"), dict) else {}
            advantages = str(career.get("pros") or j.get("advantages") or "").strip()
            disadvantages = str(career.get("cons") or j.get("disadvantages") or "").strip()

            sub_profs_raw = j.get("aliases") or j.get("specializations") or []
            if not isinstance(sub_profs_raw, list):
                sub_profs_raw = [str(sub_profs_raw)]
            sub_profs = self.format_text_array(sub_profs_raw[:10])

            video_url = j.get("videoUrl")
            location = j.get("location") or "Sénégal & International"
            status = "PUBLISHED"

            saviez_vous = j.get("saviezVous")
            if not isinstance(saviez_vous, dict):
                saviez_vous = None

            sql_lines.append(
                f"""INSERT INTO "jobs" (
    id, title, description, content, category, domain, icon, image,
    salary, skills, prerequisites, studies, advantages, disadvantages,
    "subProfessions", "videoUrl", location, status, "saviezVous", "createdAt", "updatedAt"
) VALUES (
    {self.escape_sql(job_id)},
    {self.escape_sql(title)},
    {self.escape_sql(desc)},
    {self.escape_sql(content)},
    '{category}'::"JobCategory",
    {self.escape_sql(family_name)},
    {self.escape_sql(icon)},
    {self.escape_sql(image)},
    {self.escape_sql(salary)},
    {skills_arr},
    {self.escape_sql(prerequisites)},
    {self.escape_sql(studies_txt)},
    {self.escape_sql(advantages)},
    {self.escape_sql(disadvantages)},
    {sub_profs},
    {self.escape_sql(video_url)},
    {self.escape_sql(location)},
    '{status}'::"ContentStatus",
    {self.escape_sql(saviez_vous)},
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    content = EXCLUDED.content,
    category = EXCLUDED.category,
    domain = EXCLUDED.domain,
    icon = EXCLUDED.icon,
    image = EXCLUDED.image,
    salary = EXCLUDED.salary,
    skills = EXCLUDED.skills,
    prerequisites = EXCLUDED.prerequisites,
    studies = EXCLUDED.studies,
    advantages = EXCLUDED.advantages,
    disadvantages = EXCLUDED.disadvantages,
    "subProfessions" = EXCLUDED."subProfessions",
    "videoUrl" = EXCLUDED."videoUrl",
    location = EXCLUDED.location,
    status = EXCLUDED.status,
    "saviezVous" = COALESCE(EXCLUDED."saviezVous", "jobs"."saviezVous"),
    "updatedAt" = CURRENT_TIMESTAMP;
"""
            )

        sql_lines.append("COMMIT;")
        return "\n".join(sql_lines)

    def execute(self) -> Dict[str, Any]:
        """
        Déclenche la séquence complète de synchronisation déterministe.

        Returns:
            Dict[str, Any]: Rapport d'exécution incluant le nombre de lignes synchronisées.
        """
        if not os.path.exists(self.catalog_path):
            raise FileNotFoundError(f"Le fichier catalogue {self.catalog_path} est introuvable.")

        with open(self.catalog_path, "r", encoding="utf-8") as f:
            jobs = json.load(f)

        if not isinstance(jobs, list) or len(jobs) == 0:
            raise ValueError("Le catalogue extrait ne contient aucune fiche métier valide.")

        sql_content = self.build_upsert_sql(jobs)
        sql_file_path = os.path.join(".tmp", "sync_jobs_batch.sql")

        with open(sql_file_path, "w", encoding="utf-8") as f:
            f.write(sql_content)

        # Exécution directe via psql
        cmd = ["psql", self.db_url, "-f", sql_file_path]
        proc = subprocess.run(cmd, capture_output=True, text=True, check=False)

        if proc.returncode != 0:
            raise RuntimeError(f"Erreur d'exécution psql : {proc.stderr}")

        # Vérification du décompte total
        verify_cmd = ["psql", self.db_url, "-t", "-c", "SELECT count(*) FROM jobs WHERE status = 'PUBLISHED';"]
        verify_proc = subprocess.run(verify_cmd, capture_output=True, text=True, check=False)
        total_count = int(verify_proc.stdout.strip()) if verify_proc.returncode == 0 else -1

        return {
            "status": "SUCCESS",
            "jobs_in_catalog": len(jobs),
            "jobs_in_db_published": total_count,
            "sql_file": sql_file_path
        }


if __name__ == "__main__":
    synchronizer = JobDatabaseSynchronizer()
    try:
        report = synchronizer.execute()
        print(f"✅ Synchronisation réussie : {report['jobs_in_db_published']} métiers publiés en base de données.")
        print(json.dumps(report, indent=2))
    except Exception as exc:
        print(f"❌ Échec de la synchronisation : {exc}")
        exit(1)
