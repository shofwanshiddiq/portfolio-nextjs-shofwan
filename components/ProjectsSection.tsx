'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

type Cat = 'all' | 'frontend' | 'backend' | 'cybersecurity';

const projects = [
  // Backend Projects
  { title: 'ASP.NET WEB API for User & Employees Management', desc: '.NET Web Application using .NET 8 with user login management, bearer token authentication & authorization using Entity Frameworks Core Identity and CRUD operations for employees data.', tech: ['ASP.NET Web API', 'C#', 'RESTful API', 'SQL Server', 'Swagger'], cat: 'backend' as Cat, img: '/mockup_10.png', accent: '#7b6cf6', year: '2024', num: '01', git: 'https://github.com/shofwanshiddiq/NetWebApi', website: null },
  { title: 'ASP.NET MVC Product Transaction Management', desc: '.NET MVC Project for product transaction management, integrated with Microsoft SQL Server using .NET Entity Frameworks. Features CRUD operations for users, products, and transactions.', tech: ['ASP.NET MVC', 'C#', 'RESTful API', 'SQL Server'], cat: 'backend' as Cat, img: '/mockup_11.png', accent: '#4dd9e8', year: '2024', num: '02', git: 'https://github.com/shofwanshiddiq/mvc-product-transaction', website: null },
  { title: 'Quiz Trivia Web App Services', desc: 'Web Application built using ReactJS and MaterialUI, integrated with ASP.NET Core Web API and SQL Server. Features user registration & login, random questions generation, score calculation, and test result submission.', tech: ['ReactJS', 'ASP.NET Core', 'C#', 'SQL Server', 'Swagger'], cat: 'backend' as Cat, img: '/mockup_12.png', accent: '#e8724a', year: '2024', num: '03', git: 'https://github.com/shofwanshiddiq/QuizAPI', website: null },
  { title: 'Gametify Go RESTful API', desc: 'Game Room Booking App Backend Services built using Golang with Gin frameworks, GORM as ORM for MySQL. Features user authentication, room booking, and booking history.', tech: ['Go', 'RESTful API', 'MySQL', 'Gin'], cat: 'backend' as Cat, img: '/mockup_8.png', accent: '#c9a84c', year: '2024', num: '04', git: 'https://github.com/shofwanshiddiq/mobile-apps-docs', website: null },
  { title: 'Go Microservices Product', desc: 'Microservices RESTful API built using Golang with Gin frameworks, GORM as ORM for MySQL, deployed using Docker compose alongside with message brokers using RabbitMQ.', tech: ['Go', 'RESTful API', 'MySQL', 'Docker', 'RabbitMQ'], cat: 'backend' as Cat, img: '/mockup_8.png', accent: '#7ae86e', year: '2024', num: '05', git: 'https://github.com/shofwanshiddiq/go-microservices-product', website: null },
  { title: 'User Management | Express NodeJS', desc: 'User management RESTful API built using Node.js, Express, and Knex for database connection. Provides endpoints to manage users, add and retrieve user data.', tech: ['NodeJS', 'ExpressJS', 'KnexJS', 'MySQL'], cat: 'backend' as Cat, img: '/mockup_7.png', accent: '#e85a8a', year: '2024', num: '06', git: 'https://github.com/shofwanshiddiq/express-user-management', website: null },
  { title: 'Product Management | Go', desc: 'RESTful API built using Golang with Gin framework, GORM as ORM for MySQL. Features create, update, get, and delete products. Upload and download files with mutex and buffer for memory management.', tech: ['Go', 'RESTful API', 'MySQL', 'Gin'], cat: 'backend' as Cat, img: '/mockup_8.png', accent: '#4dd9e8', year: '2023', num: '07', git: 'https://github.com/shofwanshiddiq/product-management-api', website: null },
  { title: 'Login Management | Go', desc: 'RESTful API built using Golang with Gin framework, GORM as ORM for MySQL, JWT for authentication, and middleware for request handling. Supports user authentication, tag creation, and post creation.', tech: ['Go', 'RESTful API', 'MySQL', 'JWT'], cat: 'backend' as Cat, img: '/mockup_9.png', accent: '#c9a84c', year: '2023', num: '08', git: 'https://github.com/shofwanshiddiq/golang-api-login', website: null },
  
  // Frontend Projects
  { title: 'Website Portfolio', desc: 'Modern portfolio website built with Next.js 16, TypeScript, and Framer Motion. Features smooth animations, responsive design, interactive project showcase with modal system, experience timeline, and courses section.', tech: ['Next.js', 'TypeScript', 'Framer Motion'], cat: 'frontend' as Cat, img: '/portfolio.jpg', accent: '#4dd9e8', year: '2024', num: '09', git: 'https://github.com/shofwanshiddiq/portfolio-nextjs-shofwan', website: 'https://portfolio-shofwan.vercel.app/' },
  { title: 'Weatherify', desc: 'Full-featured weather dashboard built with React, TypeScript, and Vite. Demonstrates modern front-end architecture, interactive data visualization, and polished UI/UX craftsmanship.', tech: ['Vite', 'React', 'TypeScript'], cat: 'frontend' as Cat, img: '/weatherify.png', accent: '#7ae86e', year: '2024', num: '10', git: 'https://github.com/shofwanshiddiq/weatherify', website: 'https://weatherify-six.vercel.app/' },
  { title: 'Flightify', desc: 'Flight booking web application and live tracker built with React, TypeScript, and Vite. Features user-friendly interface for searching and booking flights with real-time updates.', tech: ['Vite', 'React', 'TypeScript'], cat: 'frontend' as Cat, img: '/flightify.jpg', accent: '#e85a8a', year: '2024', num: '11', git: 'https://github.com/shofwanshiddiq/flightify', website: 'https://flightify.vercel.app/' },
  
  // Cybersecurity Projects
  { title: 'Cybersecurity Portfolio', desc: 'Application penetration testing, offensive security simulations, and malware analysis. All research conducted in authorized lab environments, intentionally vulnerable applications (OWASP Juice Shop), and sandbox platforms.', tech: ['Kali Linux', 'Burp Suite', 'Bettercap', 'SQL Map'], cat: 'cybersecurity' as Cat, img: '/mockup_4.png', accent: '#e85a8a', year: '2024', num: '12', git: 'https://github.com/shofwanshiddiq/cybersecurity-portfolio-shofwan', website: null },
  { title: 'Dibishop Penetration Testing', desc: 'Penetration testing conducted against Dibimbing Shop web application, covering both user-facing side and admin panel. A total of 9 vulnerabilities were identified.', tech: ['Kali Linux', 'Burp Suite', 'SQL Map'], cat: 'cybersecurity' as Cat, img: '/mockup_5.png', accent: '#7ae86e', year: '2024', num: '13', git: 'https://github.com/shofwanshiddiq/penetration-testing-dibishop', website: null },
  { title: 'Reconnaissance Automation', desc: 'Automated pipeline for subdomain enumeration and active host detection using Bash, subfinder, httpx, and anew. Automates reconnaissance process for bug bounty and penetration testing.', tech: ['Bash', 'Subfinder', 'Httpx', 'Anew'], cat: 'cybersecurity' as Cat, img: '/mockup_6.png', accent: '#c9a84c', year: '2024', num: '14', git: 'https://github.com/shofwanshiddiq/recon-automation-shofwan', website: null },
];

