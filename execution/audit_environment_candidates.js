const fs = require('fs');

global.window = global;
global.OrientationDigitalData = require('../frontend/js/orientation-digital-data.js');
global.OrientationFinanceData = require('../frontend/js/orientation-finance-data.js');
global.OrientationAgriData = require('../frontend/js/orientation-agri-data.js');
global.OrientationEnergyData = require('../frontend/js/orientation-energy-data.js');
global.OrientationBtpData = require('../frontend/js/orientation-btp-data.js');
global.OrientationLlshData = require('../frontend/js/orientation-llsh-data.js');
global.OrientationIndustryData = require('../frontend/js/orientation-industry-data.js');
global.OrientationGeosciencesData = require('../frontend/js/orientation-geosciences-data.js');
global.OrientationHealthData = require('../frontend/js/orientation-health-data.js');
global.OrientationBioChimieData = require('../frontend/js/orientation-biochimie-data.js');
global.OrientationEducationData = require('../frontend/js/orientation-education-data.js');
global.OrientationData = require('../frontend/js/orientation-data.js');

const od = global.OrientationData;

(async () => {
  const allJobs = await od.getAllJobs();
  
  const testList = [
    { label: 'Agent de propreté urbaine', key: 'proprete' },
    { label: 'Animateur nature', key: 'animateur-nature' },
    { label: 'Biologiste en environnement', key: 'biologiste' },
    { label: 'Conseiller en environnement', key: 'conseiller-environnement' },
    { label: 'Géomaticien', key: 'geomaticien' },
    { label: 'Hydraulicien', key: 'hydraulicien' },
    { label: 'Hydrobiologiste', key: 'hydrobiologiste' },
    { label: 'Météorologiste', key: 'meteorolog' },
    { label: 'Responsable collecte déchets', key: 'collecte' },
    { label: 'Technicien thermicien', key: 'thermicien' },
    { label: 'Technicien exploitation eau', key: 'exploitation-eau' },
    { label: 'Ingénieur hydraulicien', key: 'hydraulicien' },
    { label: 'Ambassadeur de tri', key: 'ambassadeur' },
    { label: 'Chef de projet développement durable', key: 'developpement-durable' },
    { label: 'Opérateur collecte ou tri', key: 'collecte' },
    { label: 'Responsable unité traitement', key: 'traitement' },
    { label: 'Responsable recyclerie', key: 'recyclerie' },
    { label: 'Conseiller gestion déchets', key: 'dechets' },
    { label: 'Responsable QSE', key: 'qse' },
    { label: 'Juriste droit environnement', key: 'juriste' },
    { label: 'Technicien éolien / photovoltaïque', key: 'eolien' },
    { label: 'Installateur panneaux solaires', key: 'photovoltaique' },
    { label: 'Ingénieur thermicien', key: 'thermicien' },
    { label: 'Ingénieur efficacité énergétique', key: 'efficacite-energetique' },
    { label: 'Garde-moniteur espaces naturels', key: 'garde-moniteur' },
    { label: 'Technicien forestier', key: 'forestier' },
    { label: 'Chargé études biodiversité', key: 'biodiversite' }
  ];

  console.log('=== MATCH AUDIT ===');
  testList.forEach(item => {
    const matches = allJobs.filter(j => {
      const idMatch = j.id && j.id.toLowerCase().includes(item.key);
      const titleMatch = j.title && j.title.toLowerCase().includes(item.key);
      const aliasMatch = j.aliases && j.aliases.some(a => a.toLowerCase().includes(item.key));
      return idMatch || titleMatch || aliasMatch;
    });
    if (matches.length > 0) {
      console.log('[MATCH] ' + item.label + ' -> found ' + matches.length + ' job(s):');
      matches.forEach(m => console.log('   - ID: ' + m.id + ' | Title: ' + m.title + ' | Family: ' + (m.familyId || m.family)));
    } else {
      console.log('[NEW] ' + item.label + ' -> no match found.');
    }
  });
})();
