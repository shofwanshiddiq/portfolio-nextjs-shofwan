'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  { name: '.NET Core', color: '#7b6cf6' }, { name: 'C#', color: '#4dd9e8' },
  { name: 'ASP.NET MVC', color: '#7b6cf6' }, { name: 'Web API', color: '#c9a84c' },
  { name: '.NET MAUI', color: '#e8724a' }, { name: 'Golang', color: '#4dd9e8' },
  { name: 'React', color: '#61dafb' }, { name: 'Next.js', color: '#e8eaf0' },
  { name: 'Angular', color: '#e85a8a' }, { name: 'TypeScript', color: '#4dd9e8' },
  { name: 'SQL Server', color: '#c9a84c' }, { name: 'MySQL', color: '#7ae86e' },
  { name: 'PostgreSQL', color: '#4dd9e8' }, { name: 'MongoDB', color: '#7ae86e' },
  { name: 'Redis', color: '#e8724a' }, { name: 'Docker', color: '#4dd9e8' },
  { name: 'RabbitMQ', color: '#e8724a' }, { name: 'gRPC', color: '#c9a84c' },
  { name: 'Nginx', color: '#7ae86e' }, { name: 'Kali Linux', color: '#e85a8a' },
  { name: 'Node.js', color: '#7ae86e' }, { name: 'Python', color: '#c9a84c' },
  { name: 'PHP', color: '#7b6cf6' }, { name: 'GraphQL', color: '#e85a8a' },
  { name: 'ExtJS', color: '#c9a84c' }, { name: 'Git & GitHub', color: '#e8724a' },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={sectionRef} style={{
      background: 'var(--navy)',
      padding: '120px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 70 }}
        >
          <div style={{ width: 20, height: 1, background: 'var(--accent-gold)' }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Portfolio</span>
        </motion.div>

        {/* MAIN BENTO ROW - Reordered: Profile Left, Tech Middle, Timeline Right */}
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr 1fr', gap: 16 }}>

          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'linear-gradient(160deg, var(--navy-mid), var(--navy-light))',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 8, padding: '40px 32px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center', gap: 20, position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Glow behind photo */}
            <div style={{
              position: 'absolute', top: 40, left: '50%', transform: 'translateX(-50%)',
              width: 160, height: 160, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
            }} />

            {/* Photo */}
            <div style={{
              width: 110, height: 110, borderRadius: '50%',
              border: '2px solid rgba(201,168,76,0.4)',
              overflow: 'hidden', position: 'relative', flexShrink: 0,
              boxShadow: '0 0 40px rgba(201,168,76,0.15)',
            }}>
              <img src="/profiles.png" alt="Shofwan Shiddiq" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <h3 style={{
                fontFamily: 'Poppins', fontWeight: 700,
                fontSize: '1.5rem', marginBottom: 6, color: 'var(--text-primary)',
              }}>Shofwan Shiddiq</h3>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Software Engineer
              </div>
            </div>

            <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)' }} />

            <p style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', lineHeight: 1.8, opacity: 0.65, textAlign: 'left' }}>
              Software Engineer with <span style={{ color: 'var(--accent-gold)' }}>4 years</span> of experience in developing full-stack solutions for Corporate Support Systems, ERP, CRM, E-Commerce platforms, and cross-platform mobile applications. Specialized in the <span style={{ color: '#7b6cf6' }}>.NET ecosystem</span>, alongside integrating Microsoft SQL Server and implementing stored procedures to deliver scalable, end-to-end solutions.
            </p>

            <div style={{ width: '100%' }}>
              {[
                { icon: '📍', text: 'South Tangerang, Indonesia' },
                { icon: '🔓', text: 'Open to opportunities' },
                { icon: '🌐', text: 'Remote-friendly' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  fontFamily: 'DM Mono', fontSize: '0.62rem', opacity: 0.6, letterSpacing: '0.05em',
                }}>
                  <span style={{ fontSize: '0.75rem' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <a
              href="/Software_Engineer-Shofwan_Shiddiq.pdf" target="_blank"
              style={{
                width: '100%', padding: '12px', textAlign: 'center',
                background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)',
                color: 'var(--accent-gold)', fontFamily: 'DM Mono', fontSize: '0.65rem',
                letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                transition: 'all 0.3s', display: 'block', borderRadius: 8,
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.background = 'var(--accent-gold)';
                (e.target as HTMLElement).style.color = '#000';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background = 'rgba(201,168,76,0.1)';
                (e.target as HTMLElement).style.color = 'var(--accent-gold)';
              }}
            >
              Download CV →
            </a>
          </motion.div>

          {/* Center: Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass"
            style={{ padding: '36px 32px', borderRadius: 8 }}
          >
            <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: 28 }}>
              TECH ARSENAL
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {techStack.map((t, i) => (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.04 }}
                  style={{
                    fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.06em',
                    padding: '5px 12px', borderRadius: 8,
                    background: t.color + '12',
                    border: `1px solid ${t.color}30`,
                    color: t.color, textTransform: 'uppercase',
                    transition: 'all 0.2s',
                  }}
                >
                  {t.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline / focus */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass"
            style={{ padding: '36px 32px', borderRadius: 8 }}
          >
            <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--accent-rose)', textTransform: 'uppercase', marginBottom: 28 }}>
              EXPERIENCE TIMELINE
            </div>

            {[
              { year: '2025–now', role: '.NET Developer', company: 'Protelindo', color: '#c9a84c' },
              { year: '2022–2025', role: 'IT Developer', company: 'PT Minova Infotech Solutions', color: '#4dd9e8' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12 }}
                style={{
                  display: 'flex', gap: 20, paddingBottom: 24, marginBottom: 24,
                  borderBottom: i < 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  position: 'relative',
                }}
              >
                {/* Timeline dot */}
                <div style={{ flexShrink: 0, paddingTop: 4 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: item.color, boxShadow: `0 0 10px ${item.color}60`,
                  }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', color: item.color, letterSpacing: '0.1em', marginBottom: 4 }}>
                    {item.year}
                  </div>
                  <div style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', fontWeight: 500, marginBottom: 2 }}>
                    {item.role}
                  </div>
                  <div style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', opacity: 0.45, letterSpacing: '0.05em' }}>
                    {item.company}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Architecture card */}
            <div style={{
              marginTop: 8,
              background: 'linear-gradient(135deg, rgba(123,108,246,0.1), rgba(77,217,232,0.06))',
              border: '1px solid rgba(123,108,246,0.2)',
              padding: '20px', borderRadius: 8,
            }}>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.12em', color: '#7b6cf6', marginBottom: 8, textTransform: 'uppercase' }}>MICROSERVICES & ARCHITECTURE</div>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.62rem', opacity: 0.55, lineHeight: 1.8, letterSpacing: '0.04em' }}>
                RabbitMQ · gRPC · Nginx<br />
                Unit Testing · Docker · CI/CD
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