const tabs = [
  { id: 'frontend' as Cat, label: 'Front—End' },
  { id: 'backend' as Cat, label: 'Back—End' },
  { id: 'cybersecurity' as Cat, label: 'Cyber—Sec' },
];

function ProjectCard({ p, i, onOpenModal }: { p: typeof projects[0]; i: number; onOpenModal: (project: typeof projects[0]) => void }) {
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
        border: `1px solid ${hov ? p.accent + '40' : 'rgba(255,255,255,0.05)'}`,
        overflow: 'hidden', cursor: 'pointer', transition: 'border-color 0.3s',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image - clickable to open modal - Hide for cybersecurity */}
      {p.cat !== 'cybersecurity' && (
        <div 
          onClick={() => onOpenModal(p)}
          style={{ height: 300, overflow: 'hidden', background: 'var(--navy-light)', position: 'relative', cursor: 'pointer' }}
        >
          <motion.img
            src={p.img} alt={p.title}
            animate={{ scale: hov ? 1.06 : 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `saturate(${hov ? 1.1 : 0.7}) brightness(${hov ? 0.9 : 0.7})`, transition: 'filter 0.5s' }}
            onError={e => { (e.target as HTMLImageElement).parentElement!.style.background = `radial-gradient(circle at 30% 50%, ${p.accent}20, var(--navy-light))`; (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: `linear-gradient(to bottom, transparent 40%, var(--navy-mid) 100%)`,
          }} />
          <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'DM Mono', fontSize: '0.55rem', color: p.accent, letterSpacing: '0.1em', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: `1px solid ${p.accent}50`, padding: '4px 12px', textTransform: 'uppercase', borderRadius: 8 }}>
            {p.cat}
          </div>
          <div style={{ position: 'absolute', bottom: 14, right: 14, fontFamily: 'Poppins', fontSize: '2rem', fontWeight: 900, color: p.accent, opacity: 0.2, lineHeight: 1 }}>
            {p.num}
          </div>
        </div>
      )}

      {/* Content - clickable to open modal */}
      <div 
        onClick={() => onOpenModal(p)}
        style={{ padding: '24px 24px 20px', flex: 1, display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <h3 style={{
            fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.05rem',
            color: hov ? p.accent : 'var(--text-primary)', transition: 'color 0.3s', lineHeight: 1.25,
          }}>{p.title}</h3>
          <span style={{ fontFamily: 'DM Mono', fontSize: '0.55rem', opacity: 0.35, marginLeft: 8, flexShrink: 0 }}>{p.year}</span>
        </div>
        <p style={{ fontFamily: 'DM Sans', fontSize: '0.75rem', lineHeight: 1.75, opacity: 0.55, marginBottom: 18 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 'auto' }}>
          {p.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.06em',
              background: p.accent + '10', border: `1px solid ${p.accent}25`,
              color: p.accent, padding: '3px 9px', textTransform: 'uppercase',
              borderRadius: 8,
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Buttons - at bottom */}
      <div style={{ padding: '0 24px 24px', marginTop: 'auto' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <a
            href={p.git}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              padding: '10px',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-primary)',
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
              (e.target as HTMLElement).style.background = p.accent + '20';
              (e.target as HTMLElement).style.borderColor = p.accent + '40';
              (e.target as HTMLElement).style.color = p.accent;
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
              (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              (e.target as HTMLElement).style.color = 'var(--text-primary)';
            }}
          >
            Git Repo
          </a>
          {p.website && (
            <a
              href={p.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                padding: '10px',
                textAlign: 'center',
                background: p.accent + '15',
                border: `1px solid ${p.accent}30`,
                color: p.accent,
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
                (e.target as HTMLElement).style.background = p.accent;
                (e.target as HTMLElement).style.color = '#000';
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background = p.accent + '15';
                (e.target as HTMLElement).style.color = p.accent;
              }}
            >
              Website
            </a>
          )}
        </div>
      </div>

      <motion.div
        animate={{ scaleX: hov ? 1 : 0 }}
        style={{ height: 1, background: `linear-gradient(90deg, ${p.accent}, transparent)`, transformOrigin: 'left', transition: 'transform 0.4s' }}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Cat>('frontend');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const filtered = projects.filter(p => p.cat === active);

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--navy-deep)', padding: '120px 60px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 20, height: 1, background: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>Portfolio</span>
          </div>
          <h2 style={{
            fontFamily: 'Poppins', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            letterSpacing: '-0.01em', lineHeight: 1,
          }}>
            Selected<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Work</span>
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
                ({projects.filter(p => p.cat === tab.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => <ProjectCard key={p.title} p={p} i={i} onOpenModal={setSelectedProject} />)}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.85)',
                zIndex: 999,
                backdropFilter: 'blur(8px)',
              }}
            />
            
            {/* Modal Container - Centered with Flexbox */}
            <div
              style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                zIndex: 1000,
                pointerEvents: 'none',
              }}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 500,
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  background: 'var(--navy-mid)',
                  border: `2px solid ${selectedProject.accent}40`,
                  borderRadius: 12,
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${selectedProject.accent}20`,
                  pointerEvents: 'auto',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                    zIndex: 10,
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.background = selectedProject.accent;
                    (e.target as HTMLElement).style.color = '#000';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.background = 'rgba(0, 0, 0, 0.5)';
                    (e.target as HTMLElement).style.color = 'var(--text-primary)';
                  }}
                >
                  ×
                </button>

                {/* Image */}
                <div style={{ height: 300, overflow: 'hidden', background: 'var(--navy-light)', position: 'relative' }}>
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { 
                      (e.target as HTMLImageElement).parentElement!.style.background = `radial-gradient(circle at 30% 50%, ${selectedProject.accent}20, var(--navy-light))`;
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: `linear-gradient(to bottom, transparent 50%, var(--navy-mid) 100%)`,
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <span style={{
                      fontFamily: 'DM Mono', fontSize: '0.6rem', color: selectedProject.accent,
                      letterSpacing: '0.1em', background: selectedProject.accent + '15',
                      border: `1px solid ${selectedProject.accent}30`, padding: '4px 12px',
                      textTransform: 'uppercase', borderRadius: 8,
                    }}>
                      {selectedProject.cat}
                    </span>
                    <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', opacity: 0.4 }}>
                      {selectedProject.year}
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: 'Poppins', fontWeight: 700, fontSize: '1.6rem',
                    color: selectedProject.accent, marginBottom: 16, lineHeight: 1.2,
                  }}>
                    {selectedProject.title}
                  </h2>

                  <p style={{
                    fontFamily: 'DM Sans', fontSize: '0.9rem', lineHeight: 1.7,
                    opacity: 0.7, marginBottom: 24,
                  }}>
                    {selectedProject.desc}
                  </p>

                  <div style={{ marginBottom: 28 }}>
                    <h3 style={{
                      fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.15em',
                      color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: 14,
                    }}>
                      Technologies Used
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {selectedProject.tech.map(t => (
                        <span key={t} style={{
                          fontFamily: 'DM Mono', fontSize: '0.6rem', letterSpacing: '0.06em',
                          background: selectedProject.accent + '15', border: `1px solid ${selectedProject.accent}30`,
                          color: selectedProject.accent, padding: '5px 12px', textTransform: 'uppercase',
                          borderRadius: 8,
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a
                      href={selectedProject.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '12px',
                        textAlign: 'center',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'var(--text-primary)',
                        fontFamily: 'DM Mono',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        display: 'block',
                        borderRadius: 8,
                      }}
                      onMouseEnter={e => {
                        (e.target as HTMLElement).style.background = selectedProject.accent + '20';
                        (e.target as HTMLElement).style.borderColor = selectedProject.accent + '50';
                        (e.target as HTMLElement).style.color = selectedProject.accent;
                      }}
                      onMouseLeave={e => {
                        (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                        (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                        (e.target as HTMLElement).style.color = 'var(--text-primary)';
                      }}
                    >
                      View Repository →
                    </a>
                    {selectedProject.website && (
                      <a
                        href={selectedProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          padding: '12px',
                          textAlign: 'center',
                          background: selectedProject.accent,
                          border: `1px solid ${selectedProject.accent}`,
                          color: '#000',
                          fontFamily: 'DM Mono',
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          display: 'block',
                          borderRadius: 8,
                          fontWeight: 600,
                        }}
                        onMouseEnter={e => {
                          (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                          (e.target as HTMLElement).style.boxShadow = `0 10px 20px ${selectedProject.accent}40`;
                        }}
                        onMouseLeave={e => {
                          (e.target as HTMLElement).style.transform = 'translateY(0)';
                          (e.target as HTMLElement).style.boxShadow = 'none';
                        }}
                      >
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
