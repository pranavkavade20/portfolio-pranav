import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './PortfolioLoader.css';

/**
 * High-Fidelity Parametric Easing: cubic-bezier(0.4, 0, 0.2, 1)
 * Matches CSS transition timing exactly to ensure sub-pixel sync.
 */
function createCubicBezier(p1x, p1y, p2x, p2y) {
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;

  function sampleCurveX(t) {
    return ((ax * t + bx) * t + cx) * t;
  }
  function sampleCurveY(t) {
    return ((ay * t + by) * t + cy) * t;
  }
  function solveCurveX(x) {
    let t = x;
    for (let i = 0; i < 8; i++) {
      const x2 = sampleCurveX(t) - x;
      if (Math.abs(x2) < 1e-5) return t;
      const d2 = (3 * ax * t + 2 * bx) * t + cx;
      if (Math.abs(d2) < 1e-5) break;
      t = t - x2 / d2;
    }
    return t;
  }
  return function (x) {
    return sampleCurveY(solveCurveX(Math.max(0, Math.min(1, x))));
  };
}

const easeCubic = createCubicBezier(0.4, 0, 0.2, 1);

/**
 * Parametric Centerline of the Ribbon Loop:
 * Path: M 35 25 H 68 A 25 25 0 0 1 68 75 H 35
 */
function getRibbonPoint(progress) {
  const d1 = 33; // 68 - 35
  const d2 = Math.PI * 25; // Semicircle length ≈ 78.5398
  const d3 = 33; // 68 - 35
  const total = d1 + d2 + d3;
  const dist = progress * total;

  if (dist <= d1) {
    const t = dist / d1;
    return { x: 35 + 33 * t, y: 25 };
  } else if (dist <= d1 + d2) {
    const t = (dist - d1) / d2;
    const angle = -Math.PI / 2 + t * Math.PI;
    return { x: 68 + 25 * Math.cos(angle), y: 50 + 25 * Math.sin(angle) };
  } else {
    const t = (dist - d1 - d2) / d3;
    return { x: 68 - 33 * t, y: 75 };
  }
}

/**
 * Premium 7-Second Portfolio Loading Animation
 *
 * Storyboard Timeline (7.0s total):
 * - Phase 01 (0.0s – 0.8s): Initial Spark ignition at center with subtle radial glow
 * - Phase 02 (0.8s – 1.8s): Ribbon Loop Tracing along original geometry with particle trail
 * - Phase 03 (1.8s – 2.8s): Vertical Stem draws up, merging continuously with the loop
 * - Phase 04 (2.8s – 4.0s): Full P Logo resolves sharp, directional tuck shadow, diagonal light sweep
 * - Phase 05 (4.0s – 5.8s): Circular Progress Ring completes from 0% to 100% with glowing beacon
 * - Phase 06 (5.8s – 7.0s): Ring fades, logo settles, "PRANAV / SOFTWARE ENGINEER" reveals, smooth exit
 */
