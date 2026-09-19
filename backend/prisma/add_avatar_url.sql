-- ============================================================================
-- LE MONDE DU TRAVAIL — AJOUT DU CHAMP AVATAR POUR LES PROFILS MEMBRES
-- ============================================================================

ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT;
