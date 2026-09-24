"""
MODULE DE DONNÉES CONSOLIDÉES : ENSEIGNEMENT, ÉDUCATION & FORMATION
Agrégation des 8 Domaines d'Excellence et des 21 Fiches Métiers Haute Profondeur
Source Officielle Principale : Studyrama (https://www.studyrama.com/formations/fiches-metiers/enseignement)
"""

import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

try:
    from execution.education_jobs_part1 import DOMAINS, PEDAGOGICAL_PATHWAYS, JOBS_PART1
    from execution.education_jobs_part2 import JOBS_PART2
except ImportError:
    from education_jobs_part1 import DOMAINS, PEDAGOGICAL_PATHWAYS, JOBS_PART1
    from education_jobs_part2 import JOBS_PART2

JOBS = JOBS_PART1 + JOBS_PART2

if __name__ == "__main__":
    print(f"✅ Consolidation Réussie : {len(DOMAINS)} Domaines d'Excellence")
    print(f"✅ Consolidation Réussie : {len(PEDAGOGICAL_PATHWAYS)} Voies Pédagogiques")
    print(f"✅ Consolidation Réussie : {len(JOBS)} Fiches Métiers Haute Profondeur")
    for i, j in enumerate(JOBS, 1):
        print(f"  {i}. [{j['domainId']}] {j['id']} -> {j['title']} ({j['studyramaUrl']})")
