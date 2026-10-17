/**
 * Fusion des modifications faites dans l'admin (table jobs) sur une fiche du catalogue.
 * Partagé par orientation-data.js (catalogue complet) et job-detail.js (fiche seule)
 * pour que les deux chemins appliquent exactement les mêmes règles.
 */
(function () {
  'use strict';

  function applyApiJob(target, apiJob) {
    if (!target || !apiJob) return target;
    if (apiJob.saviezVous) {
      target.saviezVous = apiJob.saviezVous;
    }
    if (apiJob.salary) {
      target.salary = apiJob.salary;
    }
    if (apiJob.description) {
      target.shortDescription = apiJob.description;
    }
    if (apiJob.content) {
      target.longDescription = apiJob.content;
    }
    if (apiJob.location) {
      target.location = apiJob.location;
    }
    if (apiJob.skills && Array.isArray(apiJob.skills) && apiJob.skills.length > 0) {
      const existingSkills = target.skills;
      if (existingSkills && typeof existingSkills === 'object' && !Array.isArray(existingSkills)) {
        target.skills = Object.assign({}, existingSkills, {
          technical: apiJob.skills
        });
      } else {
        target.skills = apiJob.skills;
      }
    }
    if (apiJob.id) target.backendId = apiJob.id;
    return target;
  }

  const JobMerge = { applyApiJob: applyApiJob };

  if (typeof window !== 'undefined') {
    window.JobMerge = JobMerge;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = JobMerge;
  }
})();
