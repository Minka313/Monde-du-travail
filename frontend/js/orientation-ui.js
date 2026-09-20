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
    selectedDomain: 'all',
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
        AppState.selectedDomain = 'all';
        AppState.selectedSubdomain = 'all';
        url.searchParams.delete('family');
        url.searchParams.delete('domain');
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
        AppState.selectedDomain = params.domain || 'all';
        AppState.selectedSubdomain = params.subdomain || 'all';

        url.searchParams.set('family', AppState.selectedFamilyId);
        if (AppState.selectedDomain !== 'all') {
          url.searchParams.set('domain', AppState.selectedDomain);
        } else {
          url.searchParams.delete('domain');
        }
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

          updateFamilyBreadcrumbs(family);

          if (dom.familyDrilldownContainer) {
            dom.familyDrilldownContainer.style.display = 'block';
            renderFamilyHeader(family);
            renderSubdomainsBar(family);
          }

          if (dom.jobsGridContainer) {
            dom.jobsGridContainer.style.display = 'grid';
            renderJobsForFamily(AppState.selectedFamilyId, AppState.selectedSubdomain, AppState.selectedDomain);
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

  function updateFamilyBreadcrumbs(family) {
    if (!dom.breadcrumbList) return;
    const digitalDomains = (typeof window.OrientationData.getDigitalDomains === 'function') ? window.OrientationData.getDigitalDomains() : [];
    const activeDomObj = (family.id === 'numerique-ia' && AppState.selectedDomain && AppState.selectedDomain !== 'all') 
      ? digitalDomains.find(d => d.id === AppState.selectedDomain) 
      : null;

    if (activeDomObj) {
      renderBreadcrumbs([
        { label: 'Accueil', url: 'index.html' },
        { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
        { 
          label: `${family.icon} ${family.name}`, 
          action: () => {
            AppState.selectedDomain = 'all';
            AppState.selectedSubdomain = 'all';
            const url = new URL(window.location.href);
            url.searchParams.delete('domain');
            url.searchParams.delete('subdomain');
            window.history.replaceState({}, '', url.toString());
            renderSubdomainsBar(family);
            updateFamilyBreadcrumbs(family);
            renderJobsForFamily(family.id, 'all', 'all');
          } 
        },
        { label: `${activeDomObj.icon} ${activeDomObj.name}`, active: true }
      ]);
    } else {
      renderBreadcrumbs([
        { label: 'Accueil', url: 'index.html' },
        { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
        { label: `${family.icon} ${family.name}`, active: true }
      ]);
    }
  }

  // =========================================================================
  // COMPOSANT : GRILLE DES 21 GRANDES FAMILLES (NIVEAU 1)
  // =========================================================================
  function renderFamiliesGrid() {
    if (!dom.familiesGridContainer) return;
    const families = window.OrientationData.getFamilies();

    dom.familiesGridContainer.innerHTML = families.map((family, idx) => {
      const sampleJobs = (family.representativeJobs || []).slice(0, 3);
      const img = safeUrl(family.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80');

      return `
        <article class="family-card stagger-item" data-family-id="${escapeHtml(family.id)}" style="--family-accent: ${escapeHtml(family.color || '#3b82f6')}; --stagger-idx: ${idx % 8};">
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

    if (window.initCardSpotlight) window.initCardSpotlight();
    if (window.initScrollReveal) window.initScrollReveal();
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

    // Traitement spécifique à haute valeur ajoutée pour le Pôle Numérique (13 pôles d'excellence)
    if (family.id === 'numerique-ia') {
      const digitalDomains = (typeof window.OrientationData.getDigitalDomains === 'function') 
        ? window.OrientationData.getDigitalDomains() 
        : [];
      
      const activeDomObj = (AppState.selectedDomain !== 'all')
        ? digitalDomains.find(d => d.id === AppState.selectedDomain)
        : null;

      const subdomainsList = activeDomObj
        ? (activeDomObj.subdomains || [])
        : (family.subdomains || []);

      dom.subdomainsBarContainer.innerHTML = `
        <div class="digital-domains-wrapper">
          <div class="digital-domains-label" style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.92rem;font-weight:700;color:#0f172a;">
              <span>🌐</span>
              <span>Cartographie d'Excellence du Numérique</span>
              <span style="background:#e0f2fe;color:#0369a1;padding:0.2rem 0.6rem;border-radius:9999px;font-size:0.78rem;font-weight:700;">13 Pôles • 100+ Métiers</span>
            </div>
            ${AppState.selectedDomain !== 'all' ? `
              <button type="button" class="btn-reset-domain" id="btnResetDigitalDomain" style="background:none;border:none;color:#0284c7;font-size:0.84rem;font-weight:650;cursor:pointer;display:inline-flex;align-items:center;gap:0.3rem;">
                <span>&larr; Revenir à tous les pôles</span>
              </button>
            ` : ''}
          </div>

          <!-- Ligne 1 : Les 13 Pôles du Numérique (Domaines) -->
          <div class="domain-pills-bar" style="margin:0 0 1rem 0;">
            <button type="button" class="domain-pill ${AppState.selectedDomain === 'all' ? 'active' : ''}" data-domain="all">
              <span>🌟</span>
              <span>Tous les pôles (13)</span>
            </button>
            ${digitalDomains.map(d => `
              <button type="button" class="domain-pill ${AppState.selectedDomain === d.id ? 'active' : ''}" data-domain="${escapeHtml(d.id)}">
                <span>${escapeHtml(d.icon)}</span>
                <span>${escapeHtml(d.name)}</span>
              </button>
            `).join('')}
          </div>

          <!-- Ligne 2 : Sous-domaines et spécialisations -->
          <div class="subdomains-scroll-track" style="padding-top:0.25rem;">
            <button type="button" class="subdomain-pill ${AppState.selectedSubdomain === 'all' ? 'active' : ''}" data-subdomain="all">
              <span>🌟</span>
              <span>${activeDomObj ? `Tous les métiers de ce pôle (${escapeHtml(activeDomObj.name)})` : 'Tous les sous-domaines'}</span>
            </button>
            ${subdomainsList.map(sub => `
              <button type="button" class="subdomain-pill ${AppState.selectedSubdomain === sub ? 'active' : ''}" data-subdomain="${escapeHtml(sub)}">
                <span>📁</span>
                <span>${escapeHtml(sub)}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;

      // Clics sur les boutons de pôles / domaines
      dom.subdomainsBarContainer.querySelectorAll('.domain-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          const chosenDomain = btn.getAttribute('data-domain');
          AppState.selectedDomain = chosenDomain;
          AppState.selectedSubdomain = 'all';

          const url = new URL(window.location.href);
          if (chosenDomain !== 'all') {
            url.searchParams.set('domain', chosenDomain);
          } else {
            url.searchParams.delete('domain');
          }
          url.searchParams.delete('subdomain');
          window.history.replaceState({}, '', url.toString());

          renderSubdomainsBar(family);
          updateFamilyBreadcrumbs(family);
          renderJobsForFamily(family.id, 'all', chosenDomain);
        });
      });

      // Bouton Reset domaine
      const btnResetDomain = document.getElementById('btnResetDigitalDomain');
      if (btnResetDomain) {
        btnResetDomain.addEventListener('click', () => {
          AppState.selectedDomain = 'all';
          AppState.selectedSubdomain = 'all';
          const url = new URL(window.location.href);
          url.searchParams.delete('domain');
          url.searchParams.delete('subdomain');
          window.history.replaceState({}, '', url.toString());

          renderSubdomainsBar(family);
          updateFamilyBreadcrumbs(family);
          renderJobsForFamily(family.id, 'all', 'all');
        });
      }

      // Clics sur les sous-domaines
      dom.subdomainsBarContainer.querySelectorAll('.subdomain-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          dom.subdomainsBarContainer.querySelectorAll('.subdomain-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const chosenSub = btn.getAttribute('data-subdomain');
          AppState.selectedSubdomain = chosenSub;

          const url = new URL(window.location.href);
          if (chosenSub !== 'all') {
            url.searchParams.set('subdomain', chosenSub);
          } else {
            url.searchParams.delete('subdomain');
          }
          window.history.replaceState({}, '', url.toString());

          renderJobsForFamily(family.id, chosenSub, AppState.selectedDomain);
        });
      });

      return;
    }

    // Comportement standard pour les autres grandes familles
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
        renderJobsForFamily(family.id, chosenSub, 'all');
      });
    });
  }

  // =========================================================================
  // COMPOSANT : CARTES MÉTIERS MODERNISÉES (NIVEAU 3)
  // =========================================================================
  async function renderJobsForFamily(familyId, subdomain, domain = null) {
    if (!dom.jobsGridContainer) return;
    dom.jobsGridContainer.innerHTML = '<p class="text-muted text-center" style="grid-column:1/-1;padding:2rem;">Chargement des fiches métiers...</p>';

    const activeDomain = (domain !== null && domain !== undefined) ? domain : AppState.selectedDomain;
    const jobs = await window.OrientationData.getJobsBySubdomain(familyId, subdomain, activeDomain);

    if (jobs.length === 0) {
      dom.jobsGridContainer.innerHTML = `
        <div class="empty-state-card" style="grid-column:1/-1;">
          <span style="font-size:2.5rem;display:block;margin-bottom:0.75rem;">🧭</span>
          <h4 style="font-size:1.15rem;color:#0f172a;margin-bottom:0.5rem;">Dossiers en cours de documentation pour cette sélection</h4>
          <p style="color:#64748b;max-width:550px;margin:0 auto 1.25rem auto;font-size:0.92rem;line-height:1.6;">
            Nos mentors et professionnels partenaires enrichissent continuellement les fiches métiers. Tu peux explorer l'ensemble des métiers de cette famille ou réinitialiser les filtres.
          </p>
          <button type="button" class="btn btn-outline-dark btn-sm" id="btnShowAllFamilyJobs" style="background:#ffffff;color:#0284c7;border:1.5px solid #0284c7;font-weight:650;padding:0.6rem 1.25rem;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:0.4rem;">
            <span>Voir tous les métiers de cette famille</span>
            <span>&rarr;</span>
          </button>
        </div>
      `;
      const btn = document.getElementById('btnShowAllFamilyJobs');
      if (btn) {
        btn.addEventListener('click', () => {
          AppState.selectedDomain = 'all';
          AppState.selectedSubdomain = 'all';
          const family = window.OrientationData.getFamily(familyId);
          if (family) {
            renderSubdomainsBar(family);
            updateFamilyBreadcrumbs(family);
          }
          renderJobsForFamily(familyId, 'all', 'all');
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

    dom.jobsGridContainer.innerHTML = jobs.map((job, idx) => {
      const img = safeUrl(job.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80');
      const techSkills = job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.slice(0, 3) : [];
      const totalSkillsCount = (job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.length : 0);
      const isEmerging = Boolean(job.isEmerging);
      const isESD = Boolean(job.sourceESD);
      const domainName = job.domainName || '';

      return `
        <article class="card job-card-modern stagger-item" data-job-slug="${escapeHtml(job.slug || job.id)}" style="--stagger-idx: ${idx % 8};">
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
            <div class="job-card-meta-line" style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap;">
              <span class="job-card-level-badge">🎓 ${escapeHtml(job.level || 'Bac +3 / +5')}</span>
              ${isEmerging ? '<span class="job-badge-emerging" style="background:#fef3c7;color:#92400e;border:1px solid #fde68a;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Métier d’avenir émergent">✨ Émergent</span>' : ''}
              ${isESD ? '<span class="job-badge-esd" style="background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Source de référence : École Supérieure du Digital">🎓 ESD</span>' : ''}
            </div>

            <h3 class="job-card-title">${escapeHtml(job.title)}</h3>
            <p class="job-card-desc">${escapeHtml(job.simpleDefinition || job.shortDescription || job.description || '')}</p>

            ${techSkills.length > 0 ? `
              <div class="job-card-skills-row">
                ${techSkills.map(s => `<span class="job-skill-badge">${escapeHtml(s)}</span>`).join('')}
                ${totalSkillsCount > 3 ? `<span class="job-skill-badge more">+${totalSkillsCount - 3}</span>` : ''}
              </div>
            ` : ''}
          </div>

          <div class="job-card-footer">
            <button type="button" class="btn-job-action">
              <span>Consulter le dossier métier</span>
              <span class="arrow-icon">&rarr;</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Clics sur les cartes de métiers
    dom.jobsGridContainer.querySelectorAll('.job-card-modern').forEach(card => {
      card.addEventListener('click', async () => {
        const slug = card.getAttribute('data-job-slug');
        const job = await window.OrientationData.getJobBySlug(slug);
        if (job) openJobModal(job);
      });
    });

    if (window.initCardSpotlight) window.initCardSpotlight();
    if (window.initScrollReveal) window.initScrollReveal();
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
    const crossJobs = (typeof window.OrientationData.getCrossRecommendations === 'function') 
      ? await window.OrientationData.getCrossRecommendations(job) 
      : [];

    // Calculs d'impact et indicateurs de lecture rapides
    const textToAnalyze = `${job.longDescription || ''} ${job.shortDescription || ''} ${(job.typicalDay || []).join(' ')}`;
    const words = textToAnalyze.trim().split(/\s+/).filter(Boolean).length;
    const readingTimeMin = Math.max(2, Math.min(6, Math.ceil(words / 140)));
    const tensionText = job.marketTension || (job.salary ? 'Fort recrutement' : 'Métier en plein essor');
    const jobKey = job.slug || job.id;
    const hasVotedSurvey = window.AnalyticsTracker?.hasVotedSurvey ? window.AnalyticsTracker.hasVotedSurvey('job', jobKey) : false;

    const overlay = document.createElement('div');
    overlay.id = 'job-dossier-overlay';
    overlay.className = 'dossier-overlay';

    // Rendu du HTML complet de la modal
    overlay.innerHTML = `
      <div class="dossier-modal" role="dialog" aria-modal="true" aria-labelledby="dossierJobTitle">
        <!-- Barre de progression de lecture dynamique -->
        <div class="dossier-progress-track" aria-hidden="true">
          <div class="dossier-progress-bar" id="dossierReadingProgress"></div>
        </div>

        <!-- En-tête immersif -->
        <div class="dossier-hero" style="background-image: url('${escapeHtml(img)}');">
          <div class="dossier-hero-overlay"></div>
          <button type="button" class="dossier-close-btn" id="dossierCloseX" aria-label="Fermer le dossier">&times;</button>
          
          <div class="dossier-hero-content">
            <div class="dossier-hero-badges-row" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                <span class="dossier-domain-pill">
                  <span>${escapeHtml(job.icon || '💼')}</span>
                  <span>${escapeHtml(job.subdomain || job.familyName || 'Métier')}</span>
                </span>
                ${job.domainName ? `
                  <span class="dossier-meta-tag" style="background:rgba(14,165,233,0.25);border-color:rgba(56,189,248,0.4);color:#e0f2fe;">
                    🌐 ${escapeHtml(job.domainName)}
                  </span>
                ` : `
                  <span class="dossier-meta-tag" style="background:rgba(255,255,255,0.15);color:#fff;">
                    📁 ${escapeHtml(job.familyName || 'Orientation')}
                  </span>
                `}
                ${job.isEmerging ? `
                  <span class="dossier-meta-tag" style="background:rgba(245,158,11,0.25);border-color:rgba(251,191,36,0.5);color:#fef3c7;">
                    ✨ Métier Émergent
                  </span>
                ` : ''}
                ${job.sourceESD ? `
                  <span class="dossier-meta-tag" style="background:rgba(16,185,129,0.25);border-color:rgba(52,211,153,0.5);color:#d1fae5;" title="Fiche documentée d'après le référentiel ESD">
                    🎓 Référence ESD
                  </span>
                ` : ''}
              </div>
              <button type="button" class="btn-dossier-fav" id="btnToggleJobFav" title="Sauvegarder dans mes favoris">
                <span class="fav-icon">☆</span>
                <span class="fav-label">Favori</span>
              </button>
            </div>

            <h2 class="dossier-title" id="dossierJobTitle">${escapeHtml(job.title)}</h2>
            ${(job.aliases && job.aliases.length > 0) ? `
              <div style="font-size:0.86rem;color:#cbd5e1;margin-top:-0.2rem;margin-bottom:0.5rem;font-style:italic;">
                Aussi appelé : ${job.aliases.map(a => escapeHtml(a)).join(' • ')}
              </div>
            ` : ''}
            
            <div class="dossier-meta-tags">
              <span class="dossier-meta-tag">🎓 <strong>${escapeHtml(job.level || 'Bac +3 à +5')}</strong></span>
              ${job.salary ? `<span class="dossier-meta-tag">💰 <strong>${escapeHtml(job.salary)}</strong></span>` : ''}
              <span class="dossier-meta-tag">🌍 Sénégal • Afrique • International</span>
            </div>

            <!-- Indicateurs de lecture rapides (Quick Stats) -->
            <div class="dossier-quick-stats-row">
              <span class="dossier-quick-stat-badge">
                <span>⏱️</span>
                <span>Lecture : ~${readingTimeMin} min</span>
              </span>
              <span class="dossier-quick-stat-badge tension-high">
                <span class="stat-dot"></span>
                <span>🔥 ${escapeHtml(tensionText)}</span>
              </span>
              <span class="dossier-quick-stat-badge">
                <span>🎓</span>
                <span>Cursus : ${escapeHtml(job.level || 'Bac +2 à +5')}</span>
              </span>
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
            <!-- Définition simple et pédagogique accessible à tous -->
            ${job.simpleDefinition ? `
              <div class="dossier-simple-def-box" style="background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border:1.5px solid #bfdbfe;border-radius:12px;padding:1.15rem 1.35rem;margin-bottom:1.5rem;">
                <div style="display:flex;align-items:center;gap:0.45rem;font-weight:750;color:#1e40af;font-size:0.92rem;margin-bottom:0.4rem;">
                  <span>💡</span>
                  <span>Comprendre ce métier simplement :</span>
                </div>
                <p style="margin:0;color:#1e3a8a;font-size:0.95rem;line-height:1.6;font-weight:500;">
                  ${escapeHtml(job.simpleDefinition)}
                </p>
              </div>
            ` : ''}

            <div class="dossier-section">
              <h3 class="dossier-section-title">En quoi consiste ce métier concrètement ?</h3>
              <p class="dossier-editorial-lead">${escapeHtml(job.longDescription || job.shortDescription || '')}</p>
            </div>

            ${(job.mainObjective || job.companyRole) ? `
              <div class="dossier-role-objective-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem;margin:1.25rem 0;">
                ${job.mainObjective ? `
                  <div class="role-objective-card" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:1.15rem;">
                    <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#0f172a;font-size:0.9rem;margin-bottom:0.4rem;">
                      <span>🎯</span>
                      <span>Objectif principal du poste</span>
                    </div>
                    <p style="margin:0;font-size:0.88rem;color:#334155;line-height:1.5;">${escapeHtml(job.mainObjective)}</p>
                  </div>
                ` : ''}
                ${job.companyRole ? `
                  <div class="role-objective-card" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:1.15rem;">
                    <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#0f172a;font-size:0.9rem;margin-bottom:0.4rem;">
                      <span>🏢</span>
                      <span>Place dans l'organisation</span>
                    </div>
                    <p style="margin:0;font-size:0.88rem;color:#334155;line-height:1.5;">${escapeHtml(job.companyRole)}</p>
                  </div>
                ` : ''}
              </div>
            ` : ''}

            ${job.missions && (job.missions.primary || job.missions.secondary) ? `
              <div class="dossier-section" style="margin-top:1.25rem;">
                <h4 style="color:#0f172a;font-size:0.96rem;margin-bottom:0.75rem;">⚡ Responsabilités & Missions concrètes</h4>
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem;">
                  ${job.missions.primary && job.missions.primary.length > 0 ? `
                    <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:1rem;">
                      <strong style="color:#0284c7;font-size:0.86rem;display:block;margin-bottom:0.5rem;">Missions principales (Cœur de métier)</strong>
                      <ul style="margin:0;padding-left:1.2rem;font-size:0.86rem;color:#334155;line-height:1.6;">
                        ${job.missions.primary.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  ${job.missions.secondary && job.missions.secondary.length > 0 ? `
                    <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:1rem;">
                      <strong style="color:#64748b;font-size:0.86rem;display:block;margin-bottom:0.5rem;">Missions secondaires & Transverses</strong>
                      <ul style="margin:0;padding-left:1.2rem;font-size:0.86rem;color:#334155;line-height:1.6;">
                        ${job.missions.secondary.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            ${job.workEnvironment && job.workEnvironment.length > 0 ? `
              <div class="dossier-section" style="background:#f8fafc;border:1px solid #e2e8f0;padding:1.25rem;border-radius:10px;margin-top:1.25rem;">
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
              <div class="dossier-section" style="margin-top:1.5rem;">
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

            <!-- Impact de l'Intelligence Artificielle -->
            ${job.aiImpact ? `
              <div class="dossier-ai-impact-section" style="margin-top:1.75rem;background:linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);border:1.5px solid #e9d5ff;border-radius:12px;padding:1.35rem;">
                <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.6rem;">
                  <span style="font-size:1.4rem;">🤖</span>
                  <div>
                    <h4 style="margin:0;color:#6b21a8;font-size:1rem;font-weight:750;">Révolution & Impact de l'Intelligence Artificielle</h4>
                    <p style="margin:0.2rem 0 0 0;color:#7e22ce;font-size:0.84rem;">Comment l'IA redéfinit la pratique de ce métier sans remplacer l'humain :</p>
                  </div>
                </div>
                <div class="ai-impact-cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:0.85rem;margin-top:1rem;">
                  <div style="background:#ffffff;border-radius:8px;padding:0.95rem;border-left:4px solid #3b82f6;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <strong style="display:flex;align-items:center;gap:0.35rem;font-size:0.84rem;color:#1e40af;margin-bottom:0.35rem;"><span>⚡</span> Tâches assistées par l'IA</strong>
                    <p style="margin:0;font-size:0.82rem;color:#334155;line-height:1.5;">${escapeHtml(job.aiImpact.assistedTasks || '')}</p>
                  </div>
                  <div style="background:#ffffff;border-radius:8px;padding:0.95rem;border-left:4px solid #f59e0b;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <strong style="display:flex;align-items:center;gap:0.35rem;font-size:0.84rem;color:#b45309;margin-bottom:0.35rem;"><span>🔄</span> Tâches automatisables</strong>
                    <p style="margin:0;font-size:0.82rem;color:#334155;line-height:1.5;">${escapeHtml(job.aiImpact.automatedTasks || '')}</p>
                  </div>
                  <div style="background:#ffffff;border-radius:8px;padding:0.95rem;border-left:4px solid #10b981;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <strong style="display:flex;align-items:center;gap:0.35rem;font-size:0.84rem;color:#047857;margin-bottom:0.35rem;"><span>🧠</span> Compétences humaines cruciales</strong>
                    <p style="margin:0;font-size:0.82rem;color:#334155;line-height:1.5;">${escapeHtml(job.aiImpact.crucialHumanSkills || '')}</p>
                  </div>
                  <div style="background:#ffffff;border-radius:8px;padding:0.95rem;border-left:4px solid #8b5cf6;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                    <strong style="display:flex;align-items:center;gap:0.35rem;font-size:0.84rem;color:#6d28d9;margin-bottom:0.35rem;"><span>🚀</span> Spécialisations émergentes</strong>
                    <p style="margin:0;font-size:0.82rem;color:#334155;line-height:1.5;">${escapeHtml(job.aiImpact.emergingSpecializations || '')}</p>
                  </div>
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

                <!-- Compétences Analytiques (si présentes) -->
                ${(job.skills && job.skills.analytical && job.skills.analytical.length > 0) ? `
                  <div class="skill-category-box tech-box" style="border-top-color:#0284c7;">
                    <div class="skill-cat-header">
                      <span>📊</span>
                      <h4>Compétences Analytiques & Données</h4>
                    </div>
                    <ul class="skills-list">
                      ${job.skills.analytical.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}

                <!-- Compétences Créatives (si présentes) -->
                ${(job.skills && job.skills.creative && job.skills.creative.length > 0) ? `
                  <div class="skill-category-box tech-box" style="border-top-color:#8b5cf6;">
                    <div class="skill-cat-header">
                      <span>🎨</span>
                      <h4>Créativité, Design & UX</h4>
                    </div>
                    <ul class="skills-list">
                      ${job.skills.creative.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}

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

            <!-- Voies de spécialisation -->
            ${job.specializations && job.specializations.length > 0 ? `
              <div class="dossier-section" style="margin-top:1.5rem;background:#f8fafc;border:1px solid #e2e8f0;padding:1.25rem;border-radius:10px;">
                <h4 style="color:#0f172a;font-size:0.95rem;margin-bottom:0.6rem;">🎯 Voies de spécialisation & Orientations</h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                  ${job.specializations.map(sp => `<span style="background:#e0f2fe;color:#0369a1;border:1px solid #bae6fd;padding:0.35rem 0.8rem;border-radius:9999px;font-size:0.82rem;font-weight:650;">${escapeHtml(sp)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Pour commencer dès aujourd'hui (Projets & Portfolio) -->
            ${job.gettingStarted ? `
              <div class="dossier-section" style="margin-top:1.5rem;background:#ffffff;border:1.5px solid #cbd5e1;padding:1.35rem;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;">
                  <span style="font-size:1.3rem;">🛠️</span>
                  <h4 style="margin:0;color:#0f172a;font-size:0.98rem;font-weight:750;">Pour commencer dès aujourd'hui (Projets & Portfolio)</h4>
                </div>
                <p style="color:#64748b;font-size:0.86rem;margin-bottom:1rem;">Construis ton expérience concrète pas à pas pour convaincre recruteurs et clients :</p>
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:0.85rem;">
                  ${job.gettingStarted.beginnerProject ? `
                    <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:0.9rem;">
                      <span style="color:#15803d;font-weight:750;font-size:0.78rem;display:block;margin-bottom:0.3rem;">🌱 Niveau Débutant</span>
                      <p style="margin:0;font-size:0.82rem;color:#166534;line-height:1.5;">${escapeHtml(job.gettingStarted.beginnerProject)}</p>
                    </div>
                  ` : ''}
                  ${job.gettingStarted.intermediateProject ? `
                    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:0.9rem;">
                      <span style="color:#1d4ed8;font-weight:750;font-size:0.78rem;display:block;margin-bottom:0.3rem;">🌿 Niveau Intermédiaire</span>
                      <p style="margin:0;font-size:0.82rem;color:#1e40af;line-height:1.5;">${escapeHtml(job.gettingStarted.intermediateProject)}</p>
                    </div>
                  ` : ''}
                  ${job.gettingStarted.advancedProject ? `
                    <div style="background:#faf5ff;border:1px solid #e9d5ff;border-radius:8px;padding:0.9rem;">
                      <span style="color:#7e22ce;font-weight:750;font-size:0.78rem;display:block;margin-bottom:0.3rem;">🌳 Projet Avancé / Portfolio</span>
                      <p style="margin:0;font-size:0.82rem;color:#6b21a8;line-height:1.5;">${escapeHtml(job.gettingStarted.advancedProject)}</p>
                    </div>
                  ` : ''}
                </div>
                ${(job.gettingStarted.portfolioIdeas && job.gettingStarted.portfolioIdeas.length > 0) ? `
                  <div style="margin-top:1rem;background:#f8fafc;border-left:3px solid #0284c7;padding:0.75rem 1rem;font-size:0.84rem;color:#334155;">
                    <strong>📁 Idée pour ton portfolio :</strong> ${job.gettingStarted.portfolioIdeas.map(i => escapeHtml(i)).join(' • ')}
                  </div>
                ` : ''}
              </div>
            ` : ''}
          </div>

          <!-- ONGLET 3 : SE FORMER -->
          <div class="dossier-tab-content" id="tab-studies">
            <!-- Matières scolaires utiles au lycée -->
            ${job.studies && job.studies.schoolSubjects && job.studies.schoolSubjects.length > 0 ? `
              <div style="background:#f8fafc;border:1px solid #e2e8f0;padding:1rem 1.25rem;border-radius:10px;margin-bottom:1.25rem;">
                <span style="font-size:0.86rem;font-weight:700;color:#0f172a;display:block;margin-bottom:0.4rem;">📚 Matières recommandées au secondaire / lycée :</span>
                <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
                  ${job.studies.schoolSubjects.map(sub => `<span style="background:#e2e8f0;color:#1e293b;padding:0.25rem 0.65rem;border-radius:6px;font-size:0.8rem;font-weight:600;">${escapeHtml(sub)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

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

            <!-- Certifications reconnues si disponibles -->
            ${job.studies && job.studies.certifications && job.studies.certifications.length > 0 ? `
              <div class="dossier-section" style="margin-top:1.25rem;background:#f8fafc;border:1px solid #e2e8f0;padding:1.25rem;border-radius:10px;">
                <h4 style="color:#0f172a;font-size:0.95rem;margin-bottom:0.6rem;">📜 Certifications professionnelles valorisées</h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
                  ${job.studies.certifications.map(c => `<span style="background:#ffffff;border:1px solid #cbd5e1;color:#334155;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.82rem;font-weight:600;">${escapeHtml(c)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            ${job.studies && job.studies.schools && job.studies.schools.length > 0 ? `
              <div class="dossier-section" style="margin-top:1.5rem;">
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

              <!-- Contexte Sénégal & Afrique -->
              ${job.africaContext ? `
                <div class="dossier-section" style="margin-top:1.5rem;background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);border:1.5px solid #bbf7d0;border-radius:12px;padding:1.35rem;">
                  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.6rem;">
                    <span style="font-size:1.4rem;">🌍</span>
                    <div>
                      <h4 style="margin:0;color:#166534;font-size:1rem;font-weight:750;">Opportunités au Sénégal & en Afrique de l'Ouest</h4>
                      <p style="margin:0.2rem 0 0 0;color:#15803d;font-size:0.84rem;">Hub technologique de Dakar, Pôle de Diamniadio et débouchés en télétravail international :</p>
                    </div>
                  </div>
                  <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:0.85rem;margin-top:1rem;">
                    ${job.africaContext.senegalInsight ? `
                      <div style="background:#ffffff;border-radius:8px;padding:0.95rem;grid-column:1/-1;border-left:4px solid #10b981;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                        <strong style="color:#065f46;font-size:0.86rem;display:block;margin-bottom:0.35rem;">🇸🇳 Écosystème & Hub Dakar / Diamniadio</strong>
                        <p style="margin:0;font-size:0.84rem;color:#334155;line-height:1.5;">${escapeHtml(job.africaContext.senegalInsight)}</p>
                      </div>
                    ` : ''}
                    ${job.africaContext.localSectors && job.africaContext.localSectors.length > 0 ? `
                      <div style="background:#ffffff;border-radius:8px;padding:0.95rem;border-left:4px solid #0284c7;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                        <strong style="color:#0369a1;font-size:0.86rem;display:block;margin-bottom:0.35rem;">🏢 Secteurs porteurs locaux</strong>
                        <ul style="margin:0;padding-left:1.2rem;font-size:0.82rem;color:#334155;line-height:1.5;">
                          ${job.africaContext.localSectors.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                        </ul>
                      </div>
                    ` : ''}
                    ${job.africaContext.remoteWork ? `
                      <div style="background:#ffffff;border-radius:8px;padding:0.95rem;border-left:4px solid #8b5cf6;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                        <strong style="color:#6d28d9;font-size:0.86rem;display:block;margin-bottom:0.35rem;">🏠 Télétravail & Remote International</strong>
                        <p style="margin:0;font-size:0.82rem;color:#334155;line-height:1.5;">${escapeHtml(job.africaContext.remoteWork)}</p>
                      </div>
                    ` : ''}
                    ${job.africaContext.entrepreneurship ? `
                      <div style="background:#ffffff;border-radius:8px;padding:0.95rem;border-left:4px solid #f59e0b;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                        <strong style="color:#b45309;font-size:0.86rem;display:block;margin-bottom:0.35rem;">🚀 Entrepreneuriat & Création d'activité</strong>
                        <p style="margin:0;font-size:0.82rem;color:#334155;line-height:1.5;">${escapeHtml(job.africaContext.entrepreneurship)}</p>
                      </div>
                    ` : ''}
                  </div>
                </div>
              ` : ''}

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

          <!-- 3. RECOMMANDATIONS CROISÉES (« Parcours Découverte ») -->
          ${crossJobs.length > 0 ? `
            <div class="dossier-cross-recommendations">
              <div class="cross-rec-header">
                <span class="cross-rec-badge">🧭 Parcours Découverte</span>
                <h4 class="cross-rec-title">Ceux qui s'intéressent à ce métier explorent aussi...</h4>
              </div>
              <div class="cross-rec-grid">
                ${crossJobs.map(cJob => `
                  <div class="cross-rec-card" data-cross-slug="${escapeHtml(cJob.slug || cJob.id)}">
                    <span class="cross-rec-card-icon">${escapeHtml(cJob.icon || '💼')}</span>
                    <div class="cross-rec-card-info">
                      <div class="cross-rec-card-title">${escapeHtml(cJob.title)}</div>
                      <div class="cross-rec-card-domain">${escapeHtml(cJob.familyName || cJob.subdomain || 'Autre univers')}</div>
                    </div>
                    <span class="cross-rec-card-arrow">&rarr;</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 4. MICRO-SONDAGE DE SATISFACTION (Mesure d'impact & Feedback) -->
          <div class="orientation-survey-widget" id="jobSurveyWidget">
            ${hasVotedSurvey ? `
              <div class="survey-thanks-msg">
                <span>✨</span>
                <span>Merci pour ton retour ! Ton avis oriente la communauté.</span>
              </div>
            ` : `
              <h4 class="survey-question-title">Cette fiche t'a-t-elle aidé à y voir plus clair ?</h4>
              <p class="survey-subtitle">Ton retour anonyme permet d'améliorer l'orientation professionnelle des jeunes.</p>
              
              <div class="survey-buttons-row" id="surveyButtonsRow">
                <button type="button" class="btn-survey-vote" data-vote="up">
                  <span>👍</span>
                  <span>Oui, beaucoup</span>
                </button>
                <button type="button" class="btn-survey-vote" data-vote="neutral">
                  <span>😐</span>
                  <span>Un peu</span>
                </button>
                <button type="button" class="btn-survey-vote" data-vote="down">
                  <span>👎</span>
                  <span>Pas vraiment</span>
                </button>
              </div>

              <!-- Tags contextuels révélés au clic -->
              <div class="survey-tags-container" id="surveyTagsContainer" style="display:none;">
                <div class="survey-tags-title" id="surveyTagsTitle"></div>
                <div class="survey-tags-grid" id="surveyTagsGrid"></div>
                <button type="button" class="btn btn-sm btn-primary" id="btnSubmitSurveyTags" style="font-size:0.8rem;padding:4px 14px;border-radius:9999px;margin-top:6px;">
                  Envoyer mon retour
                </button>
              </div>

              <div class="survey-thanks-msg" id="surveyThanksMsg" style="display:none;">
                <span>✨</span>
                <span>Merci pour ton retour ! Il est précieux pour enrichir la plateforme.</span>
              </div>
            `}
          </div>

        </div>

        <!-- 5. BARRE D'ACTION FLOTTANTE STICKY (Conversion & Sauvegarde) -->
        <div class="dossier-floating-actions" id="dossierFloatingActions" aria-label="Actions rapides sur la fiche">
          <button type="button" class="btn-floating-action btn-floating-formation" id="btnFloatingFormations">
            <span>🎓</span>
            <span>Voir les formations</span>
          </button>
          <button type="button" class="btn-floating-action btn-floating-bookmark" id="btnFloatingBookmark">
            <span class="bookmark-icon">☆</span>
            <span class="bookmark-text">Sauvegarder</span>
          </button>
        </div>

        <!-- Pied de modal -->
        <div class="dossier-footer">
          <div class="dossier-footer-actions">
            <a href="formations.html?search=${encodeURIComponent(job.title)}" class="btn-dossier-action btn-dossier-formation" style="background:#0284c7;color:#ffffff;border:1px solid #0284c7;font-weight:650;padding:0.6rem 1.15rem;border-radius:8px;text-decoration:none;display:inline-flex;align-items:center;gap:0.45rem;box-shadow:0 2px 8px rgba(2,132,199,0.25);">
              <span>🎓</span>
              <span>Formations du Club</span>
            </a>
            <button type="button" class="btn-dossier-action btn-dossier-print" id="btnPrintJobSheet" style="background:#f8fafc;color:#0f172a;border:1.5px solid #cbd5e1;font-weight:600;padding:0.6rem 1.15rem;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:0.45rem;">
              <span>🖨️</span>
              <span>Imprimer / PDF</span>
            </button>
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
    document.body.classList.add('modal-open');

    // Animation d'ouverture fluide étagée
    requestAnimationFrame(() => {
      overlay.classList.add('active');
    });

    // 1. Initialisation du tracking analytique d'impact
    if (window.AnalyticsTracker) {
      window.AnalyticsTracker.trackJobView(jobKey, {
        title: job.title,
        family: job.familyName,
        level: job.level,
        readingTimeMin,
      });
    }

    // 2. Gestion du scroll, barre de progression et barre d'action flottante
    const dossierBody = overlay.querySelector('.dossier-body');
    const readingProgressBar = overlay.querySelector('#dossierReadingProgress');
    const floatingBar = overlay.querySelector('#dossierFloatingActions');

    if (dossierBody && readingProgressBar) {
      dossierBody.addEventListener('scroll', () => {
        const scrollTop = dossierBody.scrollTop;
        const scrollHeight = dossierBody.scrollHeight - dossierBody.clientHeight;
        const percent = scrollHeight > 0 ? Math.min(100, Math.round((scrollTop / scrollHeight) * 100)) : 0;
        readingProgressBar.style.width = `${percent}%`;

        if (floatingBar) {
          if (scrollTop > 80) {
            floatingBar.classList.add('visible');
          } else {
            floatingBar.classList.remove('visible');
          }
        }
      }, { passive: true });
    }

    // 3. Barre flottante : Action "Voir les formations"
    const btnFloatingFormations = overlay.querySelector('#btnFloatingFormations');
    if (btnFloatingFormations) {
      btnFloatingFormations.addEventListener('click', () => {
        window.AnalyticsTracker?.trackJobToTraining(jobKey, {
          title: job.title,
          source: 'floating_action_bar'
        });
        const tabStudies = overlay.querySelector('.dossier-tab[data-tab="tab-studies"]');
        if (tabStudies) {
          tabStudies.click();
          const targetContent = overlay.querySelector('#tab-studies');
          if (targetContent) targetContent.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // 4. Lien formations du footer (tracking)
    const btnFooterFormation = overlay.querySelector('.btn-dossier-formation');
    if (btnFooterFormation) {
      btnFooterFormation.addEventListener('click', () => {
        window.AnalyticsTracker?.trackJobToTraining(jobKey, {
          title: job.title,
          source: 'dossier_footer'
        });
      });
    }

    // 5. Clic sur les Recommandations croisées ("Parcours Découverte")
    overlay.querySelectorAll('.cross-rec-card').forEach(card => {
      card.addEventListener('click', async () => {
        const crossSlug = card.getAttribute('data-cross-slug');
        window.AnalyticsTracker?.trackCrossRecommendation(jobKey, crossSlug);
        const nextJob = await window.OrientationData.getJobBySlug(crossSlug);
        if (nextJob) {
          overlay.remove();
          openJobModal(nextJob);
        }
      });
    });

    // 6. Navigation par onglets + tracking de consultation
    overlay.querySelectorAll('.dossier-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        overlay.querySelectorAll('.dossier-tab').forEach(b => b.classList.remove('active'));
        overlay.querySelectorAll('.dossier-tab-content').forEach(c => c.classList.remove('active'));

        tabBtn.classList.add('active');
        const targetId = tabBtn.getAttribute('data-tab');
        const targetContent = overlay.querySelector(`#${targetId}`);
        if (targetContent) targetContent.classList.add('active');

        window.AnalyticsTracker?.track('tab_switch', 'job', jobKey, { tab: targetId });
      });
    });

    // 7. Clic sur les cartes de métiers connexes pour basculer directement
    overlay.querySelectorAll('.related-job-card').forEach(relCard => {
      relCard.addEventListener('click', async () => {
        const relSlug = relCard.getAttribute('data-rel-slug');
        window.AnalyticsTracker?.trackCrossRecommendation(jobKey, relSlug, { type: 'related' });
        const relJob = await window.OrientationData.getJobBySlug(relSlug);
        if (relJob) {
          overlay.remove();
          openJobModal(relJob);
        }
      });
    });

    // 8. Gestion interactive du Micro-Sondage de satisfaction
    const surveyWidget = overlay.querySelector('#jobSurveyWidget');
    if (surveyWidget && !hasVotedSurvey) {
      const voteButtons = surveyWidget.querySelectorAll('.btn-survey-vote');
      const tagsContainer = surveyWidget.querySelector('#surveyTagsContainer');
      const tagsTitle = surveyWidget.querySelector('#surveyTagsTitle');
      const tagsGrid = surveyWidget.querySelector('#surveyTagsGrid');
      const submitBtn = surveyWidget.querySelector('#btnSubmitSurveyTags');
      const thanksMsg = surveyWidget.querySelector('#surveyThanksMsg');
      const buttonsRow = surveyWidget.querySelector('#surveyButtonsRow');

      let currentVote = null;
      let selectedTags = new Set();

      const POSITIVE_TAGS = ['💰 Le salaire clair', '🧠 Les compétences clés', '🎓 Les parcours d\'études', '🎥 La vidéo d\'immersion', '💼 Les débouchés'];
      const CONSTRUCTIVE_TAGS = ['💰 Plus de détails salaires', '🏛️ Écoles au Sénégal', '🎬 Plus de vidéos', '📝 Conditions d\'admission', '🗣️ Témoignages réels'];

      voteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          currentVote = btn.getAttribute('data-vote');
          voteButtons.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');

          // Envoi immédiat du vote pour ne pas perdre la donnée
          window.AnalyticsTracker?.trackSurveyVote('job', jobKey, currentVote);

          // Affichage des tags contextuels
          selectedTags.clear();
          if (tagsGrid && tagsContainer && tagsTitle) {
            tagsContainer.style.display = 'block';
            if (currentVote === 'up') {
              tagsTitle.textContent = 'Qu\'est-ce qui t\'a le plus aidé ? (Optionnel)';
              tagsGrid.innerHTML = POSITIVE_TAGS.map(t => `<button type="button" class="survey-tag-chip" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('');
            } else {
              tagsTitle.textContent = 'Que pourrions-nous ajouter pour t\'aider ? (Optionnel)';
              tagsGrid.innerHTML = CONSTRUCTIVE_TAGS.map(t => `<button type="button" class="survey-tag-chip" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join('');
            }

            tagsGrid.querySelectorAll('.survey-tag-chip').forEach(chip => {
              chip.addEventListener('click', () => {
                const tag = chip.getAttribute('data-tag');
                if (selectedTags.has(tag)) {
                  selectedTags.delete(tag);
                  chip.classList.remove('active');
                } else {
                  selectedTags.add(tag);
                  chip.classList.add('active');
                }
              });
            });
          }
        });
      });

      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          if (currentVote) {
            window.AnalyticsTracker?.trackSurveyVote('job', jobKey, currentVote, Array.from(selectedTags));
          }
          if (buttonsRow) buttonsRow.style.display = 'none';
          if (tagsContainer) tagsContainer.style.display = 'none';
          if (thanksMsg) thanksMsg.style.display = 'flex';
        });
      }
    }

    // Fermeture de la modal
    const closeModal = () => {
      overlay.classList.remove('active');
      document.body.classList.remove('modal-open');
      setTimeout(() => overlay.remove(), 320);
    };

    const closeX = overlay.querySelector('#dossierCloseX');
    const closeBtn = overlay.querySelector('#dossierCloseBtn');
    if (closeX) closeX.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Print handler
    const btnPrint = overlay.querySelector('#btnPrintJobSheet');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        window.print();
      });
    }

    // Favorite handler synchronisé avec la barre flottante
    const btnFav = overlay.querySelector('#btnToggleJobFav');
    const btnFloatingBookmark = overlay.querySelector('#btnFloatingBookmark');

    const getFavs = () => {
      try { return JSON.parse(localStorage.getItem('member_favorite_jobs') || '[]'); } catch (_) { return []; }
    };

    const syncBookmarkState = (isFav) => {
      if (btnFav) {
        if (isFav) {
          btnFav.classList.add('is-fav');
          btnFav.innerHTML = '<span>⭐</span> <span>Dans mes favoris</span>';
        } else {
          btnFav.classList.remove('is-fav');
          btnFav.innerHTML = '<span>☆</span> <span>Favori</span>';
        }
      }
      if (btnFloatingBookmark) {
        if (isFav) {
          btnFloatingBookmark.classList.add('active');
          btnFloatingBookmark.innerHTML = '<span class="bookmark-icon">⭐</span> <span class="bookmark-text">Sauvegardé</span>';
        } else {
          btnFloatingBookmark.classList.remove('active');
          btnFloatingBookmark.innerHTML = '<span class="bookmark-icon">☆</span> <span class="bookmark-text">Sauvegarder</span>';
        }
      }
    };

    const isInitiallyFav = getFavs().some(item => (item.id === job.id || item.slug === job.slug || item.title === job.title));
    syncBookmarkState(isInitiallyFav);

    const toggleFavoriteHandler = () => {
      let favs = getFavs();
      const existingIdx = favs.findIndex(item => (item.id === job.id || item.slug === job.slug || item.title === job.title));
      if (existingIdx >= 0) {
        favs.splice(existingIdx, 1);
        syncBookmarkState(false);
        window.AnalyticsTracker?.trackBookmark(jobKey, false);
        if (window.toast) window.toast.info('Fiche retirée de vos favoris.');
      } else {
        favs.push({
          id: job.id,
          slug: job.slug,
          title: job.title,
          icon: job.icon || '💼',
          category: job.familyName || job.subdomain || 'Métier',
          savedAt: new Date().toISOString()
        });
        syncBookmarkState(true);
        window.AnalyticsTracker?.trackBookmark(jobKey, true);
        if (window.toast) window.toast.success(`⭐ "${job.title}" ajouté à vos métiers favoris !`);
      }
      localStorage.setItem('member_favorite_jobs', JSON.stringify(favs));
    };

    if (btnFav) btnFav.addEventListener('click', toggleFavoriteHandler);
    if (btnFloatingBookmark) btnFloatingBookmark.addEventListener('click', toggleFavoriteHandler);

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
    const domainParam = urlParams.get('domain');
    const subdomainParam = urlParams.get('subdomain');
    const jobParam = urlParams.get('job');
    const searchParam = urlParams.get('search');

    if (jobParam) {
      const targetJob = await window.OrientationData.getJobBySlug(jobParam);
      if (targetJob) openJobModal(targetJob);
    }

    if (familyParam) {
      setView('FAMILY_DRILLDOWN', { familyId: familyParam, domain: domainParam || 'all', subdomain: subdomainParam || 'all' });
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
