-- ============================================================================
-- LE MONDE DU TRAVAIL — SYSTÈME D'ANALYTICS D'IMPACT D'ORIENTATION
-- Table analytics_events & index d'optimisation pour PostgreSQL / Supabase
-- ============================================================================

-- 1. Création de la table analytics_events
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(128) NOT NULL,
    user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    user_profile VARCHAR(50), -- Ex: 'Lyceen', 'Etudiant', 'Pro', 'Reconversion'
    event_type VARCHAR(100) NOT NULL, -- Ex: 'job_view', 'training_view', 'job_to_training_click', 'survey_vote'
    entity_type VARCHAR(50), -- Ex: 'job', 'training', 'resource'
    entity_id VARCHAR(255), -- Slug ou ID de l'entité
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Index de performance pour les requêtes analytiques et d'impact
CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_entity ON analytics_events(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_user_profile ON analytics_events(user_profile);

-- 3. Vue analytique du Funnel d'Orientation (Mesure d'impact réel)
CREATE OR REPLACE VIEW view_orientation_funnel AS
SELECT 
    DATE_TRUNC('day', created_at) AS date_bucket,
    COUNT(CASE WHEN event_type = 'job_view' THEN 1 END) AS total_job_views,
    COUNT(CASE WHEN event_type = 'job_to_training_click' THEN 1 END) AS total_job_to_training_clicks,
    COUNT(CASE WHEN event_type = 'training_view' THEN 1 END) AS total_training_views,
    COUNT(CASE WHEN event_type = 'survey_vote' THEN 1 END) AS total_survey_votes,
    ROUND(
        (COUNT(CASE WHEN event_type = 'job_to_training_click' THEN 1 END)::numeric / 
        NULLIF(COUNT(CASE WHEN event_type = 'job_view' THEN 1 END), 0)::numeric) * 100, 
        2
    ) AS conversion_rate_percent
FROM analytics_events
GROUP BY DATE_TRUNC('day', created_at)
ORDER BY date_bucket DESC;
