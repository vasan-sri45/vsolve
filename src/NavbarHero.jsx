import { useEffect, useMemo, useState } from 'react';
// import { categories as problemTypes } from './data/categories';
import { problemTypes } from './data/blogData';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GuidesSection from './components/GuidesSection';
import ProcessSteps from './components/ProcessSteps';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ConsultationFormSheet from './components/ConsultationFormSheet';
import BlogGuideSheet from './components/BlogGuideSheet';
import OptionsSheet from './components/OptionsSheet';
import AboutSheet from './components/AboutSheet';
import './vsolve-input.css';

export default function NavbarHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [activeProblem, setActiveProblem] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  useEffect(() => {
    const found = new URLSearchParams(window.location.search).get('guide');
    if (found) setSelectedBlog(problemTypes.find((p) => p.id === found) || null);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSafeTalk = (problem = null) => { setActiveProblem(problem); setIsFormOpen(true); };
  const resetHome = () => { setSelectedBlog(null); setIsAboutOpen(false); setIsFormOpen(false); setIsOptionsOpen(false); };

  return (
    <div className="min-h-screen bg-[#F5F3EF] flex flex-col antialiased text-[#1A1815] w-full">
      <Header isScrolled={isScrolled} onHome={resetHome} onAbout={() => setIsAboutOpen(true)} onSafeTalk={() => openSafeTalk(null)} />
      <div id="scroll-area" className="flex-1 flex flex-col justify-between">
        <HeroSection onSafeTalk={() => openSafeTalk(null)} />
        <GuidesSection problemTypes={problemTypes} expandedCategoryId={expandedCategoryId} setExpandedCategoryId={setExpandedCategoryId} onSelectBlog={setSelectedBlog} />
        <ProcessSteps />
        <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <Footer onAbout={() => setIsAboutOpen(true)} onSafeTalk={() => openSafeTalk(null)} />
      </div>
      <ConsultationFormSheet isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} activeProblem={activeProblem} />
      <BlogGuideSheet selectedBlog={selectedBlog} onClose={() => setSelectedBlog(null)} onSafeTalk={openSafeTalk} />
      <OptionsSheet isOpen={isOptionsOpen} onClose={() => setIsOptionsOpen(false)} onSafeTalk={() => openSafeTalk(null)} />
      <AboutSheet isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} onSafeTalk={() => openSafeTalk(null)} />
    </div>
  );
}
