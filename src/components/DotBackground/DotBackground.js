import React, { useRef, useEffect } from 'react';
import './DotBackground.css';

const DotBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let isVisible = true;

    // Mouse tracking
    const mouse = {
      x: null,
      y: null,
      radius: 170,
      active: false
    };

    // Shockwave ripples on click
    const ripples = [];

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    // Determine particle count based on screen area
    const getParticleCount = () => {
      const area = width * height;
      if (width < 768) return 35;
      if (width < 1200) return 55;
      return Math.min(Math.floor(area / 18000), 75);
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : (Math.random() < 0.5 ? 0 : width);
        this.y = initial ? Math.random() * height : Math.random() * height;
        this.radius = Math.random() * 2 + 1.2;
        this.baseRadius = this.radius;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.originX = this.x;
        this.originY = this.y;
        this.pulse = Math.random() * Math.PI;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
        this.hue = Math.random() > 0.4 ? 'slate' : 'accent';
      }

      update() {
        this.pulse += this.pulseSpeed;

        // Base velocity
        this.x += this.vx;
        this.y += this.vy;

        // Bounce or wrap edges smoothly
        if (this.x < -20) this.x = width + 20;
        else if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        else if (this.y > height + 20) this.y = -20;

        // Mouse interaction (gentle magnet/repulsion)
        if (mouse.active && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            // Gentle nudge away from mouse
            this.x -= Math.cos(angle) * force * 1.5;
            this.y -= Math.sin(angle) * force * 1.5;
          }
        }

        // Ripple interaction
        for (let i = 0; i < ripples.length; i++) {
          const rip = ripples[i];
          const dx = this.x - rip.x;
          const dy = this.y - rip.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = Math.abs(dist - rip.radius);
          if (diff < 30) {
            const force = (30 - diff) / 30 * rip.power;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force;
            this.y += Math.sin(angle) * force;
          }
        }
      }

      draw(isDark) {
        const pulseFactor = 0.8 + 0.3 * Math.sin(this.pulse);
        const r = this.radius * pulseFactor;

        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);

        if (isDark) {
          if (this.hue === 'accent') {
            ctx.fillStyle = `rgba(56, 189, 248, ${0.75 * pulseFactor})`;
            ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
            ctx.shadowBlur = 8;
          } else {
            ctx.fillStyle = `rgba(226, 232, 240, ${0.65 * pulseFactor})`;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
            ctx.shadowBlur = 4;
          }
        } else {
          if (this.hue === 'accent') {
            ctx.fillStyle = `rgba(14, 165, 233, ${0.85 * pulseFactor})`;
            ctx.shadowColor = 'rgba(14, 165, 233, 0.4)';
            ctx.shadowBlur = 6;
          } else {
            ctx.fillStyle = `rgba(30, 41, 59, ${0.7 * pulseFactor})`;
            ctx.shadowColor = 'rgba(30, 41, 59, 0.2)';
            ctx.shadowBlur = 3;
          }
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    let particles = [];
    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    resize();
    initParticles();

    // Mouse events on window so user can interact from anywhere
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
    };

    const onClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 180,
        power: 4,
        alpha: 0.6
      });
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    const onTouchEnd = () => {
      mouse.active = false;
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });
    window.addEventListener('click', onClick, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    const handleResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Animation Loop
    const animate = () => {
      if (!isVisible) return;

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.clearRect(0, 0, width, height);

      // 1. Draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += 4;
        rip.alpha *= 0.94;
        rip.power *= 0.92;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(56, 189, 248, ${rip.alpha * 0.4})`
          : `rgba(14, 165, 233, ${rip.alpha * 0.35})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (rip.radius > rip.maxRadius || rip.alpha < 0.02) {
          ripples.splice(i, 1);
        }
      }

      // 2. Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(isDark);
      }

      // 3. Connect particles with constellation lines
      const maxDist = 125;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            if (isDark) {
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.22})`;
            } else {
              ctx.strokeStyle = `rgba(71, 85, 105, ${alpha * 0.22})`;
            }
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // 4. Connect particles to Mouse cursor
      if (mouse.active && mouse.x !== null && mouse.y !== null) {
        // Draw mouse glow point
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.9)' : 'rgba(14, 165, 233, 0.9)';
        ctx.shadowColor = isDark ? 'rgba(56, 189, 248, 0.8)' : 'rgba(14, 165, 233, 0.7)';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);

            if (isDark) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.45})`;
            } else {
              ctx.strokeStyle = `rgba(14, 165, 233, ${alpha * 0.42})`;
            }
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('click', onClick);
      window.removeEventListener('touchstart', onTouchMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="dot-bg-wrapper" aria-hidden="true">
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />
      <div className="aurora-orb aurora-orb-4" />
      <canvas ref={canvasRef} className="dot-background-canvas" />
    </div>
  );
};

export default DotBackground;
