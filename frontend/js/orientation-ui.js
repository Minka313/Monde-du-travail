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
    cachedJobs: [],
    // Pagination et filtres locaux améliorés
    jobsPageSize: 18,
    jobsDisplayedCount: 18,
    currentFilteredJobsList: [],
    localSearchQuery: ''
  };

  // Références DOM
  let dom = {};

  function initDomRefs() {
    dom = {
      explorerSection: document.getElementById('explorerSection'),
      heroSearchInput: document.getElementById('orientationSearchInput'),
      heroSearchClear: document.getElementById('searchClearBtn'),
      searchSuggestionsBox: document.getElementById('searchSuggestionsBox'),
      btnDiscoverInterests: document.getElementById('btnDiscoverInterests'),
      btnExploreFamilies: document.getElementById('btnExploreFamilies'),
      btnViewAllJobs: document.getElementById('btnViewAllJobs'),
      breadcrumbNav: document.getElementById('breadcrumbNav'),
      breadcrumbList: document.getElementById('breadcrumbList'),
      viewSectionHeader: document.getElementById('viewSectionHeader'),
      viewSectionLabel: document.getElementById('viewSectionLabel'),
      viewSectionTitle: document.getElementById('viewSectionTitle'),
      viewSectionSubtitle: document.getElementById('viewSectionSubtitle'),
      
      // Conteneurs de vue & Accordéon Boussole
      familiesGridContainer: document.getElementById('familiesGridContainer'),
      familyDrilldownContainer: document.getElementById('familyDrilldownContainer'),
      subdomainsBarContainer: document.getElementById('subdomainsBarContainer'),
      jobsGridContainer: document.getElementById('jobsGridContainer'),
      jobsSkeletonContainer: document.getElementById('jobsSkeletonContainer'),
      interestExplorerWrap: document.getElementById('interestExplorerWrap'),
      interestAccordionToggle: document.getElementById('interestAccordionToggle'),
      interestExplorerBox: document.getElementById('interestExplorerBox'),
      affinitiesChipsContainer: document.getElementById('affinitiesChipsContainer'),
      affinityResultsNotice: document.getElementById('affinityResultsNotice'),
      searchResultsSummary: document.getElementById('searchResultsSummary'),
      activeFiltersBanner: document.getElementById('activeFiltersBanner'),
      activeFiltersPills: document.getElementById('activeFiltersPills'),
      btnClearAllFilters: document.getElementById('btnClearAllFilters'),

      // Modules Boussole : Quiz RIASEC & Roue Canvas
      tabModeQuiz: document.getElementById('tabModeQuiz'),
      tabModeWheel: document.getElementById('tabModeWheel'),
      tabModeChips: document.getElementById('tabModeChips'),
      boussoleQuizView: document.getElementById('boussoleQuizView'),
      boussoleWheelView: document.getElementById('boussoleWheelView'),
      boussoleChipsView: document.getElementById('boussoleChipsView'),
      boussoleResultsView: document.getElementById('boussoleResultsView'),
      quizQuestionCategory: document.getElementById('quizQuestionCategory'),
      quizQuestionCounter: document.getElementById('quizQuestionCounter'),
      quizProgressFill: document.getElementById('quizProgressFill'),
      quizQuestionText: document.getElementById('quizQuestionText'),
      quizOptionsGrid: document.getElementById('quizOptionsGrid'),
      btnQuizPrev: document.getElementById('btnQuizPrev'),
      btnQuizNext: document.getElementById('btnQuizNext'),
      orientationWheelCanvas: document.getElementById('orientationWheelCanvas'),
      btnSpinWheelFree: document.getElementById('btnSpinWheelFree'),
      wheelStatusNotice: document.getElementById('wheelStatusNotice'),
      quizProfileBanner: document.getElementById('quizProfileBanner'),
      resProfileIcon: document.getElementById('resProfileIcon'),
      resHollandBadge: document.getElementById('resHollandBadge'),
      resTopMatchRate: document.getElementById('resTopMatchRate'),
      resProfileTitle: document.getElementById('resProfileTitle'),
      resProfileSummary: document.getElementById('resProfileSummary'),
      riasecGaugesGrid: document.getElementById('riasecGaugesGrid'),
      senegalPathwayCard: document.getElementById('senegalPathwayCard'),
      resBacSeries: document.getElementById('resBacSeries'),
      resUniversities: document.getElementById('resUniversities'),
      resSalaryFcfa: document.getElementById('resSalaryFcfa'),
      resVisionPillar: document.getElementById('resVisionPillar'),
      quizRecommendedJobsGrid: document.getElementById('quizRecommendedJobsGrid'),
      btnRestartQuiz: document.getElementById('btnRestartQuiz'),
      btnViewAllMatchedJobs: document.getElementById('btnViewAllMatchedJobs'),
      
      // Reset & retours
      btnBackToFamilies: document.getElementById('btnBackToFamilies'),
      btnResetSearch: document.getElementById('btnResetSearch'),

      // Sticky Orientation Toolbar
      stickyOrientationToolbar: document.getElementById('stickyOrientationToolbar'),
      stickyBtnBackFamilies: document.getElementById('stickyBtnBackFamilies'),
      stickyFamilyIcon: document.getElementById('stickyFamilyIcon'),
      stickyFamilyName: document.getElementById('stickyFamilyName'),
      stickySep: document.getElementById('stickySep'),
      stickyPôleName: document.getElementById('stickyPôleName'),
      stickyDomainDropdownWrap: document.getElementById('stickyDomainDropdownWrap'),
      stickyDomainSelect: document.getElementById('stickyDomainSelect'),
      stickyCountBadge: document.getElementById('stickyCountBadge'),
      stickyBtnScrollTop: document.getElementById('stickyBtnScrollTop'),

      // Contrôle mobile & Drawer Off-canvas
      mobileFiltersTriggerBar: document.getElementById('mobileFiltersTriggerBar'),
      btnOpenFiltersDrawer: document.getElementById('btnOpenFiltersDrawer'),
      mobileFiltersBadgeText: document.getElementById('mobileFiltersBadgeText'),
      mobileJobsCountPill: document.getElementById('mobileJobsCountPill'),
      filtersDrawerBackdrop: document.getElementById('filtersDrawerBackdrop'),
      filtersOffcanvasDrawer: document.getElementById('filtersOffcanvasDrawer'),
      btnCloseFiltersDrawer: document.getElementById('btnCloseFiltersDrawer'),
      drawerBodyContent: document.getElementById('drawerBodyContent'),
      btnApplyDrawerFilters: document.getElementById('btnApplyDrawerFilters'),

      // Pagination progressive & Bouton flottant
      orientationPaginationWrap: document.getElementById('orientationPaginationWrap'),
      btnFloatingScrollTop: document.getElementById('btnFloatingScrollTop')
    };
  }

  function updateQuickNavButtons(activeBtn) {
    [dom.btnExploreFamilies, dom.btnDiscoverInterests, dom.btnViewAllJobs].forEach(b => {
      if (b) b.classList.remove('active');
    });
    if (activeBtn) activeBtn.classList.add('active');
  }

  // =========================================================================
  // ASSISTANCE AU DÉFILEMENT DOUX (LENIS / SCROLL SYNCHRONIZER)
  // =========================================================================
  function scrollToElement(target, offset = -90) {
    if (!target && target !== 0) return;
    
    if (window.scrollytelling && typeof window.scrollytelling.scrollTo === 'function') {
      window.scrollytelling.scrollTo(target, { offset, duration: 0.75 });
    } else if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(target, { offset, duration: 0.75 });
    } else {
      let top = 0;
      if (typeof target === 'number') {
        top = target;
      } else if (target && typeof target.getBoundingClientRect === 'function') {
        top = target.getBoundingClientRect().top + window.scrollY + offset;
      }
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  }

  function syncScrollLayout() {
    const raf = (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function')
      ? window.requestAnimationFrame
      : (typeof requestAnimationFrame === 'function')
        ? requestAnimationFrame
        : (cb) => setTimeout(cb, 16);

    raf(() => {
      if (typeof window !== 'undefined') {
        if (window.scrollytelling && typeof window.scrollytelling.resize === 'function') {
          window.scrollytelling.resize();
        } else if (window.lenis && typeof window.lenis.resize === 'function') {
          window.lenis.resize();
        }
        if (typeof window.ScrollTrigger !== 'undefined') {
          window.ScrollTrigger.refresh();
        }
      }
    });
  }

  // =========================================================================
  // GESTION DU SKELETON LOADER & DES FILTRES ACTIFS
  // =========================================================================
  function showSkeleton(isLoading) {
    if (dom.jobsSkeletonContainer) {
      dom.jobsSkeletonContainer.style.display = isLoading ? 'grid' : 'none';
    }
    if (dom.jobsGridContainer) {
      if (isLoading) {
        dom.jobsGridContainer.style.display = 'none';
      } else {
        if (AppState.currentView !== 'FAMILIES') {
          dom.jobsGridContainer.style.display = 'grid';
        }
      }
    }
    if (dom.orientationPaginationWrap && isLoading) {
      dom.orientationPaginationWrap.style.display = 'none';
    }
  }

  function updateActiveFiltersBanner() {
    if (!dom.activeFiltersBanner || !dom.activeFiltersPills) return;

    const pills = [];

    if (AppState.currentView === 'FAMILY_DRILLDOWN' && AppState.selectedFamilyId) {
      const fam = window.OrientationData.getFamily(AppState.selectedFamilyId);
      if (fam) {
        pills.push({
          label: `Famille : ${fam.icon || '📁'} ${fam.name}`,
          onRemove: () => {
            setView('FAMILIES');
            scrollToElement(dom.familiesGridContainer || dom.explorerSection || 200, -80);
          }
        });
      }

      if (AppState.selectedDomain && AppState.selectedDomain !== 'all') {
        const familyDomains = (typeof window.OrientationData.getFamilyDomains === 'function')
          ? window.OrientationData.getFamilyDomains(AppState.selectedFamilyId)
          : [];
        const domObj = familyDomains.find(d => d.id === AppState.selectedDomain);
        const domLabel = domObj ? `${domObj.icon || '📌'} ${domObj.name}` : AppState.selectedDomain;
        pills.push({
          label: `Pôle : ${domLabel}`,
          onRemove: () => {
            AppState.selectedDomain = 'all';
            AppState.selectedSubdomain = 'all';
            const f = window.OrientationData.getFamily(AppState.selectedFamilyId);
            if (f) {
              renderSubdomainsBar(f);
              updateFamilyBreadcrumbs(f);
              updateStickyToolbarInfo(f);
            }
            renderJobsForFamily(AppState.selectedFamilyId, 'all', 'all');
          }
        });
      }

      if (AppState.selectedSubdomain && AppState.selectedSubdomain !== 'all') {
        pills.push({
          label: `Sous-domaine : ${AppState.selectedSubdomain}`,
          onRemove: () => {
            AppState.selectedSubdomain = 'all';
            const f = window.OrientationData.getFamily(AppState.selectedFamilyId);
            if (f) {
              renderSubdomainsBar(f);
              updateFamilyBreadcrumbs(f);
              updateStickyToolbarInfo(f);
            }
            renderJobsForFamily(AppState.selectedFamilyId, 'all', AppState.selectedDomain);
          }
        });
      }
    } else if (AppState.currentView === 'INTERESTS' && AppState.selectedAffinities && AppState.selectedAffinities.length > 0) {
      const allAffinities = window.OrientationData.getAffinities();
      AppState.selectedAffinities.forEach(affId => {
        const affObj = allAffinities.find(a => a.id === affId);
        if (affObj) {
          pills.push({
            label: `${affObj.icon || '✨'} ${affObj.label}`,
            onRemove: () => {
              AppState.selectedAffinities = AppState.selectedAffinities.filter(id => id !== affId);
              if (dom.affinitiesChipsContainer) {
                const btn = dom.affinitiesChipsContainer.querySelector(`[data-affinity-id="${affId}"]`);
                if (btn) btn.classList.remove('active');
              }
              renderAffinityResults();
            }
          });
        }
      });
    } else if (AppState.currentView === 'SEARCH' && AppState.searchQuery) {
      pills.push({
        label: `Recherche : "${AppState.searchQuery}"`,
        onRemove: () => {
          if (dom.heroSearchInput) dom.heroSearchInput.value = '';
          AppState.searchQuery = '';
          if (dom.heroSearchClear) dom.heroSearchClear.style.display = 'none';
          setView('FAMILIES');
        }
      });
    }

    if (AppState.localSearchQuery && AppState.localSearchQuery.trim()) {
      pills.push({
        label: `Filtre texte : "${AppState.localSearchQuery}"`,
        onRemove: () => {
          AppState.localSearchQuery = '';
          if (dom.localJobsFilterInput) dom.localJobsFilterInput.value = '';
          if (dom.localJobsFilterClear) dom.localJobsFilterClear.style.display = 'none';
          renderJobCardsList(AppState.currentFilteredJobsList);
        }
      });
    }

    if (pills.length === 0) {
      dom.activeFiltersBanner.style.display = 'none';
      dom.activeFiltersPills.innerHTML = '';
      return;
    }

    dom.activeFiltersBanner.style.display = 'flex';
    dom.activeFiltersPills.innerHTML = '';
    pills.forEach((p) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'active-filter-pill';
      btn.setAttribute('aria-label', `Supprimer le filtre ${p.label}`);
      btn.innerHTML = `<span>${escapeHtml(p.label)}</span><span class="pill-remove" aria-hidden="true" style="font-weight:700;margin-left:0.25rem;">✕</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        p.onRemove();
        updateActiveFiltersBanner();
      });
      dom.activeFiltersPills.appendChild(btn);
    });

    if (dom.btnClearAllFilters) {
      dom.btnClearAllFilters.onclick = () => {
        AppState.selectedFamilyId = null;
        AppState.selectedDomain = 'all';
        AppState.selectedSubdomain = 'all';
        AppState.selectedAffinities = [];
        AppState.searchQuery = '';
        AppState.localSearchQuery = '';
        if (dom.heroSearchInput) dom.heroSearchInput.value = '';
        if (dom.heroSearchClear) dom.heroSearchClear.style.display = 'none';
        if (dom.localJobsFilterInput) dom.localJobsFilterInput.value = '';
        if (dom.affinitiesChipsContainer) {
          dom.affinitiesChipsContainer.querySelectorAll('.affinity-pill').forEach(b => b.classList.remove('active'));
        }
        setView('FAMILIES');
        scrollToElement(dom.familiesGridContainer || dom.explorerSection || 200, -80);
      };
    }
  }

  // =========================================================================
  // GESTIONNAIRE D'AFFICHAGE DES VUES (PROGRESSIVE DISCLOSURE)
  // =========================================================================
  function setView(viewName, params = {}) {
    AppState.currentView = viewName;
    showSkeleton(false);

    // Réinitialiser les affichages
    if (dom.familiesGridContainer) dom.familiesGridContainer.style.display = 'none';
    if (dom.familyDrilldownContainer) dom.familyDrilldownContainer.style.display = 'none';
    if (dom.interestExplorerBox) dom.interestExplorerBox.style.display = 'none';
    if (dom.searchResultsSummary) dom.searchResultsSummary.style.display = 'none';
    if (dom.localJobsFilterBar) dom.localJobsFilterBar.style.display = 'none';
    if (dom.mobileFiltersTriggerBar) dom.mobileFiltersTriggerBar.style.display = 'none';
    if (dom.orientationPaginationWrap) dom.orientationPaginationWrap.style.display = 'none';

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
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = 'Les 23 Grandes Familles Professionnelles';
        if (dom.viewSectionSubtitle) dom.viewSectionSubtitle.textContent = 'Explore les domaines d’avenir, découvre leurs sous-disciplines et identifie les métiers clés';

        if (dom.familiesGridContainer) {
          dom.familiesGridContainer.style.display = 'grid';
          renderFamiliesGrid();
        }
        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'none';
        }

        if (dom.stickyOrientationToolbar) dom.stickyOrientationToolbar.style.display = 'none';
        if (dom.btnFloatingScrollTop) dom.btnFloatingScrollTop.classList.remove('is-visible');
        updateActiveFiltersBanner();
        syncScrollLayout();
        break;

      case 'FAMILY_DRILLDOWN':
        AppState.selectedFamilyId = params.familyId || AppState.selectedFamilyId;
        AppState.selectedDomain = params.domain || 'all';
        AppState.selectedSubdomain = params.subdomain || 'all';
        AppState.jobsDisplayedCount = AppState.jobsPageSize;
        AppState.localSearchQuery = '';
        if (dom.localJobsFilterInput) dom.localJobsFilterInput.value = '';
        if (dom.localJobsFilterClear) dom.localJobsFilterClear.style.display = 'none';

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
          updateStickyToolbarInfo(family);

          if (dom.familyDrilldownContainer) {
            dom.familyDrilldownContainer.style.display = 'block';
            renderFamilyHeader(family);
            renderSubdomainsBar(family);
          }

          if (dom.mobileFiltersTriggerBar) {
            dom.mobileFiltersTriggerBar.style.display = 'flex';
          }

          if (dom.jobsGridContainer) {
            dom.jobsGridContainer.style.display = 'grid';
            renderJobsForFamily(AppState.selectedFamilyId, AppState.selectedSubdomain, AppState.selectedDomain);
          }
        }
        updateActiveFiltersBanner();
        break;

      case 'ALL_JOBS':
        url.searchParams.delete('family');
        url.searchParams.delete('subdomain');
        window.history.replaceState({}, '', url.toString());

        AppState.jobsDisplayedCount = AppState.jobsPageSize;
        AppState.localSearchQuery = '';
        if (dom.localJobsFilterInput) dom.localJobsFilterInput.value = '';
        if (dom.localJobsFilterClear) dom.localJobsFilterClear.style.display = 'none';

        updateQuickNavButtons(dom.btnViewAllJobs);
        updateStickyToolbarInfo(null);

        if (dom.breadcrumbNav) dom.breadcrumbNav.style.display = 'block';
        if (dom.viewSectionHeader) dom.viewSectionHeader.style.display = 'block';

        renderBreadcrumbs([
          { label: 'Accueil', url: 'index.html' },
          { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
          { label: 'Tous les dossiers métiers', active: true }
        ]);

        if (dom.viewSectionLabel) dom.viewSectionLabel.textContent = 'Catalogue Global';
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = 'Tous les dossiers métiers';
        if (dom.viewSectionSubtitle) dom.viewSectionSubtitle.textContent = 'Parcours l’ensemble des fiches métiers documentées par Le Monde du Travail';

        if (dom.mobileFiltersTriggerBar) {
          dom.mobileFiltersTriggerBar.style.display = 'flex';
        }

        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'grid';
          renderAllJobsGrid();
        }
        updateActiveFiltersBanner();
        break;

      case 'INTERESTS':
        updateQuickNavButtons(dom.btnDiscoverInterests);
        updateStickyToolbarInfo(null);

        if (dom.breadcrumbNav) dom.breadcrumbNav.style.display = 'block';
        if (dom.viewSectionHeader) dom.viewSectionHeader.style.display = 'block';

        if (dom.viewSectionLabel) dom.viewSectionLabel.textContent = 'Porte C • Orientation par affinités';
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = 'Boussole des Affinités & Centres d’Intérêt';
        if (dom.viewSectionSubtitle) dom.viewSectionSubtitle.textContent = 'Sélectionne ce qui t’attire pour découvrir les univers professionnels correspondants';

        renderBreadcrumbs([
          { label: 'Accueil', url: 'index.html' },
          { label: 'Métiers & Orientation', action: () => setView('FAMILIES') },
          { label: 'Boussole des affinités', active: true }
        ]);

        if (dom.interestExplorerBox) {
          dom.interestExplorerBox.style.display = 'block';
        }
        if (dom.interestAccordionToggle) {
          dom.interestAccordionToggle.setAttribute('aria-expanded', 'true');
        }
        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'grid';
          renderAffinityResults();
        }
        updateActiveFiltersBanner();
        break;

      case 'SEARCH':
        updateQuickNavButtons(null);
        updateStickyToolbarInfo(null);

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
        if (dom.mobileFiltersTriggerBar) {
          dom.mobileFiltersTriggerBar.style.display = 'flex';
        }
        if (dom.jobsGridContainer) {
          dom.jobsGridContainer.style.display = 'grid';
          renderSearchResults();
        }
        updateActiveFiltersBanner();
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
    const familyDomains = (typeof window.OrientationData.getFamilyDomains === 'function')
      ? window.OrientationData.getFamilyDomains(family.id)
      : (family.id === 'numerique-ia' && typeof window.OrientationData.getDigitalDomains === 'function' ? window.OrientationData.getDigitalDomains() : []);
    const activeDomObj = (familyDomains && familyDomains.length > 0 && AppState.selectedDomain && AppState.selectedDomain !== 'all') 
      ? familyDomains.find(d => d.id === AppState.selectedDomain) 
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
        scrollToElement(dom.familyDrilldownContainer, -80);
      });
    });

    if (window.initCardSpotlight) window.initCardSpotlight();
    if (window.initScrollReveal) window.initScrollReveal();
  }

  // =========================================================================
  // ASSISTANCE AU DÉFILEMENT HORIZONTAL (SOUS-DOMAINES)
  // =========================================================================
  function bindHorizontalScrollAssist(track, btnLeft, btnRight) {
    if (!track) return;
    if (btnLeft) {
      btnLeft.addEventListener('click', (e) => {
        e.stopPropagation();
        track.scrollBy({ left: -260, behavior: 'smooth' });
      });
    }
    if (btnRight) {
      btnRight.addEventListener('click', (e) => {
        e.stopPropagation();
        track.scrollBy({ left: 260, behavior: 'smooth' });
      });
    }
    track.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && track.scrollWidth > track.clientWidth) {
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    }, { passive: false });
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
    if (headerBadge) headerBadge.textContent = `#${family.order} • ${family.stats.jobsEstimate}`;
  }

  function renderSubdomainsBar(family) {
    if (!dom.subdomainsBarContainer) return;

    // Cartographie d'excellence avec double niveau (Domaines & Sous-domaines) pour les familles équipées
    const familyDomains = (typeof window.OrientationData.getFamilyDomains === 'function') 
      ? window.OrientationData.getFamilyDomains(family.id) 
      : ((family.id === 'numerique-ia' && typeof window.OrientationData.getDigitalDomains === 'function') ? window.OrientationData.getDigitalDomains() : []);

    if (familyDomains && familyDomains.length > 0) {
      const activeDomObj = (AppState.selectedDomain !== 'all')
        ? familyDomains.find(d => d.id === AppState.selectedDomain)
        : null;

      const subdomainsList = activeDomObj
        ? (activeDomObj.subdomains || [])
        : (family.subdomains || []);

      const cartographyTitles = {
        'numerique-ia': "Cartographie d'Excellence du Numérique",
        'finance-fintech': "Cartographie d'Excellence Finance, Banque & Assurance",
        'agriculture-agritech': "Cartographie d'Excellence Agriculture, Élevage & Agroalimentaire",
        'peche-maritime': "Cartographie d'Excellence Pêche, Aquaculture & Ressources Marines",
        'energie-renouvelable': "Cartographie d'Excellence Énergie, Électricité & Transition Énergétique",
        'btp-architecture': "Cartographie d'Excellence BTP, Architecture & Construction",
        'lettres-langues-sciences-humaines': "Cartographie d'Excellence Lettres, Langues & Sciences Humaines",
        'industrie-mecanique': "Cartographie d'Excellence Industrie, Technologies & Ingénierie",
        'industrie-technologies-ingenierie': "Cartographie d'Excellence Industrie, Technologies & Ingénierie",
        'sciences-terre-geosciences': "Cartographie d'Excellence Sciences de la Terre, Géosciences & Ressources Naturelles",
        'mines-geosciences': "Cartographie d'Excellence Sciences de la Terre, Géosciences & Ressources Naturelles",
        'sante-soins-paramedical': "Cartographie d'Excellence Santé, Soins & Paramédical",
        'sante-biomedical': "Cartographie d'Excellence Santé, Soins & Paramédical",
        'biologie-chimie': "Cartographie d'Excellence Biologie & Chimie",
        'sciences-biotech': "Cartographie d'Excellence Biologie & Chimie",
        'education-formation': "Cartographie d'Excellence Enseignement, Éducation & Formation",
        'enseignement-education-formation': "Cartographie d'Excellence Enseignement, Éducation & Formation",
        'environnement-developpement-durable': "Cartographie d'Excellence Environnement, Écologie & Développement durable",
        'environnement-climat': "Cartographie d'Excellence Environnement, Écologie & Développement durable",
        'hotellerie-restauration-hospitalite': "Cartographie d'Excellence Hôtellerie, Restauration & Hospitalité",
        'tourisme-hotellerie': "Cartographie d'Excellence Hôtellerie, Restauration & Hospitalité",
        'metiers-emergents': "Cartographie d'Excellence des Métiers Émergents & du Futur"
      };
      const cartographyTitle = cartographyTitles[family.id] || `Cartographie d'Excellence — ${family.name}`;

      const cartographyBadges = {
        'numerique-ia': "13 Pôles • 100+ Métiers",
        'finance-fintech': "10 Domaines • 27+ Fiches Métiers",
        'agriculture-agritech': "11 Domaines • 67 Fiches Métiers",
        'peche-maritime': "1 Domaine • 12 Fiches Métiers",
        'energie-renouvelable': "14 Domaines • 26 Fiches Métiers",
        'btp-architecture': "15 Domaines • 37 Fiches Métiers",
        'lettres-langues-sciences-humaines': "20 Domaines • 32 Fiches Métiers",
        'industrie-mecanique': "30 Domaines • 36 Fiches Métiers",
        'industrie-technologies-ingenierie': "30 Domaines • 36 Fiches Métiers",
        'sciences-terre-geosciences': "17 Domaines • 29 Fiches Métiers",
        'mines-geosciences': "17 Domaines • 29 Fiches Métiers",
        'sante-soins-paramedical': "11 Domaines • 31 Fiches Métiers",
        'sante-biomedical': "11 Domaines • 31 Fiches Métiers",
        'biologie-chimie': "15 Domaines • 24 Fiches Métiers (CIDJ)",
        'sciences-biotech': "15 Domaines • 24 Fiches Métiers (CIDJ)",
        'education-formation': "8 Domaines • 37 Fiches Métiers (Studyrama)",
        'enseignement-education-formation': "8 Domaines • 37 Fiches Métiers (Studyrama)",
        'environnement-developpement-durable': "6 Domaines • 84 Fiches Métiers (Onisep)",
        'environnement-climat': "6 Domaines • 84 Fiches Métiers (Onisep)",
        'hotellerie-restauration-hospitalite': "8 Domaines • 29 Fiches Métiers (France Travail / MétierScope)",
        'tourisme-hotellerie': "8 Domaines • 29 Fiches Métiers (France Travail / MétierScope)",
        'communication-marketing-medias-creation': "6 Domaines • 65 Fiches Métiers (ESP & Studyrama)",
        'culture-medias': "6 Domaines • 65 Fiches Métiers (ESP & Studyrama)",
        'metiers-emergents': "7 Pôles d'Avenir • 39 Métiers Émergents"
      };
      const cartographyBadge = cartographyBadges[family.id] || `${familyDomains.length} Domaines d'expertise`;

      const allDomainsLabel = (family.id === 'numerique-ia')
        ? `Tous les pôles (${familyDomains.length})`
        : `Tous les domaines (${familyDomains.length})`;

      const resetDomainsLabel = (family.id === 'numerique-ia')
        ? `← Revenir à tous les pôles`
        : `← Revenir à tous les domaines`;

      dom.subdomainsBarContainer.innerHTML = `
        <div class="digital-domains-wrapper">
          <div class="digital-domains-label" style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;margin-bottom:0.75rem;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.92rem;font-weight:700;color:#0f172a;">
              <span>${escapeHtml(family.icon || '🌐')}</span>
              <span>${escapeHtml(cartographyTitle)}</span>
              <span style="background:#e0f2fe;color:#0369a1;padding:0.2rem 0.6rem;border-radius:9999px;font-size:0.78rem;font-weight:700;">${escapeHtml(cartographyBadge)}</span>
            </div>
            ${AppState.selectedDomain !== 'all' ? `
              <button type="button" class="btn-reset-domain" id="btnResetDigitalDomain" style="background:none;border:none;color:#0284c7;font-size:0.84rem;font-weight:650;cursor:pointer;display:inline-flex;align-items:center;gap:0.3rem;">
                <span>${escapeHtml(resetDomainsLabel)}</span>
              </button>
            ` : ''}
          </div>

          <!-- Ligne 1 : Les Domaines d'excellence de la famille -->
          <div class="domain-pills-bar" style="margin:0 0 1rem 0;">
            <button type="button" class="domain-pill ${AppState.selectedDomain === 'all' ? 'active' : ''}" data-domain="all">
              <span>🌟</span>
              <span>${escapeHtml(allDomainsLabel)}</span>
            </button>
            ${familyDomains.map(d => `
              <button type="button" class="domain-pill ${AppState.selectedDomain === d.id ? 'active' : ''}" data-domain="${escapeHtml(d.id)}">
                <span>${escapeHtml(d.icon)}</span>
                <span>${escapeHtml(d.name)}</span>
              </button>
            `).join('')}
          </div>

          <!-- Ligne 2 : Sous-domaines et spécialisations avec chevrons -->
          <div class="subdomains-bar-wrapper">
            <button type="button" class="scroll-chevron-btn chevron-left" id="btnScrollDigitalLeft" aria-label="Défiler vers la gauche">&larr;</button>
            <div class="subdomains-bar-track" id="trackDigitalSubdomains" data-lenis-prevent="true">
              <div class="subdomains-scroll-track" style="padding-top:0.25rem;">
                <button type="button" class="subdomain-pill ${AppState.selectedSubdomain === 'all' ? 'active' : ''}" data-subdomain="all">
                  <span>🌟</span>
                  <span>${activeDomObj ? `Tous les métiers (${escapeHtml(activeDomObj.name)})` : 'Tous les sous-domaines'}</span>
                </button>
                ${subdomainsList.map(sub => `
                  <button type="button" class="subdomain-pill ${AppState.selectedSubdomain === sub ? 'active' : ''}" data-subdomain="${escapeHtml(sub)}">
                    <span>📁</span>
                    <span>${escapeHtml(sub)}</span>
                  </button>
                `).join('')}
              </div>
            </div>
            <button type="button" class="scroll-chevron-btn chevron-right" id="btnScrollDigitalRight" aria-label="Défiler vers la droite">&rarr;</button>
          </div>
        </div>
      `;

      bindHorizontalScrollAssist(
        document.getElementById('trackDigitalSubdomains'),
        document.getElementById('btnScrollDigitalLeft'),
        document.getElementById('btnScrollDigitalRight')
      );

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
          updateStickyToolbarInfo(family);
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
          updateStickyToolbarInfo(family);
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
      <div class="subdomains-bar-wrapper">
        <button type="button" class="scroll-chevron-btn chevron-left" id="btnScrollOtherLeft" aria-label="Défiler vers la gauche">&larr;</button>
        <div class="subdomains-bar-track" id="trackOtherSubdomains" data-lenis-prevent="true">
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
        </div>
        <button type="button" class="scroll-chevron-btn chevron-right" id="btnScrollOtherRight" aria-label="Défiler vers la droite">&rarr;</button>
      </div>
    `;

    bindHorizontalScrollAssist(
      document.getElementById('trackOtherSubdomains'),
      document.getElementById('btnScrollOtherLeft'),
      document.getElementById('btnScrollOtherRight')
    );

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
  // COMPOSANT : CARTES MÉTIERS MODERNISÉES & PROGRESSIVES (NIVEAU 3)
  // =========================================================================
  async function renderJobsForFamily(familyId, subdomain, domain = null) {
    if (!dom.jobsGridContainer) return;
    showSkeleton(true);

    try {
      const activeDomain = (domain !== null && domain !== undefined) ? domain : AppState.selectedDomain;
      const jobs = await window.OrientationData.getJobsBySubdomain(familyId, subdomain, activeDomain);
      showSkeleton(false);

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
              updateStickyToolbarInfo(family);
            }
            renderJobsForFamily(familyId, 'all', 'all');
          });
        }
        if (dom.orientationPaginationWrap) dom.orientationPaginationWrap.style.display = 'none';
        updateActiveFiltersBanner();
        syncScrollLayout();
        return;
      }

      renderJobCardsList(jobs);
      updateActiveFiltersBanner();
    } catch (err) {
      showSkeleton(false);
      console.error(err);
    }
  }

  async function renderAllJobsGrid() {
    if (!dom.jobsGridContainer) return;
    showSkeleton(true);
    try {
      const all = await window.OrientationData.getAllJobs();
      showSkeleton(false);
      renderJobCardsList(all);
      updateActiveFiltersBanner();
    } catch (err) {
      showSkeleton(false);
      console.error(err);
    }
  }

  function renderJobCardsList(jobs) {
    if (!dom.jobsGridContainer) return;
    AppState.currentFilteredJobsList = jobs || [];

    // 1. Filtrage local en temps réel si une recherche locale est active
    let listToDisplay = AppState.currentFilteredJobsList;
    if (AppState.localSearchQuery && AppState.localSearchQuery.trim()) {
      const q = AppState.localSearchQuery.trim().toLowerCase();
      listToDisplay = listToDisplay.filter(job => {
        if (job.title && job.title.toLowerCase().includes(q)) return true;
        if (job.subdomain && job.subdomain.toLowerCase().includes(q)) return true;
        if (job.domain && job.domain.toLowerCase().includes(q)) return true;
        if (job.shortDescription && job.shortDescription.toLowerCase().includes(q)) return true;
        if (job.simpleDefinition && job.simpleDefinition.toLowerCase().includes(q)) return true;
        if (job.skills) {
          if (Array.isArray(job.skills.technical) && job.skills.technical.some(s => s.toLowerCase().includes(q))) return true;
          if (Array.isArray(job.skills.tools) && job.skills.tools.some(s => s.toLowerCase().includes(q))) return true;
        }
        return false;
      });
    }

    const totalCount = listToDisplay.length;

    // Mise à jour des compteurs
    if (dom.localJobsFilterCount) {
      dom.localJobsFilterCount.textContent = `${totalCount} métier${totalCount > 1 ? 's' : ''}`;
    }
    if (dom.mobileJobsCountPill) {
      dom.mobileJobsCountPill.textContent = `${totalCount} métier${totalCount > 1 ? 's' : ''}`;
    }
    if (dom.stickyCountBadge) {
      dom.stickyCountBadge.textContent = `${totalCount} métier${totalCount > 1 ? 's' : ''}`;
    }

    // Cas zéro résultat
    if (totalCount === 0) {
      dom.jobsGridContainer.innerHTML = `
        <div class="empty-state-card" style="grid-column:1/-1;">
          <span style="font-size:2.5rem;display:block;margin-bottom:0.75rem;">🔍</span>
          <h4 style="font-size:1.15rem;color:#0f172a;margin-bottom:0.5rem;">Aucun métier ne correspond à « ${escapeHtml(AppState.localSearchQuery)} »</h4>
          <p style="color:#64748b;max-width:550px;margin:0 auto 1.25rem auto;font-size:0.92rem;line-height:1.6;">
            Essaie d'autres termes clés (ex : Python, IA, Dev, Cloud, UX, Chef de projet) ou réinitialise ce filtre.
          </p>
          <button type="button" class="btn btn-outline-dark btn-sm" id="btnResetLocalFilter" style="background:#ffffff;color:#0284c7;border:1.5px solid #0284c7;font-weight:650;padding:0.6rem 1.25rem;border-radius:8px;cursor:pointer;">
            Réinitialiser le filtre
          </button>
        </div>
      `;
      const btnReset = document.getElementById('btnResetLocalFilter');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          AppState.localSearchQuery = '';
          if (dom.localJobsFilterInput) dom.localJobsFilterInput.value = '';
          if (dom.localJobsFilterClear) dom.localJobsFilterClear.style.display = 'none';
          renderJobCardsList(AppState.currentFilteredJobsList);
        });
      }
      if (dom.orientationPaginationWrap) dom.orientationPaginationWrap.style.display = 'none';
      syncScrollLayout();
      return;
    }

    // 2. Découpage progressif (Pagination)
    const pageSize = AppState.jobsPageSize || 18;
    const displayedCount = Math.min(totalCount, AppState.jobsDisplayedCount || pageSize);
    const visibleJobs = listToDisplay.slice(0, displayedCount);

    dom.jobsGridContainer.innerHTML = visibleJobs.map((job, idx) => {
      const img = safeUrl(job.image, 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80');
      const techSkills = job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.slice(0, 3) : [];
      const totalSkillsCount = (job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.length : 0);
      const isEmerging = Boolean(job.isEmerging);
      const isESD = Boolean(job.sourceESD);

      return `
        <article class="card job-card-modern job-card-enter stagger-item" data-job-slug="${escapeHtml(job.slug || job.id)}" style="--stagger-idx: ${idx % 8};">
          <div class="job-card-media-wrap">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(job.title)}" loading="lazy" width="600" height="370">
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
              ${job.sourceImagineTonFutur ? '<span class="job-badge-itf" style="background:#f5f3ff;color:#6d28d9;border:1px solid #ddd6fe;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Source de référence : Imagine ton Futur">📚 Imagine ton Futur</span>' : ''}
              ${job.sourceLetudiant ? '<span class="job-badge-letudiant" style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Source de référence : L\'Étudiant">🎓 L\'Étudiant</span>' : ''}
              ${job.sourceOnisep ? '<span class="job-badge-onisep" style="background:#fef2f2;color:#991b1b;border:1px solid #fecaca;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Source de référence : Onisep Mécanique">⚙️ Onisep</span>' : ''}
              ${job.sourcePoitiers ? '<span class="job-badge-poitiers" style="background:#f0fdf4;color:#15803d;border:1px solid #bbf7d0;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Source de référence académique : Univ. Poitiers Géosciences">🌍 Univ. Poitiers</span>' : ''}
              ${job.sourceBRGM ? '<span class="job-badge-brgm" style="background:#f0fdfa;color:#0f766e;border:1px solid #99f6e4;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Référence scientifique : BRGM / Société Géologique de France">⛏️ BRGM / SGF</span>' : ''}
              ${job.sourceESP ? '<span class="job-badge-esp" style="background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Référence professionnelle : ESP École Supérieure de Publicité & Communication">📣 ESP</span>' : ''}
              ${job.sourceStudyrama ? '<span class="job-badge-studyrama" style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;font-size:0.72rem;font-weight:700;padding:0.15rem 0.5rem;border-radius:4px;" title="Référence métier : Studyrama Communication">📰 Studyrama</span>' : ''}
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

    // 3. Rendu de la barre de pagination
    if (dom.orientationPaginationWrap) {
      if (totalCount > displayedCount) {
        dom.orientationPaginationWrap.style.display = 'flex';
        const nextBatch = Math.min(pageSize, totalCount - displayedCount);
        const pct = Math.round((displayedCount / totalCount) * 100);

        dom.orientationPaginationWrap.innerHTML = `
          <div class="pagination-stats-row">
            <span class="pagination-counter-text">
              Affichage de <strong>${displayedCount}</strong> sur <strong>${totalCount}</strong> fiches métiers
            </span>
            <div class="pagination-progress-track" aria-hidden="true">
              <div class="pagination-progress-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
          <div class="pagination-actions-row">
            <button type="button" class="btn-load-more-jobs" id="btnLoadMoreJobs">
              <span>📄</span>
              <span>Afficher plus de métiers (+${nextBatch})</span>
            </button>
            <button type="button" class="btn-show-all-jobs" id="btnShowAllJobs">
              <span>🌟 Tout afficher (${totalCount})</span>
            </button>
          </div>
        `;

        const btnMore = document.getElementById('btnLoadMoreJobs');
        if (btnMore) {
          btnMore.addEventListener('click', () => {
            AppState.jobsDisplayedCount += pageSize;
            renderJobCardsList(AppState.currentFilteredJobsList);
          });
        }

        const btnAll = document.getElementById('btnShowAllJobs');
        if (btnAll) {
          btnAll.addEventListener('click', () => {
            AppState.jobsDisplayedCount = totalCount;
            renderJobCardsList(AppState.currentFilteredJobsList);
          });
        }
      } else if (totalCount > pageSize) {
        dom.orientationPaginationWrap.style.display = 'flex';
        dom.orientationPaginationWrap.innerHTML = `
          <div class="pagination-complete-notice">
            <span>✅</span>
            <span>L'ensemble des ${totalCount} fiches métiers sont affichées</span>
          </div>
          <button type="button" class="btn-show-all-jobs" id="btnScrollTopPagination">
            <span>&uarr;</span>
            <span>Remonter en haut de la liste</span>
          </button>
        `;

        const btnTop = document.getElementById('btnScrollTopPagination');
        if (btnTop) {
          btnTop.addEventListener('click', () => {
            const target = dom.familyDrilldownContainer && dom.familyDrilldownContainer.style.display !== 'none'
              ? dom.familyDrilldownContainer
              : (dom.localJobsFilterBar || dom.jobsGridContainer || 200);
            scrollToElement(target, -90);
          });
        }
      } else {
        dom.orientationPaginationWrap.style.display = 'none';
      }
    }

    // Clics sur les cartes de métiers
    dom.jobsGridContainer.querySelectorAll('.job-card-modern').forEach(card => {
      card.addEventListener('click', async () => {
        const slug = card.getAttribute('data-job-slug');
        const job = await window.OrientationData.getJobBySlug(slug);
        if (job) openJobModal(job);
      });
    });

    syncScrollLayout();
    if (window.initCardSpotlight) window.initCardSpotlight();
    if (window.initScrollReveal) window.initScrollReveal();
  }

  // =========================================================================
  // BOUSSOLE D'ORIENTATION INTELLIGENTE : QUIZ RIASEC & ROUE INTERACTIVE
  // =========================================================================
  let wheelInstance = null;
  let quizState = {
    currentIndex: 0,
    answers: {},
    latestResult: null
  };

  function initBoussoleModule() {
    initBoussoleTabs();
    initQuizEngine();
    initWheelEngine();
    initAffinityExplorer();
  }

  // Gestion des onglets de la boussole (Quiz vs Roue vs Puces)
  function initBoussoleTabs() {
    const tabs = [
      { btn: dom.tabModeQuiz, panel: dom.boussoleQuizView },
      { btn: dom.tabModeWheel, panel: dom.boussoleWheelView },
      { btn: dom.tabModeChips, panel: dom.boussoleChipsView }
    ];

    tabs.forEach(({ btn, panel }) => {
      if (!btn || !panel) return;
      btn.addEventListener('click', () => {
        tabs.forEach(t => {
          if (t.btn) {
            t.btn.classList.remove('active');
            t.btn.setAttribute('aria-selected', 'false');
          }
          if (t.panel) {
            t.panel.style.display = 'none';
            t.panel.classList.remove('active');
          }
        });

        // Masquer également les résultats si on change manuellement d'onglet
        if (dom.boussoleResultsView) {
          dom.boussoleResultsView.style.display = 'none';
        }

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        panel.style.display = 'block';
        panel.classList.add('active');

        // Si on passe sur la roue, s'assurer que le canvas est redessiné avec les bonnes dimensions
        if (panel === dom.boussoleWheelView && wheelInstance) {
          wheelInstance.initCanvasSize();
          wheelInstance.draw();
        }
      });
    });
  }

  // Initialisation et flux du Quiz RIASEC
  function initQuizEngine() {
    if (!window.OrientationQuizData || !dom.quizOptionsGrid) return;

    renderQuizQuestion(quizState.currentIndex);

    if (dom.btnQuizPrev) {
      dom.btnQuizPrev.addEventListener('click', () => {
        if (quizState.currentIndex > 0) {
          quizState.currentIndex--;
          renderQuizQuestion(quizState.currentIndex);
        }
      });
    }

    if (dom.btnQuizNext) {
      dom.btnQuizNext.addEventListener('click', () => {
        const questions = window.OrientationQuizData.QUESTIONS;
        const total = questions.length;

        // Si c'est la dernière question, calculer le score et lancer la révélation par la roue !
        if (quizState.currentIndex === total - 1) {
          handleQuizCompletion();
        } else {
          quizState.currentIndex++;
          renderQuizQuestion(quizState.currentIndex);
        }
      });
    }

    if (dom.btnRestartQuiz) {
      dom.btnRestartQuiz.addEventListener('click', () => {
        quizState.currentIndex = 0;
        quizState.answers = {};
        quizState.latestResult = null;

        if (dom.boussoleResultsView) dom.boussoleResultsView.style.display = 'none';
        if (dom.boussoleQuizView) dom.boussoleQuizView.style.display = 'block';
        if (dom.tabModeQuiz) {
          dom.tabModeQuiz.classList.add('active');
          dom.tabModeQuiz.setAttribute('aria-selected', 'true');
        }
        if (dom.tabModeWheel) dom.tabModeWheel.classList.remove('active');
        if (dom.tabModeChips) dom.tabModeChips.classList.remove('active');

        renderQuizQuestion(0);
        scrollToElement(dom.interestExplorerBox || dom.viewSectionHeader || 200, -80);
      });
    }
  }

  function renderQuizQuestion(index) {
    if (!window.OrientationQuizData) return;
    const questions = window.OrientationQuizData.QUESTIONS;
    const total = questions.length;
    const q = questions[index];
    if (!q) return;

    if (dom.quizQuestionCategory) dom.quizQuestionCategory.textContent = q.category;
    if (dom.quizQuestionCounter) dom.quizQuestionCounter.textContent = `Question ${index + 1} sur ${total}`;
    if (dom.quizProgressFill) {
      dom.quizProgressFill.style.width = `${((index + 1) / total) * 100}%`;
    }
    if (dom.quizQuestionText) dom.quizQuestionText.textContent = q.question;

    const currentSelectedOptionId = quizState.answers[q.id];

    dom.quizOptionsGrid.innerHTML = q.options.map(opt => `
      <button type="button" class="quiz-option-card ${currentSelectedOptionId === opt.id ? 'selected' : ''}" data-option-id="${escapeHtml(opt.id)}">
        <span class="quiz-option-icon">${escapeHtml(opt.icon)}</span>
        <span class="quiz-option-text">${escapeHtml(opt.text)}</span>
        <span class="quiz-option-check" aria-hidden="true">✓</span>
      </button>
    `).join('');

    dom.quizOptionsGrid.querySelectorAll('.quiz-option-card').forEach(card => {
      card.addEventListener('click', () => {
        const optId = card.getAttribute('data-option-id');
        quizState.answers[q.id] = optId;

        dom.quizOptionsGrid.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        if (dom.btnQuizNext) dom.btnQuizNext.removeAttribute('disabled');
      });
    });

    // Gestion du bouton précédent
    if (dom.btnQuizPrev) {
      dom.btnQuizPrev.style.display = index > 0 ? 'inline-flex' : 'none';
    }

    // Gestion du bouton suivant
    if (dom.btnQuizNext) {
      if (currentSelectedOptionId) {
        dom.btnQuizNext.removeAttribute('disabled');
      } else {
        dom.btnQuizNext.setAttribute('disabled', 'true');
      }

      if (index === total - 1) {
        dom.btnQuizNext.innerHTML = '<span>Révéler mon profil & faire tourner la roue</span> <span>🎡</span>';
      } else {
        dom.btnQuizNext.innerHTML = '<span>Suivant</span> <span>&rarr;</span>';
      }
    }
  }

  // Traitement de fin de Quiz et transition vers la Roue de suspense
  function handleQuizCompletion() {
    if (!window.OrientationQuizData) return;
    const selectedOptionIds = Object.values(quizState.answers);
    const result = window.OrientationQuizData.calculateScore(selectedOptionIds);
    quizState.latestResult = result;

    // Basculer sur l'écran de la Roue pour le suspense révélateur
    if (dom.boussoleQuizView) dom.boussoleQuizView.style.display = 'none';
    if (dom.boussoleWheelView) {
      dom.boussoleWheelView.style.display = 'block';
      dom.boussoleWheelView.classList.add('active');
    }

    if (dom.tabModeQuiz) dom.tabModeQuiz.classList.remove('active');
    if (dom.tabModeWheel) {
      dom.tabModeWheel.classList.add('active');
      dom.tabModeWheel.setAttribute('aria-selected', 'true');
    }

    if (dom.wheelStatusNotice) {
      dom.wheelStatusNotice.innerHTML = `
        <span class="wheel-suspense-pulse">
          🎡 Analyse psychométrique terminée ! La roue de l'orientation révèle ton profil dominant...
        </span>
      `;
    }

    scrollToElement(dom.interestExplorerBox || dom.orientationWheelCanvas || 200, -80);

    // Initialiser et lancer la roue vers le profil gagnant
    if (!wheelInstance && dom.orientationWheelCanvas && window.OrientationWheel) {
      wheelInstance = new window.OrientationWheel(dom.orientationWheelCanvas);
    }

    if (wheelInstance) {
      wheelInstance.initCanvasSize();
      setTimeout(() => {
        wheelInstance.spinTo(result.dominantCode, (winner) => {
          if (dom.wheelStatusNotice) {
            dom.wheelStatusNotice.innerHTML = `✨ <strong>Profil Révélé : ${winner.label} ${winner.icon}</strong>`;
          }

          // Après un bref moment d'admiration, afficher la restitution complète des résultats
          setTimeout(() => {
            renderQuizResults(result);
          }, 1400);
        });
      }, 500);
    }
  }

  // Moteur de la Roue Interactive
  function initWheelEngine() {
    if (!dom.orientationWheelCanvas || !window.OrientationWheel) return;

    wheelInstance = new window.OrientationWheel(dom.orientationWheelCanvas, {
      onSectorTick: (sec) => {
        if (dom.wheelStatusNotice && wheelInstance.isSpinning) {
          dom.wheelStatusNotice.textContent = `🎯 ${sec.label}...`;
        }
      }
    });

    if (dom.btnSpinWheelFree) {
      dom.btnSpinWheelFree.addEventListener('click', () => {
        if (!wheelInstance || wheelInstance.isSpinning) return;
        dom.btnSpinWheelFree.setAttribute('disabled', 'true');

        if (dom.wheelStatusNotice) {
          dom.wheelStatusNotice.textContent = '🎡 La roue tourne... suspense !';
        }

        wheelInstance.spinFree(async (winningSector) => {
          dom.btnSpinWheelFree.removeAttribute('disabled');
          if (dom.wheelStatusNotice) {
            dom.wheelStatusNotice.innerHTML = `✨ <strong>Tu es tombé sur le profil : ${winningSector.label} ${winningSector.icon} !</strong>`;
          }

          // Créer un résultat simulé basé sur ce profil
          const profile = window.OrientationQuizData.PROFILES[winningSector.code];
          const simulatedResult = {
            rawScores: {},
            percentages: { [winningSector.code]: 85 },
            dominantCode: winningSector.code,
            secondaryCode: winningSector.code === 'I' ? 'E' : 'I',
            dominantProfile: profile,
            secondaryProfile: window.OrientationQuizData.PROFILES[winningSector.code === 'I' ? 'E' : 'I'],
            hollandCode: `${winningSector.code}`
          };

          setTimeout(() => {
            renderQuizResults(simulatedResult);
          }, 1200);
        });
      });
    }
  }

  // Restitution des résultats du Quiz et profil sénégalais
  async function renderQuizResults(result) {
    if (!dom.boussoleResultsView || !result || !result.dominantProfile) return;

    // Masquer les autres panneaux et afficher les résultats
    if (dom.boussoleQuizView) dom.boussoleQuizView.style.display = 'none';
    if (dom.boussoleWheelView) dom.boussoleWheelView.style.display = 'none';
    if (dom.boussoleChipsView) dom.boussoleChipsView.style.display = 'none';
    dom.boussoleResultsView.style.display = 'block';

    const p = result.dominantProfile;

    // 1. Bandeau Profil
    if (dom.resProfileIcon) dom.resProfileIcon.textContent = p.icon;
    if (dom.resHollandBadge) {
      dom.resHollandBadge.textContent = `Profil RIASEC : ${p.name} (${result.hollandCode || p.code})`;
      dom.resHollandBadge.style.backgroundColor = p.color;
    }
    if (dom.resProfileTitle) dom.resProfileTitle.textContent = `${p.title} (${p.name})`;
    if (dom.resProfileSummary) dom.resProfileSummary.textContent = `${p.summary} ${p.description}`;

    // 2. Jauges des 6 dimensions RIASEC
    if (dom.riasecGaugesGrid && window.OrientationQuizData.PROFILES) {
      const allProfiles = window.OrientationQuizData.PROFILES;
      const scores = result.percentages || {};

      dom.riasecGaugesGrid.innerHTML = Object.keys(allProfiles).map(dim => {
        const prof = allProfiles[dim];
        const pct = scores[dim] || (dim === result.dominantCode ? 80 : Math.floor(Math.random() * 35) + 15);
        return `
          <div class="riasec-gauge-card ${dim === result.dominantCode ? 'is-dominant' : ''}">
            <div class="gauge-card-header">
              <span class="gauge-icon">${prof.icon}</span>
              <span class="gauge-name">${prof.name} (${dim})</span>
              <span class="gauge-pct">${pct}%</span>
            </div>
            <div class="gauge-bar-track">
              <div class="gauge-bar-fill" style="width: ${pct}%; background-color: ${prof.color};"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 3. Pôle Éducatif Sénégalais & Débouchés CNOSP
    if (dom.resBacSeries && p.seriesBac) {
      dom.resBacSeries.innerHTML = p.seriesBac.map(s => `
        <span class="pathway-tag-pill bac-pill">🎓 ${escapeHtml(s)}</span>
      `).join('');
    }

    if (dom.resUniversities && p.universities) {
      dom.resUniversities.innerHTML = p.universities.map(u => `
        <span class="pathway-tag-pill uni-pill">🏛️ ${escapeHtml(u)}</span>
      `).join('');
    }

    if (dom.resSalaryFcfa) {
      dom.resSalaryFcfa.textContent = p.salaryRangeFcfa || '250 000 à 750 000 FCFA / mois';
    }

    if (dom.resVisionPillar) {
      dom.resVisionPillar.textContent = `🇸🇳 ${p.vision2050Pillar || 'Secteur Prioritaire Sénégal 2050'}`;
    }

    // 4. Métiers Recommandés Compatibles
    if (dom.quizRecommendedJobsGrid) {
      dom.quizRecommendedJobsGrid.innerHTML = `
        <div class="job-card-skeleton" style="grid-column: 1 / -1; padding: 2rem; text-align: center;">
          <p class="text-muted">Sélection des métiers d'excellence les plus compatibles...</p>
        </div>
      `;

      try {
        const recommendedJobs = await window.OrientationQuizData.getRecommendedJobs(result, 6);
        if (recommendedJobs.length === 0) {
          dom.quizRecommendedJobsGrid.innerHTML = `
            <p class="text-muted text-center" style="grid-column:1 / -1;padding:1.5rem;">
              Consulte le catalogue complet des 23 familles pour découvrir l'ensemble des métiers de ce profil.
            </p>
          `;
        } else {
          dom.quizRecommendedJobsGrid.innerHTML = recommendedJobs.map(job => `
            <div class="quiz-job-card" data-job-id="${escapeHtml(job.id)}">
              <div class="quiz-job-header">
                <span class="quiz-job-icon">${escapeHtml(job.familyIcon || '💼')}</span>
                <span class="quiz-job-compat-badge">✨ ${job.compatibility || 92}% compatible</span>
              </div>
              <h5 class="quiz-job-title">${escapeHtml(job.title)}</h5>
              <p class="quiz-job-desc">${escapeHtml(job.shortDescription || (job.longDescription || '').slice(0, 110) + '...')}</p>
              <div class="quiz-job-footer">
                <span class="quiz-job-salary">${escapeHtml(job.salary || 'Salaire attractif')}</span>
                <button type="button" class="btn btn-outline btn-sm btn-open-quiz-job" data-job-id="${escapeHtml(job.id)}">
                  <span>Dossier</span> &rarr;
                </button>
              </div>
            </div>
          `).join('');

          dom.quizRecommendedJobsGrid.querySelectorAll('.btn-open-quiz-job, .quiz-job-card').forEach(el => {
            el.addEventListener('click', async (e) => {
              e.stopPropagation();
              const jId = el.getAttribute('data-job-id');
              const foundJob = recommendedJobs.find(j => j.id === jId);
              if (foundJob && typeof openJobModal === 'function') {
                openJobModal(foundJob);
              }
            });
          });
        }
      } catch (err) {
        console.error('Erreur chargement métiers recommandés:', err);
      }
    }

    // 5. Bouton Explorer tous les métiers associés
    if (dom.btnViewAllMatchedJobs) {
      dom.btnViewAllMatchedJobs.onclick = () => {
        const families = window.OrientationQuizData.PROFILE_TO_FAMILIES[result.dominantCode] || [];
        if (families.length > 0) {
          setView('FAMILY_DRILLDOWN', { familyId: families[0], subdomain: 'all' });
          scrollToElement(dom.familyDrilldownContainer || 200, -80);
        } else {
          setView('ALL_JOBS');
        }
      };
    }

    scrollToElement(dom.boussoleResultsView, -80);
  }

  // =========================================================================
  // BOUSSOLE DES AFFINITÉS DIRECTES (PUCES EXISTANTES)
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
      updateActiveFiltersBanner();
      return;
    }

    showSkeleton(true);
    try {
      const { matchedFamilies, matchedJobs } = await window.OrientationData.getExplorationByAffinities(AppState.selectedAffinities);
      showSkeleton(false);

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
      updateActiveFiltersBanner();
    } catch (err) {
      showSkeleton(false);
      console.error(err);
    }
  }

  // =========================================================================
  // MOTEUR DE RECHERCHE UNIVERSEL & AUTOCOMPLÉTION INTELLIGENTE
  // =========================================================================
  let searchDebounceTimer = null;
  let activeSuggestionIndex = -1;

  function initUniversalSearch() {
    if (!dom.heroSearchInput) return;

    const closeSuggestions = () => {
      if (dom.searchSuggestionsBox) {
        dom.searchSuggestionsBox.style.display = 'none';
        dom.searchSuggestionsBox.innerHTML = '';
      }
      activeSuggestionIndex = -1;
    };

    const renderSuggestions = async (query) => {
      if (!dom.searchSuggestionsBox) return;
      const q = query.trim().toLowerCase();
      if (q.length < 2) {
        closeSuggestions();
        return;
      }

      const allFamilies = (typeof window.OrientationData.getFamilies === 'function')
        ? window.OrientationData.getFamilies()
        : [];

      const matchedFamilies = allFamilies.filter(f => {
        if (f.name && f.name.toLowerCase().includes(q)) return true;
        if (f.description && f.description.toLowerCase().includes(q)) return true;
        if (Array.isArray(f.subdomains) && f.subdomains.some(s => s.toLowerCase().includes(q))) return true;
        return false;
      }).slice(0, 3);

      const allJobs = await window.OrientationData.searchJobs(query);
      const matchedJobs = (allJobs || []).slice(0, 6);

      if (matchedFamilies.length === 0 && matchedJobs.length === 0) {
        dom.searchSuggestionsBox.innerHTML = `
          <div class="suggestion-item" style="cursor:default;color:#94a3b8;justify-content:center;">
            <span>Aucun résultat instantané. Appuyez sur Entrée pour rechercher dans tous les métiers.</span>
          </div>
        `;
        dom.searchSuggestionsBox.style.display = 'block';
        return;
      }

      let html = '';

      if (matchedFamilies.length > 0) {
        html += `<div class="suggestion-group-title">Familles professionnelles</div>`;
        matchedFamilies.forEach(f => {
          html += `
            <div class="suggestion-item" data-type="family" data-family-id="${escapeHtml(f.id)}" tabindex="0" role="button">
              <span class="suggestion-title">
                <span>${escapeHtml(f.icon || '📁')}</span>
                <span>${escapeHtml(f.name)}</span>
              </span>
              <span class="suggestion-meta">Famille • ${escapeHtml(f.jobCount || '')} métiers</span>
            </div>
          `;
        });
      }

      if (matchedJobs.length > 0) {
        html += `<div class="suggestion-group-title">Métiers clés</div>`;
        matchedJobs.forEach(job => {
          html += `
            <div class="suggestion-item" data-type="job" data-job-slug="${escapeHtml(job.slug || job.id)}" tabindex="0" role="button">
              <span class="suggestion-title">
                <span>${escapeHtml(job.icon || '💼')}</span>
                <span>${escapeHtml(job.title)}</span>
              </span>
              <span class="suggestion-meta">${escapeHtml(job.subdomain || job.familyName || 'Métier')}</span>
            </div>
          `;
        });
      }

      html += `
        <div class="suggestion-item" data-type="search-all" style="border-top:1px solid rgba(255,255,255,0.08);background:rgba(2,132,199,0.15);color:#38bdf8;font-weight:600;justify-content:center;" tabindex="0" role="button">
          <span>Voir tous les résultats pour « ${escapeHtml(query)} » &rarr;</span>
        </div>
      `;

      dom.searchSuggestionsBox.innerHTML = html;
      dom.searchSuggestionsBox.style.display = 'block';
      activeSuggestionIndex = -1;

      dom.searchSuggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', async () => {
          const type = item.getAttribute('data-type');
          if (type === 'family') {
            const fId = item.getAttribute('data-family-id');
            closeSuggestions();
            setView('FAMILY_DRILLDOWN', { familyId: fId, domain: 'all', subdomain: 'all' });
            scrollToElement(dom.familyDrilldownContainer || dom.explorerSection || 200, -80);
          } else if (type === 'job') {
            const slug = item.getAttribute('data-job-slug');
            closeSuggestions();
            const targetJob = await window.OrientationData.getJobBySlug(slug);
            if (targetJob) openJobModal(targetJob);
          } else if (type === 'search-all') {
            closeSuggestions();
            AppState.searchQuery = query;
            setView('SEARCH');
            scrollToElement(dom.searchResultsSummary || dom.jobsGridContainer || 200, -80);
          }
        });
      });
    };

    dom.heroSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      AppState.searchQuery = query;

      if (dom.heroSearchClear) {
        dom.heroSearchClear.style.display = query.length > 0 ? 'inline-flex' : 'none';
      }

      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        if (query.length >= 2) {
          renderSuggestions(query);
        } else {
          closeSuggestions();
          if (query.length === 0 && AppState.currentView === 'SEARCH') {
            setView('FAMILIES');
          }
        }
      }, 180);
    });

    dom.heroSearchInput.addEventListener('keydown', (e) => {
      if (!dom.searchSuggestionsBox || dom.searchSuggestionsBox.style.display === 'none') {
        if (e.key === 'Enter') {
          e.preventDefault();
          const query = dom.heroSearchInput.value.trim();
          if (query.length > 0) {
            closeSuggestions();
            AppState.searchQuery = query;
            setView('SEARCH');
            scrollToElement(dom.searchResultsSummary || dom.jobsGridContainer || 200, -80);
          }
        }
        return;
      }

      const items = dom.searchSuggestionsBox.querySelectorAll('.suggestion-item[tabindex="0"]');
      if (!items || items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex + 1) % items.length;
        items.forEach((it, idx) => {
          if (idx === activeSuggestionIndex) {
            it.classList.add('selected');
            it.scrollIntoView({ block: 'nearest' });
          } else {
            it.classList.remove('selected');
          }
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeSuggestionIndex = (activeSuggestionIndex - 1 + items.length) % items.length;
        items.forEach((it, idx) => {
          if (idx === activeSuggestionIndex) {
            it.classList.add('selected');
            it.scrollIntoView({ block: 'nearest' });
          } else {
            it.classList.remove('selected');
          }
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeSuggestionIndex >= 0 && items[activeSuggestionIndex]) {
          items[activeSuggestionIndex].click();
        } else {
          closeSuggestions();
          const query = dom.heroSearchInput.value.trim();
          if (query.length > 0) {
            AppState.searchQuery = query;
            setView('SEARCH');
            scrollToElement(dom.searchResultsSummary || dom.jobsGridContainer || 200, -80);
          }
        }
      } else if (e.key === 'Escape') {
        closeSuggestions();
      }
    });

    document.addEventListener('click', (e) => {
      if (dom.searchSuggestionsBox && !dom.searchSuggestionsBox.contains(e.target) && e.target !== dom.heroSearchInput) {
        closeSuggestions();
      }
    });

    if (dom.heroSearchClear) {
      dom.heroSearchClear.addEventListener('click', () => {
        dom.heroSearchInput.value = '';
        dom.heroSearchClear.style.display = 'none';
        AppState.searchQuery = '';
        closeSuggestions();
        setView('FAMILIES');
      });
    }

    if (dom.btnResetSearch) {
      dom.btnResetSearch.addEventListener('click', () => {
        dom.heroSearchInput.value = '';
        if (dom.heroSearchClear) dom.heroSearchClear.style.display = 'none';
        AppState.searchQuery = '';
        closeSuggestions();
        setView('FAMILIES');
      });
    }
  }

  async function renderSearchResults() {
    if (!dom.jobsGridContainer) return;
    const q = AppState.searchQuery;

    showSkeleton(true);
    try {
      const results = await window.OrientationData.searchJobs(q);
      showSkeleton(false);

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
              Essaie avec d’autres mots-clés (ex: "code", "langues", "lettres", "histoire", "psychologie", "finance") ou explore nos 23 grandes familles.
            </p>
            <button type="button" class="btn btn-primary btn-sm" id="btnEmptyResetSearch">
              Voir les 23 familles professionnelles
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
        updateActiveFiltersBanner();
        return;
      }

      renderJobCardsList(results);
      updateActiveFiltersBanner();
    } catch (err) {
      showSkeleton(false);
      console.error(err);
    }
  }

  // =========================================================================
  // RUBRIQUE ÉDITORIALE « LE SAVIEZ-VOUS ? » (Évolution, automatisation & émergence)
  // =========================================================================
  function renderSaviezVousHtml(job) {
    const sv = job?.saviezVous;
    if (!sv || !sv.statut || !sv.fait || !sv.fait.trim()) {
      return '';
    }

    const dotColors = {
      en_transformation: '#f59e0b',
      valeur_sure: '#3b82f6',
      en_emergence: '#10b981'
    };

    const statusLabels = {
      en_transformation: 'Métier en transformation',
      valeur_sure: 'Métier valeur sûre',
      en_emergence: 'Métier en émergence'
    };

    const color = dotColors[sv.statut] || '#f59e0b';
    const statusLabel = statusLabels[sv.statut] || 'Évolution du métier';
    const aRetenir = (sv.a_retenir || sv.aRetenir || '').trim();

    return `
      <!-- ENCART ÉDITORIAL : LE SAVIEZ-VOUS ? -->
      <aside class="saviez-vous-card status-${escapeHtml(sv.statut)}" style="--status-color: ${color};" aria-label="Le saviez-vous ?">
        <div class="saviez-vous-header">
          <div class="saviez-vous-title-wrap">
            <span class="saviez-vous-icon" aria-hidden="true">💡</span>
            <h4 class="saviez-vous-title">Le saviez-vous ?</h4>
          </div>
          <span class="saviez-vous-dot" title="${escapeHtml(statusLabel)}" aria-label="${escapeHtml(statusLabel)}" role="img"></span>
        </div>
        
        <div class="saviez-vous-body">
          <p class="saviez-vous-fait">${escapeHtml(sv.fait.trim())}</p>
          
          ${sv.pourquoi && sv.pourquoi.trim() ? `
            <p class="saviez-vous-pourquoi">${escapeHtml(sv.pourquoi.trim())}</p>
          ` : ''}
          
          ${aRetenir ? `
            <div class="saviez-vous-takeaway">
              <span class="takeaway-label">À retenir :</span>
              <span class="takeaway-text">${escapeHtml(aRetenir)}</span>
            </div>
          ` : ''}
        </div>
      </aside>
    `;
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
    const typicalDayWords = Array.isArray(job.typicalDay)
      ? job.typicalDay.map(s => (typeof s === 'string' ? s : `${s.title || ''} ${s.activity || ''} ${s.desc || ''}`)).join(' ')
      : '';
    const textToAnalyze = `${job.longDescription || ''} ${job.shortDescription || ''} ${typicalDayWords}`;
    const words = textToAnalyze.trim().split(/\s+/).filter(Boolean).length;
    const readingTimeMin = Math.max(2, Math.min(6, Math.ceil(words / 140)));
    const tensionText = job.marketTension || (job.salary ? 'Fort recrutement' : 'Métier en plein essor');
    const jobKey = job.slug || job.id;
    const hasVotedSurvey = window.AnalyticsTracker?.hasVotedSurvey ? window.AnalyticsTracker.hasVotedSurvey('job', jobKey) : false;

    const overlay = document.createElement('div');
    overlay.id = 'job-dossier-overlay';
    overlay.className = 'dossier-overlay';
    overlay.setAttribute('data-lenis-prevent', 'true');
    overlay.setAttribute('data-lenis-prevent-wheel', 'true');
    overlay.setAttribute('data-lenis-prevent-touch', 'true');

    // Rendu du HTML complet de la modal
    overlay.innerHTML = `
      <div class="dossier-modal" role="dialog" aria-modal="true" aria-labelledby="dossierJobTitle" data-lenis-prevent="true" data-lenis-prevent-wheel="true" data-lenis-prevent-touch="true">
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
                ${job.sourceESA ? `
                  <span class="dossier-meta-tag" style="background:rgba(22,163,74,0.25);border-color:rgba(34,197,94,0.5);color:#dcfce7;" title="Fiche documentée d'après le Groupe ESA (École Supérieure des Agricultures d'Angers)">
                    🐄 Référence Groupe ESA
                  </span>
                ` : ''}
                ${job.sourceEvoluPeches ? `
                  <span class="dossier-meta-tag" style="background:rgba(6,182,212,0.25);border-color:rgba(34,211,238,0.5);color:#cffafe;" title="Fiche documentée d'après le référentiel ÉvoluPêches">
                    🌊 Référence ÉvoluPêches
                  </span>
                ` : ''}
                ${job.sourceEnergierecrute ? `
                  <span class="dossier-meta-tag" style="background:rgba(234,179,8,0.25);border-color:rgba(250,204,21,0.5);color:#fef08a;" title="Fiche documentée d'après le référentiel officiel Energierecrute">
                    ⚡ Référence Energierecrute
                  </span>
                ` : ''}
                ${job.sourceEtudiant ? `
                  <span class="dossier-meta-tag" style="background:rgba(217,119,6,0.25);border-color:rgba(245,158,11,0.5);color:#fef3c7;" title="Fiche documentée d'après le référentiel officiel L'Étudiant (Secteur BTP, Architecture & Construction)">
                    🎓 Référence L'Étudiant
                  </span>
                ` : ''}
                ${job.sourceImagineTonFutur ? `
                  <span class="dossier-meta-tag" style="background:rgba(124,58,237,0.25);border-color:rgba(167,139,250,0.5);color:#ede9fe;" title="Fiche documentée d'après le référentiel Imagine ton Futur (Lettres, Langues & Sciences Humaines)">
                    📚 Référence Imagine ton Futur
                  </span>
                ` : ''}
                ${job.sourceLetudiant ? `
                  <span class="dossier-meta-tag" style="background:rgba(30,64,175,0.25);border-color:rgba(96,165,250,0.5);color:#dbeafe;" title="Fiche documentée d'après le référentiel officiel L'Étudiant (Secteur Industrie & Technologies)">
                    🎓 Référence L'Étudiant
                  </span>
                ` : ''}
                ${job.sourceOnisep ? `
                  <span class="dossier-meta-tag" style="background:rgba(220,38,38,0.25);border-color:rgba(248,113,113,0.5);color:#fee2e2;" title="Fiche documentée d'après le référentiel officiel Onisep (Métiers de la mécanique)">
                    ⚙️ Référence Onisep
                  </span>
                ` : ''}
                ${job.sourcePoitiers ? `
                  <span class="dossier-meta-tag" style="background:rgba(21,128,61,0.25);border-color:rgba(74,222,128,0.5);color:#dcfce7;" title="Fiche documentée d'après le référentiel Université de Poitiers Géosciences">
                    🌍 Référence Univ. Poitiers
                  </span>
                ` : ''}
                ${job.sourceBRGM ? `
                  <span class="dossier-meta-tag" style="background:rgba(15,118,110,0.25);border-color:rgba(45,212,191,0.5);color:#ccfbf1;" title="Fiche documentée d'après le BRGM & la Société Géologique de France">
                    ⛏️ Référence BRGM / SGF
                  </span>
                ` : ''}
                ${(job.familyId === 'sante-soins-paramedical' || job.familyId === 'sante-biomedical' || job.studyramaUrl) ? `
                  <span class="dossier-meta-tag" style="background:rgba(239,68,68,0.25);border-color:rgba(248,113,113,0.5);color:#fee2e2;" title="Fiche documentée d'après le référentiel officiel Studyrama Santé & Ordres Professionnels">
                    🏥 Référence Studyrama Santé
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
        <div class="dossier-body" data-lenis-prevent="true" data-lenis-prevent-wheel="true" data-lenis-prevent-touch="true" tabindex="-1">
          
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

            <!-- Note documentaire & méthodologique si présente -->
            ${job.documentaryNote ? `
              <div class="dossier-documentary-note-box" style="background:linear-gradient(135deg, #fefce8 0%, #fef9c3 100%);border:1.5px solid #fde047;border-radius:12px;padding:1.15rem 1.35rem;margin-bottom:1.5rem;">
                <div style="display:flex;align-items:center;gap:0.45rem;font-weight:750;color:#854d0e;font-size:0.92rem;margin-bottom:0.4rem;">
                  <span>📋</span>
                  <span>Note méthodologique & documentaire :</span>
                </div>
                <p style="margin:0;color:#713f12;font-size:0.92rem;line-height:1.6;font-weight:500;">
                  ${escapeHtml(job.documentaryNote)}
                </p>
              </div>
            ` : ''}

            <!-- Pédagogie Sciences de la Terre & Géosciences si présente -->
            ${job.geosciencesPedagogy ? `
              <div class="dossier-geosciences-pedagogy-box" style="background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);border:1.5px solid #86efac;border-radius:12px;padding:1.15rem 1.35rem;margin-bottom:1.5rem;">
                <div style="display:flex;align-items:center;gap:0.45rem;font-weight:750;color:#166534;font-size:0.92rem;margin-bottom:0.4rem;">
                  <span>🌍</span>
                  <span>Clé de lecture Géosciences & Impact Planétaire :</span>
                </div>
                <p style="margin:0;color:#14532d;font-size:0.92rem;line-height:1.6;font-weight:500;">
                  ${escapeHtml(job.geosciencesPedagogy)}
                </p>
              </div>
            ` : ''}

            <!-- Espèces & Cheptels associés si spécifiés -->
            ${(job.species && Array.isArray(job.species) && job.species.length > 0) ? `
              <div class="dossier-species-row" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:1.25rem;padding:0.75rem 1rem;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
                <span style="font-size:0.86rem;font-weight:700;color:#475569;">🐾 Espèces & cheptels :</span>
                ${job.species.map(sp => `<span class="badge" style="background:#e0f2fe;color:#0369a1;border:1px solid #bae6fd;padding:2px 9px;border-radius:16px;font-size:0.82rem;font-weight:600;">${escapeHtml(sp)}</span>`).join(' ')}
              </div>
            ` : ''}

            <!-- Technologies énergétiques associées si spécifiées -->
            ${(job.energyTechnology && Array.isArray(job.energyTechnology) && job.energyTechnology.length > 0) ? `
              <div class="dossier-energy-tech-row" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:1.25rem;padding:0.75rem 1rem;background:#fefce8;border:1px solid #fef08a;border-radius:10px;">
                <span style="font-size:0.86rem;font-weight:700;color:#854d0e;">⚡ Technologies & vecteurs :</span>
                ${job.energyTechnology.map(tech => `<span class="badge" style="background:#fef9c3;color:#a16207;border:1px solid #fde047;padding:2px 9px;border-radius:16px;font-size:0.82rem;font-weight:600;">${escapeHtml(tech)}</span>`).join(' ')}
              </div>
            ` : ''}

            <!-- Référentiel Officiel Santé, Soins & Paramédical (Studyrama / Ordres) -->
            ${(job.familyId === 'sante-soins-paramedical' || job.familyId === 'sante-biomedical') ? `
              <div class="dossier-health-ref-box" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:1.35rem;padding:0.85rem 1.15rem;background:linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);border:1.5px solid #fca5a5;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#991b1b;font-size:0.88rem;">
                  <span>🏥</span>
                  <span>Référentiel Médical & Paramédical d'Excellence</span>
                </div>
                <span style="font-size:0.8rem;color:#7f1d1d;font-weight:600;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #fecaca;">Études PASS / L.AS • Diplômes d'État</span>
              </div>
            ` : ''}

            <!-- Référentiel Officiel Enseignement, Éducation & Formation (Studyrama) -->
            ${(job.familyId === 'education-formation' || job.familyId === 'enseignement-education-formation' || (job.studyramaUrl && job.studyramaUrl.includes('/enseignement/'))) ? `
              <div class="dossier-education-ref-box" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:1.35rem;padding:0.85rem 1.15rem;background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border:1.5px solid #93c5fd;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#1e40af;font-size:0.88rem;">
                  <span>🎓</span>
                  <span>Référentiel Métiers Enseignement & Éducation (Studyrama)</span>
                </div>
                ${job.studyramaUrl ? `
                  <a href="${escapeHtml(job.studyramaUrl)}" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem;color:#1d4ed8;font-weight:600;text-decoration:none;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #bfdbfe;display:inline-flex;align-items:center;gap:4px;">
                    Consulter sur Studyrama.com ↗
                  </a>
                ` : `<span style="font-size:0.8rem;color:#1e40af;font-weight:600;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #bfdbfe;">Source Studyrama Enseignement</span>`}
              </div>
            ` : ''}

            <!-- Référentiel Officiel Environnement & Développement Durable (Onisep 2025) -->
            ${(job.familyId === 'environnement-developpement-durable' || job.familyId === 'environnement-climat' || job.onisepUrl || job.onisepSource) ? `
              <div class="dossier-environment-ref-box" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:1.35rem;padding:0.85rem 1.15rem;background:linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);border:1.5px solid #6ee7b7;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#065f46;font-size:0.88rem;">
                  <span>🌱</span>
                  <span>Référentiel Métiers Environnement & Écologie (Onisep 2025)</span>
                </div>
                ${job.onisepUrl ? `
                  <a href="${escapeHtml(job.onisepUrl)}" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem;color:#047857;font-weight:600;text-decoration:none;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #a7f3d0;display:inline-flex;align-items:center;gap:4px;">
                    Consulter sur Onisep.fr ↗
                  </a>
                ` : `<span style="font-size:0.8rem;color:#065f46;font-weight:600;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #a7f3d0;">Source Onisep Officielle</span>`}
              </div>
            ` : ''}

            <!-- Référentiel Officiel CIDJ Biologie & Chimie -->
            ${(job.familyId === 'biologie-chimie' || job.cidjUrl) ? `
              <div class="dossier-cidj-ref-box" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:1.35rem;padding:0.85rem 1.15rem;background:linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);border:1.5px solid #c4b5fd;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#5b21b6;font-size:0.88rem;">
                  <span>🧬</span>
                  <span>Fiche Métier Certifiée CIDJ Biologie & Chimie</span>
                </div>
                ${job.cidjUrl ? `
                  <a href="${escapeHtml(job.cidjUrl)}" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem;color:#6d28d9;font-weight:600;text-decoration:none;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #ddd6fe;display:inline-flex;align-items:center;gap:4px;">
                    Consulter sur CIDJ.com ↗
                  </a>
                ` : `<span style="font-size:0.8rem;color:#6d28d9;font-weight:600;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #ddd6fe;">Référentiel CIDJ Officiel</span>`}
              </div>
            ` : ''}

            <!-- Référentiel Officiel France Travail / MétierScope (Secteur 102 Hôtellerie-Restauration) -->
            ${(job.familyId === 'hotellerie-restauration-hospitalite' || job.familyId === 'tourisme-hotellerie' || job.codeRome || job.franceTravailUrl) ? `
              <div class="dossier-hospitality-ref-box" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:1.35rem;padding:0.85rem 1.15rem;background:linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);border:1.5px solid #fdba74;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#c2410c;font-size:0.88rem;">
                  <span>🏨</span>
                  <span>Référentiel Métiers Hôtellerie & Restauration (France Travail MétierScope${job.codeRome ? ` • Code ROME ${escapeHtml(job.codeRome)}` : ''})</span>
                </div>
                ${job.franceTravailUrl ? `
                  <a href="${escapeHtml(job.franceTravailUrl)}" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem;color:#ea580c;font-weight:600;text-decoration:none;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #fed7aa;display:inline-flex;align-items:center;gap:4px;">
                    Consulter sur France Travail ↗
                  </a>
                ` : `<span style="font-size:0.8rem;color:#c2410c;font-weight:600;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #fed7aa;">Source France Travail MétierScope</span>`}
              </div>
            ` : ''}

            <!-- Référentiel Officiel ESP & Studyrama Communication -->
            ${(job.familyId === 'communication-marketing-medias-creation' || job.familyId === 'culture-medias' || (job.sources && job.sources.some(s => typeof s === 'string' && s.includes('ESP')))) ? `
              <div class="dossier-communication-ref-box" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:1.35rem;padding:0.85rem 1.15rem;background:linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);border:1.5px solid #fb923c;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;font-weight:700;color:#c2410c;font-size:0.88rem;">
                  <span>📣</span>
                  <span>Référentiel Métiers Communication, Marketing & Médias (ESP & Studyrama)</span>
                </div>
                <span style="font-size:0.8rem;color:#c2410c;font-weight:600;background:#ffffff;padding:3px 10px;border-radius:12px;border:1px solid #fed7aa;">Source ESP École Supérieure de Publicité • Studyrama</span>
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

            ${(job.missions && (Array.isArray(job.missions) || job.missions.primary || job.missions.secondary)) ? `
              <div class="dossier-section" style="margin-top:1.25rem;">
                <h4 style="color:#0f172a;font-size:0.96rem;margin-bottom:0.75rem;">⚡ Responsabilités & Missions concrètes</h4>
                ${Array.isArray(job.missions) ? `
                  <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:1rem;">
                    <ul style="margin:0;padding-left:1.2rem;font-size:0.86rem;color:#334155;line-height:1.6;">
                      ${job.missions.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
                    </ul>
                  </div>
                ` : `
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
                `}
              </div>
            ` : ''}

            ${job.workEnvironment && (Array.isArray(job.workEnvironment) ? job.workEnvironment.length > 0 : Boolean(job.workEnvironment)) ? `
              <div class="dossier-section" style="background:#f8fafc;border:1px solid #e2e8f0;padding:1.25rem;border-radius:10px;margin-top:1.25rem;">
                <h4 style="color:#0f172a;font-size:0.95rem;margin-bottom:0.75rem;">💻 À quoi ressemble ce métier au quotidien ?</h4>
                <div class="work-environment-tags-grid">
                  ${Array.isArray(job.workEnvironment) ? job.workEnvironment.map(tag => `
                    <div class="env-tag-chip">
                      <span>${escapeHtml(tag)}</span>
                    </div>
                  `).join('') : `
                    <p style="margin:0;color:#334155;font-size:0.92rem;line-height:1.6;">${escapeHtml(job.workEnvironment)}</p>
                  `}
                </div>
              </div>
            ` : ''}

            ${job.typicalDay && job.typicalDay.length > 0 ? `
              <div class="dossier-section" style="margin-top:1.5rem;">
                <h3 class="dossier-section-title">Journée type indicative</h3>
                <p style="color:#64748b;font-size:0.88rem;margin-bottom:1rem;">À quoi peut ressembler une journée de travail typique :</p>
                <div class="typical-day-timeline">
                  ${job.typicalDay.map(slot => {
                    const timeText = escapeHtml(slot.time || '');
                    const titleText = escapeHtml(slot.title || slot.activity || '');
                    const descText = slot.desc ? `<p>${escapeHtml(slot.desc)}</p>` : (slot.title && slot.activity ? `<p>${escapeHtml(slot.activity)}</p>` : '');
                    return `
                      <div class="timeline-item">
                        <div class="timeline-time">${timeText}</div>
                        <div class="timeline-content">
                          <strong>${titleText}</strong>
                          ${descText}
                        </div>
                      </div>
                    `;
                  }).join('')}
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

            <!-- Caractéristiques & Aptitudes Personnelles (Source Référentiel ÉvoluPêches) -->
            ${job.characteristics && job.characteristics.length > 0 ? `
              <div class="dossier-section" style="margin-top:1.5rem;background:#f0fdfa;border:1.5px solid #99f6e4;padding:1.25rem;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
                  <span style="font-size:1.25rem;">🧭</span>
                  <h4 style="margin:0;color:#0f766e;font-size:0.96rem;font-weight:750;">Caractéristiques & Profil Personnel Recommandé (ÉvoluPêches)</h4>
                </div>
                <p style="color:#115e59;font-size:0.85rem;margin-bottom:0.85rem;">Qualités et aptitudes identifiées par les professionnels du secteur maritime pour s'épanouir dans ce métier :</p>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                  ${job.characteristics.map(c => `<span style="background:#ffffff;color:#0f766e;border:1.5px solid #2dd4bf;padding:0.4rem 0.85rem;border-radius:8px;font-size:0.84rem;font-weight:650;box-shadow:0 1px 2px rgba(0,0,0,0.04);display:inline-flex;align-items:center;gap:0.35rem;"><span>⚓</span> ${escapeHtml(c)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Piliers Disciplinaires, Méthodes & Enjeux Éthiques (Lettres & Sciences Humaines) -->
            ${(job.disciplinaryPillars || job.methodsAndTools || job.ethicalIssues) ? `
              <div class="dossier-section" style="margin-top:1.5rem;background:#faf5ff;border:1.5px solid #d8b4fe;padding:1.25rem;border-radius:12px;">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem;">
                  <span style="font-size:1.25rem;">📚</span>
                  <h4 style="margin:0;color:#6b21a8;font-size:0.96rem;font-weight:750;">Socle Disciplinaire, Méthodologies & Éthique des Humanités</h4>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:0.9rem;">
                  ${job.disciplinaryPillars && job.disciplinaryPillars.length > 0 ? `
                    <div style="background:#ffffff;border:1px solid #e9d5ff;padding:0.85rem;border-radius:8px;">
                      <strong style="display:block;color:#7e22ce;font-size:0.84rem;margin-bottom:0.35rem;">🏛️ Piliers Fondamentaux</strong>
                      <ul style="margin:0;padding-left:1.1rem;font-size:0.82rem;color:#475569;line-height:1.5;">
                        ${job.disciplinaryPillars.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  ${job.methodsAndTools && job.methodsAndTools.length > 0 ? `
                    <div style="background:#ffffff;border:1px solid #e9d5ff;padding:0.85rem;border-radius:8px;">
                      <strong style="display:block;color:#7e22ce;font-size:0.84rem;margin-bottom:0.35rem;">🔬 Méthodes & Démarches</strong>
                      <ul style="margin:0;padding-left:1.1rem;font-size:0.82rem;color:#475569;line-height:1.5;">
                        ${job.methodsAndTools.map(m => `<li>${escapeHtml(m)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  ${job.ethicalIssues && job.ethicalIssues.length > 0 ? `
                    <div style="background:#ffffff;border:1px solid #e9d5ff;padding:0.85rem;border-radius:8px;">
                      <strong style="display:block;color:#7e22ce;font-size:0.84rem;margin-bottom:0.35rem;">⚖️ Déontologie & Enjeux Éthiques</strong>
                      <ul style="margin:0;padding-left:1.1rem;font-size:0.82rem;color:#475569;line-height:1.5;">
                        ${job.ethicalIssues.map(e => `<li>${escapeHtml(e)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

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

            <!-- Cursus & Diplômes clés par zone géographique (France & Sénégal) -->
            ${(job.studies && ((job.studies.france && job.studies.france.length > 0) || (job.studies.senegal && job.studies.senegal.length > 0))) ? `
              <div class="dossier-section" style="margin-top:1.25rem;">
                <h4 style="color:#0f172a;font-size:0.95rem;margin-bottom:0.75rem;">🌍 Filières, Diplômes & Concours par zone géographique</h4>
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1rem;">
                  ${(job.studies.france && job.studies.france.length > 0) ? `
                    <div style="background:#f8fafc;border:1px solid #cbd5e1;padding:1rem;border-radius:10px;">
                      <div style="font-weight:700;color:#1e293b;font-size:0.88rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.4rem;">
                        <span>🇫🇷</span> <span>France & International</span>
                      </div>
                      <ul style="margin:0;padding-left:1.2rem;font-size:0.83rem;color:#475569;line-height:1.6;">
                        ${job.studies.france.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  ${(job.studies.senegal && job.studies.senegal.length > 0) ? `
                    <div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:1rem;border-radius:10px;">
                      <div style="font-weight:700;color:#166534;font-size:0.88rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.4rem;">
                        <span>🇸🇳</span> <span>Sénégal & Afrique de l’Ouest</span>
                      </div>
                      <ul style="margin:0;padding-left:1.2rem;font-size:0.83rem;color:#166534;line-height:1.6;">
                        ${job.studies.senegal.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <!-- Certifications reconnues si disponibles -->
            ${job.studies && job.studies.certifications && job.studies.certifications.length > 0 ? `
              <div class="dossier-section" style="margin-top:1.25rem;background:#f8fafc;border:1px solid #e2e8f0;padding:1.25rem;border-radius:10px;">
                <h4 style="color:#0f172a;font-size:0.95rem;margin-bottom:0.6rem;">📜 Certifications professionnelles valorisées</h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
                  ${job.studies.certifications.map(c => `<span style="background:#ffffff;border:1px solid #cbd5e1;color:#334155;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.82rem;font-weight:600;">${escapeHtml(c)}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Dispositif de Reconnaissance des Compétences (RAC / PAMT) -->
            ${job.skillsRecognition && job.skillsRecognition.description ? `
              <div class="dossier-section" style="margin-top:1.25rem;background:#f0fdf4;border:1.5px solid #86efac;padding:1.25rem;border-radius:10px;">
                <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;">
                  <span style="font-size:1.25rem;">🎖️</span>
                  <h4 style="color:#166534;font-size:0.95rem;margin:0;font-weight:750;">Reconnaissance des compétences de la main-d'œuvre (RAC / PAMT)</h4>
                </div>
                <p style="color:#14532d;font-size:0.86rem;line-height:1.6;margin:0;">${escapeHtml(job.skillsRecognition.description)}</p>
                ${job.skillsRecognition.source ? `
                  <span style="display:inline-block;margin-top:0.45rem;font-size:0.78rem;color:#15803d;font-weight:600;">Source : ${escapeHtml(job.skillsRecognition.source)}</span>
                ` : ''}
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

              <!-- Contexte Régions Maritimes & Québec (Source ÉvoluPêches) -->
              ${(job.regions && job.regions.length > 0) || job.sourceContext ? `
                <div class="dossier-section" style="margin-top:1.5rem;background:linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);border:1.5px solid #bfdbfe;border-radius:12px;padding:1.35rem;">
                  <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.6rem;">
                    <span style="font-size:1.4rem;">🌊</span>
                    <div>
                      <h4 style="margin:0;color:#1e40af;font-size:1rem;font-weight:750;">Territoires Maritimes Clés & Bassins d'Emplois (${escapeHtml(job.sourceContext || 'Maritime')})</h4>
                      <p style="margin:0.2rem 0 0 0;color:#2563eb;font-size:0.84rem;">Régions d'activité et territoires documentés :</p>
                    </div>
                  </div>
                  ${job.regions && job.regions.length > 0 ? `
                    <div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-top:0.75rem;">
                      ${job.regions.map(r => `<span style="background:#ffffff;border:1px solid #93c5fd;color:#1e40af;padding:0.35rem 0.8rem;border-radius:6px;font-size:0.82rem;font-weight:650;box-shadow:0 1px 2px rgba(0,0,0,0.04);">📍 ${escapeHtml(r)}</span>`).join('')}
                    </div>
                  ` : ''}
                </div>
              ` : ''}

              <!-- Grille Multi-Territoriale des Salaires & Rémunérations -->
              ${job.salaryRanges ? `
                <div class="salary-ranges-box" style="margin-top:1.25rem;background:#ffffff;border:1.5px solid #e2e8f0;padding:1.25rem;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
                  <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem;">
                    <span style="font-size:1.2rem;">💰</span>
                    <h4 style="color:#0f172a;font-size:0.95rem;margin:0;font-weight:750;">Repères de Rémunération Multi-Territoriaux</h4>
                  </div>
                  <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:0.85rem;">
                    ${job.salaryRanges.quebec ? `
                      <div style="background:#eff6ff;border-left:4px solid #0284c7;padding:0.9rem;border-radius:6px;">
                        <span style="font-weight:700;font-size:0.84rem;color:#0369a1;display:block;margin-bottom:0.35rem;">🇨🇦 Québec / Canada (Source : ${escapeHtml(job.salaryRanges.quebec.source || 'ÉvoluPêches')})</span>
                        <div style="font-size:0.82rem;color:#334155;line-height:1.6;">
                          ${job.salaryRanges.quebec.range ? `<div><strong>Fourchette constatée :</strong> ${escapeHtml(job.salaryRanges.quebec.range)}</div>` : ''}
                          ${job.salaryRanges.quebec.junior ? `<div><strong>Débutant / Junior :</strong> ${escapeHtml(job.salaryRanges.quebec.junior)}</div>` : ''}
                          ${job.salaryRanges.quebec.senior ? `<div><strong>Confirmé / Senior :</strong> ${escapeHtml(job.salaryRanges.quebec.senior)}</div>` : ''}
                        </div>
                      </div>
                    ` : ''}
                    ${job.salaryRanges.france ? `
                      <div style="background:#f8fafc;border-left:4px solid #3b82f6;padding:0.9rem;border-radius:6px;">
                        <span style="font-weight:700;font-size:0.84rem;color:#1e40af;display:block;margin-bottom:0.35rem;">🇫🇷 France (Source : ${escapeHtml(job.salaryRanges.france.source || 'L’Étudiant / APEC')})</span>
                        <div style="font-size:0.82rem;color:#334155;line-height:1.6;">
                          ${job.salaryRanges.france.range ? `<div><strong>Fourchette constatée :</strong> ${escapeHtml(job.salaryRanges.france.range)}</div>` : `
                            <div><strong>Débutant / Junior :</strong> ${escapeHtml(job.salaryRanges.france.junior || 'N/C')}</div>
                            <div><strong>Confirmé / Senior :</strong> ${escapeHtml(job.salaryRanges.france.senior || 'N/C')}</div>
                          `}
                        </div>
                      </div>
                    ` : ''}
                    ${job.salaryRanges.senegal ? `
                      <div style="background:#f0fdf4;border-left:4px solid #10b981;padding:0.9rem;border-radius:6px;">
                        <span style="font-weight:700;font-size:0.84rem;color:#065f46;display:block;margin-bottom:0.35rem;">🇸🇳 Sénégal / Afrique de l'Ouest (Source : ${escapeHtml(job.salaryRanges.senegal.source || 'Marché UEMOA')})</span>
                        <div style="font-size:0.82rem;color:#334155;line-height:1.6;">
                          ${job.salaryRanges.senegal.range ? `<div><strong>Fourchette constatée :</strong> ${escapeHtml(job.salaryRanges.senegal.range)}</div>` : `
                            <div><strong>Débutant / Junior :</strong> ${escapeHtml(job.salaryRanges.senegal.junior || 'Donnée locale à vérifier')}</div>
                            <div><strong>Confirmé / Senior :</strong> ${escapeHtml(job.salaryRanges.senegal.senior || 'Donnée locale à vérifier')}</div>
                          `}
                        </div>
                      </div>
                    ` : ''}
                  </div>
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
                <div class="sources-footnote" style="margin-top:1.5rem;padding-top:1rem;border-top:1px dashed #e2e8f0;font-size:0.82rem;color:#64748b;line-height:1.6;">
                  <strong style="color:#334155;">📚 Sources & Références observatoires :</strong>
                  <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.4rem;">
                    ${job.sources.map(s => {
                      if (typeof s === 'string') return `<span style="background:#f1f5f9;border:1px solid #cbd5e1;padding:0.25rem 0.6rem;border-radius:6px;font-size:0.78rem;">${escapeHtml(s)}</span>`;
                      if (s && typeof s === 'object') {
                        const org = s.organization ? `<strong>${escapeHtml(s.organization)}</strong>: ` : '';
                        const title = escapeHtml(s.title || 'Référence');
                        const inner = `${org}${title}`;
                        return s.url
                          ? `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" style="background:#f5f3ff;border:1px solid #ddd6fe;color:#6d28d9;padding:0.25rem 0.6rem;border-radius:6px;font-size:0.78rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.3rem;"><span>🔗</span> ${inner}</a>`
                          : `<span style="background:#f8fafc;border:1px solid #cbd5e1;padding:0.25rem 0.6rem;border-radius:6px;font-size:0.78rem;">${inner}</span>`;
                      }
                      return '';
                    }).filter(Boolean).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- 2. BIS : ENCART ÉDITORIAL « LE SAVIEZ-VOUS ? » -->
          ${renderSaviezVousHtml(job)}

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

    // Focus immédiat pour permettre le défilement au clavier (Flèches, PageDown/Up, Espace)
    if (dossierBody) {
      setTimeout(() => {
        try { dossierBody.focus({ preventScroll: true }); } catch (_) {}
      }, 60);
    }

    // Défilement universel : si l'utilisateur scrolle sur l'en-tête (hero), les onglets ou les bordures,
    // transférer immédiatement le défilement au corps du dossier
    overlay.addEventListener('wheel', (e) => {
      if (!dossierBody) return;
      if (e.target.closest('.dossier-body')) {
        // Le curseur est déjà dans le corps, le scroll natif s'exécute
        return;
      }
      dossierBody.scrollTop += e.deltaY;
    }, { passive: true });

    // Relai tactile pour écrans mobiles/tactiles quand le swipe démarre sur l'image ou le header
    let modalTouchStartY = null;
    overlay.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        modalTouchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    overlay.addEventListener('touchmove', (e) => {
      if (!dossierBody || modalTouchStartY === null) return;
      if (e.target.closest('.dossier-body')) return;
      if (e.touches && e.touches[0]) {
        const currentY = e.touches[0].clientY;
        const deltaY = modalTouchStartY - currentY;
        modalTouchStartY = currentY;
        dossierBody.scrollTop += deltaY;
      }
    }, { passive: true });

    overlay.addEventListener('touchend', () => {
      modalTouchStartY = null;
    }, { passive: true });

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

        // Réinitialiser la position de défilement au sommet du nouvel onglet
        if (dossierBody) {
          dossierBody.scrollTo({ top: 0, behavior: 'smooth' });
        }

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
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const closeModal = () => {
      window.removeEventListener('keydown', handleKeyDown);
      overlay.classList.remove('active');
      document.body.classList.remove('modal-open');
      setTimeout(() => overlay.remove(), 320);
    };

    const closeX = overlay.querySelector('#dossierCloseX');
    const closeBtn = overlay.querySelector('#dossierCloseBtn');
    if (closeX) closeX.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Clic sur l'arrière-plan sombre hors de la modale pour fermer
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });

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
  // COMPOSANTS DE NAVIGATION AMÉLIORÉE (STICKY TOOLBAR & FILTRE LOCAL)
  // =========================================================================
  function initLocalJobsFilter() {
    if (!dom.localJobsFilterInput) return;

    dom.localJobsFilterInput.addEventListener('input', (e) => {
      const q = (e.target.value || '').trim();
      AppState.localSearchQuery = q;
      AppState.jobsDisplayedCount = AppState.jobsPageSize;
      if (dom.localJobsFilterClear) {
        dom.localJobsFilterClear.style.display = q ? 'block' : 'none';
      }
      renderJobCardsList(AppState.currentFilteredJobsList);
    });

    if (dom.localJobsFilterClear) {
      dom.localJobsFilterClear.addEventListener('click', () => {
        dom.localJobsFilterInput.value = '';
        AppState.localSearchQuery = '';
        dom.localJobsFilterClear.style.display = 'none';
        AppState.jobsDisplayedCount = AppState.jobsPageSize;
        renderJobCardsList(AppState.currentFilteredJobsList);
      });
    }
  }

  function updateStickyToolbarInfo(family) {
    if (!dom.stickyOrientationToolbar) return;

    if (family) {
      if (dom.stickyFamilyIcon) dom.stickyFamilyIcon.textContent = family.icon || '💼';
      if (dom.stickyFamilyName) dom.stickyFamilyName.textContent = family.name || 'Famille';

      const familyDomains = (typeof window.OrientationData.getFamilyDomains === 'function')
        ? window.OrientationData.getFamilyDomains(family.id)
        : ((family.id === 'numerique-ia' && typeof window.OrientationData.getDigitalDomains === 'function') ? window.OrientationData.getDigitalDomains() : []);

      if (familyDomains && familyDomains.length > 0) {
        if (dom.stickyDomainDropdownWrap) dom.stickyDomainDropdownWrap.style.display = 'block';
        if (dom.stickyDomainSelect) {
          const allDomainsLabel = (family.id === 'numerique-ia')
            ? `🌟 Tous les pôles (${familyDomains.length})`
            : `🌟 Tous les domaines (${familyDomains.length})`;

          dom.stickyDomainSelect.innerHTML = `
            <option value="all" ${AppState.selectedDomain === 'all' ? 'selected' : ''}>${escapeHtml(allDomainsLabel)}</option>
            ${familyDomains.map(d => `<option value="${escapeHtml(d.id)}" ${AppState.selectedDomain === d.id ? 'selected' : ''}>${escapeHtml(d.icon)} ${escapeHtml(d.name)}</option>`).join('')}
          `;
        }

        const activeDomObj = (AppState.selectedDomain !== 'all')
          ? familyDomains.find(d => d.id === AppState.selectedDomain)
          : null;

        if (activeDomObj) {
          if (dom.stickySep) dom.stickySep.style.display = 'inline';
          if (dom.stickyPôleName) {
            dom.stickyPôleName.style.display = 'inline';
            dom.stickyPôleName.textContent = `${activeDomObj.icon} ${activeDomObj.name}`;
          }
        } else {
          if (dom.stickySep) dom.stickySep.style.display = 'none';
          if (dom.stickyPôleName) dom.stickyPôleName.style.display = 'none';
        }
      } else {
        if (dom.stickyDomainDropdownWrap) dom.stickyDomainDropdownWrap.style.display = 'none';
        if (dom.stickySep) dom.stickySep.style.display = 'none';
        if (dom.stickyPôleName) dom.stickyPôleName.style.display = 'none';
      }
    } else {
      if (dom.stickyFamilyIcon) dom.stickyFamilyIcon.textContent = '📁';
      if (dom.stickyFamilyName) dom.stickyFamilyName.textContent = 'Tous les dossiers métiers';
      if (dom.stickyDomainDropdownWrap) dom.stickyDomainDropdownWrap.style.display = 'none';
      if (dom.stickySep) dom.stickySep.style.display = 'none';
      if (dom.stickyPôleName) dom.stickyPôleName.style.display = 'none';
    }
  }

  function initStickyToolbar() {
    if (dom.stickyBtnBackFamilies) {
      dom.stickyBtnBackFamilies.addEventListener('click', () => {
        setView('FAMILIES');
        scrollToElement(dom.familiesGridContainer || dom.explorerSection || 200, -80);
      });
    }

    if (dom.stickyBtnScrollTop) {
      dom.stickyBtnScrollTop.addEventListener('click', () => {
        const target = (dom.familyDrilldownContainer && dom.familyDrilldownContainer.style.display !== 'none')
          ? dom.familyDrilldownContainer
          : (dom.localJobsFilterBar || dom.jobsGridContainer || 200);
        scrollToElement(target, -90);
      });
    }

    if (dom.btnFloatingScrollTop) {
      dom.btnFloatingScrollTop.addEventListener('click', () => {
        scrollToElement(0, 0);
      });
    }

    if (dom.stickyDomainSelect) {
      dom.stickyDomainSelect.addEventListener('change', (e) => {
        const chosenDomain = e.target.value;
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

        const family = window.OrientationData.getFamily(AppState.selectedFamilyId);
        if (family) {
          renderSubdomainsBar(family);
          updateFamilyBreadcrumbs(family);
          updateStickyToolbarInfo(family);
          renderJobsForFamily(family.id, 'all', chosenDomain);
          scrollToElement(dom.jobsGridContainer, -140);
        }
      });
    }

    const checkStickyScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const isEligible = ['FAMILY_DRILLDOWN', 'ALL_JOBS', 'SEARCH'].includes(AppState.currentView);

      if (isEligible && scrollY > 480) {
        if (dom.stickyOrientationToolbar) dom.stickyOrientationToolbar.style.display = 'block';
        if (dom.btnFloatingScrollTop) dom.btnFloatingScrollTop.classList.add('is-visible');
      } else {
        if (dom.stickyOrientationToolbar) dom.stickyOrientationToolbar.style.display = 'none';
        if (dom.btnFloatingScrollTop) dom.btnFloatingScrollTop.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', checkStickyScroll, { passive: true });
    if (window.lenis && typeof window.lenis.on === 'function') {
      window.lenis.on('scroll', checkStickyScroll);
    }
  }

  // =========================================================================
  // GESTION DU TIROIR LATÉRAL MOBILE (OFF-CANVAS DRAWER) & ACCORDÉON BOUSSOLE
  // =========================================================================
  function initMobileInterestAccordion() {
    if (!dom.interestAccordionToggle || !dom.interestExplorerBox) return;

    const isMobile = () => window.innerWidth < 768;

    const updateAccordionState = () => {
      if (isMobile()) {
        dom.interestAccordionToggle.style.display = 'flex';
        if (AppState.currentView === 'INTERESTS') {
          dom.interestAccordionToggle.setAttribute('aria-expanded', 'true');
          dom.interestExplorerBox.style.display = 'block';
        } else {
          dom.interestAccordionToggle.setAttribute('aria-expanded', 'false');
          dom.interestExplorerBox.style.display = 'none';
        }
      } else {
        dom.interestAccordionToggle.style.display = 'none';
        if (AppState.currentView === 'INTERESTS') {
          dom.interestExplorerBox.style.display = 'block';
        } else {
          dom.interestExplorerBox.style.display = 'none';
        }
      }
    };

    dom.interestAccordionToggle.addEventListener('click', () => {
      const isExpanded = dom.interestAccordionToggle.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;
      dom.interestAccordionToggle.setAttribute('aria-expanded', String(nextState));
      dom.interestExplorerBox.style.display = nextState ? 'block' : 'none';
      if (nextState) {
        scrollToElement(dom.interestAccordionToggle, -80);
      }
    });

    window.addEventListener('resize', () => {
      if (!isMobile()) {
        dom.interestAccordionToggle.style.display = 'none';
        if (AppState.currentView === 'INTERESTS') {
          dom.interestExplorerBox.style.display = 'block';
        } else {
          dom.interestExplorerBox.style.display = 'none';
        }
      } else {
        dom.interestAccordionToggle.style.display = 'flex';
      }
    });

    updateAccordionState();
  }

  function populateDrawerContent() {
    if (!dom.drawerBodyContent) return;

    if (AppState.currentView === 'FAMILY_DRILLDOWN' && AppState.selectedFamilyId) {
      const family = window.OrientationData.getFamily(AppState.selectedFamilyId);
      const allFamilies = (typeof window.OrientationData.getFamilies === 'function')
        ? window.OrientationData.getFamilies()
        : [];
      const familyDomains = (typeof window.OrientationData.getFamilyDomains === 'function')
        ? window.OrientationData.getFamilyDomains(family.id)
        : ((family.id === 'numerique-ia' && typeof window.OrientationData.getDigitalDomains === 'function') ? window.OrientationData.getDigitalDomains() : []);

      let html = `
        <div style="margin-bottom:1.5rem;">
          <label style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;color:#0284c7;font-weight:700;display:block;margin-bottom:0.5rem;">Changer de famille</label>
          <select id="drawerFamilySelect" style="width:100%;min-height:44px;padding:0.5rem 0.75rem;border-radius:10px;border:1.5px solid #cbd5e1;font-size:0.92rem;font-weight:600;color:#0f172a;background:#ffffff;">
            ${allFamilies.map(f => `<option value="${escapeHtml(f.id)}" ${f.id === family.id ? 'selected' : ''}>${escapeHtml(f.icon || '📁')} ${escapeHtml(f.name)}</option>`).join('')}
          </select>
        </div>
      `;

      if (familyDomains && familyDomains.length > 0) {
        html += `
          <div style="margin-bottom:1.5rem;">
            <label style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;color:#0284c7;font-weight:700;display:block;margin-bottom:0.6rem;">Pôle spécialisé</label>
            <div style="display:flex;flex-direction:column;gap:0.4rem;">
              <button type="button" class="drawer-filter-btn ${AppState.selectedDomain === 'all' ? 'active' : ''}" data-domain-id="all" style="min-height:44px;text-align:left;padding:0.6rem 0.9rem;border-radius:10px;border:1.5px solid ${AppState.selectedDomain === 'all' ? '#0284c7' : '#e2e8f0'};background:${AppState.selectedDomain === 'all' ? '#f0f9ff' : '#ffffff'};font-weight:600;font-size:0.88rem;color:#0f172a;cursor:pointer;">
                🌟 Tous les pôles (${familyDomains.length})
              </button>
              ${familyDomains.map(d => `
                <button type="button" class="drawer-filter-btn ${AppState.selectedDomain === d.id ? 'active' : ''}" data-domain-id="${escapeHtml(d.id)}" style="min-height:44px;text-align:left;padding:0.6rem 0.9rem;border-radius:10px;border:1.5px solid ${AppState.selectedDomain === d.id ? '#0284c7' : '#e2e8f0'};background:${AppState.selectedDomain === d.id ? '#f0f9ff' : '#ffffff'};font-weight:600;font-size:0.88rem;color:#0f172a;cursor:pointer;">
                  ${escapeHtml(d.icon)} ${escapeHtml(d.name)}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Sous-domaines
      let subdomains = [];
      if (AppState.selectedDomain !== 'all') {
        const domObj = familyDomains.find(d => d.id === AppState.selectedDomain);
        if (domObj && Array.isArray(domObj.subdomains)) subdomains = domObj.subdomains;
      } else {
        subdomains = family.subdomains || [];
      }

      if (subdomains && subdomains.length > 0) {
        html += `
          <div style="margin-bottom:1.5rem;">
            <label style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;color:#0284c7;font-weight:700;display:block;margin-bottom:0.6rem;">Sous-domaines</label>
            <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
              <button type="button" class="drawer-subdomain-btn ${AppState.selectedSubdomain === 'all' ? 'active' : ''}" data-subdomain="all" style="min-height:44px;padding:0.5rem 0.85rem;border-radius:8px;border:1.5px solid ${AppState.selectedSubdomain === 'all' ? '#0284c7' : '#e2e8f0'};background:${AppState.selectedSubdomain === 'all' ? '#0284c7' : '#ffffff'};color:${AppState.selectedSubdomain === 'all' ? '#ffffff' : '#0f172a'};font-weight:600;font-size:0.85rem;cursor:pointer;">
                Tous
              </button>
              ${subdomains.map(s => `
                <button type="button" class="drawer-subdomain-btn ${AppState.selectedSubdomain === s ? 'active' : ''}" data-subdomain="${escapeHtml(s)}" style="min-height:44px;padding:0.5rem 0.85rem;border-radius:8px;border:1.5px solid ${AppState.selectedSubdomain === s ? '#0284c7' : '#e2e8f0'};background:${AppState.selectedSubdomain === s ? '#0284c7' : '#ffffff'};color:${AppState.selectedSubdomain === s ? '#ffffff' : '#0f172a'};font-weight:600;font-size:0.85rem;cursor:pointer;">
                  ${escapeHtml(s)}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }

      dom.drawerBodyContent.innerHTML = html;

      const famSelect = document.getElementById('drawerFamilySelect');
      if (famSelect) {
        famSelect.addEventListener('change', (e) => {
          setView('FAMILY_DRILLDOWN', { familyId: e.target.value, domain: 'all', subdomain: 'all' });
          if (dom.filtersOffcanvasDrawer) dom.filtersOffcanvasDrawer.classList.remove('is-open');
          if (dom.filtersDrawerBackdrop) dom.filtersDrawerBackdrop.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      }

      dom.drawerBodyContent.querySelectorAll('.drawer-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const domId = btn.getAttribute('data-domain-id');
          AppState.selectedDomain = domId;
          AppState.selectedSubdomain = 'all';
          const f = window.OrientationData.getFamily(AppState.selectedFamilyId);
          if (f) {
            renderSubdomainsBar(f);
            updateFamilyBreadcrumbs(f);
            updateStickyToolbarInfo(f);
          }
          renderJobsForFamily(AppState.selectedFamilyId, 'all', domId);
          populateDrawerContent();
        });
      });

      dom.drawerBodyContent.querySelectorAll('.drawer-subdomain-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const sub = btn.getAttribute('data-subdomain');
          AppState.selectedSubdomain = sub;
          const f = window.OrientationData.getFamily(AppState.selectedFamilyId);
          if (f) {
            renderSubdomainsBar(f);
            updateFamilyBreadcrumbs(f);
            updateStickyToolbarInfo(f);
          }
          renderJobsForFamily(AppState.selectedFamilyId, sub, AppState.selectedDomain);
          if (dom.filtersOffcanvasDrawer) dom.filtersOffcanvasDrawer.classList.remove('is-open');
          if (dom.filtersDrawerBackdrop) dom.filtersDrawerBackdrop.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });
    } else {
      const allFamilies = (typeof window.OrientationData.getFamilies === 'function')
        ? window.OrientationData.getFamilies()
        : [];
      dom.drawerBodyContent.innerHTML = `
        <div>
          <label style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;color:#0284c7;font-weight:700;display:block;margin-bottom:0.75rem;">Choisir une famille de métiers</label>
          <div style="display:flex;flex-direction:column;gap:0.4rem;">
            ${allFamilies.map(f => `
              <button type="button" class="drawer-family-link-btn" data-family-id="${escapeHtml(f.id)}" style="min-height:44px;text-align:left;padding:0.65rem 0.9rem;border-radius:10px;border:1.5px solid #e2e8f0;background:#ffffff;font-weight:600;font-size:0.88rem;color:#0f172a;cursor:pointer;display:flex;align-items:center;gap:0.6rem;">
                <span style="font-size:1.15rem;">${escapeHtml(f.icon || '📁')}</span>
                <span>${escapeHtml(f.name)}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
      dom.drawerBodyContent.querySelectorAll('.drawer-family-link-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const fId = btn.getAttribute('data-family-id');
          setView('FAMILY_DRILLDOWN', { familyId: fId, domain: 'all', subdomain: 'all' });
          if (dom.filtersOffcanvasDrawer) dom.filtersOffcanvasDrawer.classList.remove('is-open');
          if (dom.filtersDrawerBackdrop) dom.filtersDrawerBackdrop.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  function initMobileFiltersDrawer() {
    if (!dom.btnOpenFiltersDrawer || !dom.filtersOffcanvasDrawer) return;

    const openDrawer = () => {
      populateDrawerContent();
      dom.filtersOffcanvasDrawer.classList.add('is-open');
      if (dom.filtersDrawerBackdrop) dom.filtersDrawerBackdrop.classList.add('is-open');
      dom.filtersOffcanvasDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      dom.filtersOffcanvasDrawer.classList.remove('is-open');
      if (dom.filtersDrawerBackdrop) dom.filtersDrawerBackdrop.classList.remove('is-open');
      dom.filtersOffcanvasDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    dom.btnOpenFiltersDrawer.addEventListener('click', openDrawer);
    if (dom.btnCloseFiltersDrawer) dom.btnCloseFiltersDrawer.addEventListener('click', closeDrawer);
    if (dom.filtersDrawerBackdrop) dom.filtersDrawerBackdrop.addEventListener('click', closeDrawer);
    if (dom.btnApplyDrawerFilters) dom.btnApplyDrawerFilters.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dom.filtersOffcanvasDrawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  // =========================================================================
  // INITIALISATION GLOBALE DU MODULE
  // =========================================================================
  document.addEventListener('DOMContentLoaded', async () => {
    initDomRefs();
    initUniversalSearch();
    initBoussoleModule();
    initLocalJobsFilter();
    initStickyToolbar();
    initMobileInterestAccordion();
    initMobileFiltersDrawer();

    // Bouton de navigation vers les 23 familles
    if (dom.btnExploreFamilies) {
      dom.btnExploreFamilies.addEventListener('click', () => {
        setView('FAMILIES');
        scrollToElement(dom.familiesGridContainer || dom.explorerSection || 200, -80);
      });
    }

    // Bouton Boussole « Je ne sais pas encore »
    if (dom.btnDiscoverInterests) {
      dom.btnDiscoverInterests.addEventListener('click', () => {
        setView('INTERESTS');
        scrollToElement(dom.interestExplorerBox || dom.explorerSection || 200, -80);
      });
    }

    // Bouton Voir tous les métiers
    if (dom.btnViewAllJobs) {
      dom.btnViewAllJobs.addEventListener('click', () => {
        setView('ALL_JOBS');
        scrollToElement(dom.localJobsFilterBar || dom.jobsGridContainer || 200, -80);
      });
    }

    // Bouton retour aux familles
    if (dom.btnBackToFamilies) {
      dom.btnBackToFamilies.addEventListener('click', () => {
        setView('FAMILIES');
        scrollToElement(dom.familiesGridContainer || dom.explorerSection || 200, -80);
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
      setTimeout(() => {
        scrollToElement(dom.familyDrilldownContainer || dom.explorerSection || 200, -80);
      }, 150);
    } else if (searchParam) {
      if (dom.heroSearchInput) dom.heroSearchInput.value = searchParam;
      AppState.searchQuery = searchParam;
      setView('SEARCH');
      setTimeout(() => {
        scrollToElement(dom.searchResultsSummary || dom.jobsGridContainer || 200, -80);
      }, 150);
    } else if (window.location.hash === '#decouvrir') {
      setView('INTERESTS');
      setTimeout(() => {
        scrollToElement(dom.interestExplorerWrap || dom.interestExplorerBox || dom.explorerSection || 200, -80);
      }, 150);
    } else {
      setView('FAMILIES');
    }
  });

  // Exposer les méthodes d'accès public
  window.OrientationUI = {
    setView,
    openJobModal,
    scrollToElement,
    syncScrollLayout
  };

})();
