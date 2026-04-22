/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Plane, 
  Ship, 
  Trophy, 
  Globe, 
  ChevronRight, 
  BarChart3, 
  Leaf, 
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Truck,
  Database,
  Smartphone,
  Cpu,
  Download,
  Trash2,
  Building2,
  ShieldCheck,
  Clock,
  LifeBuoy,
  ShoppingBag,
  Zap,
  ChevronLeft
} from 'lucide-react';
import { useState, useEffect, createContext, useContext } from 'react';
import { translations } from './translations';

type Language = 'en' | 'es';
export type View = 'home' | 'garbage' | 'mayors' | 'police';

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  view: View;
  setView: (view: View) => void;
  t: typeof translations.en;
} | null>(null);

const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

const Logo = ({ className = "h-6", textClassName = "text-[18px]" }: { className?: string; textClassName?: string }) => (
  <div className="flex items-center gap-3">
    <img 
      src="/logo.png" 
      alt="PPS Logo" 
      className={className}
      referrerPolicy="no-referrer"
    />
    <span className={`font-bold tracking-[-0.022em] ${textClassName}`}>PPS</span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, view, setView, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || view !== 'home' ? 'glass-nav' : 'bg-transparent h-12'}`}>
      <div className="max-w-screen-lg mx-auto px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-10">
          <button onClick={() => setView('home')}>
            <Logo />
          </button>
          {view === 'home' && (
            <div className="hidden md:flex items-center gap-8 text-[12px] font-normal tracking-tight secondary-text">
              <a href="#services" className="hover:text-apple-black transition-colors">{t.nav.solutions}</a>
              <a href="#enterprise" className="hover:text-apple-black transition-colors">{t.nav.business}</a>
              <a href="#government" className="hover:text-apple-black transition-colors">{t.nav.sustainability}</a>
              <a href="#about" className="hover:text-apple-black transition-colors">{t.nav.about}</a>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="text-[12px] font-medium secondary-text hover:text-apple-black transition-colors uppercase flex items-center gap-1"
          >
            {lang === 'en' ? 'ESP' : 'ENG'}
          </button>
          <a 
            href="https://apps.apple.com/us/app/pps-c%C3%B3digos-postales/id6478095194"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-apple-black text-white px-4 py-1 rounded-full text-[11px] font-medium hover:opacity-90 transition-opacity"
          >
            {t.nav.shipNow}
          </a>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 space-y-4 animate-fade-in-up text-[14px]">
           <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block font-medium">{t.nav.solutions}</a>
           <a href="#enterprise" onClick={() => setMobileMenuOpen(false)} className="block font-medium">{t.nav.business}</a>
           <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="block font-medium">{t.nav.sustainability}</a>
           <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block font-medium">{t.nav.about}</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden hero-gradient">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        <span className="text-apple-blue font-semibold tracking-wider text-[12px] uppercase mb-4 block">{t.hero.tagline}</span>
        <h1 className="text-[48px] md:text-[72px] font-semibold mb-6 tracking-[-0.03em] leading-[1.05]">
          {t.hero.headline}
        </h1>
        <p className="text-[19px] md:text-[22px] text-apple-gray max-w-2xl mx-auto mb-10 font-normal tracking-tight leading-snug">
          {t.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://apps.apple.com/us/app/pps-c%C3%B3digos-postales/id6478095194"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-apple-black text-white px-8 py-3 rounded-full text-[16px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Smartphone size={18} /> {t.cta.appStore}
          </a>
          <button className="bg-apple-black text-white px-8 py-3 rounded-full text-[16px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Smartphone size={18} /> {t.cta.googlePlay}
          </button>
        </div>
        <div className="mt-8">
          <a href="#problem" className="text-apple-blue hover:underline flex items-center justify-center gap-1 font-normal transition-all text-[17px]">
            {t.hero.learnMore} <ChevronRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const ProblemSolution = () => {
  const { t } = useTranslation();
  return (
    <section id="problem" className="bg-apple-black text-white py-32 px-12 overflow-hidden border-b border-white/5">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -30 }}
           viewport={{ once: true }}
        >
          <h2 className="text-[44px] md:text-[56px] font-semibold tracking-tight mb-8 leading-[1.1]">{t.problem.title}</h2>
          <p className="text-[19px] secondary-text mb-8 leading-relaxed opacity-80">{t.problem.description}</p>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
             <Cpu className="text-apple-blue mb-4" size={32} />
             <p className="text-[17px] font-light leading-relaxed">{t.problem.solution}</p>
          </div>
        </motion.div>
        <motion.div 
           whileInView={{ opacity: 1, scale: 1 }}
           initial={{ opacity: 0, scale: 0.9 }}
           viewport={{ once: true }}
           className="relative aspect-square flex items-center justify-center p-8 overflow-hidden"
        >
           <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,113,227,0.2)]">
             {/* Atmospheric background */}
             <defs>
               <radialGradient id="skyGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                 <stop offset="0%" stopColor="#0071e3" stopOpacity="0.15" />
                 <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
               </radialGradient>
               
               <filter id="wave">
                 <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="1" result="noise">
                   <animate attributeName="baseFrequency" values="0.015; 0.02; 0.015" dur="5s" repeatCount="indefinite" />
                 </feTurbulence>
                 <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
               </filter>
             </defs>
             
             <circle cx="200" cy="200" r="180" fill="url(#skyGrad)" />
             
             {/* Mountain - Stylized Ancon Hill look */}
             <path 
               d="M50 350 Q200 100 350 350 Z" 
               fill="#1a1c44" 
               stroke="#0071e3" 
               strokeWidth="2" 
               strokeOpacity="0.3"
             />
             <path 
               d="M80 350 Q200 180 320 350 Z" 
               fill="#0f172a" 
               opacity="0.8"
             />

             {/* Flag Pole */}
             <rect x="198" y="80" width="4" height="200" fill="#64748b" rx="2" />
             <circle cx="200" cy="80" r="4" fill="#94a3b8" />

             {/* Panama Flag with waving effect */}
             <g className="animate-pulse" style={{ filter: 'url(#wave)' }}>
               {/* Flag Base (Standard Proportions 2:3) */}
               <rect x="202" y="85" width="120" height="80" fill="white" className="shadow-lg" />
               
               {/* Red Quadrant (Top Right) */}
               <rect x="262" y="85" width="60" height="40" fill="#DA121A" />
               
               {/* Blue Quadrant (Bottom Left) */}
               <rect x="202" y="125" width="60" height="40" fill="#072357" />
               
               {/* Blue Star (Top Left White) */}
               <path d="M232 95 l2 4 h6 l-4 3 l2 7 l-6-4 l-6 4 l2-7 l-4-3 h6 z" fill="#072357" />
               
               {/* Red Star (Bottom Right White) */}
               <path d="M292 135 l2 4 h6 l-4 3 l2 7 l-6-4 l-6 4 l2-7 l-4-3 h6 z" fill="#DA121A" />
               
               {/* Flag border for crispness */}
               <rect x="202" y="85" width="120" height="80" fill="none" stroke="black" strokeWidth="0.1" opacity="0.2" />
             </g>

             {/* Digital Infrastructure Accents */}
             <g className="opacity-30">
                <circle cx="200" cy="180" r="3" fill="#0071e3" className="animate-ping" />
                <path d="M200 180 L280 250" stroke="#0071E3" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M200 180 L120 280" stroke="#0071E3" strokeWidth="1" strokeDasharray="4 4" />
             </g>
           </svg>
        </motion.div>
      </div>
    </section>
  );
};

const ConsumerServices = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="section-container">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-[56px] font-semibold tracking-[-0.022em] mb-4">{t.services.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* House Tagging */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="bento-card p-10 flex flex-col items-center text-center justify-between group h-full"
        >
          <div className="w-full h-48 bg-apple-bg rounded-2xl flex items-center justify-center mb-8 overflow-hidden relative">
             <CreditCard className="text-apple-blue group-hover:scale-110 transition-transform duration-500" size={64} />
             <div className="absolute top-4 right-4 bg-apple-new text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">$25</div>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold mb-4">{t.services.tagging.title}</h3>
            <p className="secondary-text text-[15px] mb-8 leading-relaxed">{t.services.tagging.description}</p>
          </div>
          <button className="bg-apple-black text-white w-full py-3 rounded-full text-[14px] font-medium hover:opacity-90">{t.services.tagging.action}</button>
        </motion.div>

        {/* National Logistics */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-card p-10 flex flex-col items-center text-center justify-between group h-full"
        >
           <div className="w-full h-48 bg-apple-black rounded-2xl flex items-center justify-center mb-8 overflow-hidden relative">
             <Truck className="text-apple-blue group-hover:translate-x-2 transition-transform duration-500" size={64} />
          </div>
          <div>
            <h3 className="text-[24px] font-semibold mb-4">{t.services.logistics.title}</h3>
            <p className="secondary-text text-[15px] mb-8 leading-relaxed">{t.services.logistics.description}</p>
          </div>
          <button className="bg-apple-black text-white w-full py-3 rounded-full text-[14px] font-medium hover:opacity-90">{t.services.logistics.action}</button>
        </motion.div>

        {/* Global Integration */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-card p-10 flex flex-col items-center text-center justify-between group h-full"
        >
           <div className="w-full h-48 bg-apple-blue/10 rounded-2xl flex items-center justify-center mb-8 overflow-hidden relative">
             <Plane className="text-apple-blue group-hover:-translate-y-2 transition-transform duration-500" size={64} />
          </div>
          <div>
            <h3 className="text-[24px] font-semibold mb-4">{t.services.intl.title}</h3>
            <p className="secondary-text text-[15px] mb-8 leading-relaxed">{t.services.intl.description}</p>
          </div>
          <button className="bg-apple-blue text-white w-full py-3 rounded-full text-[14px] font-medium hover:opacity-90">{t.services.intl.action}</button>
        </motion.div>
      </div>
    </section>
  );
};

const PostalCodeEducation = () => {
  const { t } = useTranslation();
  const icons = [<Clock />, <LifeBuoy />, <ShoppingBag />, <Zap />];
  
  return (
    <section id="education" className="section-container bg-apple-bg">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-[56px] font-semibold tracking-[-0.022em] mb-8">{t.education.title}</h2>
          <p className="text-[19px] secondary-text max-w-2xl mx-auto leading-relaxed">{t.education.summary}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.education.points.map((point, index) => (
            <motion.div 
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-[2.5rem] border border-gray-100 flex items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-apple-bg rounded-2xl flex items-center justify-center shrink-0 text-apple-blue group-hover:bg-apple-blue group-hover:text-white transition-all duration-300">
                {icons[index]}
              </div>
              <div>
                <h3 className="text-[20px] font-semibold mb-3 text-apple-black">{point.title}</h3>
                <p className="secondary-text text-[15px] leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Enterprise = () => {
  const { t } = useTranslation();
  return (
    <section id="enterprise" className="bg-apple-bg py-32 px-12">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center gap-20">
         <div className="flex-1">
            <span className="text-apple-blue font-bold uppercase tracking-[0.2em] text-[11px] mb-4 block">{t.b2b.tagline}</span>
            <h2 className="text-[40px] md:text-[56px] font-semibold mb-8 leading-none tracking-tight">{t.b2b.title}</h2>
            <p className="text-[19px] secondary-text mb-10 leading-relaxed">{t.b2b.description}</p>
            <button className="bg-apple-black text-white px-8 py-4 rounded-full text-[16px] font-medium flex items-center gap-2">
               {t.b2b.action} <ChevronRight size={18} />
            </button>
         </div>
         <div className="flex-1 w-full lg:w-auto h-96 bg-apple-black rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center border border-gray-200">
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-10 gap-2 p-4">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-apple-blue rounded-xs opacity-50" />
                ))}
              </div>
            </div>
            <code className="text-apple-blue font-mono text-[13px] leading-relaxed z-10 p-6 bg-black/40 rounded-2xl backdrop-blur-md">
              {`POST /v3/routing/pps-code\n{\n  "long": -79.51,\n  "lat": 8.98,\n  "routing": "PPS-1-0-1-1"\n}\n\n// Response 200 OK\n{\n  "status": "verified",\n  "code": "3RD-GEN-READY"\n}`}
            </code>
         </div>
      </div>
    </section>
  );
};

