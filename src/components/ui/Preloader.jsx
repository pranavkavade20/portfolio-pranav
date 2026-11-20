import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * Senior-level Kinetic Particle Simulation
 * - Phase 1 & 2 (0.0s - 2.2s): Ambient upward zero-G drift & twinkling sparks.
 * - Phase 3 (2.2s - 3.3s): Orbiting magnetic light beacon with radiant trail along the outer dotted circle.
 * - Phase 4 (3.3s - 4.2s): Luminous fusion impact radial spark burst.
 * - Phase 5 (4.2s - 5.0s): Gravity-defied vertical trailing energy wake beneath the ascending logo (Panel 05).
 * Fully dynamic for Light & Dark mode.
 */
const KineticCanvas = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
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

    const palette = isDark
      ? ['#FFC226', '#FF7300', '#EB3E05', '#FFE082', '#FFA040']
      : ['#D97706', '#EA580C', '#C2410C', '#F59E0B', '#92400E'];

    // 40 ambient upward-rising zero-G sparks
    const ambientSparks = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      vy: -(Math.random() * 1.2 + 0.5), // natural upward drift
      vx: (Math.random() - 0.5) * 0.35,
      color: palette[Math.floor(Math.random() * palette.length)],
      alpha: isDark ? Math.random() * 0.5 + 0.25 : Math.random() * 0.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    // Dynamic particle arrays
    const dynamicParticles = [];
    const orbitTrail = [];

    const startTime = performance.now();
    let fusionBurstDone = false;

    const render = (now) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // --- PHASE 3: ORBITING LIGHT BEACON ON OUTER DOTTED CIRCLE (2100ms - 3400ms) ---
      if (elapsed >= 2100 && elapsed <= 3400) {
        const orbitProgress = (elapsed - 2100) / 1300;
        const angle = orbitProgress * Math.PI * 4; // 2 smooth rotations
        const radius = 118; // Exactly matches outer dotted circle radius around the logo
        const orbitX = centerX + radius * Math.cos(angle);
        const orbitY = centerY + radius * Math.sin(angle);

        // Record history for smooth trailing glow
        orbitTrail.push({
          x: orbitX,
          y: orbitY,
          alpha: 1.0,
          size: 3.5,
        });

        // Draw trail
        for (let i = orbitTrail.length - 1; i >= 0; i--) {
          const t = orbitTrail[i];
          t.alpha -= 0.05;
          if (t.alpha <= 0) {
            orbitTrail.splice(i, 1);
            continue;
          }
          ctx.fillStyle = isDark ? '#FFC226' : '#EA580C';
          ctx.globalAlpha = t.alpha * 0.6;
          ctx.beginPath();
          ctx.arc(t.x, t.y, t.size * t.alpha, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw bright beacon head
        const beaconGrad = ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, 12);
        beaconGrad.addColorStop(0, '#FFFFFF');
        beaconGrad.addColorStop(0.35, isDark ? '#FFC226' : '#F59E0B');
        beaconGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = beaconGrad;
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(orbitX, orbitY, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- PHASE 4: LUMINOUS FUSION RADIAL BURST (At 3300ms) ---
      if (elapsed >= 3300 && !fusionBurstDone) {
        fusionBurstDone = true;
        for (let i = 0; i < 24; i++) {
          const burstAngle = Math.random() * Math.PI * 2;
          const burstSpeed = Math.random() * 3.5 + 1.5;
          dynamicParticles.push({
            x: centerX,
            y: centerY - 20,
            vx: Math.cos(burstAngle) * burstSpeed,
            vy: Math.sin(burstAngle) * burstSpeed,
            size: Math.random() * 2.5 + 1.2,
            color: palette[Math.floor(Math.random() * palette.length)],
            alpha: 1.0,
            decay: 0.03,
          });
        }
      }

      // --- PHASE 5: GRAVITY DEFIED TRAILING WAKE (4200ms - 5000ms) ---
      // Vertical column of amber dust trailing beneath ascending logo (Panel 05)
      if (elapsed >= 4150 && elapsed <= 5000) {
        const trailAlpha = 1 - (elapsed - 4150) / 850;
        for (let i = 0; i < 3; i++) {
          dynamicParticles.push({
            x: centerX + (Math.random() - 0.5) * 45,
            y: centerY + 45 + Math.random() * 30,
            vx: (Math.random() - 0.5) * 0.9,
            vy: Math.random() * 2.0 + 0.9, // drifts downwards as logo ascends
            size: Math.random() * 2.4 + 1.0,
            color: palette[Math.floor(Math.random() * palette.length)],
            alpha: Math.max(0, trailAlpha * 0.9),
            decay: 0.025,
          });
        }
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

        // Soft glow halo
        ctx.globalAlpha = p.alpha * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render & update ambient zero-G sparks
      for (let i = 0; i < ambientSparks.length; i++) {
        const p = ambientSparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.04;

        const currentAlpha = Math.max(0, p.alpha * (0.65 + 0.35 * Math.sin(p.phase)));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Recycle wrap-around
        if (p.y < -15) {
          p.y = height + 15;
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
  }, [isDark]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

/**
 * Antigravity High-Fidelity Loading Screen
 *
 * Storyboard Sequence (5.0s total, crisp & snappy):
 * 01 / UPWARD DRIFT (0.0s - 1.0s): Disassembled rise with depth blur fade
 * 02 / WEIGHTLESS SUSPENSION (1.0s - 2.2s): Zero-G kinetic float, independent stem & loop drift
 * 03 / MAGNETIC ATTRACTION (2.2s - 3.3s): Orbital alignment with concentric counter-rotating double dotted circles around the logo
 * 04 / LUMINOUS FUSION (3.3s - 4.2s): Expanding shockwave rings, ground energy halo, radiant lockup impact
 * 05 / ASCENT & TRANSITION (4.2s - 5.0s): Gravity defied upward ascent with trailing particle wake
 */
const Preloader = ({
  name = 'PRANAV KAVADE',
  onComplete,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const DURATION = 5.0; // 5.0 seconds total choreography
  // Normalized keyframe time markers across the 5 storyboard panels:
  // t0 = 0.0s (0.00), t1 = 1.0s (0.20), t2 = 2.2s (0.44), t3 = 3.3s (0.66), t4 = 4.2s (0.84), t5 = 5.0s (1.00)
  const times = [0, 0.20, 0.44, 0.66, 0.84, 1.0];

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Pre-calculate scattered characters
  const characters = useMemo(() => name.split(''), [name]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
      }}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none transition-colors duration-500 ${
        isDark ? 'bg-[#09090B]' : 'bg-[#F8F9FA]'
      }`}
    >
      {/* 1. Subtle Engineering Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(to right, rgba(255, 115, 0, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 115, 0, 0.04) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
            `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
        }}
      />

      {/* 2. Soft Radial Ambient Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255, 115, 0, 0.15) 0%, rgba(9, 9, 11, 0.8) 55%, #09090B 100%)'
            : 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(245, 158, 11, 0.09) 0%, rgba(248, 249, 250, 0.85) 55%, #F8F9FA 100%)',
        }}
      />

      {/* 3. Kinetic Canvas (Zero-G sparks, Orbiting beacon, Fusion burst, Gravity-defied trailing wake) */}
      <KineticCanvas isDark={isDark} />

      {/* 4. Main Centered Composition */}
      <div className="relative z-20 flex flex-col items-center justify-center">

        {/* --- Logo Container & Shockwave/Orbital Layer --- */}
        <div className="relative flex items-center justify-center">

          {/* DOUBLE DOTTED CIRCLES AROUND THE LOGO (Concentric counter-rotating dotted orbital rings) */}
          <motion.div
            style={{ willChange: 'transform, opacity' }}
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{
              scale: [0.75, 0.95, 1.0, 1.03, 1.06, 0.94],
              opacity: [0, 0.45, 0.7, 0.92, 1.0, 0],
              y: [35, 18, 10, 0, 0, -160],
            }}
            transition={{
              duration: DURATION,
              times: times,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 m-auto flex items-center justify-center pointer-events-none z-10"
          >
            <svg
              className="overflow-visible"
              style={{ width: '270px', height: '270px' }}
              viewBox="-135 -135 270 270"
            >
              {/* Outer Dotted Circle (Clockwise Rotation) */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="118"
                  fill="none"
                  stroke={isDark ? 'rgba(255, 194, 38, 0.65)' : 'rgba(217, 119, 6, 0.6)'}
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  style={{
                    filter: isDark
                      ? 'drop-shadow(0 0 6px rgba(255, 115, 0, 0.5))'
                      : 'drop-shadow(0 0 4px rgba(234, 88, 12, 0.35))',
                  }}
                />
              </motion.g>

              {/* Inner Dotted Circle (Counter-Clockwise Rotation) */}
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <circle
                  cx="0"
                  cy="0"
                  r="98"
                  fill="none"
                  stroke={isDark ? 'rgba(255, 115, 0, 0.55)' : 'rgba(234, 88, 12, 0.5)'}
                  strokeWidth="1.2"
                  strokeDasharray="6 4"
                  style={{
                    filter: isDark
                      ? 'drop-shadow(0 0 4px rgba(255, 115, 0, 0.4))'
                      : 'drop-shadow(0 0 3px rgba(234, 88, 12, 0.25))',
                  }}
                />
              </motion.g>
            </svg>
          </motion.div>

          {/* PANEL 04: Ground-Plane Radiant Energy Disk Halo (Active during 3.3s - 4.2s) */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{
              scale: [0.2, 0.5, 0.8, 1.35, 1.25, 0.4],
              opacity: [0, 0.15, 0.35, 0.9, 0.6, 0],
              y: [40, 32, 22, 10, 0, -120],
            }}
            transition={{
              duration: DURATION,
              times: times,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              width: '260px',
              height: '52px',
              background: isDark
                ? 'radial-gradient(ellipse at center, rgba(255, 194, 38, 0.78) 0%, rgba(255, 115, 0, 0.48) 45%, rgba(227, 59, 0, 0.15) 75%, transparent 88%)'
                : 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.6) 0%, rgba(234, 88, 12, 0.32) 45%, rgba(194, 65, 12, 0.08) 75%, transparent 88%)',
              filter: 'blur(7px)',
            }}
          />

          {/* PANEL 04: Radiant Shockwave Ring 1 (Expands & disperses upon lock-in) */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{
              scale: [0.1, 0.1, 0.1, 0.35, 2.3, 2.8],
              opacity: [0, 0, 0, 0.95, 0, 0],
            }}
            transition={{
              duration: DURATION,
              times: times,
              ease: 'easeOut',
            }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 pointer-events-none ${
              isDark ? 'border-amber-400' : 'border-amber-500'
            }`}
            style={{
              width: '140px',
              height: '140px',
              boxShadow: isDark
                ? '0 0 34px #FF7300, inset 0 0 24px #FFC226'
                : '0 0 26px rgba(234, 88, 12, 0.45), inset 0 0 16px rgba(245, 158, 11, 0.3)',
            }}
          />

          {/* PANEL 04: Radiant Shockwave Ring 2 (Outer plasma wave) */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{
              scale: [0.1, 0.1, 0.1, 0.25, 2.8, 3.3],
              opacity: [0, 0, 0, 0.8, 0, 0],
            }}
            transition={{
              duration: DURATION,
              times: [0, 0.20, 0.44, 0.68, 0.85, 1.0],
              ease: 'easeOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500 pointer-events-none"
            style={{
              width: '160px',
              height: '160px',
              boxShadow: isDark
                ? '0 0 45px rgba(255, 90, 0, 0.75)'
                : '0 0 32px rgba(234, 88, 12, 0.35)',
            }}
          />

          {/* --- Main Split-Part "P" Logo --- */}
          <motion.div
            animate={{
              filter: isDark
                ? [
                    'drop-shadow(0 0 0px rgba(255, 115, 0, 0))',
                    'drop-shadow(0 0 8px rgba(255, 115, 0, 0.35))',
                    'drop-shadow(0 0 14px rgba(255, 115, 0, 0.55))',
                    'drop-shadow(0 0 42px rgba(255, 115, 0, 0.98))',
                    'drop-shadow(0 0 22px rgba(255, 115, 0, 0.65))',
                    'drop-shadow(0 0 0px rgba(255, 115, 0, 0))',
                  ]
                : [
                    'drop-shadow(0 0 0px rgba(234, 88, 12, 0))',
                    'drop-shadow(0 0 5px rgba(234, 88, 12, 0.25))',
                    'drop-shadow(0 0 10px rgba(234, 88, 12, 0.4))',
                    'drop-shadow(0 0 28px rgba(234, 88, 12, 0.75))',
                    'drop-shadow(0 0 14px rgba(234, 88, 12, 0.45))',
                    'drop-shadow(0 0 0px rgba(234, 88, 12, 0))',
                  ],
            }}
            transition={{
              duration: DURATION,
              times: times,
            }}
            className="relative w-28 h-36 sm:w-36 sm:h-44 md:w-40 md:h-48 z-20"
          >
            {/* Split Part 1: Sweeping Outer Ribbon (Loop) */}
            <motion.div
              style={{
                transformOrigin: '68px 50px',
                willChange: 'transform, opacity, filter',
              }}
              initial={{
                x: 40,
                y: 150,
                rotate: 24,
                opacity: 0,
                filter: 'blur(10px)',
                scale: 0.85,
              }}
              animate={{
                x: [40, 26, 18, 0, 0, 0],
                y: [150, 30, 14, 0, 0, -160],
                rotate: [24, 18, 10, 0, 0, 0],
                opacity: [0, 0.95, 1, 1, 1, 0],
                filter: [
                  'blur(10px)',
                  'blur(0px)',
                  'blur(0px)',
                  'blur(0px)',
                  'blur(0px)',
                  'blur(0px)',
                ],
                scale: [0.85, 1, 1, 1, 1.04, 0.94],
              }}
              transition={{
                duration: DURATION,
                times: times,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <svg viewBox="20 10 88 108" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient
                    id="p1-loop"
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
                </defs>
                <path
                  d="M 35 14 H 68 A 36 36 0 0 1 68 86 H 35 V 64 H 68 A 14 14 0 0 0 68 36 H 35 Z"
                  fill="url(#p1-loop)"
                />
              </svg>
            </motion.div>

            {/* Split Part 2: Directional Cast Shadow (Materializes upon magnetic lockup) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0, 0.7, 1, 0],
                y: [140, 26, 12, 0, 0, -160],
              }}
              transition={{
                duration: DURATION,
                times: times,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <svg viewBox="20 10 88 108" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient
                    id="p1-shadow"
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
                    <stop
                      offset="100%"
                      stopColor="#5C1100"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <rect
                  x="46"
                  y="64"
                  width="16"
                  height="22"
                  fill="url(#p1-shadow)"
                />
              </svg>
            </motion.div>

            {/* Split Part 3: Foreground Vertical Pillar (Stem) */}
            <motion.div
              style={{
                transformOrigin: '35px 64px',
                willChange: 'transform, opacity, filter',
              }}
              initial={{
                x: -35,
                y: 140,
                rotate: -22,
                opacity: 0,
                filter: 'blur(10px)',
                scale: 0.85,
              }}
              animate={{
                x: [-35, -24, -14, 0, 0, 0],
                y: [140, 26, 12, 0, 0, -160],
                rotate: [-22, -16, -8, 0, 0, 0],
                opacity: [0, 0.95, 1, 1, 1, 0],
                filter: [
                  'blur(10px)',
                  'blur(0px)',
                  'blur(0px)',
                  'blur(0px)',
                  'blur(0px)',
                  'blur(0px)',
                ],
                scale: [0.85, 1, 1, 1, 1.04, 0.94],
              }}
              transition={{
                duration: DURATION,
                times: times,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <svg viewBox="20 10 88 108" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient
                    id="p1-stem"
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
                </defs>
                <rect
                  x="24"
                  y="14"
                  width="22"
                  height="100"
                  rx="11"
                  fill="url(#p1-stem)"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* --- Typography Lockup --- */}
        <div className="flex flex-col items-center mt-10 sm:mt-12 md:mt-14 select-none">
          {/* PRANAV KAVADE (Scattered kinetic rise into lock-in) */}
          <div className="flex items-center justify-center font-mono font-bold tracking-[0.18em] sm:tracking-[0.22em] text-base sm:text-xl md:text-2xl uppercase">
            {characters.map((char, i) => {
              if (char === ' ') {
                return <span key={i} className="inline-block w-3 sm:w-4 md:w-5" />;
              }

              // Organic deterministic scatter parameters
              const charY = 130 + ((i * 11) % 35);
              const charX = ((i * 23) % 70) - 35;
              const charRot = ((i * 13) % 28) - 14;
              const driftX = ((i * 17) % 36) - 18;
              const driftRot = ((i * 7) % 18) - 9;

              return (
                <motion.span
                  key={i}
                  style={{ willChange: 'transform, opacity, filter' }}
                  initial={{
                    y: charY,
                    x: charX,
                    rotate: charRot,
                    opacity: 0,
                    filter: 'blur(10px)',
                    scale: 0.75,
                  }}
                  animate={{
                    y: [charY, 28, 12, 0, 0, -160],
                    x: [charX, driftX, driftX * 0.35, 0, 0, 0],
                    rotate: [charRot, driftRot, driftRot * 0.3, 0, 0, 0],
                    opacity: [0, 0.9, 0.98, 1, 1, 0],
                    filter: [
                      'blur(10px)',
                      'blur(0px)',
                      'blur(0px)',
                      'blur(0px)',
                      'blur(0px)',
                      'blur(4px)',
                    ],
                    scale: [0.75, 1, 1, 1, 1.03, 0.94],
                    color: isDark
                      ? [
                          'rgba(255, 194, 38, 0.8)',
                          'rgba(255, 215, 120, 0.92)',
                          '#FFFFFF',
                          '#FFFFFF',
                          '#FFEBB5',
                          '#FFC226',
                        ]
                      : [
                          'rgba(217, 119, 6, 0.8)',
                          'rgba(234, 88, 12, 0.9)',
                          '#0F172A',
                          '#0F172A',
                          '#1E293B',
                          '#D97706',
                        ],
                    textShadow: isDark
                      ? [
                          '0 0 0px rgba(255,115,0,0)',
                          '0 0 6px rgba(255,115,0,0.45)',
                          '0 0 10px rgba(255,115,0,0.6)',
                          '0 0 20px rgba(255,194,38,0.92)',
                          '0 0 10px rgba(255,115,0,0.5)',
                          '0 0 0px rgba(255,115,0,0)',
                        ]
                      : [
                          '0 0 0px rgba(234,88,12,0)',
                          '0 0 3px rgba(234,88,12,0.3)',
                          '0 0 8px rgba(234,88,12,0.45)',
                          '0 0 14px rgba(245,158,11,0.65)',
                          '0 0 7px rgba(234,88,12,0.35)',
                          '0 0 0px rgba(234,88,12,0)',
                        ],
                  }}
                  transition={{
                    duration: DURATION,
                    times: times,
                    ease: 'easeInOut',
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
