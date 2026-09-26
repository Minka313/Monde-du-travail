/**
 * orientation-wheel.js
 * Moteur de Roue Interactive (Spinning Wheel of Orientation) en HTML5 Canvas 60 FPS
 * Supporte la physique d'accélération/décélération, l'aiguille oscillante et l'arrêt déterministe.
 */

(function () {
  'use strict';

  class OrientationWheel {
    constructor(canvasElement, options = {}) {
      this.canvas = canvasElement;
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.sectors = [
        { code: 'R', label: 'Réaliste', icon: '🛠️', color: '#0284c7', textColor: '#ffffff' },
        { code: 'I', label: 'Investigateur', icon: '🔬', color: '#4f46e5', textColor: '#ffffff' },
        { code: 'A', label: 'Artistique', icon: '🎨', color: '#9333ea', textColor: '#ffffff' },
        { code: 'S', label: 'Social', icon: '🤝', color: '#059669', textColor: '#ffffff' },
        { code: 'E', label: 'Entreprenant', icon: '💼', color: '#d97706', textColor: '#ffffff' },
        { code: 'C', label: 'Conventionnel', icon: '📊', color: '#475569', textColor: '#ffffff' }
      ];

      this.numSectors = this.sectors.length;
      this.arcSize = (2 * Math.PI) / this.numSectors;

      this.currentAngle = 0; // en radians
      this.isSpinning = false;
      this.animId = null;

      this.needleAngle = 0; // oscillation de l'aiguille
      this.lastPassedSector = -1;

      this.options = Object.assign({
        onSpinStart: () => {},
        onSectorTick: () => {},
        onSpinComplete: () => {}
      }, options);

      this.initCanvasSize();
      this.draw();

      window.addEventListener('resize', () => {
        this.initCanvasSize();
        this.draw();
      });
    }

    initCanvasSize() {
      if (!this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const size = Math.min(rect.width || 360, window.innerWidth - 32, 420);

      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = size * dpr;
      this.canvas.height = size * dpr;
      this.canvas.style.width = `${size}px`;
      this.canvas.style.height = `${size}px`;

      this.ctx.scale(dpr, dpr);
      this.size = size;
      this.center = size / 2;
      this.radius = (size / 2) - 18; // marge pour le contour et rivets
    }

    draw() {
      if (!this.ctx) return;
      const { ctx, center, radius, arcSize, sectors, currentAngle } = this;

      ctx.clearRect(0, 0, this.size, this.size);

      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(currentAngle);

      // 1. OMBRE EXTÉRIEURE DU DISQUE
      ctx.save();
      ctx.shadowColor = 'rgba(2, 6, 23, 0.45)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#071526';
      ctx.fill();
      ctx.restore();

      // 2. DESSIN DES SECTEURS RIASEC
      sectors.forEach((sec, i) => {
        const angleStart = i * arcSize;
        const angleEnd = angleStart + arcSize;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius - 6, angleStart, angleEnd);
        ctx.closePath();

        // Dégradé radial dans chaque secteur
        const grad = ctx.createRadialGradient(0, 0, 20, 0, 0, radius);
        grad.addColorStop(0, '#ffffff15');
        grad.addColorStop(0.3, sec.color);
        grad.addColorStop(1, '#00000040');

        ctx.fillStyle = sec.color;
        ctx.fill();
        ctx.fillStyle = grad;
        ctx.fill();

        // Séparateurs de tranches
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 3. TEXTES & ICÔNES DANS LA TRANCHE
        ctx.save();
        const textAngle = angleStart + (arcSize / 2);
        ctx.rotate(textAngle);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';

        // Icône du profil
        ctx.font = '24px "Apple Color Emoji", "Segoe UI Emoji", sans-serif';
        ctx.fillText(sec.icon, radius - 24, 0);

        // Nom du profil
        ctx.font = 'bold 14px "Inter", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
        ctx.shadowBlur = 4;
        ctx.fillText(sec.label, radius - 56, 0);

        ctx.restore();
      });

      // 4. BORDURE EXTÉRIEURE BISEAUTÉE ET RIVETS DORÉS
      ctx.beginPath();
      ctx.arc(0, 0, radius - 4, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.85)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Rivets décoratifs dorés
      const totalRivets = 24;
      for (let r = 0; r < totalRivets; r++) {
        const rivetAngle = (r / totalRivets) * 2 * Math.PI;
        const rx = Math.cos(rivetAngle) * (radius - 1);
        const ry = Math.sin(rivetAngle) * (radius - 1);

        ctx.beginPath();
        ctx.arc(rx, ry, 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = r % 4 === 0 ? '#f59e0b' : '#cbd5e1';
        ctx.fill();
      }

      ctx.restore(); // Fin de la rotation globale

      // 5. MOYEU CENTRAL FIXE / HALO BOUSSOLE
      ctx.save();
      ctx.translate(center, center);

      // Ombre du moyeu
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 12;

      // Cercle central or et bleu nuit
      ctx.beginPath();
      ctx.arc(0, 0, 36, 0, 2 * Math.PI);
      const hubGrad = ctx.createLinearGradient(-36, -36, 36, 36);
      hubGrad.addColorStop(0, '#f59e0b');
      hubGrad.addColorStop(0.5, '#0f253e');
      hubGrad.addColorStop(1, '#071526');
      ctx.fillStyle = hubGrad;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#f59e0b';
      ctx.stroke();

      // Emblème central
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🧭', 0, 1);

      ctx.restore();

      // 6. POINTEUR SUPÉRIEUR FIXE (Aiguille indicatrice en or)
      this.drawNeedle();
    }

    drawNeedle() {
      const { ctx, center, radius, needleAngle } = this;
      ctx.save();
      ctx.translate(center, center - radius + 8);
      ctx.rotate(needleAngle);

      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 4;

      // Dessin de l'aiguille triangulaire
      ctx.beginPath();
      ctx.moveTo(-11, -18);
      ctx.lineTo(11, -18);
      ctx.lineTo(0, 18);
      ctx.closePath();

      const needleGrad = ctx.createLinearGradient(-11, 0, 11, 0);
      needleGrad.addColorStop(0, '#f59e0b');
      needleGrad.addColorStop(0.5, '#fef08a');
      needleGrad.addColorStop(1, '#d97706');

      ctx.fillStyle = needleGrad;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Pivot supérieur de l'aiguille
      ctx.beginPath();
      ctx.arc(0, -18, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#071526';
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    }

    /**
     * Fait tourner la roue jusqu'à un secteur cible déterministe (code RIASEC : 'R', 'I', 'A', 'S', 'E', 'C')
     */
    spinTo(targetCode, onComplete) {
      if (this.isSpinning) return;
      this.isSpinning = true;

      // Détection préférence d'animation réduite
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Trouver l'index du secteur
      let targetIndex = this.sectors.findIndex(s => s.code === targetCode);
      if (targetIndex === -1) targetIndex = 0;

      // Position du pointeur en haut : angle = -Math.PI / 2 (ou 3*PI/2)
      // Le centre du secteur k se trouve à k * arcSize + (arcSize / 2)
      // Après rotation R : textAngle + R = -Math.PI / 2 mod 2PI
      const targetSectorCenter = (targetIndex * this.arcSize) + (this.arcSize / 2);
      const pointerAngle = (3 * Math.PI) / 2; // Haut du cercle

      // Nombre de tours complets pour l'effet de suspense
      const fullRotations = prefersReduced ? 1 : (5 + Math.floor(Math.random() * 2));
      const endAngle = pointerAngle - targetSectorCenter + (fullRotations * 2 * Math.PI);

      const startAngle = this.currentAngle % (2 * Math.PI);
      const totalDelta = endAngle - startAngle;

      const duration = prefersReduced ? 1000 : 4800; // 4.8 secondes de suspense progressif
      const startTime = performance.now();

      this.options.onSpinStart();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Courbe d'atténuation quintique très douce (démarrage véloce, freinage réaliste)
        const easeOut = 1 - Math.pow(1 - progress, 4.5);
        this.currentAngle = startAngle + (totalDelta * easeOut);

        // Détection du passage de secteur pour faire vibrer/osciller l'aiguille
        const normalizedAngle = (this.currentAngle % (2 * Math.PI) + (2 * Math.PI)) % (2 * Math.PI);
        const currentSectorUnderPointer = Math.floor(
          ((pointerAngle - normalizedAngle + (2 * Math.PI)) % (2 * Math.PI)) / this.arcSize
        );

        if (currentSectorUnderPointer !== this.lastPassedSector) {
          this.lastPassedSector = currentSectorUnderPointer;
          this.needleAngle = -0.22; // Coup d'aiguille vers l'arrière
          this.options.onSectorTick(this.sectors[currentSectorUnderPointer]);
        } else {
          // Retour doux de l'aiguille vers le centre
          this.needleAngle *= 0.85;
        }

        this.draw();

        if (progress < 1) {
          this.animId = requestAnimationFrame(animate);
        } else {
          this.isSpinning = false;
          this.needleAngle = 0;
          this.draw();
          const winningSector = this.sectors[targetIndex];
          if (typeof onComplete === 'function') onComplete(winningSector);
          this.options.onSpinComplete(winningSector);
        }
      };

      this.animId = requestAnimationFrame(animate);
    }

    /**
     * Mode Découverte libre / Tirage au sort aléatoire
     */
    spinFree(onComplete) {
      const randomIndex = Math.floor(Math.random() * this.sectors.length);
      const chosen = this.sectors[randomIndex];
      this.spinTo(chosen.code, onComplete);
    }

    destroy() {
      if (this.animId) cancelAnimationFrame(this.animId);
    }
  }

  // Export vers l'espace global
  window.OrientationWheel = OrientationWheel;

})();
