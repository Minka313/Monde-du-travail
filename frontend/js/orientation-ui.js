/**
 * ORIENTATION & MÉTIERS — CONTRÔLEUR D'INTERFACE UTILISATEUR
 * Le Monde du Travail — Exploration Progressive, Recherche, Affinités & Fiche Métier 6-Onglets
 */

(function () {
  'use strict';

  // Sécurité et échappement
  const escapeHtml = window.escapeHtml || function (str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const safeUrl = window.safeUrl || function (value, fallback = '') {
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : fallback;
    } catch {
      return fallback;
    }
  };

  function getYoutubeEmbedUrl(url) {
    if (!url) return null;
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube-nocookie.com/embed/${match[2]}`;
      }
    } catch (e) {}
    return null;
  }

  // État global du module
  const AppState = {
    currentView: 'FAMILIES', // 'FAMILIES' | 'FAMILY_DRILLDOWN' | 'ALL_JOBS' | 'INTERESTS' | 'SEARCH'
    selectedFamilyId: null,
    selectedSubdomain: 'all',
    selectedAffinities: [],
    searchQuery: '',
    cachedJobs: []
  };

  // Références DOM
  let dom = {};

  function initDomRefs() {
    dom = {
      heroSearchInput: document.getElementById('orientationSearchInput'),
      heroSearchClear: document.getElementById('searchClearBtn'),
      btnDiscoverInterests: document.getElementById('btnDiscoverInterests'),
      btnExploreFamilies: document.getElementById('btnExploreFamilies'),
      btnViewAllJobs: document.getElementById('btnViewAllJobs'),
      breadcrumbNav: document.getElementById('breadcrumbNav'),
      breadcrumbList: document.getElementById('breadcrumbList'),
      viewSectionHeader: document.getElementById('viewSectionHeader'),
      viewSectionLabel: document.getElementById('viewSectionLabel'),
      viewSectionTitle: document.getElementById('viewSectionTitle'),
      viewSectionSubtitle: document.getElementById('viewSectionSubtitle'),
      
      // Conteneurs de vue
      familiesGridContainer: document.getElementById('familiesGridContainer'),
      familyDrilldownContainer: document.getElementById('familyDrilldownContainer'),
      subdomainsBarContainer: document.getElementById('subdomainsBarContainer'),
      jobsGridContainer: document.getElementById('jobsGridContainer'),
      interestExplorerBox: document.getElementById('interestExplorerBox'),
      affinitiesChipsContainer: document.getElementById('affinitiesChipsContainer'),
      affinityResultsNotice: document.getElementById('affinityResultsNotice'),
      searchResultsSummary: document.getElementById('searchResultsSummary'),
      
      // Reset & retours
      btnBackToFamilies: document.getElementById('btnBackToFamilies'),
      btnResetSearch: document.getElementById('btnResetSearch')
    };
  }

  function updateQuickNavButtons(activeBtn) {
    [dom.btnExploreFamilies, dom.btnDiscoverInterests, dom.btnViewAllJobs].forEach(b => {
      if (b) b.classList.remove('active');
    });
    if (activeBtn) activeBtn.classList.add('active');
  }

  // =========================================================================
  // GESTIONNAIRE D'AFFICHAGE DES VUES (PROGRESSIVE DISCLOSURE)
  // =========================================================================
  function setView(viewName, params = {}) {
    AppState.currentView = viewName;

    // Réinitialiser les affichages
    if (dom.familiesGridContainer) dom.familiesGridContainer.style.display = 'none';
    if (dom.familyDrilldownContainer) dom.familyDrilldownContainer.style.display = 'none';
    if (dom.interestExplorerBox) dom.interestExplorerBox.style.display = 'none';
    if (dom.searchResultsSummary) dom.searchResultsSummary.style.display = 'none';

    // Mise à jour de l'URL hash/params de manière transparente
    const url = new URL(window.location.href);

    switch (viewName) {
      case 'FAMILIES':
        AppState.selectedFamilyId = null;
        AppState.selectedSubdomain = 'all';
        url.searchParams.delete('family');
        url.searchParams.delete('subdomain');
        url.searchParams.delete('search');
        window.history.replaceState({}, '', url.toString());

        updateQuickNavButtons(dom.btnExploreFamilies);

        // Masquer le fil d'Ariane redondant sur la racine
        if (dom.breadcrumbNav) dom.breadcrumbNav.style.display = 'none';
        if (dom.viewSectionHeader) dom.viewSectionHeader.style.display = 'block';

        if (dom.viewSectionLabel) dom.viewSectionLabel.textContent = 'Exploration Progressive';
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = 'Les 21 Grandes Familles Professionnelles';
        if (dom.viewSectionSubtitle) dom.viewSectionSubtitle.textContent = 'Explore les domaines d’avenir, découvre leurs sous-disciplines et identifie les métiers clés.';

        if (dom.familiesGridContainer) {
          dom.familiesGridContainer.style.display = 'grid';
          renderFamiliesGrid();
        }
        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'none';
        }
        break;

      case 'FAMILY_DRILLDOWN':
        AppState.selectedFamilyId = params.familyId || AppState.selectedFamilyId;
        AppState.selectedSubdomain = params.subdomain || 'all';

        url.searchParams.set('family', AppState.selectedFamilyId);
        if (AppState.selectedSubdomain !== 'all') {
          url.searchParams.set('subdomain', AppState.selectedSubdomain);
        } else {
          url.searchParams.delete('subdomain');
        }
        window.history.replaceState({}, '', url.toString());

        updateQuickNavButtons(dom.btnExploreFamilies);

        const family = window.OrientationData.getFamily(AppState.selectedFamilyId);
        if (family) {
          // Afficher le fil d'Ariane et masquer le titre générique redondant
          if (dom.breadcrumbNav) dom.breadcrumbNav.style.display = 'block';
          if (dom.viewSectionHeader) dom.viewSectionHeader.style.display = 'none';

          renderBreadcrumbs([
            { label: 'Accueil', url: 'index.html' },
            { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
            { label: `${family.icon} ${family.name}`, active: true }
          ]);

          if (dom.familyDrilldownContainer) {
            dom.familyDrilldownContainer.style.display = 'block';
            renderFamilyHeader(family);
            renderSubdomainsBar(family);
          }

          if (dom.jobsGridContainer) {
            dom.jobsGridContainer.style.display = 'grid';
            renderJobsForFamily(AppState.selectedFamilyId, AppState.selectedSubdomain);
          }
        }
        break;

      case 'ALL_JOBS':
        url.searchParams.delete('family');
        url.searchParams.delete('subdomain');
        window.history.replaceState({}, '', url.toString());

        updateQuickNavButtons(dom.btnViewAllJobs);

        if (dom.breadcrumbNav) dom.breadcrumbNav.style.display = 'block';
        if (dom.viewSectionHeader) dom.viewSectionHeader.style.display = 'block';

        renderBreadcrumbs([
          { label: 'Accueil', url: 'index.html' },
          { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
          { label: 'Tous les dossiers métiers', active: true }
        ]);

        if (dom.viewSectionLabel) dom.viewSectionLabel.textContent = 'Catalogue Global';
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = 'Tous les dossiers métiers';
        if (dom.viewSectionSubtitle) dom.viewSectionSubtitle.textContent = 'Parcours l’ensemble des fiches métiers documentées par Le Monde du Travail.';

        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'grid';
          renderAllJobsGrid();
        }
        break;

      case 'INTERESTS':
        updateQuickNavButtons(dom.btnDiscoverInterests);

        if (dom.breadcrumbNav) dom.breadcrumbNav.style.display = 'block';
        if (dom.viewSectionHeader) dom.viewSectionHeader.style.display = 'block';

        if (dom.viewSectionLabel) dom.viewSectionLabel.textContent = 'Porte C • Orientation par affinités';
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = 'Boussole des Affinités & Centres d’Intérêt';
        if (dom.viewSectionSubtitle) dom.viewSectionSubtitle.textContent = 'Sélectionne ce qui t’attire pour découvrir les univers professionnels correspondants.';

        renderBreadcrumbs([
          { label: 'Accueil', url: 'index.html' },
          { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
          { label: 'Boussole des affinités', active: true }
        ]);

        if (dom.interestExplorerBox) {
          dom.interestExplorerBox.style.display = 'block';
        }
        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'grid';
          renderAffinityResults();
        }
        break;

      case 'SEARCH':
        updateQuickNavButtons(null);

        if (dom.breadcrumbNav) dom.breadcrumbNav.style.display = 'block';
        if (dom.viewSectionHeader) dom.viewSectionHeader.style.display = 'block';

        if (dom.viewSectionLabel) dom.viewSectionLabel.textContent = 'Recherche Directe';
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = `Résultats de recherche`;
        if (dom.viewSectionSubtitle) dom.viewSectionSubtitle.textContent = `Terme recherché : "${escapeHtml(AppState.searchQuery)}"`;

        renderBreadcrumbs([
          { label: 'Accueil', url: 'index.html' },
          { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
          { label: `Recherche : "${escapeHtml(AppState.searchQuery)}"`, active: true }
        ]);

        if (dom.searchResultsSummary) {
          dom.searchResultsSummary.style.display = 'block';
        }
        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'grid';
          renderSearchResults();
        }
        break;
    }
  }

  // =========================================================================
  // COMPOSANT : FIL D'ARIANE (BREADCRUMB)
  // =========================================================================
  function renderBreadcrumbs(items) {
    if (!dom.breadcrumbList) return;
    dom.breadcrumbList.innerHTML = items.map((item, index) => {
      if (item.active) {
        return `<li class="breadcrumb-item active" aria-current="page">${escapeHtml(item.label)}</li>`;
      }
      if (item.action) {
        return `<li class="breadcrumb-item"><button type="button" class="breadcrumb-btn" data-bc-idx="${index}">${escapeHtml(item.label)}</button></li>`;
      }
      return `<li class="breadcrumb-item"><a href="${escapeHtml(item.url || '#')}">${escapeHtml(item.label)}</a></li>`;
    }).join('<li class="breadcrumb-separator" aria-hidden="true">&rsaquo;</li>');

    dom.breadcrumbList.querySelectorAll('.breadcrumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-bc-idx'), 10);
        if (items[idx] && items[idx].action) {
          items[idx].action();
        }
      });
    });
  }

  // =========================================================================
  // COMPOSANT : GRILLE DES 21 GRANDES FAMILLES (NIVEAU 1)
  // =========================================================================
  function renderFamiliesGrid() {
    if (!dom.familiesGridContainer) return;
    const families = window.OrientationData.getFamilies();

    dom.familiesGridContainer.innerHTML = families.map(family => {
      const sampleJobs = (family.representativeJobs || []).slice(0, 3);
      const img = safeUrl(family.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80');

      return `
        <article class="family-card" data-family-id="${escapeHtml(family.id)}" style="--family-accent: ${escapeHtml(family.color || '#3b82f6')};">
          <div class="family-card-media">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(family.name)}" loading="lazy">
            <div class="family-card-media-overlay"></div>
            <div class="family-card-badge">
              <span class="family-badge-icon">${escapeHtml(family.icon)}</span>
              <span class="family-badge-order">#${family.order}</span>
            </div>
          </div>
          <div class="family-card-content">
            <div class="family-card-header">
              <h3 class="family-card-title">${escapeHtml(family.name)}</h3>
              <p class="family-card-desc">${escapeHtml(family.description)}</p>
            </div>

            <div class="family-card-stats">
              <span class="family-stat-tag">📂 ${escapeHtml(family.stats.subdomainsCount)} sous-domaines</span>
              <span class="family-stat-tag">💼 ${escapeHtml(family.stats.jobsEstimate)}</span>
            </div>

            ${sampleJobs.length > 0 ? `
              <div class="family-sample-jobs">
                <span class="family-sample-label">Exemples :</span>
                <div class="family-sample-chips">
                  ${sampleJobs.map(j => `<span class="sample-job-chip">${escapeHtml(j)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <div class="family-card-action">
              <button type="button" class="btn-explore-family" aria-label="Explorer la famille ${escapeHtml(family.name)}">
                <span>Explorer la famille</span>
                <span class="arrow-icon">&rarr;</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Clics sur les cartes de familles
    dom.familiesGridContainer.querySelectorAll('.family-card').forEach(card => {
      card.addEventListener('click', () => {
        const familyId = card.getAttribute('data-family-id');
        setView('FAMILY_DRILLDOWN', { familyId, subdomain: 'all' });
        window.scrollTo({ top: dom.familyDrilldownContainer ? dom.familyDrilldownContainer.offsetTop - 80 : 200, behavior: 'smooth' });
      });
    });
  }

  // =========================================================================
  // COMPOSANT : EN-TÊTE DE FAMILLE & SOUS-DOMAINES (NIVEAU 2)
  // =========================================================================
  function renderFamilyHeader(family) {
    const headerTitle = document.getElementById('familyDetailTitle');
    const headerDesc = document.getElementById('familyDetailDesc');
    const headerIcon = document.getElementById('familyDetailIcon');
    const headerBadge = document.getElementById('familyDetailBadge');

    if (headerTitle) headerTitle.textContent = family.name;
    if (headerDesc) headerDesc.textContent = family.description;
    if (headerIcon) headerIcon.textContent = family.icon;
    if (headerBadge) headerBadge.textContent = `${family.stats.subdomainsCount} sous-domaines • ${family.stats.jobsEstimate}`;
  }

  function renderSubdomainsBar(family) {
    if (!dom.subdomainsBarContainer) return;
    const subdomains = family.subdomains || [];

    dom.subdomainsBarContainer.innerHTML = `
      <div class="subdomains-scroll-track">
        <button type="button" class="subdomain-pill ${AppState.selectedSubdomain === 'all' ? 'active' : ''}" data-subdomain="all">
          <span>🌟</span>
          <span>Tous les sous-domaines</span>
        </button>
        ${subdomains.map(sub => `
          <button type="button" class="subdomain-pill ${AppState.selectedSubdomain === sub ? 'active' : ''}" data-subdomain="${escapeHtml(sub)}">
            <span>📁</span>
            <span>${escapeHtml(sub)}</span>
          </button>
        `).join('')}
      </div>
    `;

    dom.subdomainsBarContainer.querySelectorAll('.subdomain-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.subdomainsBarContainer.querySelectorAll('.subdomain-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const chosenSub = btn.getAttribute('data-subdomain');
        AppState.selectedSubdomain = chosenSub;
        renderJobsForFamily(family.id, chosenSub);
      });
    });
  }

  // =========================================================================
  // COMPOSANT : CARTES MÉTIERS MODERNISÉES (NIVEAU 3)
  // =========================================================================
  async function renderJobsForFamily(familyId, subdomain) {
    if (!dom.jobsGridContainer) return;
    dom.jobsGridContainer.innerHTML = '<p class="text-muted text-center" style="grid-column:1/-1;padding:2rem;">Chargement des fiches métiers...</p>';

    const jobs = await window.OrientationData.getJobsBySubdomain(familyId, subdomain);

    if (jobs.length === 0) {
      dom.jobsGridContainer.innerHTML = `
        <div class="empty-state-card" style="grid-column:1/-1;">
          <span style="font-size:2.5rem;display:block;margin-bottom:0.75rem;">🧭</span>
          <h4 style="font-size:1.15rem;color:#0f172a;margin-bottom:0.5rem;">Dossiers en cours de documentation pour ce sous-domaine</h4>
          <p style="color:#64748b;max-width:550px;margin:0 auto 1.25rem auto;font-size:0.92rem;line-height:1.6;">
            Nos mentors et professionnels partenaires enrichissent continuellement les fiches métiers. Tu peux explorer l'ensemble des métiers de la famille ou consulter les ressources d'orientation.
          </p>
          <button type="button" class="btn btn-outline btn-sm" id="btnShowAllFamilyJobs">
            Voir tous les métiers de cette famille
          </button>
        </div>
      `;
      const btn = document.getElementById('btnShowAllFamilyJobs');
      if (btn) {
        btn.addEventListener('click', () => {
          AppState.selectedSubdomain = 'all';
          const allPill = dom.subdomainsBarContainer.querySelector('[data-subdomain="all"]');
          if (allPill) {
            dom.subdomainsBarContainer.querySelectorAll('.subdomain-pill').forEach(b => b.classList.remove('active'));
            allPill.classList.add('active');
          }
          renderJobsForFamily(familyId, 'all');
        });
      }
      return;
    }

    renderJobCardsList(jobs);
  }

  async function renderAllJobsGrid() {
    if (!dom.jobsGridContainer) return;
    dom.jobsGridContainer.innerHTML = '<p class="text-muted text-center" style="grid-column:1/-1;padding:2rem;">Chargement de l’ensemble des dossiers...</p>';
    const all = await window.OrientationData.getAllJobs();
    renderJobCardsList(all);
  }

  function renderJobCardsList(jobs) {
    if (!dom.jobsGridContainer) return;

    dom.jobsGridContainer.innerHTML = jobs.map(job => {
      const img = safeUrl(job.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80');
      const techSkills = job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.slice(0, 3) : [];
      const totalSkillsCount = (job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.length : 0);

      return `
        <article class="card job-card-modern" data-job-slug="${escapeHtml(job.slug || job.id)}">
          <div class="job-card-media-wrap">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(job.title)}" loading="lazy">
            <div class="job-card-overlay"></div>
            <div class="job-card-pill-tag">
              <span>${escapeHtml(job.icon || '💼')}</span>
              <span>${escapeHtml(job.subdomain || job.familyName || 'Métier')}</span>
            </div>
            ${job.salary ? `<span class="job-card-salary-badge">💰 ${escapeHtml(job.salary.split('-')[0].trim())}</span>` : ''}
          </div>

          <div class="job-card-body">
            <div class="job-card-meta-line">
              <span class="job-card-level-badge">🎓 ${escapeHtml(job.level || 'Bac +3 / +5')}</span>
            </div>

            <h3 class="job-card-title">${escapeHtml(job.title)}</h3>
            <p class="job-card-desc">${escapeHtml(job.shortDescription || job.description || '')}</p>

            ${techSkills.length > 0 ? `
              <div class="job-card-skills-row">
                ${techSkills.map(s => `<span class="job-mini-skill-chip">${escapeHtml(s)}</span>`).join('')}
                ${totalSkillsCount > 3 ? `<span class="job-mini-skill-more">+${totalSkillsCount - 3}</span>` : ''}
              </div>
            ` : ''}
          </div>

          <div class="job-card-footer">
            <button type="button" class="btn-open-dossier" aria-label="Consulter la fiche métier de ${escapeHtml(job.title)}">
              <span>Découvrir le métier</span>
              <span class="arrow">&rarr;</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Gestion du clic sur toute la carte
    dom.jobsGridContainer.querySelectorAll('.job-card-modern').forEach(card => {
      card.addEventListener('click', async () => {
        const slug = card.getAttribute('data-job-slug');
        const job = await window.OrientationData.getJobBySlug(slug);
        if (job) openJobModal(job);
      });
    });
  }

  // =========================================================================
  // BOUSSOLE DES AFFINITÉS (« Je ne sais pas encore »)
  // =========================================================================
  function initAffinityExplorer() {
    if (!dom.affinitiesChipsContainer) return;
    const affinities = window.OrientationData.getAffinities();

    dom.affinitiesChipsContainer.innerHTML = affinities.map(aff => `
      <button type="button" class="affinity-pill" data-affinity-id="${escapeHtml(aff.id)}">
        <span class="affinity-icon">${escapeHtml(aff.icon)}</span>
        <span class="affinity-label">${escapeHtml(aff.label)}</span>
      </button>
    `).join('');

    dom.affinitiesChipsContainer.querySelectorAll('.affinity-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const affId = btn.getAttribute('data-affinity-id');
        btn.classList.toggle('active');

        if (AppState.selectedAffinities.includes(affId)) {
          AppState.selectedAffinities = AppState.selectedAffinities.filter(id => id !== affId);
        } else {
          AppState.selectedAffinities.push(affId);
        }

        renderAffinityResults();
      });
    });
  }

  async function renderAffinityResults() {
    if (!dom.jobsGridContainer) return;

    if (AppState.selectedAffinities.length === 0) {
      if (dom.affinityResultsNotice) {
        dom.affinityResultsNotice.innerHTML = `
          <p class="text-muted text-center" style="font-size:0.92rem;padding:1rem 0;">
            Sélectionne un ou plusieurs centres d'intérêt ci-dessus pour faire apparaître les univers et métiers correspondants.
          </p>
        `;
      }
      dom.jobsGridContainer.innerHTML = '';
      return;
    }

    const { matchedFamilies, matchedJobs } = await window.OrientationData.getExplorationByAffinities(AppState.selectedAffinities);

    if (dom.affinityResultsNotice) {
      dom.affinityResultsNotice.innerHTML = `
        <div class="affinity-results-banner">
          <p style="margin:0;font-weight:600;color:#0f172a;">
            ✨ Ces univers professionnels résonnent avec tes affinités :
            <span style="color:#0284c7;">${matchedFamilies.map(f => f.icon + ' ' + f.name).join(' • ')}</span>
          </p>
          <span style="font-size:0.85rem;color:#64748b;display:block;margin-top:0.3rem;">
            (${matchedJobs.length} fiches métiers directement associées)
          </span>
        </div>
      `;
    }

    renderJobCardsList(matchedJobs);
  }

  // =========================================================================
  // MOTEUR DE RECHERCHE UNIVERSEL INSTANTANÉ
  // =========================================================================
  let searchDebounceTimer = null;

  function initUniversalSearch() {
    if (!dom.heroSearchInput) return;

    dom.heroSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      AppState.searchQuery = query;

      if (dom.heroSearchClear) {
        dom.heroSearchClear.style.display = query.length > 0 ? 'inline-flex' : 'none';
      }

      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(async () => {
        if (query.length >= 2) {
          setView('SEARCH');
        } else if (query.length === 0) {
          setView('FAMILIES');
        }
      }, 250);
    });

    if (dom.heroSearchClear) {
      dom.heroSearchClear.addEventListener('click', () => {
        dom.heroSearchInput.value = '';
        dom.heroSearchClear.style.display = 'none';
        AppState.searchQuery = '';
        setView('FAMILIES');
      });
    }

    if (dom.btnResetSearch) {
      dom.btnResetSearch.addEventListener('click', () => {
        dom.heroSearchInput.value = '';
        if (dom.heroSearchClear) dom.heroSearchClear.style.display = 'none';
        AppState.searchQuery = '';
        setView('FAMILIES');
      });
    }
  }

  async function renderSearchResults() {
    if (!dom.jobsGridContainer) return;
    const q = AppState.searchQuery;

    const results = await window.OrientationData.searchJobs(q);

    const summaryText = document.getElementById('searchCountText');
    if (summaryText) {
      summaryText.textContent = `${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''} pour "${escapeHtml(q)}"`;
    }

    if (results.length === 0) {
      dom.jobsGridContainer.innerHTML = `
        <div class="empty-state-card" style="grid-column:1/-1;">
          <span style="font-size:2.5rem;display:block;margin-bottom:0.75rem;">🔍</span>
          <h4 style="font-size:1.15rem;color:#0f172a;margin-bottom:0.5rem;">Aucun métier ne correspond exactement à "${escapeHtml(q)}"</h4>
          <p style="color:#64748b;max-width:500px;margin:0 auto 1.25rem auto;font-size:0.92rem;line-height:1.6;">
            Essaie avec d’autres mots-clés (ex: "code", "sécurité", "finance", "terre", "santé", "design") ou explore nos 21 grandes familles.
          </p>
          <button type="button" class="btn btn-primary btn-sm" id="btnEmptyResetSearch">
            Voir les 21 familles professionnelles
          </button>
        </div>
      `;
      const btn = document.getElementById('btnEmptyResetSearch');
      if (btn) {
        btn.addEventListener('click', () => {
          if (dom.heroSearchInput) dom.heroSearchInput.value = '';
          AppState.searchQuery = '';
          setView('FAMILIES');
        });
      }
      return;
    }

    renderJobCardsList(results);
  }

  // =========================================================================
  // FICHE MÉTIER HAUTE PROFONDEUR — MODAL INTERACTIVE 6 ONGLETS (NIVEAU 4 & 5)
  // =========================================================================
  async function openJobModal(job) {
    // Supprimer tout overlay préexistant
    const existing = document.getElementById('job-dossier-overlay');
    if (existing) existing.remove();

    const img = safeUrl(job.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=80');
    const embedVideoUrl = (job.resources && job.resources.find(r => r.type === 'video')) ? getYoutubeEmbedUrl(job.resources.find(r => r.type === 'video').url) : null;
    const relatedJobs = await window.OrientationData.getRelatedJobs(job);

    const overlay = document.createElement('div');
    overlay.id = 'job-dossier-overlay';
    overlay.className = 'dossier-overlay';

    // Rendu du HTML complet de la modal
    overlay.innerHTML = `
      <div class="dossier-modal" role="dialog" aria-modal="true" aria-labelledby="dossierJobTitle">
        <!-- En-tête immersif -->
        <div class="dossier-hero" style="background-image: url('${escapeHtml(img)}');">
          <div class="dossier-hero-overlay"></div>
          <button type="button" class="dossier-close-btn" id="dossierCloseX" aria-label="Fermer le dossier">&times;</button>
          
          <div class="dossier-hero-content">
            <div class="dossier-hero-badges-row">
              <span class="dossier-domain-pill">
                <span>${escapeHtml(job.icon || '💼')}</span>
                <span>${escapeHtml(job.subdomain || job.familyName || 'Métier')}</span>
              </span>
              <span class="dossier-meta-tag" style="background:rgba(255,255,255,0.15);color:#fff;">
                📁 ${escapeHtml(job.familyName || 'Orientation')}
              </span>
            </div>

            <h2 class="dossier-title" id="dossierJobTitle">${escapeHtml(job.title)}</h2>
            
            <div class="dossier-meta-tags">
              <span class="dossier-meta-tag">🎓 <strong>${escapeHtml(job.level || 'Bac +3 à +5')}</strong></span>
              ${job.salary ? `<span class="dossier-meta-tag">💰 <strong>${escapeHtml(job.salary)}</strong></span>` : ''}
              <span class="dossier-meta-tag">🌍 Sénégal • Afrique • International</span>
            </div>
          </div>
        </div>

        <!-- Barre des 6 Onglets -->
        <div class="dossier-tabs" role="tablist">
          <button type="button" class="dossier-tab active" data-tab="tab-discover" role="tab">📌 1. Découvrir</button>
          <button type="button" class="dossier-tab" data-tab="tab-skills" role="tab">🧠 2. Compétences</button>
          <button type="button" class="dossier-tab" data-tab="tab-studies" role="tab">🎓 3. Se former</button>
          <button type="button" class="dossier-tab" data-tab="tab-career" role="tab">💼 4. Débouchés</button>
          <button type="button" class="dossier-tab" data-tab="tab-related" role="tab">🧭 5. Métiers proches (${relatedJobs.length})</button>
          <button type="button" class="dossier-tab" data-tab="tab-resources" role="tab">🎥 6. Ressources</button>
        </div>

        <!-- Corps du dossier -->
        <div class="dossier-body">
          
          <!-- ONGLET 1 : DÉCOUVRIR -->
          <div class="dossier-tab-content active" id="tab-discover">
            <div class="dossier-section">
              <h3 class="dossier-section-title">En quoi consiste ce métier concrètement ?</h3>
              <p class="dossier-editorial-lead">${escapeHtml(job.longDescription || job.shortDescription || '')}</p>
            </div>

            ${job.workEnvironment && job.workEnvironment.length > 0 ? `
              <div class="dossier-section" style="background:#f8fafc;border:1px solid #e2e8f0;padding:1.25rem;border-radius:10px;">
                <h4 style="color:#0f172a;font-size:0.95rem;margin-bottom:0.75rem;">💻 À quoi ressemble ce métier au quotidien ?</h4>
                <div class="work-environment-tags-grid">
                  ${job.workEnvironment.map(tag => `
                    <div class="env-tag-chip">
                      <span>${escapeHtml(tag)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${job.typicalDay && job.typicalDay.length > 0 ? `
              <div class="dossier-section">
                <h3 class="dossier-section-title">Journée type indicative</h3>
                <p style="color:#64748b;font-size:0.88rem;margin-bottom:1rem;">À quoi peut ressembler une journée de travail typique :</p>
                <div class="typical-day-timeline">
                  ${job.typicalDay.map(slot => `
                    <div class="timeline-item">
                      <div class="timeline-time">${escapeHtml(slot.time)}</div>
                      <div class="timeline-content">
                        <strong>${escapeHtml(slot.title)}</strong>
                        <p>${escapeHtml(slot.desc)}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Passerelle directe Formations Club au bas de l'onglet Découvrir -->
            <div class="dossier-club-callout" style="background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);border:1.5px solid #bae6fd;padding:1.25rem 1.5rem;border-radius:12px;margin-top:1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
              <div style="flex:1;min-width:260px;">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.35rem;">
                  <span style="font-size:1.2rem;">💡</span>
                  <h4 style="color:#0369a1;margin:0;font-size:1rem;font-weight:700;">Envie de vous former à ce métier ?</h4>
                </div>
                <p style="color:#0c4a6e;font-size:0.88rem;line-height:1.5;margin:0;">Découvrez les modules, ateliers pratiques et bootcamps dispensés par nos mentors au sein du Club.</p>
              </div>
              <a href="formations.html?search=${encodeURIComponent(job.title)}" class="btn-dossier-formation" style="background:#0284c7;color:#ffffff;font-weight:700;padding:0.65rem 1.25rem;border-radius:8px;font-size:0.88rem;display:inline-flex;align-items:center;gap:0.45rem;text-decoration:none;box-shadow:0 3px 10px rgba(2,132,199,0.3);border:none;">
                <span>🎓 Voir les formations du Club</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <!-- ONGLET 2 : COMPÉTENCES -->
          <div class="dossier-tab-content" id="tab-skills">
            <div class="dossier-section">
              <h3 class="dossier-section-title">La boîte à compétences indispensable</h3>
              <p style="color:#64748b;font-size:0.9rem;margin-bottom:1.25rem;">Les entreprises recherchent un équilibre harmonieux entre savoir-faire technique et aptitudes relationnelles :</p>

              <div class="skills-breakdown-grid">
                <!-- Compétences Techniques -->
                <div class="skill-category-box tech-box">
                  <div class="skill-cat-header">
                    <span>⚡</span>
                    <h4>Compétences Techniques</h4>
                  </div>
                  <ul class="skills-list">
                    ${(job.skills && job.skills.technical && job.skills.technical.length > 0)
                      ? job.skills.technical.map(s => `<li>${escapeHtml(s)}</li>`).join('')
                      : '<li>Compétences techniques spécifiques au domaine</li>'}
                  </ul>
                </div>

                <!-- Compétences Humaines -->
                <div class="skill-category-box human-box">
                  <div class="skill-cat-header">
                    <span>🤝</span>
                    <h4>Compétences Humaines (Soft Skills)</h4>
                  </div>
                  <ul class="skills-list">
                    ${(job.skills && job.skills.human && job.skills.human.length > 0)
                      ? job.skills.human.map(s => `<li>${escapeHtml(s)}</li>`).join('')
                      : '<li>Communication, esprit d’équipe, adaptabilité</li>'}
                  </ul>
                </div>

                <!-- Outils & Technologies -->
                <div class="skill-category-box tools-box">
                  <div class="skill-cat-header">
                    <span>🛠️</span>
                    <h4>Outils & Logiciels Phares</h4>
                  </div>
                  <div class="tools-chips-wrap">
                    ${(job.skills && job.skills.tools && job.skills.tools.length > 0)
                      ? job.skills.tools.map(t => `<span class="tool-badge">${escapeHtml(t)}</span>`).join('')
                      : '<span class="tool-badge">Outils professionnels standards</span>'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ONGLET 3 : SE FORMER -->
          <div class="dossier-tab-content" id="tab-studies">
            <div class="dossier-section">
              <h3 class="dossier-section-title">Parcours d’études & Filières recommandées</h3>
              <p style="color:#64748b;font-size:0.9rem;margin-bottom:1.25rem;">Comment accéder à ce métier depuis le secondaire jusqu’aux cycles supérieurs :</p>

              ${job.studies && job.studies.pathway && job.studies.pathway.length > 0 ? `
                <div class="education-pathway-steps">
                  ${job.studies.pathway.map((p, idx) => `
                    <div class="pathway-step-card">
                      <div class="pathway-step-badge">${escapeHtml(p.step || `Étape ${idx + 1}`)}</div>
                      <div class="pathway-step-info">
                        <h4>${escapeHtml(p.title)}</h4>
                        ${p.desc ? `<p>${escapeHtml(p.desc)}</p>` : ''}
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <p style="color:#334155;line-height:1.6;">Accessible par un cursus universitaire spécialisé (Licence / Master) ou filière professionnelle technique.</p>
              `}
            </div>

            ${job.studies && job.studies.schools && job.studies.schools.length > 0 ? `
              <div class="dossier-section">
                <h3 class="dossier-section-title">Établissements & Pôles d'excellence</h3>
                <div class="schools-cards-grid">
                  ${job.studies.schools.map(sc => `
                    <div class="school-card">
                      <div class="school-geo-badge ${sc.scope === 'Sénégal' ? 'geo-senegal' : (sc.scope === 'Afrique' ? 'geo-afrique' : 'geo-monde')}">
                        ${sc.scope === 'Sénégal' ? '🇸🇳 Sénégal' : (sc.scope === 'Afrique' ? '🌍 Afrique' : '🌐 International')}
                      </div>
                      <h4 class="school-name">${escapeHtml(sc.name)}</h4>
                      <span class="school-country">${escapeHtml(sc.country)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Passerelle vers les formations du Club -->
            <div class="dossier-section" style="background:#f0f9ff;border:1px solid #bae6fd;padding:1.25rem;border-radius:10px;margin-top:1.5rem;">
              <h4 style="color:#0369a1;margin-bottom:0.4rem;font-size:0.98rem;">💡 Passerelles de formation au sein du Club</h4>
              <p style="color:#0c4a6e;font-size:0.88rem;line-height:1.6;margin:0 0 0.85rem 0;">Développe les compétences pratiques requises pour ce métier grâce aux ateliers, bootcamps et modules dispensés par nos mentors.</p>
              <a href="formations.html?search=${encodeURIComponent(job.title)}" class="btn btn-sm" style="background:#0284c7;color:#fff;display:inline-flex;align-items:center;gap:0.4rem;">
                <span>Explorer les formations associées</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          <!-- ONGLET 4 : DÉBOUCHÉS -->
          <div class="dossier-tab-content" id="tab-career">
            <div class="dossier-section">
              <h3 class="dossier-section-title">Où s'exerce ce métier ?</h3>
              
              <div class="career-insights-grid">
                <div class="insight-card">
                  <h4>🏢 Secteurs d’activité recruteurs</h4>
                  <ul class="insight-list">
                    ${(job.career && job.career.sectors && job.career.sectors.length > 0)
                      ? job.career.sectors.map(sec => `<li>${escapeHtml(sec)}</li>`).join('')
                      : '<li>Secteurs économiques variés</li>'}
                  </ul>
                </div>

                <div class="insight-card">
                  <h4>👥 Types d’employeurs</h4>
                  <ul class="insight-list">
                    ${(job.career && job.career.employerTypes && job.career.employerTypes.length > 0)
                      ? job.career.employerTypes.map(emp => `<li>${escapeHtml(emp)}</li>`).join('')
                      : '<li>PME, grandes entreprises, secteur public</li>'}
                  </ul>
                </div>
              </div>

              ${job.career && job.career.evolution ? `
                <div class="career-evolution-box" style="margin-top:1.25rem;background:#f8fafc;border:1px solid #e2e8f0;padding:1.25rem;border-radius:10px;">
                  <h4 style="color:#0f172a;font-size:0.95rem;margin-bottom:0.5rem;">📈 Perspectives d’évolution de carrière</h4>
                  <p style="color:#334155;font-size:0.92rem;line-height:1.6;margin:0;">${escapeHtml(job.career.evolution)}</p>
                </div>
              ` : ''}

              <!-- Atouts & Vigilances -->
              <div class="pros-cons-grid" style="margin-top:1.5rem;">
                <div class="pros-box">
                  <h4>✓ Atouts majeurs & Points forts</h4>
                  <p>${escapeHtml(job.career && job.career.pros ? job.career.pros : "Métier stimulant avec de fortes perspectives d'évolution professionnelle.")}</p>
                </div>
                <div class="cons-box">
                  <h4>⚠ Points de vigilance & Exigences</h4>
                  <p>${escapeHtml(job.career && job.career.cons ? job.career.cons : "Exige un investissement continu et une capacité d'adaptation permanente.")}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ONGLET 5 : MÉTIERS PROCHES -->
          <div class="dossier-tab-content" id="tab-related">
            <div class="dossier-section">
              <h3 class="dossier-section-title">Métiers proches & Passerelles professionnelles</h3>
              <p style="color:#64748b;font-size:0.9rem;margin-bottom:1.25rem;">Les compétences acquises dans ce métier ouvrent naturellement la porte vers ces autres fonctions :</p>

              ${relatedJobs.length > 0 ? `
                <div class="related-jobs-grid">
                  ${relatedJobs.map(rel => `
                    <div class="related-job-card" data-rel-slug="${escapeHtml(rel.slug || rel.id)}">
                      <div class="rel-icon">${escapeHtml(rel.icon || '💼')}</div>
                      <div class="rel-info">
                        <h4>${escapeHtml(rel.title)}</h4>
                        <span class="rel-sub">${escapeHtml(rel.subdomain || rel.familyName || '')}</span>
                        <p class="rel-desc">${escapeHtml(rel.shortDescription ? rel.shortDescription.slice(0, 110) + '...' : '')}</p>
                      </div>
                      <button type="button" class="btn-goto-rel" aria-label="Explorer ${escapeHtml(rel.title)}">&rarr;</button>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <p class="text-muted">Explore les autres métiers de la famille ${escapeHtml(job.familyName || '')}.</p>
              `}
            </div>
          </div>

          <!-- ONGLET 6 : RESSOURCES & IMMERSION -->
          <div class="dossier-tab-content" id="tab-resources">
            <div class="dossier-section">
              <h3 class="dossier-section-title">Ressources recommandées pour aller plus loin</h3>
              
              ${embedVideoUrl ? `
                <div class="video-embed-box" style="margin-bottom:1.5rem;">
                  <h4 style="font-size:0.95rem;color:#0f172a;margin-bottom:0.75rem;">🎬 Immersion en vidéo</h4>
                  <div class="dossier-video-container">
                    <iframe src="${embedVideoUrl}" title="Immersion ${escapeHtml(job.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              ` : ''}

              <div class="resources-links-list">
                ${job.resources && job.resources.length > 0 ? job.resources.map(res => `
                  <a href="${escapeHtml(res.url)}" target="_blank" rel="noopener noreferrer" class="resource-item-card">
                    <div class="resource-badge-type">${res.type === 'video' ? '🎥 Vidéo' : (res.type === 'mooc' ? '🎓 MOOC' : (res.type === 'podcast' ? '🎙️ Podcast' : '📚 Article'))}</div>
                    <div class="resource-content">
                      <h4 class="resource-title">${escapeHtml(res.title)}</h4>
                      <span class="resource-source">Source : ${escapeHtml(res.source || 'Référence')} ${res.duration ? `• ${escapeHtml(res.duration)}` : ''}</span>
                    </div>
                    <span class="resource-arrow">&nearr;</span>
                  </a>
                `).join('') : `
                  <p class="text-muted">Des ressources complémentaires seront ajoutées prochainement par nos mentors.</p>
                `}
              </div>

              ${job.sources && job.sources.length > 0 ? `
                <div class="sources-footnote" style="margin-top:1.5rem;padding-top:1rem;border-top:1px dashed #e2e8f0;font-size:0.8rem;color:#94a3b8;">
                  <strong>Sources & Références observatoires :</strong> ${job.sources.map(s => escapeHtml(s)).join(', ')}
                </div>
              ` : ''}
            </div>
          </div>

        </div>

        <!-- Pied de modal -->
        <div class="dossier-footer">
          <div class="dossier-footer-actions">
            <a href="formations.html?search=${encodeURIComponent(job.title)}" class="btn-dossier-action btn-dossier-formation" style="background:#0284c7;color:#ffffff;border:1px solid #0284c7;font-weight:650;padding:0.6rem 1.15rem;border-radius:8px;text-decoration:none;display:inline-flex;align-items:center;gap:0.45rem;box-shadow:0 2px 8px rgba(2,132,199,0.25);">
              <span>🎓</span>
              <span>Formations du Club</span>
            </a>
            <a href="forum.html" class="btn-dossier-action btn-dossier-forum" style="background:#f8fafc;color:#0f172a;border:1.5px solid #cbd5e1;font-weight:600;padding:0.6rem 1.15rem;border-radius:8px;text-decoration:none;display:inline-flex;align-items:center;gap:0.45rem;">
              <span>💬</span>
              <span>Poser une question</span>
            </a>
          </div>
          <button type="button" class="btn-dossier-close-footer" id="dossierCloseBtn" style="background:#0f172a;color:#ffffff;font-weight:700;padding:0.65rem 1.35rem;border-radius:8px;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:0.4rem;">Fermer la fiche</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Animation d'ouverture fluide
    setTimeout(() => overlay.classList.add('active'), 15);

    // Navigation par onglets
    overlay.querySelectorAll('.dossier-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        overlay.querySelectorAll('.dossier-tab').forEach(b => b.classList.remove('active'));
        overlay.querySelectorAll('.dossier-tab-content').forEach(c => c.classList.remove('active'));

        tabBtn.classList.add('active');
        const targetId = tabBtn.getAttribute('data-tab');
        const targetContent = overlay.querySelector(`#${targetId}`);
        if (targetContent) targetContent.classList.add('active');
      });
    });

    // Clic sur les cartes de métiers connexes pour basculer directement
    overlay.querySelectorAll('.related-job-card').forEach(relCard => {
      relCard.addEventListener('click', async () => {
        const relSlug = relCard.getAttribute('data-rel-slug');
        const relJob = await window.OrientationData.getJobBySlug(relSlug);
        if (relJob) {
          overlay.remove();
          openJobModal(relJob);
        }
      });
    });

    // Fermeture de la modal
    const closeModal = () => {
      overlay.classList.remove('active');
      setTimeout(() => overlay.remove(), 250);
    };

    const closeX = overlay.querySelector('#dossierCloseX');
    const closeBtn = overlay.querySelector('#dossierCloseBtn');
    if (closeX) closeX.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  // =========================================================================
  // INITIALISATION GLOBALE DU MODULE
  // =========================================================================
  document.addEventListener('DOMContentLoaded', async () => {
    initDomRefs();
    initUniversalSearch();
    initAffinityExplorer();

    // Bouton de navigation vers les 21 familles
    if (dom.btnExploreFamilies) {
      dom.btnExploreFamilies.addEventListener('click', () => {
        setView('FAMILIES');
        if (dom.familiesGridContainer) dom.familiesGridContainer.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Bouton Boussole « Je ne sais pas encore »
    if (dom.btnDiscoverInterests) {
      dom.btnDiscoverInterests.addEventListener('click', () => {
        setView('INTERESTS');
      });
    }

    // Bouton Voir tous les métiers
    if (dom.btnViewAllJobs) {
      dom.btnViewAllJobs.addEventListener('click', () => {
        setView('ALL_JOBS');
      });
    }

    // Bouton retour aux familles
    if (dom.btnBackToFamilies) {
      dom.btnBackToFamilies.addEventListener('click', () => {
        setView('FAMILIES');
      });
    }

    // Préchargement de la base de données
    await window.OrientationData.getAllJobs();

    // Analyse des paramètres d'URL (Deep Linking)
    const urlParams = new URLSearchParams(window.location.search);
    const familyParam = urlParams.get('family');
    const subdomainParam = urlParams.get('subdomain');
    const jobParam = urlParams.get('job');
    const searchParam = urlParams.get('search');

    if (jobParam) {
      const targetJob = await window.OrientationData.getJobBySlug(jobParam);
      if (targetJob) openJobModal(targetJob);
    }

    if (familyParam) {
      setView('FAMILY_DRILLDOWN', { familyId: familyParam, subdomain: subdomainParam || 'all' });
    } else if (searchParam) {
      if (dom.heroSearchInput) dom.heroSearchInput.value = searchParam;
      AppState.searchQuery = searchParam;
      setView('SEARCH');
    } else if (window.location.hash === '#decouvrir') {
      setView('INTERESTS');
    } else {
      setView('FAMILIES');
    }
  });

  // Exposer les méthodes d'accès public
  window.OrientationUI = {
    setView,
    openJobModal
  };

})();
