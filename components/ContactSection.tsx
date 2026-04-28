'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const socials = [
  { icon: '✉', label: 'Email', value: 'shofwanjimenez@gmail.com', href: 'mailto:shofwanjimenez@gmail.com', color: '#c9a84c' },
  { icon: 'in', label: 'LinkedIn', value: '/in/shofwanshiddiq', href: 'https://www.linkedin.com/in/shofwanshiddiq/', color: '#4dd9e8' },
  { icon: '<>', label: 'GitHub', value: '/shofwanshiddiq', href: 'https://github.com/shofwanshiddiq/', color: '#7b6cf6' },
  { icon: '◎', label: 'Instagram', value: '@shofwanshiddiq', href: 'https://instagram.com/shofwanshiddiq/', color: '#e85a8a' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section id="contact" ref={ref} style={{
      background: 'var(--navy)',
      padding: '120px 60px 80px',
      minHeight: '80vh',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div style={{ position: 'absolute', top: -200, left: '20%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,217,232,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      {/* Giant ghost text */}
      <div style={{
        position: 'absolute', bottom: -40, right: -20,
        fontFamily: 'Poppins', fontWeight: 900,
        fontSize: 'clamp(6rem, 16vw, 14rem)',
        opacity: 0.025, lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>CONTACT</div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 60 }}
        >
          <div style={{ width: 20, height: 1, background: 'var(--accent-rose)' }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent-rose)', textTransform: 'uppercase' }}>Contacts</span>
        </motion.div>

        {/* Main two-col */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 style={{
              fontFamily: 'Poppins', fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.05, marginBottom: 32,
            }}>
              Organizing a<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>project?</span>
            </h2>

            <p style={{
              fontFamily: 'DM Sans', fontSize: '0.9rem', lineHeight: 1.9,
              opacity: 0.6, marginBottom: 40, maxWidth: 380,
            }}>
              Open to full-time roles, freelance projects, and interesting collaborations. Whether you need backend architecture, a full product, or security consulting — let&apos;s build something.
            </p>

            {/* Availability */}
            <motion.div
              animate={{ boxShadow: ['0 0 0px rgba(122,232,110,0)', '0 0 20px rgba(122,232,110,0.1)', '0 0 0px rgba(122,232,110,0)'] }}
              transition={{ repeat: Infinity, duration: 3 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: 'rgba(122,232,110,0.06)',
                border: '1px solid rgba(122,232,110,0.2)',
                padding: '12px 24px',
                borderRadius: 8,
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#7ae86e' }}
              />
              <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', color: '#7ae86e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Available for work
              </span>
            </motion.div>
          </motion.div>

          {/* Right: contact list */}
          <div>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  padding: '22px 0',
                  borderBottom: i < socials.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  textDecoration: 'none', cursor: 'pointer',
                  transform: hov === i ? 'translateX(12px)' : 'translateX(0)',
                  transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1)',
                }}
              >
                <div style={{
                  width: 42, height: 42, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'DM Mono', fontSize: '0.7rem', fontWeight: 500,
                  color: hov === i ? '#000' : s.color,
                  background: hov === i ? s.color : s.color + '12',
                  border: `1px solid ${s.color}30`,
                  transition: 'all 0.3s',
                  borderRadius: 8,
                }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.15em', opacity: 0.4, textTransform: 'uppercase', marginBottom: 3 }}>{s.label}</div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: hov === i ? s.color : 'var(--text-primary)', transition: 'color 0.3s' }}>{s.value}</div>
                </div>
                <div style={{ color: s.color, opacity: hov === i ? 1 : 0, transition: 'opacity 0.3s', fontFamily: 'DM Sans', fontSize: '1.1rem' }}>→</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
        style={{
          maxWidth: 1200, margin: '80px auto 0',
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'DM Mono', fontSize: '0.6rem', opacity: 0.3, letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        <div style={{ display: 'flex', gap: 28 }}>
          {['About', 'Work', 'Projects', 'Courses', 'Contacts'].map(l => (
            <button key={l} onClick={() => {
              const sectionId = l === 'Work' ? 'projects' : l.toLowerCase();
              document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }}
              style={{ background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', cursor: 'pointer', opacity: 0.6 }}>
              {l}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-gold)', opacity: 0.8 }}>SS</div>
        </div>
        <span>© {new Date().getFullYear()} — Shofwan Shiddiq</span>
      </motion.div>
    </section>
  );
}
