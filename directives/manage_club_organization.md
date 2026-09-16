# SOP : Gestion de l'Organisation & du Bureau du Club

## 1. Contexte & Objectifs
La section **"Organisation & Fonctionnement"** de l'espace administrateur permet de visualiser la composition officielle du bureau du club "Le Monde du Travail", d'organiser les pôles associatifs et de piloter les mandats des membres responsables.

### Rôles & Niveaux d'Accès :
- **Consultation (Tout le staff administrateur)** : Accès en lecture à l'organigramme, aux fiches détaillées des postes et à la liste des titulaires en fonction.
- **Gestion Exclusive (Ultra Admin)** : Seul le compte `ULTRA_ADMIN` détient les droits de mutation :
  1. Nommer un membre à un poste ou changer son affectation.
  2. Créer de nouveaux postes associatifs sur mesure.
  3. Modifier les intitulés, missions, catégories de pôles et ordres hiérarchiques.
  4. Supprimer des postes.
  5. Révoquer ou libérer une affectation de mandat.

---

## 2. Modèle de Données & Relations (Prisma)
- **`ClubPosition`** :
  - `title` : Intitulé unique du poste (ex. "Président(e)", "Trésorier(ère) Général(e)").
  - `category` : Pôle associatif (`BUREAU_EXECUTIF`, `POLE_COMMUNICATION`, `POLE_LOGISTIQUE`, `POLE_PEDAGOGIQUE`, `POLE_RELATIONS`, `POLE_PROJETS`, `POLE_COMMUNAUTE`, `AUTRE`).
  - `order` : Rang hiérarchique d'affichage (ex. 1 pour Présidence, 2 pour Vice-Présidence, etc.).
  - `isSystem` : Booléen indiquant les postes généraux initiaux.
  - `assignments` : Liste des affectations passées et présentes (`ClubAssignment`).
- **`ClubAssignment`** :
  - `positionId` : Référence vers `ClubPosition`.
  - `userId` : Référence vers le compte `User`.
  - `mandateYear` : Période du mandat (ex. "2026-2027").
  - `startDate`, `endDate`, `isActive` : Période effective d'exercice.
  - `assignedById` : Référence vers l'administrateur ayant nommé le titulaire.

---

## 3. Endpoints API & Sécurité

| Méthode | Route | Rôle Requis | Description |
|---|---|---|---|
| `GET` | `/api/organization/bureau` | Staff Admin (`ADMIN`, `ULTRA_ADMIN`) | Composition complète du bureau ordonnée |
| `GET` | `/api/organization/positions` | Staff Admin | Catalogue des postes configurés |
| `GET` | `/api/organization/positions/:id` | Staff Admin | Détail d'un poste et historique |
| `POST` | `/api/organization/positions` | **Ultra Admin uniquement** | Création d'un nouveau poste |
| `PUT` | `/api/organization/positions/:id` | **Ultra Admin uniquement** | Modification d'un poste |
| `DELETE` | `/api/organization/positions/:id` | **Ultra Admin uniquement** | Suppression d'un poste |
| `GET` | `/api/organization/assignments` | Staff Admin | Liste des affectations et mandats |
| `POST` | `/api/organization/assignments` | **Ultra Admin uniquement** | Attribution d'un poste à un membre |
| `PUT` | `/api/organization/assignments/:id` | **Ultra Admin uniquement** | Modification d'un mandat |
| `DELETE` | `/api/organization/assignments/:id` | **Ultra Admin uniquement** | Retrait / libération d'une affectation |

---

## 4. Procédures Opérationnelles

### Ré-injection des 12 Postes Généraux
Si la base est réinitialisée ou enrichie :
```bash
cd backend
/usr/bin/node prisma/seed.js
```

### Exécution des Tests Automatisés
```bash
cd backend
/usr/bin/node ./node_modules/jest/bin/jest.js tests/organization.test.js --runInBand
```