const PortfolioLoader = ({ onComplete }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const sparkHeadRef = useRef(null);
  const ringBeaconRef = useRef(null);
  const completedRef = useRef(false);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const triggerCompletion = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsExiting(true);

    // Save completion state to localStorage
    try {
      localStorage.setItem('portfolio_intro_seen', 'true');
    } catch {
      // Ignore storage errors in restricted iframe/incognito environments
    }

    // Allow exit fade to complete (350ms)
    setTimeout(() => {
      onComplete?.();
    }, 350);
  }, [onComplete]);

  // Lock body scroll while loader is visible
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow || '';
    };
  }, []);

  // Keyboard shortcut: Escape to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        triggerCompletion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerCompletion]);

  // Safety fallback: if anything hangs, guarantee completion after 7.5 seconds
  useEffect(() => {
    const maxDuration = prefersReducedMotion ? 900 : 7500;
    const safetyTimer = setTimeout(() => {
      triggerCompletion();
    }, maxDuration);

    return () => clearTimeout(safetyTimer);
  }, [prefersReducedMotion, triggerCompletion]);

  // Handle Reduced Motion: Short 800ms static presentation
  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        triggerCompletion();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion, triggerCompletion]);

  // Particle Canvas & Kinetic Spark Animation Loop (60 FPS)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palette calibrated for dark vs light mode
    const palette = isDark
      ? ['#FFC226', '#FF7300', '#EB3E05', '#FFE082', '#FFFFFF']
      : ['#D97706', '#EA580C', '#C2410C', '#F59E0B', '#B45309'];

    // 32 ambient zero-G background micro-sparks
    const ambientSparks = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.6,
      vy: -(Math.random() * 0.45 + 0.15),
      vx: (Math.random() - 0.5) * 0.25,
      color: palette[Math.floor(Math.random() * palette.length)],
      alpha: isDark ? Math.random() * 0.4 + 0.2 : Math.random() * 0.3 + 0.15,
      phase: Math.random() * Math.PI * 2,
    }));

    // Dynamic micro-particles emitted along the active spark trail
    const dynamicParticles = [];
    const startTime = performance.now();
    let lockupBurstEmitted = false;

    const render = (now) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      // SVG coordinate scale and position on screen
      let svgScale = 1;
      let svgLeft = width / 2;
      let svgTop = height / 2;

      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        svgScale = rect.width / 160; // ViewBox is -16..144 (width: 160)
        svgLeft = rect.left;
        svgTop = rect.top;
      }

      const toScreenCoord = (svgPt) => ({
        x: svgLeft + (svgPt.x - -16) * svgScale,
        y: svgTop + (svgPt.y - -16) * svgScale,
      });

      // ----------------------------------------------------------------------
      // PHASE 02: Ribbon Loop Tracing (800ms - 1800ms)
      // ----------------------------------------------------------------------
      if (elapsed >= 800 && elapsed < 1800) {
        const rawProgress = (elapsed - 800) / 1000;
        const progress = easeCubic(rawProgress);
        const pt = getRibbonPoint(progress);

        // Update active SVG spark head
        if (sparkHeadRef.current) {
          sparkHeadRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
          sparkHeadRef.current.style.opacity = '1';
        }

        // Emit ember particles along the curve
        const screenPt = toScreenCoord(pt);
        for (let i = 0; i < 2; i++) {
          dynamicParticles.push({
            x: screenPt.x + (Math.random() - 0.5) * 6,
            y: screenPt.y + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 0.8,
            vy: Math.random() * 1.2 + 0.3, // gently falls downward
            size: Math.random() * 1.8 + 0.8,
            color: palette[Math.floor(Math.random() * palette.length)],
            alpha: isDark ? 0.85 : 0.65,
            decay: Math.random() * 0.035 + 0.02,
          });
        }
      }

      // ----------------------------------------------------------------------
      // PHASE 03: Vertical Stem Drawing (1800ms - 2800ms)
      // ----------------------------------------------------------------------
      if (elapsed >= 1800 && elapsed < 2800) {
        const rawProgress = (elapsed - 1800) / 1000;
        const progress = easeCubic(rawProgress);
        const pt = { x: 35, y: 114 - 100 * progress }; // Vertical stem draws up from 114 to 14

        // Update active SVG spark head
        if (sparkHeadRef.current) {
          sparkHeadRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
          sparkHeadRef.current.style.opacity = '1';
        }

        // Emit ember dust
        const screenPt = toScreenCoord(pt);
        for (let i = 0; i < 2; i++) {
          dynamicParticles.push({
            x: screenPt.x + (Math.random() - 0.5) * 5,
            y: screenPt.y + (Math.random() - 0.5) * 5,
            vx: (Math.random() - 0.5) * 0.7,
            vy: Math.random() * 1.4 + 0.4,
            size: Math.random() * 1.8 + 0.8,
            color: palette[Math.floor(Math.random() * palette.length)],
            alpha: isDark ? 0.8 : 0.6,
            decay: Math.random() * 0.035 + 0.02,
          });
        }
      }

      // Hide active spark head after phase 03
      if (elapsed >= 2800 && sparkHeadRef.current) {
        sparkHeadRef.current.style.opacity = '0';
      }

      // ----------------------------------------------------------------------
      // PHASE 04: Lockup Resolution Micro-Burst (At 2800ms)
      // ----------------------------------------------------------------------
      if (elapsed >= 2800 && !lockupBurstEmitted) {
        lockupBurstEmitted = true;
        const centerPt = toScreenCoord({ x: 64, y: 64 });
        for (let i = 0; i < 20; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2.2 + 0.8;
          dynamicParticles.push({
            x: centerPt.x,
            y: centerPt.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: Math.random() * 2.0 + 0.8,
            color: palette[Math.floor(Math.random() * palette.length)],
            alpha: isDark ? 0.9 : 0.7,
            decay: Math.random() * 0.025 + 0.015,
          });
        }
      }

      // ----------------------------------------------------------------------
      // PHASE 05: Circular Progress Ring Beacon (4000ms - 5800ms)
      // ----------------------------------------------------------------------
      if (elapsed >= 4000 && elapsed < 5800) {
        const rawProgress = (elapsed - 4000) / 1800;
        const progress = easeCubic(rawProgress);
        const angle = -Math.PI / 2 + progress * 2 * Math.PI;
        const pt = {
          x: 64 + 58 * Math.cos(angle),
          y: 64 + 58 * Math.sin(angle),
        };

        if (ringBeaconRef.current) {
          ringBeaconRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y})`);
          ringBeaconRef.current.style.opacity = '1';
        }

        // Subtle micro-sparkles along the ring path
        if (Math.random() < 0.3) {
          const screenPt = toScreenCoord(pt);
          dynamicParticles.push({
            x: screenPt.x,
            y: screenPt.y,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 1.5 + 0.6,
            color: '#FFE082',
            alpha: 0.8,
            decay: 0.04,
          });
        }
      }

      // Hide ring beacon after phase 05
      if (elapsed >= 5800 && ringBeaconRef.current) {
        ringBeaconRef.current.style.opacity = '0';
      }

      // ----------------------------------------------------------------------
      // PHASE 06: Final Transition (at 6700ms - 7000ms)
      // ----------------------------------------------------------------------
      if (elapsed >= 6700 && !completedRef.current) {
        triggerCompletion();
      }

      // Render & update dynamic particles
      for (let i = dynamicParticles.length - 1; i >= 0; i--) {
        const p = dynamicParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          dynamicParticles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glowing aura for larger particles
        if (p.size > 1.2 && isDark) {
          ctx.globalAlpha = p.alpha * 0.25;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Render & update ambient background sparks
      for (let i = 0; i < ambientSparks.length; i++) {
        const p = ambientSparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.03;

        const currentAlpha = Math.max(0, p.alpha * (0.7 + 0.3 * Math.sin(p.phase)));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Wrap around screen boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark, prefersReducedMotion, triggerCompletion]);

  return (
    <div
      ref={containerRef}
      className={`pl-container ${isDark ? 'pl-theme-dark' : 'pl-theme-light'} ${
        isExiting ? 'pl-container-exiting' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* 1. Subtle Engineering Grid Backdrop */}
      <div className="pl-grid-backdrop" />

      {/* 2. Soft Ambient Radial Vignette */}
      <div className="pl-vignette" />

      {/* 3. Particle Canvas (Zero-G ambient sparks & kinetic ember trails) */}
      <canvas ref={canvasRef} className="pl-canvas" />

      {/* 4. Refined Skip Button */}
      <button
        onClick={triggerCompletion}
        className="pl-skip-btn"
        aria-label="Skip intro animation"
      >
        <span>Skip</span>
        <span className="pl-skip-kbd">Esc</span>
      </button>

      {/* 5. Main Centered Composition */}
      <div className="pl-stage">
        {/* SVG Container with Exact Original Logo Geometry */}
        <div className="pl-svg-wrapper">
          <svg
            ref={svgRef}
            viewBox="-16 -16 160 160"
            className="pl-svg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* EXACT ORIGINAL GRADIENTS FROM logo.svg */}
              <linearGradient
                id="pl-loop-grad"
                x1="104"
                y1="14"
                x2="46"
                y2="86"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFC226" />
                <stop offset="55%" stopColor="#FF7300" />
                <stop offset="100%" stopColor="#E33B00" />
              </linearGradient>

              <linearGradient
                id="pl-stem-grad"
                x1="24"
                y1="14"
                x2="46"
                y2="114"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FF6B00" />
                <stop offset="65%" stopColor="#EB3E05" />
                <stop offset="100%" stopColor="#C92800" />
              </linearGradient>

              <linearGradient
                id="pl-shadow-grad"
                x1="46"
                y1="75"
                x2="62"
                y2="75"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  stopColor="#5C1100"
                  stopOpacity={isDark ? '0.38' : '0.45'}
                />
                <stop offset="100%" stopColor="#5C1100" stopOpacity="0" />
              </linearGradient>

              {/* Progress Ring Gradient */}
              <linearGradient
                id="pl-ring-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FF7300" />
                <stop offset="60%" stopColor="#FFC226" />
                <stop offset="100%" stopColor={isDark ? '#FFE082' : '#F59E0B'} />
              </linearGradient>

              {/* Spark Glow Radials */}
              <radialGradient id="pl-spark-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="35%" stopColor="#FFC226" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#FF7300" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF7300" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="pl-beacon-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="40%" stopColor="#FFC226" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF7300" stopOpacity="0" />
              </radialGradient>

              {/* Floor Ambient Glow */}
              <radialGradient id="pl-floor-glow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor={
                    isDark
                      ? 'rgba(255, 115, 0, 0.42)'
                      : 'rgba(234, 88, 12, 0.22)'
                  }
                />
                <stop
                  offset="60%"
                  stopColor={
                    isDark
                      ? 'rgba(255, 194, 38, 0.15)'
                      : 'rgba(245, 158, 11, 0.08)'
                  }
                />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Light Sweep Sheen Gradient for Phase 04 */}
              <linearGradient
                id="pl-sweep-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientTransform="rotate(45)"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop
                  offset="45%"
                  stopColor={
                    isDark
                      ? 'rgba(255,255,255,0.7)'
                      : 'rgba(255,255,255,0.85)'
                  }
                />
                <stop
                  offset="55%"
                  stopColor={
                    isDark
                      ? 'rgba(255,230,150,0.8)'
                      : 'rgba(255,245,210,0.9)'
                  }
                />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>

              {/* Drawing Mask for Ribbon Loop (Phase 02) */}
              <mask id="pl-loop-mask">
                <rect x="-20" y="-20" width="180" height="180" fill="black" />
                <path
                  d="M 35 25 H 68 A 25 25 0 0 1 68 75 H 35"
                  fill="none"
                  stroke="white"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pl-loop-draw-path"
                />
              </mask>

              {/* Drawing Mask for Vertical Stem (Phase 03) */}
              <mask id="pl-stem-mask">
                <rect x="-20" y="-20" width="180" height="180" fill="black" />
                <path
                  d="M 35 114 V 14"
                  fill="none"
                  stroke="white"
                  strokeWidth="28"
                  strokeLinecap="round"
                  className="pl-stem-draw-path"
                />
              </mask>

              {/* Combined Logo Mask for Phase 04 Light Sweep */}
              <mask id="pl-full-logo-mask">
                <rect x="-20" y="-20" width="180" height="180" fill="black" />
                <path
                  d="M 35 14 H 68 A 36 36 0 0 1 68 86 H 35 V 64 H 68 A 14 14 0 0 0 68 36 H 35 Z"
                  fill="white"
                />
                <rect x="24" y="14" width="22" height="100" rx="11" fill="white" />
              </mask>
            </defs>

            {/* Ground Plane Ambient Glow beneath the Logo */}
            <ellipse
              cx="64"
              cy="118"
              rx="48"
              ry="9"
              fill="url(#pl-floor-glow)"
              className="pl-floor-glow-element"
            />

            {/* Core Logo Group (Exact Geometry Preserved) */}
            <g className="pl-logo-group">
              {/* Sweeping outer ribbon */}
              <path
                d="M 35 14 H 68 A 36 36 0 0 1 68 86 H 35 V 64 H 68 A 14 14 0 0 0 68 36 H 35 Z"
                fill="url(#pl-loop-grad)"
                mask="url(#pl-loop-mask)"
                className="pl-ribbon-path"
              />

              {/* Directional cast shadow where return tucks behind stem */}
              <rect
                x="46"
                y="64"
                width="16"
                height="22"
                fill="url(#pl-shadow-grad)"
                className="pl-shadow-rect"
              />

              {/* Foreground vertical pillar */}
              <rect
                x="24"
                y="14"
                width="22"
                height="100"
                rx="11"
                fill="url(#pl-stem-grad)"
                mask="url(#pl-stem-mask)"
                className="pl-stem-rect"
              />

              {/* Phase 04: Luminous Light Sweep Across Full Logo */}
              <g mask="url(#pl-full-logo-mask)">
                <rect
                  x="-60"
                  y="-20"
                  width="45"
                  height="180"
                  fill="url(#pl-sweep-grad)"
                  className="pl-light-sweep-bar"
                />
              </g>
            </g>

            {/* Phase 05: Thin Circular Progress Ring (Centered at 64, 64) */}
            <g className="pl-progress-ring-group">
              <circle
                cx="64"
                cy="64"
                r="58"
                fill="none"
                stroke={
                  isDark
                    ? 'rgba(255, 115, 0, 0.12)'
                    : 'rgba(217, 119, 6, 0.1)'
                }
                strokeWidth="1.2"
              />
              <circle
                cx="64"
                cy="64"
                r="58"
                fill="none"
                stroke="url(#pl-ring-grad)"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="pl-progress-ring-circle"
                transform="rotate(-90 64 64)"
              />
            </g>

            {/* Dynamic Drawing Sparks & Flares */}
            <g className="pl-sparks-layer">
              {/* Phase 01: Center Initial Spark */}
              <g className="pl-initial-spark">
                <circle
                  cx="64"
                  cy="64"
                  r="18"
                  fill="url(#pl-spark-halo)"
                  opacity="0.65"
                />
                <circle cx="64" cy="64" r="3.5" fill="#FFFFFF" />
                <line
                  x1="42"
                  y1="64"
                  x2="86"
                  y2="64"
                  stroke="#FFE082"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <line
                  x1="64"
                  y1="42"
                  x2="64"
                  y2="86"
                  stroke="#FFE082"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <line
                  x1="53"
                  y1="53"
                  x2="75"
                  y2="75"
                  stroke="#FFC226"
                  strokeWidth="0.8"
                  opacity="0.5"
                />
                <line
                  x1="75"
                  y1="53"
                  x2="53"
                  y2="75"
                  stroke="#FFC226"
                  strokeWidth="0.8"
                  opacity="0.5"
                />
              </g>

              {/* Phases 02 & 03: Active Moving Spark Head for Ribbon & Stem */}
              <g
                ref={sparkHeadRef}
                className="pl-active-spark-head"
                opacity="0"
                style={{ willChange: 'transform' }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="14"
                  fill="url(#pl-spark-halo)"
                  opacity="0.85"
                />
                <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                <line
                  x1="-12"
                  y1="0"
                  x2="12"
                  y2="0"
                  stroke="#FFF7D6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <line
                  x1="0"
                  y1="-12"
                  x2="0"
                  y2="12"
                  stroke="#FFF7D6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </g>

              {/* Phase 05: Active Leading Beacon for Circular Progress Ring */}
              <g
                ref={ringBeaconRef}
                className="pl-ring-beacon"
                opacity="0"
                style={{ willChange: 'transform' }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="10"
                  fill="url(#pl-beacon-glow)"
                  opacity="0.85"
                />
                <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
              </g>
            </g>
          </svg>
        </div>

        {/* Phase 06: Typography Lockup Beneath Logo */}
        <div className="pl-branding-lockup">
          <div className="pl-brand-name">
            <span>P</span>
            <span>R</span>
            <span>A</span>
            <span>N</span>
            <span>A</span>
            <span>V</span>
          </div>
          <div className="pl-brand-divider" />
          <div className="pl-brand-title">SOFTWARE ENGINEER</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLoader;
