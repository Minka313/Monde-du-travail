-- ============================================================================
-- LE MONDE DU TRAVAIL — SAUVETAGE ET RÉTENTION ANALYTICS SUPABASE
-- 1. Table d'agrégation journalière : analytics_daily_stats
-- 2. Fonction d'agrégation nocturne & purge des logs bruts (> 30 jours)
-- 3. Planification automatique nocturne via pg_cron (02h00 UTC)
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. DDL : CRÉATION DE LA TABLE D'AGRÉGATION
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS analytics_daily_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stat_date DATE NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) DEFAULT '',
    entity_id VARCHAR(255) DEFAULT '',
    user_profile VARCHAR(50) DEFAULT '',
    total_events INT NOT NULL DEFAULT 0,
    unique_sessions INT NOT NULL DEFAULT 0,
    unique_users INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    -- Clé d'unicité composite pour garantir l'idempotence totale (ON CONFLICT)
    CONSTRAINT uq_analytics_daily_stats UNIQUE (stat_date, event_type, entity_type, entity_id, user_profile)
);

-- Index pour requêtes analytiques ultra-rapides sur le tableau de bord
CREATE INDEX IF NOT EXISTS idx_analytics_daily_stats_date ON analytics_daily_stats(stat_date DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_daily_stats_type ON analytics_daily_stats(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_daily_stats_entity ON analytics_daily_stats(entity_type, entity_id);

-- ----------------------------------------------------------------------------
-- 2. FONCTION PL/PGSQL D'AGRÉGATION ET DE PURGE IDEMPOTENTE
-- ----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION aggregate_and_purge_analytics_daily(
    target_date DATE DEFAULT (CURRENT_DATE - INTERVAL '1 day')::date
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_aggregated_count BIGINT := 0;
    v_purged_count BIGINT := 0;
    v_start_ts TIMESTAMPTZ := target_date::timestamptz;
    v_end_ts TIMESTAMPTZ := (target_date + INTERVAL '1 day')::timestamptz;
BEGIN
    -- Étape A : Agrégation des événements de la journée cible
    INSERT INTO analytics_daily_stats (
        stat_date,
        event_type,
        entity_type,
        entity_id,
        user_profile,
        total_events,
        unique_sessions,
        unique_users,
        updated_at
    )
    SELECT
        target_date,
        event_type,
        COALESCE(entity_type, ''),
        COALESCE(entity_id, ''),
        COALESCE(user_profile, ''),
        COUNT(*)::INT AS total_events,
        COUNT(DISTINCT session_id)::INT AS unique_sessions,
        COUNT(DISTINCT user_id) FILTER (WHERE user_id IS NOT NULL)::INT AS unique_users,
        NOW()
    FROM analytics_events
    WHERE created_at >= v_start_ts 
      AND created_at < v_end_ts
    GROUP BY 
        event_type,
        COALESCE(entity_type, ''),
        COALESCE(entity_id, ''),
        COALESCE(user_profile, '')
    ON CONFLICT (stat_date, event_type, entity_type, entity_id, user_profile)
    DO UPDATE SET
        total_events = EXCLUDED.total_events,
        unique_sessions = EXCLUDED.unique_sessions,
        unique_users = EXCLUDED.unique_users,
        updated_at = NOW();

    GET DIAGNOSTICS v_aggregated_count = ROW_COUNT;

    -- Étape B : Purge stricte des événements bruts vieux de plus de 30 jours
    DELETE FROM analytics_events
    WHERE created_at < (CURRENT_DATE - INTERVAL '30 days')::timestamptz;

    GET DIAGNOSTICS v_purged_count = ROW_COUNT;

    RAISE NOTICE 'Analytics Job [%] : % lignes agrégées. % lignes brutes purgées (>30 jours).', 
        target_date, v_aggregated_count, v_purged_count;

    RETURN jsonb_build_object(
        'status', 'SUCCESS',
        'target_date', target_date,
        'aggregated_rows', v_aggregated_count,
        'purged_raw_events', v_purged_count,
        'executed_at', NOW()
    );
END;
$$;

-- ----------------------------------------------------------------------------
-- 3. PLANIFICATION AUTOMATIQUE NOCTURNE VIA PG_CRON (02:00 AM UTC)
-- ----------------------------------------------------------------------------
-- Activation de l'extension standard pg_cron disponible dans Supabase
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Autorisation du schéma cron pour l'administrateur postgres
GRANT USAGE ON SCHEMA cron TO postgres;

-- Nettoyage du job s'il existe déjà pour éviter toute duplication
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'daily-analytics-retention-job') THEN
        PERFORM cron.unschedule('daily-analytics-retention-job');
    END IF;
END $$;

-- Planification nocturne à 02:00 AM UTC chaque nuit
SELECT cron.schedule(
    'daily-analytics-retention-job',
    '0 2 * * *',
    $$SELECT aggregate_and_purge_analytics_daily();$$
);