const PublicSector = () => {
  const { t, setView } = useTranslation();
  return (
    <section id="government" className="section-container bg-white">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-20 text-center">
          <span className="text-apple-blue font-bold uppercase tracking-[0.2em] text-[11px] mb-4 block">{t.government.tagline}</span>
          <h2 className="text-4xl md:text-[56px] font-semibold tracking-[-0.022em] mb-8">{t.government.title}</h2>
          <p className="text-[19px] secondary-text max-w-2xl mx-auto leading-relaxed">{t.government.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            onClick={() => { setView('garbage'); window.scrollTo(0, 0); }}
            className="p-10 bg-apple-bg rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-apple-black group-hover:text-white transition-all duration-300">
              <Trash2 size={32} />
            </div>
            <h3 className="text-[22px] font-semibold mb-4 text-apple-black">{t.government.garbage.title}</h3>
            <p className="secondary-text text-[15px] leading-relaxed mb-6">{t.government.garbage.description}</p>
            <div className="mt-auto flex items-center gap-2 text-apple-blue font-medium group-hover:translate-x-1 transition-transform">
              {t.government.knowMore} <ChevronRight size={16} />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => { setView('mayors'); window.scrollTo(0, 0); }}
            className="p-10 bg-apple-bg rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-apple-black group-hover:text-white transition-all duration-300">
              <Building2 size={32} />
            </div>
            <h3 className="text-[22px] font-semibold mb-4 text-apple-black">{t.government.mayors.title}</h3>
            <p className="secondary-text text-[15px] leading-relaxed mb-6">{t.government.mayors.description}</p>
            <div className="mt-auto flex items-center gap-2 text-apple-blue font-medium group-hover:translate-x-1 transition-transform">
              {t.government.knowMore} <ChevronRight size={16} />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => { setView('police'); window.scrollTo(0, 0); }}
            className="p-10 bg-apple-bg rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-apple-black group-hover:text-white transition-all duration-300">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-[22px] font-semibold mb-4 text-apple-black">{t.government.police.title}</h3>
            <p className="secondary-text text-[15px] leading-relaxed mb-6">{t.government.police.description}</p>
            <div className="mt-auto flex items-center gap-2 text-apple-blue font-medium group-hover:translate-x-1 transition-transform">
              {t.government.knowMore} <ChevronRight size={16} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceDetailPage = ({ type }: { type: 'garbage' | 'mayors' | 'police' }) => {
  const { t, setView } = useTranslation();
  const data = t.government[type];
  const Icon = type === 'garbage' ? Trash2 : type === 'mayors' ? Building2 : ShieldCheck;

  return (
    <div className="pt-32 min-h-screen bg-white">
      <div className="max-w-screen-lg mx-auto px-12">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-apple-blue font-medium mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ChevronRight size={16} className="rotate-180" />
          {t.government.back}
        </button>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
             <div className="w-16 h-16 bg-apple-bg rounded-2xl flex items-center justify-center mb-8">
                <Icon size={32} className="text-apple-black" />
             </div>
             <h1 className="text-[48px] md:text-[64px] font-semibold tracking-tight leading-none mb-8">
               {data.title}
             </h1>
             <p className="text-[22px] font-medium text-apple-black mb-8">
               {data.description}
             </p>
             <p className="text-[19px] secondary-text leading-relaxed">
               {data.details}
             </p>
          </div>
          <div className="w-full md:w-80 h-80 bg-apple-bg rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center">
             <Globe size={400} strokeWidth={0.2} className="absolute text-apple-blue/10 animate-pulse" />
             <Database size={80} className="text-apple-blue relative z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const VisionaryTrust = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-32 px-12 bg-white">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[56px] font-semibold tracking-[-0.022em] mb-8 leading-[1.05]">
              {t.trust.visionaryTitle}
            </h2>
            <p className="text-[19px] secondary-text leading-relaxed font-normal">
              {t.trust.visionaryText}
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bento-card border-none bg-apple-bg group">
               <div className="text-[40px] font-semibold mb-2 group-hover:text-apple-blue transition-colors">2020</div>
               <div className="secondary-text text-[11px] uppercase tracking-widest font-bold">{t.trust.since}</div>
            </div>
            <div className="p-8 bento-card border-none bg-apple-bg group">
               <div className="text-[40px] font-semibold mb-2 group-hover:text-apple-blue transition-colors">10K+</div>
               <div className="secondary-text text-[11px] uppercase tracking-widest font-bold">{t.trust.houses}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className="section-container text-center pt-0 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto bento-card p-12 md:p-32 border border-gray-100 bg-white text-apple-black relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden shadow-sm">
        <div className="z-20 relative">
          <h2 className="text-[56px] md:text-[110px] font-bold tracking-[-0.05em] mb-8 leading-[0.9] text-apple-black">{t.cta.headline}</h2>
          <p className="text-[19px] md:text-[24px] secondary-text max-w-2xl mx-auto mb-14 tracking-tight leading-snug font-medium">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <a 
               href="https://apps.apple.com/us/app/pps-c%C3%B3digos-postales/id6478095194"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-3 px-10 py-5 rounded-full text-[18px] font-semibold transition-all hover:bg-gray-50 bg-white border border-gray-200 shadow-xs"
             >
                <Download size={22} className="text-apple-black" /> {t.cta.appStore}
             </a>
             <button className="bg-linear-to-br from-[#2F67FF] to-[#6E3FFF] text-white px-10 py-5 rounded-full text-[18px] font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <Download size={22} /> {t.cta.googlePlay}
             </button>
          </div>
        </div>
        
        {/* Stylized Globe background like in screenshot */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-[140%] h-[140%] animate-pulse [animation-duration:8s]">
            <circle cx="50" cy="50" r="49.5" fill="none" stroke="#0071E3" strokeWidth="0.1" />
            <ellipse cx="50" cy="50" rx="20" ry="49.5" fill="none" stroke="#0071E3" strokeWidth="0.1" />
            <ellipse cx="50" cy="50" rx="35" ry="49.5" fill="none" stroke="#0071E3" strokeWidth="0.1" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#0071E3" strokeWidth="0.1" />
            <path d="M0 50 Q 50 10 100 50" fill="none" stroke="#0071E3" strokeWidth="0.1" opacity="0.5" />
            <path d="M0 50 Q 50 90 100 50" fill="none" stroke="#0071E3" strokeWidth="0.1" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-apple-bg py-24 px-12 border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-12">
          <Logo className="h-12" textClassName="text-[24px]" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-[12px]">
          <div className="space-y-4">
            <h4 className="font-semibold text-apple-black">{t.footer.infrastructure.title}</h4>
            <ul className="space-y-2 secondary-text">
              {t.footer.infrastructure.links.map(link => <li key={link}><a href="#" className="hover:text-apple-black transition-colors">{link}</a></li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-apple-black">{t.footer.business.title}</h4>
            <ul className="space-y-2 secondary-text">
              {t.footer.business.links.map(link => <li key={link}><a href="#" className="hover:text-apple-black transition-colors">{link}</a></li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-apple-black">{t.footer.values.title}</h4>
            <ul className="space-y-2 secondary-text">
              {t.footer.values.links.map(link => <li key={link}><a href="#" className="hover:text-apple-black transition-colors">{link}</a></li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-apple-black">{t.footer.account.title}</h4>
            <ul className="space-y-2 secondary-text">
              {t.footer.account.links.map(link => <li key={link}><a href="#" className="hover:text-apple-black transition-colors">{link}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-[11px] secondary-text gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex space-x-6">
            <span>{t.footer.legal[0]}</span>
            <a href="#" className="hover:text-apple-black transition-colors underline-offset-2">{t.footer.legal[1]}</a>
            <a href="#" className="hover:text-apple-black transition-colors underline-offset-2">{t.footer.legal[2]}</a>
            <a href="#" className="hover:text-apple-black transition-colors underline-offset-2">{t.footer.legal[3]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [view, setView] = useState<View>('home');

  return (
    <LanguageContext.Provider value={{ lang, setLang, view, setView, t: translations[lang] }}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          {view === 'home' ? (
            <>
              <Hero />
              <ProblemSolution />
              <ConsumerServices />
              <PostalCodeEducation />
              <Enterprise />
              <PublicSector />
              <VisionaryTrust />
              <CTA />
            </>
          ) : (
            <ServiceDetailPage type={view} />
          )}
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
