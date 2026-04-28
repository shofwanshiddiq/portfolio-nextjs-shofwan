'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

type Cat = 'all' | 'cybersecurity' | 'backend' | 'language';

const courses = [
  { title: 'Cybersecurity at Dibimbing', desc: 'Learning cybersecurity fundamentals and offensive security practices, including governance, networking, cryptography, and penetration testing. Identification of web and infrastructure vulnerabilities such as injection attacks, SSRF, broken access control, security misconfigurations, and DoS.', tech: ['Linux', 'Kali Linux', 'Burpsuite'], cat: 'cybersecurity' as Cat, img: '/mockup_7.png', accent: '#e85a8a', year: '2025-2026', num: '01', cert: 'https://github.com/shofwanshiddiq/cybersecurity-portfolio-shofwan' },
  { title: 'Backend Golang Developer at Dibimbing', desc: 'Focusing on golang backend development integrated with MySQL for relational database and MongoDB for non-relational database through RESTful API, also utilizing Docker for containerization.', tech: ['Golang', 'MySQL', 'MongoDB', 'Docker'], cat: 'backend' as Cat, img: '/mockup_8.png', accent: '#4dd9e8', year: '2024-2025', num: '02', cert: 'https://dibimbing.id/certificate-validation?cn=201029GO02051814' },
  { title: 'English for Professional at Dibimbing', desc: 'Intensive English for professionals classes, focusing on enhancing workplace communication, professional writing, presentations, job interviews, and practical speaking skills.', tech: ['English', 'Communication', 'Professional'], cat: 'language' as Cat, img: '/mockup_9.png', accent: '#7ae86e', year: '2025', num: '03', cert: 'https://dibimbing-lms-dev.s3.ap-southeast-1.amazonaws.com/1753888801550-Muhammad-Shofwan-Shiddiq.pdf' },
  { title: 'Frontend Developer (React) - HackerRank', desc: 'Frontend Developer certification covering React fundamentals, component lifecycle, state management, hooks, and modern React patterns.', tech: ['React', 'JavaScript', 'Frontend'], cat: 'backend' as Cat, img: '/mockup_10.png', accent: '#61dafb', year: '2025', num: '04', cert: 'https://www.hackerrank.com/certificates/8ab4262e386d' },
  { title: 'CSS (Basic) - HackerRank', desc: 'CSS fundamentals certification covering selectors, box model, flexbox, grid, and responsive design principles.', tech: ['CSS', 'Frontend', 'Design'], cat: 'backend' as Cat, img: '/mockup_11.png', accent: '#c9a84c', year: '2025', num: '05', cert: 'https://www.hackerrank.com/certificates/1acfe14d372e' },
  { title: 'JavaScript (Basic) - HackerRank', desc: 'JavaScript fundamentals certification covering variables, functions, arrays, objects, and ES6+ features.', tech: ['JavaScript', 'Frontend', 'Programming'], cat: 'backend' as Cat, img: '/mockup_12.png', accent: '#e8724a', year: '2025', num: '06', cert: 'https://www.hackerrank.com/certificates/ffb62f8a6517' },
  { title: 'Go (Basic) - HackerRank', desc: 'Go programming fundamentals certification covering syntax, data structures, concurrency, and Go best practices.', tech: ['Golang', 'Backend', 'Programming'], cat: 'backend' as Cat, img: '/mockup_7.png', accent: '#4dd9e8', year: '2025', num: '07', cert: 'https://www.hackerrank.com/certificates/29d9659ae877' },
  { title: 'SQL (Basic) - HackerRank', desc: 'SQL fundamentals certification covering queries, joins, aggregations, and database operations.', tech: ['SQL', 'Database', 'Backend'], cat: 'backend' as Cat, img: '/mockup_8.png', accent: '#7b6cf6', year: '2025', num: '08', cert: 'https://www.hackerrank.com/certificates/d1391b52a8a0' },
  { title: 'EF SET (C1 Advanced)', desc: 'English proficiency test certification demonstrating C1 Advanced level in English language skills.', tech: ['English', 'Language', 'Communication'], cat: 'language' as Cat, img: '/mockup_9.png', accent: '#7ae86e', year: '2025', num: '09', cert: 'https://cert.efset.org/en/eA3VT6' },
  { title: 'IELTS Preparation', desc: 'IELTS preparation course covering all four skills: listening, reading, writing, and speaking for academic and professional purposes.', tech: ['English', 'IELTS', 'Language'], cat: 'language' as Cat, img: '/mockup_10.png', accent: '#e85a8a', year: '2024', num: '10', cert: 'https://www.linkedin.com/in/shofwanshiddiq/overlay/Certifications/1765556513/treasury/?profileId=ACoAAC7H4aUBnWbwWlT4KZOeIIaoRBCbnAqy4Dw' },
];

