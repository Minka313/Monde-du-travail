/**
 * job-detail.js
 * Moteur de rendu complet et dynamique de la page Fiche Métier
 * Le Monde du Travail — Expérience Mobile-First, Accessible & Sans Modale
 */

(function () {
  'use strict';

  // Sécurisation HTML contre les injections XSS
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function safeUrl(url, fallback) {
    if (!url || typeof url !== 'string') return fallback || '';
    const clean = url.trim();
    if (clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('/') || clean.startsWith('./')) {
      return clean;
    }
    return fallback || '';
  }

  function optimizeImageUrl(url, width = 900, quality = 65) {
    if (!url || typeof url !== 'string') return '';
    if (url.includes('images.unsplash.com')) {
      try {
        const u = new URL(url);
        u.searchParams.set('w', String(width));
        u.searchParams.set('auto', 'format,compress');
        u.searchParams.set('fit', 'crop');
        u.searchParams.set('q', String(quality));
        return u.toString();
      } catch (_) {
        return url;
      }
    }
    return url;
  }

  function getYoutubeEmbedUrl(url) {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
  }

  // Toast UI feedback
  function showToast(message, icon = '✅') {
    const toast = document.getElementById('jobDetailToast');
    const msgEl = document.getElementById('toastMessage');
    const iconEl = document.getElementById('toastIcon');
    if (!toast || !msgEl) return;

    msgEl.textContent = message;
    if (iconEl) iconEl.textContent = icon;
    toast.style.display = 'flex';
    toast.classList.add('visible');

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => { toast.style.display = 'none'; }, 300);
    }, 3200);
  }

  // Initialisation au chargement du DOM
  document.addEventListener('DOMContentLoaded', async () => {
    const skeleton = document.getElementById('jobDetailSkeleton');
    const notFoundView = document.getElementById('jobNotFoundView');
    const contentWrapper = document.getElementById('jobContentWrapper');

    // Récupération des paramètres de la barre d'adresse
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug') || urlParams.get('id') || urlParams.get('job');

    if (!slug) {
      if (skeleton) skeleton.style.display = 'none';
      if (notFoundView) notFoundView.style.display = 'block';
      return;
    }

    // Attendre que OrientationData soit prêt
    if (!window.OrientationData || typeof window.OrientationData.getJobBySlug !== 'function') {
      let attempts = 0;
      while ((!window.OrientationData || typeof window.OrientationData.getJobBySlug !== 'function') && attempts < 20) {
        await new Promise(r => setTimeout(r, 100));
        attempts++;
      }
    }

    if (!window.OrientationData || typeof window.OrientationData.getJobBySlug !== 'function') {
      if (skeleton) skeleton.style.display = 'none';
      if (notFoundView) notFoundView.style.display = 'block';
      return;
    }

    let job = null;
    try {
      job = await window.OrientationData.getJobBySlug(slug);
    } catch (err) {
      console.error('Erreur chargement métier:', err);
    }

    if (!job) {
      if (skeleton) skeleton.style.display = 'none';
      if (notFoundView) notFoundView.style.display = 'block';
      return;
    }

    // Afficher le contenu
    if (skeleton) skeleton.style.display = 'none';
    if (contentWrapper) {
      contentWrapper.style.display = 'block';
      contentWrapper.classList.add('fade-in-ready');
    }

    renderJobPage(job);
  });

  // Rendu complet des composants et sections de la page
  async function renderJobPage(job) {
    const jobKey = job.slug || job.id;

    // 1. Balises SEO dynamiques
    document.title = `${job.title} — Fiche Métier & Orientation | Le Monde du Travail`;
    const pageDesc = job.shortDescription || job.simpleDefinition || `Découvrez la fiche métier complète de ${job.title} : compétences, formations au Sénégal, salaires et débouchés.`;
    
    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);
    const ogTitle = document.getElementById('ogTitle');
    if (ogTitle) ogTitle.setAttribute('content', `${job.title} — Fiche Métier`);
    const ogDesc = document.getElementById('ogDescription');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);
    const ogImg = document.getElementById('ogImage');
    if (ogImg && job.image) ogImg.setAttribute('content', job.image);

    // 2. Fil d'Ariane & Bouton Retour intelligent
    const breadcrumbJobTitle = document.getElementById('breadcrumbJobTitle');
    if (breadcrumbJobTitle) breadcrumbJobTitle.textContent = job.title;

    const breadcrumbFamilyLink = document.getElementById('breadcrumbFamilyLink');
    if (breadcrumbFamilyLink) {
      breadcrumbFamilyLink.textContent = job.familyName || 'Métiers & Orientation';
      if (job.familyId) {
        breadcrumbFamilyLink.href = `job.html?family=${encodeURIComponent(job.familyId)}`;
      }
    }

    const btnBack = document.getElementById('btnBackToOrientation');
    const backLabel = document.getElementById('backButtonLabel');
    if (btnBack) {
      if (job.familyName && backLabel) {
        backLabel.textContent = `Retour : ${job.familyName}`;
        btnBack.href = `job.html?family=${encodeURIComponent(job.familyId || '')}`;
      } else {
        btnBack.href = 'job.html';
      }
    }

    // 3. Hero Visual & Badges
    const heroImg = document.getElementById('jobHeroImg');
    if (heroImg) {
      const rawImg = safeUrl(job.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=75');
      heroImg.src = optimizeImageUrl(rawImg, 1100, 75);
      heroImg.alt = job.title;
    }

    const heroIcon = document.getElementById('jobHeroIcon');
    if (heroIcon) heroIcon.textContent = job.icon || '💼';

    const heroTitle = document.getElementById('jobHeroTitle');
    if (heroTitle) heroTitle.textContent = job.title;

    const heroHeadline = document.getElementById('jobHeroHeadline');
    if (heroHeadline) {
      heroHeadline.textContent = job.shortDescription || job.simpleDefinition || '';
    }

    // Badges taxonomiques
    const badgesRow = document.getElementById('jobHeroBadgesRow');
    if (badgesRow) {
      let badgesHtml = '';
      if (job.familyName) {
        badgesHtml += `<span class="job-tag-pill pill-family"><span>📁</span> <span>${escapeHtml(job.familyName)}</span></span>`;
      }
      if (job.subdomain) {
        badgesHtml += `<span class="job-tag-pill pill-subdomain"><span>${escapeHtml(job.icon || '💼')}</span> <span>${escapeHtml(job.subdomain)}</span></span>`;
      }
      if (job.domainName) {
        badgesHtml += `<span class="job-tag-pill pill-domain"><span>🌐</span> <span>${escapeHtml(job.domainName)}</span></span>`;
      }
      if (job.isEmerging) {
        badgesHtml += `<span class="job-tag-pill pill-emerging"><span>✨</span> <span>Métier d'Avenir Émergent</span></span>`;
      }
      // Sources certifiées
      if (job.sourceESD) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : École Supérieure du Digital">🎓 Référence ESD</span>`;
      if (job.sourceESA) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : Groupe ESA Angers">🐄 Référence Groupe ESA</span>`;
      if (job.sourceEvoluPeches) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : Référentiel ÉvoluPêches">🌊 Référence ÉvoluPêches</span>`;
      if (job.sourceEnergierecrute) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : Energierecrute">⚡ Référence Energierecrute</span>`;
      if (job.sourceLetudiant) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : L'Étudiant">🎓 Référence L'Étudiant</span>`;
      if (job.sourceImagineTonFutur) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : Imagine ton Futur">📚 Référence Imagine ton Futur</span>`;
      if (job.sourceOnisep) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : Onisep">⚙️ Référence Onisep</span>`;
      if (job.sourceBRGM) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : BRGM Géosciences">⛏️ Référence BRGM</span>`;
      if (job.sourcePoitiers) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : Univ. Poitiers">🌍 Univ. Poitiers</span>`;
      if (job.sourceESP) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : ESP Communication">📣 Référence ESP</span>`;
      if (job.sourceStudyrama) badgesHtml += `<span class="job-tag-pill pill-source" title="Source : Studyrama">📰 Référence Studyrama</span>`;

      badgesRow.innerHTML = badgesHtml;
    }

    // 4. Métriques Clés (Ruban Mobile-First)
    const valLevel = document.getElementById('metricValLevel');
    if (valLevel) valLevel.textContent = job.level || 'Bac +3 à Bac +5';

    const valSalary = document.getElementById('metricValSalary');
    if (valSalary) {
      if (job.salary) {
        valSalary.textContent = job.salary.split('•')[0].trim();
      } else {
        valSalary.textContent = 'Grille convention collective';
      }
    }

    const valTension = document.getElementById('metricValTension');
    if (valTension) {
      valTension.textContent = job.marketTension || (job.isEmerging ? 'Forte demande d\'avenir' : 'Secteur en plein essor');
    }

    const valReadingTime = document.getElementById('metricValReadingTime');
    if (valReadingTime) {
      const allText = `${job.longDescription || ''} ${job.shortDescription || ''} ${job.simpleDefinition || ''}`;
      const words = allText.trim().split(/\s+/).filter(Boolean).length;
      const readMin = Math.max(2, Math.min(6, Math.ceil(words / 130)));
      valReadingTime.textContent = `${readMin} min`;
    }

    // 5. Actions d'en-tête (Favoris, Partage, Impression)
    setupActionsBar(job);

    // 6. Navigation des Onglets
    setupTabsNavigation();

    // 7. Section 1 : Vue d'ensemble & Missions
    setupSectionOverview(job);

    // 8. Section 2 : Compétences & Outils
    setupSectionSkills(job);

    // 9. Section 3 : Formations & Écoles au Sénégal
    setupSectionStudies(job);

    // 10. Section 4 : Salaires & Carrière
    setupSectionCareer(job);

    // 11. Section 5 : Journée Type
    setupSectionTypicalDay(job);

    // 12. Section 6 : Métiers Connexes & Passerelles
    setupSectionRelated(job);

    // 13. Ressources Vidéo éventuelles
    setupVideoResource(job);

    // 14. Micro-sondage de satisfaction
    setupSatisfactionSurvey(jobKey);

    // 15. Tracking d'audience
    if (window.AnalyticsTracker?.trackJobView) {
      window.AnalyticsTracker.trackJobView(jobKey, job.title);
    }
  }

  // Gestion des actions d'en-tête
  function setupActionsBar(job) {
    const jobKey = job.slug || job.id;
    const btnBookmark = document.getElementById('btnBookmarkJob');
    const bookmarkIcon = document.getElementById('bookmarkIcon');
    const bookmarkLabel = document.getElementById('bookmarkLabel');

    const getFavs = () => {
      try { return JSON.parse(localStorage.getItem('member_favorite_jobs') || '[]'); } catch (_) { return []; }
    };
    const setFavs = (arr) => {
      try { localStorage.setItem('member_favorite_jobs', JSON.stringify(arr)); } catch (_) {}
    };

    const updateFavUI = (isFav) => {
      if (!btnBookmark) return;
      if (isFav) {
        btnBookmark.classList.add('is-active');
        if (bookmarkIcon) bookmarkIcon.textContent = '⭐';
        if (bookmarkLabel) bookmarkLabel.textContent = 'Enregistré dans mes favoris';
      } else {
        btnBookmark.classList.remove('is-active');
        if (bookmarkIcon) bookmarkIcon.textContent = '☆';
        if (bookmarkLabel) bookmarkLabel.textContent = 'Ajouter aux favoris';
      }
    };

    let favs = getFavs();
    updateFavUI(favs.includes(jobKey));

    if (btnBookmark) {
      btnBookmark.addEventListener('click', () => {
        let current = getFavs();
        const exists = current.includes(jobKey);
        if (exists) {
          current = current.filter(id => id !== jobKey);
          updateFavUI(false);
          showToast('Fiche retirée de vos favoris', '🗑️');
        } else {
          current.push(jobKey);
          updateFavUI(true);
          showToast('Fiche enregistrée dans vos favoris !', '⭐');
          if (window.AnalyticsTracker?.trackJobBookmark) {
            window.AnalyticsTracker.trackJobBookmark(jobKey, job.title);
          }
        }
        setFavs(current);
      });
    }

    // Partage
    const btnShare = document.getElementById('btnShareJob');
    if (btnShare) {
      btnShare.addEventListener('click', async () => {
        const shareData = {
          title: `${job.title} — Le Monde du Travail`,
          text: `Découvre la fiche métier détaillée de ${job.title} : formations au Sénégal, compétences et salaires !`,
          url: window.location.href
        };

        if (navigator.share) {
          try {
            await navigator.share(shareData);
            showToast('Fiche partagée avec succès !', '📤');
          } catch (err) {
            if (err.name !== 'AbortError') {
              copyLinkFallback();
            }
          }
        } else {
          copyLinkFallback();
        }
      });
    }

    function copyLinkFallback() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          showToast('Lien copié dans le presse-papier !', '📋');
        }).catch(() => {
          showToast('URL : ' + window.location.href, '🔗');
        });
      } else {
        showToast('URL : ' + window.location.href, '🔗');
      }
    }

    // Impression
    const btnPrint = document.getElementById('btnPrintJob');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // Onglets interactifs Mobile-First
  function setupTabsNavigation() {
    const tabButtons = document.querySelectorAll('.job-tab-btn');
    const tabPanels = document.querySelectorAll('.job-tab-panel');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach(p => {
          p.classList.remove('active');
          p.style.display = 'none';
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const activePanel = document.getElementById(`panel${targetTab.charAt(0).toUpperCase() + targetTab.slice(1)}`);
        if (activePanel) {
          activePanel.style.display = 'block';
          activePanel.classList.add('active');
          // Animation douce
          activePanel.style.animation = 'none';
          activePanel.offsetHeight; // trigger reflow
          activePanel.style.animation = 'fadeInPanel 0.28s ease-out forwards';
        }

        // Faire défiler l'onglet vers le centre visible sur mobile
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    });
  }

  // 1. Présentation & Missions
  function setupSectionOverview(job) {
    const simpleDefCard = document.getElementById('simpleDefinitionCard');
    const simpleDefText = document.getElementById('jobSimpleDefinitionText');
    if (job.simpleDefinition && simpleDefText) {
      simpleDefText.textContent = job.simpleDefinition;
      if (simpleDefCard) simpleDefCard.style.display = 'flex';
    } else if (simpleDefCard) {
      simpleDefCard.style.display = 'none';
    }

    const longDescText = document.getElementById('jobLongDescriptionText');
    if (longDescText) {
      const desc = job.longDescription || job.description || job.shortDescription || 'Description détaillée en cours de documentation.';
      // Transforme les sauts de lignes en paragraphes
      const paras = desc.split('\n\n').filter(Boolean);
      longDescText.innerHTML = paras.map(p => `<p>${escapeHtml(p)}</p>`).join('');
    }

    // Environnement de travail
    const envCard = document.getElementById('workEnvironmentCard');
    const envGrid = document.getElementById('workEnvironmentTagsGrid');
    if (envCard && envGrid) {
      const tags = Array.isArray(job.workEnvironment) ? job.workEnvironment : [];
      if (tags.length > 0) {
        envCard.style.display = 'block';
        envGrid.innerHTML = tags.map(tag => `
          <div class="work-env-item">
            <span class="env-bullet">✓</span>
            <span class="env-text">${escapeHtml(tag)}</span>
          </div>
        `).join('');
      } else {
        envCard.style.display = 'none';
      }
    }

    // Missions
    const missionsCard = document.getElementById('jobMissionsCard');
    const missionsGrid = document.getElementById('jobMissionsGrid');
    if (missionsCard && missionsGrid) {
      const missions = Array.isArray(job.missions) ? job.missions : [];
      if (missions.length > 0) {
        missionsCard.style.display = 'block';
        missionsGrid.innerHTML = missions.map((m, idx) => `
          <div class="mission-item-card">
            <div class="mission-number">${idx + 1}</div>
            <div class="mission-text">${escapeHtml(typeof m === 'string' ? m : (m.title || m.desc || ''))}</div>
          </div>
        `).join('');
      } else {
        missionsCard.style.display = 'none';
      }
    }
  }

  // 2. Compétences & Outils
  function setupSectionSkills(job) {
    const techList = document.getElementById('skillsTechnicalList');
    const humanList = document.getElementById('skillsHumanList');
    const toolsList = document.getElementById('skillsToolsList');

    const skills = job.skills || {};
    const tech = Array.isArray(skills.technical) ? skills.technical : [];
    const human = Array.isArray(skills.human) ? skills.human : [];
    const tools = Array.isArray(skills.tools) ? skills.tools : [];

    if (techList) {
      techList.innerHTML = tech.length > 0
        ? tech.map(s => `<li><span class="skill-check">✓</span><span>${escapeHtml(s)}</span></li>`).join('')
        : '<li class="text-muted">Compétences techniques spécifiques à ce domaine.</li>';
    }

    if (humanList) {
      humanList.innerHTML = human.length > 0
        ? human.map(s => `<li><span class="skill-check">✓</span><span>${escapeHtml(s)}</span></li>`).join('')
        : '<li class="text-muted">Rigueur, esprit d\'équipe, sens de l\'analyse.</li>';
    }

    if (toolsList) {
      toolsList.innerHTML = tools.length > 0
        ? tools.map(s => `<li><span class="skill-check">🛠️</span><span>${escapeHtml(s)}</span></li>`).join('')
        : '<li class="text-muted">Outils et logiciels standards de la profession.</li>';
    }
  }

  // 3. Formations au Sénégal
  function setupSectionStudies(job) {
    const studies = job.studies || {};

    // Séries de Bac
    const bacRow = document.getElementById('studyBacSeriesRow');
    if (bacRow) {
      const series = Array.isArray(studies.bacSeries) && studies.bacSeries.length > 0
        ? studies.bacSeries
        : ['S1', 'S2', 'S3', 'L2', 'STEG', 'T1', 'T2'];
      bacRow.innerHTML = series.map(s => `<span class="bac-pill">${escapeHtml(s)}</span>`).join('');
    }

    // Diplômes
    const diplomasText = document.getElementById('studyDiplomasText');
    if (diplomasText) {
      const rec = studies.recommendedStudies || studies.pathways || job.level || 'Bac+2 (BTS, DUT), Licence Professionnelle, Master, Diplôme d\'Ingénieur.';
      diplomasText.innerHTML = `<p>${escapeHtml(rec)}</p>`;
    }

    // Écoles & Universités au Sénégal
    const schoolsGrid = document.getElementById('schoolsSenegalGrid');
    if (schoolsGrid) {
      const defaultSchools = [
        { name: 'UCAD (Dakar)', desc: 'Facultés et Instituts d\'excellence (FST, ESP, FASEG)' },
        { name: 'UGB (Saint-Louis)', desc: 'Pôle d\'excellence en Sciences, Technologies et Économie' },
        { name: 'EPT (Thiès)', desc: 'École Polytechnique de Thiès & Formations d\'Ingénieurs' },
        { name: 'UIDT (Thiès)', desc: 'Université Iba Der Thiam & Instituts Professionnels' }
      ];
      const schools = Array.isArray(studies.schoolsSenegal) && studies.schoolsSenegal.length > 0
        ? studies.schoolsSenegal
        : defaultSchools;

      schoolsGrid.innerHTML = schools.map(sch => {
        const name = typeof sch === 'string' ? sch : (sch.name || sch.title || '');
        const desc = typeof sch === 'string' ? 'Établissement supérieur sénégalais' : (sch.desc || sch.city || '');
        return `
          <div class="school-card-item">
            <span class="school-icon">🏛️</span>
            <div class="school-info">
              <strong class="school-name">${escapeHtml(name)}</strong>
              <span class="school-desc">${escapeHtml(desc)}</span>
            </div>
          </div>
        `;
      }).join('');
    }

    // Certifications
    const certBox = document.getElementById('certificationsContainer');
    const certRow = document.getElementById('certificationsPillsRow');
    if (certBox && certRow) {
      const certs = Array.isArray(studies.certifications) ? studies.certifications : [];
      if (certs.length > 0) {
        certBox.style.display = 'block';
        certRow.innerHTML = certs.map(c => `<span class="certification-badge">🏆 ${escapeHtml(c)}</span>`).join('');
      } else {
        certBox.style.display = 'none';
      }
    }

    // Sénégal 2050
    const s2050Box = document.getElementById('senegal2050Box');
    const s2050Desc = document.getElementById('senegal2050Desc');
    if (s2050Box && s2050Desc) {
      if (studies.senegal2050 || job.senegal2050Pillar) {
        s2050Box.style.display = 'block';
        s2050Desc.textContent = studies.senegal2050 || job.senegal2050Pillar;
      } else {
        s2050Box.style.display = 'none';
      }
    }
  }

  // 4. Salaires & Carrière
  function setupSectionCareer(job) {
    const career = job.career || {};
    const scalesGrid = document.getElementById('salaryScalesGrid');

    if (scalesGrid) {
      // Échelle salariale réaliste
      const salaryStr = job.salary || '';
      let juniorVal = '250 000 - 450 000 FCFA';
      let midVal = '450 000 - 900 000 FCFA';
      let seniorVal = '900 000 - 1 800 000+ FCFA';

      if (career.juniorSalary) juniorVal = career.juniorSalary;
      if (career.midSalary) midVal = career.midSalary;
      if (career.seniorSalary) seniorVal = career.seniorSalary;
      else if (salaryStr.includes('-')) {
        const parts = salaryStr.split('-').map(s => s.trim());
        if (parts.length >= 2) {
          juniorVal = `À partir de ${parts[0]}`;
          seniorVal = `Jusqu'à ${parts[1]}`;
        }
      }

      scalesGrid.innerHTML = `
        <div class="salary-card salary-junior">
          <span class="salary-step">Débutant (0 - 2 ans)</span>
          <strong class="salary-figure">${escapeHtml(juniorVal)}</strong>
          <span class="salary-note">Insertion professionnelle</span>
        </div>
        <div class="salary-card salary-mid">
          <span class="salary-step">Confirmé (3 - 5 ans)</span>
          <strong class="salary-figure">${escapeHtml(midVal)}</strong>
          <span class="salary-note">Autonomie & expertise</span>
        </div>
        <div class="salary-card salary-senior">
          <span class="salary-step">Senior / Expert (6+ ans)</span>
          <strong class="salary-figure">${escapeHtml(seniorVal)}</strong>
          <span class="salary-note">Leadership & management</span>
        </div>
      `;
    }

    // Secteurs recruteurs
    const sectorsRow = document.getElementById('recruitingSectorsRow');
    if (sectorsRow) {
      const defaultSectors = ['Grandes entreprises', 'PME & Startups', 'Secteur public & Agences d\'État', 'Cabinets de conseil', 'Indépendant / Consultant'];
      const sectors = Array.isArray(career.sectors) && career.sectors.length > 0 ? career.sectors : defaultSectors;
      sectorsRow.innerHTML = sectors.map(sec => `<span class="sector-badge">🏢 ${escapeHtml(sec)}</span>`).join('');
    }

    // Perspectives d'évolution
    const evolText = document.getElementById('careerEvolutionText');
    if (evolText) {
      const evo = career.evolution || 'Évolution vers des postes de direction de projet, de management d\'équipe, d\'expertise technique pointue ou de création d\'entreprise.';
      evolText.innerHTML = `<p>${escapeHtml(evo)}</p>`;
    }
  }

  // 5. Journée Type
  function setupSectionTypicalDay(job) {
    const timeline = document.getElementById('typicalDayTimeline');
    if (!timeline) return;

    let dayData = [];
    if (Array.isArray(job.typicalDay) && job.typicalDay.length > 0) {
      dayData = job.typicalDay;
    } else {
      dayData = [
        { time: '08:30 - 09:30', title: 'Planification & Synchronisation', desc: 'Revue des priorités, réunion d\'équipe quotidienne et consultation des indicateurs clés.' },
        { time: '09:30 - 12:30', title: 'Travail de Fond & Conception', desc: 'Phase de haute concentration sur les dossiers prioritaires, réalisations techniques et analyses approfondies.' },
        { time: '14:00 - 16:30', title: 'Coordination & Échanges', desc: 'Points avec les partenaires, clients ou collègues transverses et tests opérationnels.' },
        { time: '16:30 - 17:30', title: 'Bilan & Veille Métier', desc: 'Documentation des livrables du jour, veille prospective et préparation de la journée du lendemain.' }
      ];
    }

    timeline.innerHTML = dayData.map(item => {
      const time = typeof item === 'string' ? 'Étape' : (item.time || item.hour || 'Horaire indicatif');
      const title = typeof item === 'string' ? item : (item.title || item.activity || '');
      const desc = typeof item === 'string' ? '' : (item.desc || item.description || '');

      return `
        <div class="timeline-step">
          <div class="timeline-badge"></div>
          <div class="timeline-content">
            <span class="timeline-time">${escapeHtml(time)}</span>
            <strong class="timeline-title">${escapeHtml(title)}</strong>
            ${desc ? `<p class="timeline-desc">${escapeHtml(desc)}</p>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // 6. Métiers Connexes & Passerelles
  async function setupSectionRelated(job) {
    const relatedGrid = document.getElementById('relatedJobsGrid');
    if (!relatedGrid) return;

    let relatedList = [];
    try {
      if (typeof window.OrientationData.getRelatedJobs === 'function') {
        relatedList = await window.OrientationData.getRelatedJobs(job);
      }
    } catch (e) {
      console.warn('Erreur related jobs:', e);
    }

    if (!relatedList || relatedList.length === 0) {
      relatedGrid.innerHTML = `
        <div class="col-span-full text-center text-muted" style="padding:2rem;">
          <p>Aucun métier connexe directement rattaché. Explorez la famille <strong>${escapeHtml(job.familyName || '')}</strong> pour découvrir d'autres opportunités !</p>
        </div>
      `;
      return;
    }

    relatedGrid.innerHTML = relatedList.slice(0, 6).map(rel => {
      const relSlug = rel.slug || rel.id;
      const rawImg = safeUrl(rel.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=70');
      const img = optimizeImageUrl(rawImg, 400, 70);

      return `
        <a href="job-detail.html?slug=${encodeURIComponent(relSlug)}" class="card related-job-card">
          <div class="related-card-media">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(rel.title)}" loading="lazy" width="300" height="180">
            <span class="related-card-icon">${escapeHtml(rel.icon || '💼')}</span>
          </div>
          <div class="related-card-body">
            <span class="related-card-family">${escapeHtml(rel.subdomain || rel.familyName || 'Métier d\'avenir')}</span>
            <h3 class="related-card-title">${escapeHtml(rel.title)}</h3>
            <span class="related-card-cta">Découvrir la fiche complète &rarr;</span>
          </div>
        </a>
      `;
    }).join('');
  }

  // Ressources Vidéo
  function setupVideoResource(job) {
    const videoCard = document.getElementById('jobVideoResourceCard');
    const embedContainer = document.getElementById('videoResponsiveEmbed');
    if (!videoCard || !embedContainer) return;

    const videoResource = (job.resources && Array.isArray(job.resources))
      ? job.resources.find(r => r.type === 'video' && r.url)
      : null;

    if (videoResource) {
      const embedUrl = getYoutubeEmbedUrl(videoResource.url);
      if (embedUrl) {
        videoCard.style.display = 'block';
        embedContainer.innerHTML = `
          <iframe 
            src="${escapeHtml(embedUrl)}" 
            title="Vidéo explicative du métier ${escapeHtml(job.title)}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            loading="lazy">
          </iframe>
        `;
        return;
      }
    }
    videoCard.style.display = 'none';
  }

  // Micro-Sondage
  function setupSatisfactionSurvey(jobKey) {
    const surveyCard = document.getElementById('jobSatisfactionSurvey');
    const buttonsGroup = document.getElementById('surveyButtonsGroup');
    const thankYou = document.getElementById('surveyThankYou');
    if (!surveyCard || !buttonsGroup) return;

    const hasVoted = window.AnalyticsTracker?.hasVotedSurvey
      ? window.AnalyticsTracker.hasVotedSurvey('job', jobKey)
      : false;

    if (hasVoted) {
      buttonsGroup.style.display = 'none';
      if (thankYou) thankYou.style.display = 'flex';
      return;
    }

    const voteButtons = buttonsGroup.querySelectorAll('.btn-survey-vote');
    voteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const vote = btn.getAttribute('data-vote');
        if (window.AnalyticsTracker?.trackSurveyVote) {
          window.AnalyticsTracker.trackSurveyVote('job', jobKey, vote, []);
        }
        buttonsGroup.style.display = 'none';
        if (thankYou) thankYou.style.display = 'flex';
        showToast('Merci pour votre vote !', '🎉');
      });
    });
  }

})();
