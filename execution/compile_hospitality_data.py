# -*- coding: utf-8 -*-
"""
Compiler script for Hospitality, Catering & Hospitality Data Module
Assembles parts 1, 2, and 3 into frontend/js/orientation-hospitality-data.js
Ensures strict UMD wrapping and dual Node/Browser global exposure.
"""

import json
import os
import sys

from hospitality_jobs_part1 import DOMAINS, JOBS_PART1
from hospitality_jobs_part2 import JOBS_PART2
from hospitality_jobs_part3 import JOBS_PART3, HOSPITALITY_PATHWAYS

def main():
    all_jobs = JOBS_PART1 + JOBS_PART2 + JOBS_PART3
    print(f"Total domains: {len(DOMAINS)}")
    print(f"Total jobs: {len(all_jobs)}")
    print(f"Total pathways: {len(HOSPITALITY_PATHWAYS)}")

    # Verify uniqueness of job IDs
    seen_ids = set()
    for job in all_jobs:
        if job["id"] in seen_ids:
            print(f"ERROR: Duplicate job ID detected: {job['id']}", file=sys.stderr)
            sys.exit(1)
        seen_ids.add(job["id"])

    domains_json = json.dumps(DOMAINS, ensure_ascii=False, indent=4)
    jobs_json = json.dumps(all_jobs, ensure_ascii=False, indent=4)
    pathways_json = json.dumps(HOSPITALITY_PATHWAYS, ensure_ascii=False, indent=4)

    js_content = f"""/**
 * MODULE OFFICIEL HÔTELLERIE, RESTAURATION & HOSPITALITÉ
 * Base de données exhaustive : 8 Domaines d'Excellence • 21 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale de référence : France Travail / MétierScope (Secteur 102 & Fiches ROME)
 * https://candidat.francetravail.fr/metierscope/secteurs-activite/102/hotellerie-et-restauration
 */

(function (root, factory) {{
    if (typeof define === 'function' && define.amd) {{
        define([], factory);
    }} else if (typeof module === 'object' && module.exports) {{
        const exported = factory();
        module.exports = exported;
        if (typeof global !== 'undefined') global.OrientationHospitalityData = exported;
        if (typeof window !== 'undefined') window.OrientationHospitalityData = exported;
    }} else {{
        root.OrientationHospitalityData = factory();
    }}
}}(typeof self !== 'undefined' ? self : this, function () {{
    'use strict';

    const DOMAINS = {domains_json};

    const JOBS = {jobs_json};

    const HOSPITALITY_PATHWAYS = {pathways_json};

    return {{
        DOMAINS: DOMAINS,
        JOBS: JOBS,
        getDomains: function() {{
            return DOMAINS;
        }},
        getDomainById: function(id) {{
            return DOMAINS.find(function(d) {{ return d.id === id; }});
        }},
        getJobs: function() {{
            return JOBS;
        }},
        getJobById: function(id) {{
            return JOBS.find(function(j) {{ return j.id === id; }});
        }},
        getJobBySlug: function(slug) {{
            return JOBS.find(function(j) {{ return j.slug === slug || j.id === slug; }});
        }},
        getJobsByDomain: function(domainId) {{
            return JOBS.filter(function(j) {{ return j.domainId === domainId; }});
        }},
        getPathways: function() {{
            return HOSPITALITY_PATHWAYS;
        }},
        getHospitalityPathways: function() {{
            return HOSPITALITY_PATHWAYS;
        }}
    }};
}}));
"""

    output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend", "js", "orientation-hospitality-data.js"))
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"✅ Generated {output_path} successfully ({len(js_content.encode('utf-8'))} bytes).")

if __name__ == "__main__":
    main()