const tabs = [
  { id: 'all' as Cat, label: 'All Courses' },
  { id: 'cybersecurity' as Cat, label: 'Cyber—Sec' },
  { id: 'backend' as Cat, label: 'Development' },
  { id: 'language' as Cat, label: 'Language' },
];

function CourseCard({ c, i }: { c: typeof courses[0]; i: number }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: i * 0.06 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="proj-card"
      style={{
        background: 'var(--navy-mid)',
        border: `1px solid ${hov ? c.accent + '40' : 'rgba(255,255,255,0.05)'}`,
        overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.3s',
        borderRadius: 8,
      }}
    >
      {/* Image */}
      <div style={{ height: 200, overflow: 'hidden', background: 'var(--navy-light)', position: 'relative' }}>
        <motion.img
          src={c.img} alt={c.title}
          animate={{ scale: hov ? 1.06 : 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `saturate(${hov ? 1.1 : 0.7}) brightness(${hov ? 0.9 : 0.7})`, transition: 'filter 0.5s' }}
          onError={e => { (e.target as HTMLImageElement).parentElement!.style.background = `radial-gradient(circle at 30% 50%, ${c.accent}20, var(--navy-light))`; (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: `linear-gradient(to bottom, transparent 40%, var(--navy-mid) 100%)`,
        }} />
        <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'DM Mono', fontSize: '0.55rem', color: c.accent, letterSpacing: '0.1em', background: c.accent + '15', border: `1px solid ${c.accent}30`, padding: '3px 10px', textTransform: 'uppercase', borderRadius: 8 }}>
          {c.cat}
        </div>
        <div style={{ position: 'absolute', bottom: 14, right: 14, fontFamily: 'Poppins', fontSize: '2rem', fontWeight: 900, color: c.accent, opacity: 0.2, lineHeight: 1 }}>
          {c.num}
        </div>
      </div>

      <div style={{ padding: '24px 24px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <h3 style={{
            fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem',
            color: hov ? c.accent : 'var(--text-primary)', transition: 'color 0.3s', lineHeight: 1.25,
          }}>{c.title}</h3>
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', opacity: 0.35, marginLeft: 8, flexShrink: 0 }}>{c.year}</span>
        </div>
        <p style={{ fontFamily: 'DM Sans', fontSize: '0.75rem', lineHeight: 1.75, opacity: 0.55, marginBottom: 18 }}>{c.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {c.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.06em',
              background: c.accent + '10', border: `1px solid ${c.accent}25`,
              color: c.accent, padding: '3px 9px', textTransform: 'uppercase',
              borderRadius: 8,
            }}>{t}</span>
          ))}
        </div>

        {/* Certificate Button */}
        <a
          href={c.cert}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            padding: '10px',
            textAlign: 'center',
            background: c.accent + '15',
            border: `1px solid ${c.accent}30`,
            color: c.accent,
            fontFamily: 'DM Mono',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s',
            display: 'block',
            borderRadius: 8,
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.background = c.accent;
            (e.target as HTMLElement).style.color = '#000';
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.background = c.accent + '15';
            (e.target as HTMLElement).style.color = c.accent;
          }}
        >
          View Certificate
        </a>
      </div>

      <motion.div
        animate={{ scaleX: hov ? 1 : 0 }}
        style={{ height: 1, background: `linear-gradient(90deg, ${c.accent}, transparent)`, transformOrigin: 'left', transition: 'transform 0.4s' }}
      />
    </motion.div>
  );
}

export default function CoursesSection() {
  const [active, setActive] = useState<Cat>('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const filtered = active === 'all' ? courses : courses.filter(c => c.cat === active);

  return (
    <section id="courses" ref={ref} style={{ background: 'var(--navy)', padding: '120px 60px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 20, height: 1, background: 'var(--accent-rose)' }} />
            <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent-rose)', textTransform: 'uppercase' }}>Learning</span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            letterSpacing: '-0.01em', lineHeight: 1,
          }}>
            Courses &<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Certifications</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: 0, marginBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '12px 28px', fontFamily: 'DM Mono', fontSize: '0.65rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: active === tab.id ? 'var(--accent-gold)' : 'rgba(232,234,240,0.35)',
                borderBottom: active === tab.id ? '1px solid var(--accent-gold)' : '1px solid transparent',
                marginBottom: -1, transition: 'all 0.25s',
              }}
            >
              {tab.label}
              <span style={{ marginLeft: 8, opacity: 0.4, fontSize: '0.5rem' }}>
                ({tab.id === 'all' ? courses.length : courses.filter(c => c.cat === tab.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => <CourseCard key={c.title} c={c} i={i} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
