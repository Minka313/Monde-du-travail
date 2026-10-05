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

  // Optimiseur d'images haute performance (WebP/AVIF auto via CDN Imgix/Unsplash, dimensionnement exact, qualité contrôlée)
  function optimizeImageUrl(url, width = 420, quality = 60) {
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
        if (dom.viewSectionTitle) dom.viewSectionTitle.textContent = 'Les 21 Grandes Familles Professionnelles';
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
      const rawImg = safeUrl(family.image, 'images/orientation.webp');
      const img = optimizeImageUrl(rawImg, 420, 65);

      return `
        <article class="family-card stagger-item" data-family-id="${escapeHtml(family.id)}" style="--family-accent: ${escapeHtml(family.color || '#3b82f6')}; --stagger-idx: ${idx % 8};">
          <div class="family-card-media">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(family.name)}" loading="lazy" decoding="async" width="400" height="225">
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
      const rawImg = safeUrl(job.image, 'images/orientation.webp');
      const img = optimizeImageUrl(rawImg, 420, 65);
      const techSkills = job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.slice(0, 3) : [];
      const totalSkillsCount = (job.skills && Array.isArray(job.skills.technical) ? job.skills.technical.length : 0);
      const isEmerging = Boolean(job.isEmerging);
      const isESD = Boolean(job.sourceESD);

      return `
        <article class="card job-card-modern job-card-enter stagger-item" data-job-slug="${escapeHtml(job.slug || job.id)}" style="--stagger-idx: ${idx % 8};">
          <div class="job-card-media-wrap">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(job.title)}" loading="lazy" decoding="async" width="400" height="247">
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
            <a href="job-detail.html?slug=${escapeHtml(encodeURIComponent(job.slug || job.id))}" class="btn-job-action" aria-label="Consulter la fiche complète du métier ${escapeHtml(job.title)}">
              <span>Découvrir la fiche complète</span>
              <span class="arrow-icon">&rarr;</span>
            </a>
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

    // Clics sur les cartes de métiers (navigation vers la page dédiée)
    dom.jobsGridContainer.querySelectorAll('.job-card-modern').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const slug = card.getAttribute('data-job-slug');
        if (slug) openJob(slug);
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
              Consulte le catalogue complet des 21 familles pour découvrir l'ensemble des métiers de ce profil.
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
            el.addEventListener('click', (e) => {
              e.stopPropagation();
              const jId = el.getAttribute('data-job-id');
              const foundJob = recommendedJobs.find(j => j.id === jId);
              if (foundJob) {
                openJob(foundJob);
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
            if (slug) openJob(slug);
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
              Essaie avec d’autres mots-clés (ex: "code", "langues", "lettres", "histoire", "psychologie", "finance") ou explore nos 21 grandes familles.
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
  // FICHE MÉTIER HAUTE PROFONDEUR — NAVIGATION VERS LA PAGE DÉDIÉE SANS MODALE
  // =========================================================================
  function openJob(jobOrSlug) {
    if (!jobOrSlug) return;
    const slug = typeof jobOrSlug === 'string' ? jobOrSlug : (jobOrSlug.slug || jobOrSlug.id);
    if (!slug) return;
    window.location.href = 'job-detail.html?slug=' + encodeURIComponent(slug);
  }

  // Alias rétrocompatible pour les appels externes éventuels
  async function openJobModal(job) {
    openJob(job);
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

    // Bouton de navigation vers les 21 familles
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

    // Analyse des paramètres d'URL (Deep Linking)
    const urlParams = new URLSearchParams(window.location.search);
    const familyParam = urlParams.get('family');
    const domainParam = urlParams.get('domain');
    const subdomainParam = urlParams.get('subdomain');
    const jobParam = urlParams.get('job');
    const searchParam = urlParams.get('search');

    if (jobParam) {
      window.location.replace('job-detail.html?slug=' + encodeURIComponent(jobParam));
      return;
    }

    if (familyParam) {
      await window.OrientationData.getAllJobs();
      setView('FAMILY_DRILLDOWN', { familyId: familyParam, domain: domainParam || 'all', subdomain: subdomainParam || 'all' });
      setTimeout(() => {
        scrollToElement(dom.familyDrilldownContainer || dom.explorerSection || 200, -80);
      }, 150);
    } else if (searchParam) {
      await window.OrientationData.getAllJobs();
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
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => window.OrientationData.getAllJobs());
      } else {
        setTimeout(() => window.OrientationData.getAllJobs(), 800);
      }
    } else {
      // Affichage instantané du niveau 1 (23 Grandes Familles) sans bloquer
      setView('FAMILIES');
      // Préchargement progressif non bloquant en arrière-plan
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => window.OrientationData.getAllJobs());
      } else {
        setTimeout(() => window.OrientationData.getAllJobs(), 1200);
      }
    }
  });

  // Exposer les méthodes d'accès public
  window.OrientationUI = {
    setView,
    openJob,
    openJobModal: openJob,
    scrollToElement,
    syncScrollLayout
  };

})();
