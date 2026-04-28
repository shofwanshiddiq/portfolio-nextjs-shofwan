'use client';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import MarqueeBar from '@/components/MarqueeBar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CoursesSection from '@/components/CoursesSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <MarqueeBar />
        <AboutSection />
        <MarqueeBar reverse />
        <ProjectsSection />
        <CoursesSection />
        <ContactSection />
      </main>
    </>
  );
}
