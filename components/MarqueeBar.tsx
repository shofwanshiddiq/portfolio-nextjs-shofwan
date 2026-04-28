'use client';
const items = [
  '.NET CORE', 'C#', 'ASP.NET MVC', 'GOLANG', 'REACT', 'NEXT.JS',
  'DOCKER', 'MICROSERVICES', 'SQL SERVER', 'MONGODB', 'KALI LINUX',
  'PENETRATION TESTING', 'NODE.JS', 'TYPESCRIPT', 'REDIS', 'gRPC',
];
export default function MarqueeBar({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '14px 0', overflow: 'hidden',
    }}>
      <div className="marquee-track" style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
        {doubled.map((s, i) => (
          <span key={i} style={{
            fontFamily: 'DM Mono', fontSize: '0.65rem', letterSpacing: '0.12em',
            color: i % 5 === 2 ? 'var(--accent-gold)' : 'rgba(232,234,240,0.35)',
            marginRight: 48, whiteSpace: 'nowrap', textTransform: 'uppercase',
          }}>
            {s} <span style={{ color: 'var(--accent-gold)', opacity: 0.4 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
