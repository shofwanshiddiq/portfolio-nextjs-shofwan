'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Work', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const sectionId = id === 'Work' ? 'projects' : id.toLowerCase();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '24px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,13,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo - Left side */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img 
          src="/sslogo.png" 
          alt="SS Logo" 
          style={{ 
            height: 40, 
            width: 'auto',
            transition: 'transform 0.3s',
          }}
          onMouseEnter={e => (e.target as HTMLElement).style.transform = 'scale(1.1)'}
          onMouseLeave={e => (e.target as HTMLElement).style.transform = 'scale(1)'}
        />
      </button>

      {/* Right nav - All navigation items */}
      <nav style={{ display: 'flex', gap: 36 }}>
        {navItems.map(item => (
          <button key={item} onClick={() => scrollTo(item)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'DM Sans', fontSize: '0.78rem', fontWeight: 400,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: active === item ? '#c9a84c' : 'rgba(232,234,240,0.55)',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a84c'}
          onMouseLeave={e => (e.target as HTMLElement).style.color = active === item ? '#c9a84c' : 'rgba(232,234,240,0.55)'}
          >
            {item}
          </button>
        ))}
        <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'DM Sans', fontSize: '0.78rem', fontWeight: 400,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'rgba(232,234,240,0.55)', transition: 'color 0.3s',
        }}
        onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a84c'}
        onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(232,234,240,0.55)'}
        >
          Projects
        </button>
        <button onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'DM Sans', fontSize: '0.78rem', fontWeight: 400,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'rgba(232,234,240,0.55)', transition: 'color 0.3s',
        }}
        onMouseEnter={e => (e.target as HTMLElement).style.color = '#c9a84c'}
        onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(232,234,240,0.55)'}
        >
          Courses
        </button>
      </nav>
    </motion.header>
  );
}
