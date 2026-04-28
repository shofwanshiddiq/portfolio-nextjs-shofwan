'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

        {/* MAIN BENTO ROW - Profile Left, Experience Right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 60 }}>

          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'linear-gradient(160deg, var(--navy-mid), var(--navy-light))',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 8, padding: '40px 36px',
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
              width: 200, height: 200, borderRadius: '50%',
              border: '2px solid rgba(201,168,76,0.4)',
              overflow: 'hidden', position: 'relative', flexShrink: 0,
              boxShadow: '0 0 40px rgba(201,168,76,0.15)',
            }}>
              <img src="/profiles.png" alt="Shofwan Shiddiq" style={{ width: '100%', height: '110%', objectFit: 'contain' }} />
            </div>

            <div>
              <h3 style={{
                fontFamily: 'Poppins', fontWeight: 700,
                fontSize: '1.7rem', marginBottom: 8, color: 'var(--text-primary)',
              }}>Shofwan Shiddiq</h3>
              <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Software Engineer
              </div>
            </div>

            <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)' }} />

            <div style={{ width: '100%', textAlign: 'left' }}>
              <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', lineHeight: 1.9, opacity: 0.7, marginBottom: 16 }}>
                Software Engineer with <span style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>4 years of experience</span> in developing full-stack solutions for Corporate Support Systems, Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), E-Commerce platforms, and cross-platform mobile applications.
              </p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', lineHeight: 1.9, opacity: 0.7, marginBottom: 16 }}>
                Specialized in the <span style={{ color: '#7b6cf6', fontWeight: 500 }}>.NET ecosystem</span>, including .NET Framework, .NET Core, ASP.NET MVC, ASP.NET Web API, .NET MAUI, alongside integrating Microsoft SQL Server, managing databases, and implementing stored procedures and functions to deliver scalable, end-to-end solutions.
              </p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', lineHeight: 1.9, opacity: 0.7, marginBottom: 16 }}>
                Learning experience in <span style={{ color: '#e85a8a', fontWeight: 500 }}>Cybersecurity</span>, covering topics such as penetration testing fundamentals, network security, vulnerability assessment, cryptographic failures, and web security, with hands-on security testing using Kali Linux.
              </p>
              <p style={{ fontFamily: 'DM Sans', fontSize: '0.85rem', lineHeight: 1.9, opacity: 0.7 }}>
                Also experienced in building <span style={{ color: '#4dd9e8', fontWeight: 500 }}>microservices</span>, implementing message brokers using RabbitMQ, performing gRPC requests & creating proto file, using Nginx for load balancing, and writing unit tests. Experience working with Golang, NodeJS, Python, PHP for backend development, React, Angular for front-end development, REST & GraphQL for API Integration with MySQL, MongoDB, Redis as database and Docker for containerization.
              </p>
            </div>

            <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)' }} />

            <div style={{ width: '100%' }}>
              {[
                { icon: '📍', text: 'South Tangerang, Indonesia' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  fontFamily: 'DM Mono', fontSize: '0.68rem', opacity: 0.65, letterSpacing: '0.05em',
                }}>
                  <span style={{ fontSize: '0.85rem' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass"
            style={{ padding: '40px 36px', borderRadius: 8 }}
          >
            <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--accent-rose)', textTransform: 'uppercase', marginBottom: 32 }}>
              EXPERIENCE TIMELINE
            </div>

            {/* Protelindo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{
                paddingBottom: 28, marginBottom: 28,
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <div style={{ flexShrink: 0, paddingTop: 6 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: '#c9a84c', boxShadow: '0 0 12px rgba(201,168,76,0.6)',
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'DM Mono', fontSize: '0.62rem', color: '#c9a84c', letterSpacing: '0.1em', marginBottom: 6 }}>
                    Jun 2025 - Present
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '1rem', fontWeight: 600, marginBottom: 4 }}>
                    .NET Developer
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '0.68rem', opacity: 0.5, letterSpacing: '0.05em', marginBottom: 12 }}>
                    PT Professional Telekomunikasi Indonesia (Protelindo)
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {['.NET Framework', '.NET Core', 'SQL Server', 'PostgreSQL', 'TypeScript'].map(tech => (
                      <span key={tech} style={{
                        fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.06em',
                        background: '#c9a84c12', border: '1px solid #c9a84c30',
                        color: '#c9a84c', padding: '3px 9px', textTransform: 'uppercase', borderRadius: 6,
                      }}>{tech}</span>
                    ))}
                  </div>
                  <ul style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', lineHeight: 1.8, opacity: 0.6, paddingLeft: 18, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>Manage and maintain internal support system applications using .NET Framework and Serenity Core, with SQL Server and REST API integration.</li>
                    <li style={{ marginBottom: 8 }}>Revamp and upgrade legacy applications from .NET Framework to .NET Core by rebuilding systems and redesigning into microservices architecture.</li>
                    <li>Collaborate with users to understand business requirements and translate them into technical solutions.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Minova */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.62 }}
            >
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ flexShrink: 0, paddingTop: 6 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: '#4dd9e8', boxShadow: '0 0 12px rgba(77,217,232,0.6)',
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'DM Mono', fontSize: '0.62rem', color: '#4dd9e8', letterSpacing: '0.1em', marginBottom: 6 }}>
                    Sep 2022 - May 2025
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '1rem', fontWeight: 600, marginBottom: 4 }}>
                    IT Developer
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '0.68rem', opacity: 0.5, letterSpacing: '0.05em', marginBottom: 12 }}>
                    PT Minova Infotech Solutions
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {['.NET Framework', 'SQL Server', 'RESTful API', 'ExtJS'].map(tech => (
                      <span key={tech} style={{
                        fontFamily: 'DM Mono', fontSize: '0.55rem', letterSpacing: '0.06em',
                        background: '#4dd9e812', border: '1px solid #4dd9e830',
                        color: '#4dd9e8', padding: '3px 9px', textTransform: 'uppercase', borderRadius: 6,
                      }}>{tech}</span>
                    ))}
                  </div>
                  <ul style={{ fontFamily: 'DM Sans', fontSize: '0.8rem', lineHeight: 1.8, opacity: 0.6, paddingLeft: 18, margin: 0 }}>
                    <li style={{ marginBottom: 8 }}>Designed and built an e-commerce application, integrating it with MinovaES accounting and logistics modules, supporting multiple retail clients across Indonesia.</li>
                    <li style={{ marginBottom: 8 }}>Built the MinovaHR mobile app with location-based attendance tracking, leave workflows, and logistics management. Deployed to 500+ employees.</li>
                    <li style={{ marginBottom: 8 }}>Managed MinovaES front-end web application using ExtJS. Currently used daily by 20+ companies and 10,000+ users across Indonesia.</li>
                    <li>Designed and built a web application for client support, enabling efficient ticketing system management.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Arsenal Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass"
          style={{ padding: '40px 36px', borderRadius: 8 }}
        >
          <div style={{ fontFamily: 'DM Mono', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: 32, textAlign: 'center' }}>
            TECH STACKS
          </div>
          
          {/* Tech Stack with Icons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 24, justifyItems: 'center' }}>
            {[
              { name: 'HTML & CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e8724a' },
              { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#4dd9e8' },
              { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#7b6cf6' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#c9a84c' },
              { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#4dd9e8' },
              { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
              { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#7ae86e' },
              { name: 'ExtJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#c9a84c' },
              { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#e85a8a' },
              { name: '.NET', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg', color: '#7b6cf6' },
              { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', color: '#7b6cf6' },
              { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: '#4dd9e8' },
              { name: 'Kali Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#e85a8a' },
              { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', color: '#c9a84c' },
              { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4dd9e8' },
              { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4dd9e8' },
              { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#7ae86e' },
              { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#e8eaf0' },
              { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#4dd9e8' },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.03 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  padding: '16px 12px', borderRadius: 8,
                  background: tech.color + '08',
                  border: `1px solid ${tech.color}20`,
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = tech.color + '15';
                  (e.currentTarget as HTMLElement).style.borderColor = tech.color + '40';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = tech.color + '08';
                  (e.currentTarget as HTMLElement).style.borderColor = tech.color + '20';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <img src={tech.icon} alt={tech.name} style={{ width: 48, height: 48, objectFit: 'contain' }} />
                <span style={{ fontFamily: 'DM Mono', fontSize: '0.6rem', color: tech.color, textAlign: 'center', letterSpacing: '0.05em' }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
