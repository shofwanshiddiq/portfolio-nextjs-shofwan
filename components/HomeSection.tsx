'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedTorus() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let animId: number;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;
      const R = 110, r = 55;
      const steps = 180;

      // Draw torus with gradient strokes
      for (let u = 0; u < Math.PI * 2; u += (Math.PI * 2) / steps) {
        for (let v = 0; v < Math.PI * 2; v += (Math.PI * 2) / 60) {
          const rotU = u + frame * 0.008;
          const rotV = v + frame * 0.005;

          const x = (R + r * Math.cos(rotV)) * Math.cos(rotU);
          const y = (R + r * Math.cos(rotV)) * Math.sin(rotU);
          const z = r * Math.sin(rotV);

          // 3D to 2D projection with tilt
          const tilt = 0.5;
          const px = cx + x;
          const py = cy + y * Math.cos(tilt) - z * Math.sin(tilt);

          // Color based on position
          const t = (Math.sin(rotU + rotV + frame * 0.01) + 1) / 2;
          const t2 = (Math.cos(rotV + frame * 0.007) + 1) / 2;

          const r1 = Math.round(60 + t * 180 + t2 * 40);
          const g1 = Math.round(80 + t2 * 80);
          const b1 = Math.round(180 + t * 75);
          const a = 0.25 + t * 0.45;

          ctx.beginPath();
          ctx.arc(px, py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r1},${g1},${b1},${a})`;
          ctx.fill();
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      style={{ display: 'block' }}
    />
  );
}

export default function HomeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const torusY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const torusScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const [typed, setTyped] = useState('');
  const fullText = 'SHOFWAN SHIDDIQ';
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        if (i <= fullText.length) { setTyped(fullText.slice(0, i)); i++; }
        else clearInterval(iv);
      }, 70);
      return () => clearInterval(iv);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" ref={ref} style={{
      minHeight: '100vh',
      background: 'var(--navy-deep)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,100,220,0.18) 0%, transparent 70%)', pointerEvents: 'none', animation: 'glowPulse 6s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,114,74,0.12) 0%, transparent 70%)', pointerEvents: 'none', animation: 'glowPulse 8s ease-in-out infinite reverse' }} />
      <div style={{ position: 'absolute', top: '30%', right: '20%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(138,90,210,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Corner indices */}
      {['01', '02', '03', '04'].map((n, i) => (
        <div key={n} style={{
          position: 'absolute',
          fontFamily: 'DM Mono', fontSize: '0.6rem', opacity: 0.2,
          color: 'var(--text-primary)', letterSpacing: '0.1em',
          ...(i === 0 ? { top: 90, left: 40 } : {}),
          ...(i === 1 ? { top: 90, right: 40 } : {}),
          ...(i === 2 ? { bottom: 40, left: 40 } : {}),
          ...(i === 3 ? { bottom: 40, right: 40 } : {}),
        }}>{n}</div>
      ))}

      {/* Grid lines subtle */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Torus 3D */}
      <motion.div style={{ y: torusY, scale: torusScale }} className="float" >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatedTorus />
        </motion.div>
      </motion.div>

      {/* Text content */}
      <motion.div style={{ y: textY }} className="text-center">
        <div style={{ textAlign: 'center', marginTop: -40 }}>
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{
              fontFamily: 'DM Mono', fontSize: '0.65rem',
              letterSpacing: '0.3em', color: 'var(--accent-gold)',
              textTransform: 'uppercase', marginBottom: 12,
            }}
          >
            ILLUSTRATION · SOFTWARE ENGINEERING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            style={{
              fontFamily: 'Poppins', fontWeight: 900,
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              letterSpacing: '0.04em', lineHeight: 1,
              color: 'var(--text-primary)', textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            {typed}<span className="blink" style={{ color: 'var(--accent-gold)', opacity: 0.8 }}>|</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              fontFamily: 'DM Mono', fontSize: '0.65rem',
              letterSpacing: '0.25em', color: 'rgba(232,234,240,0.4)',
              textTransform: 'uppercase',
            }}
          >
            · · GENERATIVE ENGINEERING · ·
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute', bottom: 36,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, transparent, var(--accent-gold))' }}
        />
        <span style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.2em', opacity: 0.3, textTransform: 'uppercase' }}>SCROLL</span>
      </motion.div>
    </section>
  );
}
