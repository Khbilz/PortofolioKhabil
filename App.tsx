import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Code2, 
  Trophy, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
  Database,
  Terminal,
  Gamepad2,
  Image as ImageIcon,
  Palette,
  Video,
  Box,
  Phone,
  MessageCircle,
  Youtube,
  Globe,
  Monitor,
  Shield,
  CheckCircle2,
  Server,
  MessageSquare
} from 'lucide-react';

// --- Types ---
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Achievement {
  title: string;
  year: string;
  description: string;
  image: string;
}

interface Project {
  title: string;
  category: string;
  link: string;
  image: string;
  type: 'youtube' | 'web' | 'discord' | 'instagram' | 'other';
}

// --- Constants ---
const BIRTH_DATE = '2007-09-23';
const NAME = 'Khabil Ramandika';
const PHONE_NUMBER = '085263138759';
const WA_LINK = 'https://wa.me/6285263138759';

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML/CSS', icon: <Code2 className="w-5 h-5" />, level: 'Advanced' },
      { name: 'JavaScript', icon: <Code2 className="w-5 h-5" />, level: 'Intermediate' },
      { name: 'React.js', icon: <Code2 className="w-5 h-5" />, level: 'Intermediate' },
      { name: 'Tailwind CSS', icon: <Code2 className="w-5 h-5" />, level: 'Advanced' },
    ]
  },
  {
    title: 'Programming & Database',
    skills: [
      { name: 'MySQL', icon: <Database className="w-5 h-5" />, level: 'Intermediate' },
      { name: 'Python', icon: <Terminal className="w-5 h-5" />, level: 'Intermediate' },
      { name: 'Pawn', icon: <Terminal className="w-5 h-5" />, level: 'Advanced' },
      { name: 'RBX (Luau)', icon: <Gamepad2 className="w-5 h-5" />, level: 'Advanced' },
    ]
  },
  {
    title: 'Creative & Design',
    skills: [
      { name: 'Photoshop', icon: <ImageIcon className="w-5 h-5" />, level: 'Intermediate' },
      { name: 'Canva', icon: <Palette className="w-5 h-5" />, level: 'Advanced' },
      { name: 'CapCut', icon: <Video className="w-5 h-5" />, level: 'Advanced' },
      { name: 'Blender', icon: <Box className="w-5 h-5" />, level: 'Intermediate' },
    ]
  },
  {
    title: 'OS & Security',
    skills: [
      { name: 'Kali Linux', icon: <Shield className="w-5 h-5" />, level: 'Intermediate' },
      { name: 'Ubuntu', icon: <Monitor className="w-5 h-5" />, level: 'Advanced' },
    ]
  },
  {
    title: 'QA & Testing',
    skills: [
      { name: 'Website Testing', icon: <CheckCircle2 className="w-5 h-5" />, level: 'Advanced' },
      { name: 'SAMP Server Testing', icon: <Server className="w-5 h-5" />, level: 'Advanced' },
      { name: 'Quality Assurance', icon: <CheckCircle2 className="w-5 h-5" />, level: 'Intermediate' },
    ]
  }
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Juara 1 Lomba Web Design',
    year: '2024',
    description: 'Memenangkan kompetisi desain web tingkat regional dengan fokus pada aksesibilitas dan estetika modern.',
    image: 'https://picsum.photos/seed/award1/800/600'
  },
  {
    title: 'Finalis Olimpiade Informatika',
    year: '2023',
    description: 'Berhasil mencapai babak final dalam kompetisi pemrograman tingkat nasional.',
    image: 'https://picsum.photos/seed/award2/800/600'
  }
];

const PROJECTS: Project[] = [
  {
    title: 'State of Krithm',
    category: 'SAMP Server',
    link: 'https://discord.gg/qh3W9Kp5QG',
    image: 'https://picsum.photos/seed/krithm/800/600',
    type: 'discord'
  },
  {
    title: 'Krithm Official Info',
    category: 'Community',
    link: 'https://www.instagram.com/krithm.official?igsh=bDVyM2t5M2NpN2R0',
    image: 'https://picsum.photos/seed/krithm_ig/800/600',
    type: 'instagram'
  },
  {
    title: 'Modern E-commerce UI',
    category: 'Web Design',
    link: 'https://youtube.com',
    image: 'https://picsum.photos/seed/project1/800/600',
    type: 'youtube'
  },
  {
    title: '3D Character Modeling',
    category: 'Blender',
    link: 'https://youtube.com',
    image: 'https://picsum.photos/seed/project2/800/600',
    type: 'youtube'
  },
  {
    title: 'Personal Portfolio',
    category: 'React.js',
    link: '#',
    image: 'https://picsum.photos/seed/project3/800/600',
    type: 'web'
  }
];

// --- Helper Functions ---
const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

// --- Components ---

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'prestasi', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Prestasi', href: '#prestasi', id: 'prestasi' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#e5e1da]/80 dark:bg-zinc-950/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          KR<span className="text-zinc-400">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm font-medium transition-all relative group ${
                activeSection === link.id 
                  ? 'text-zinc-900 dark:text-white' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-900 dark:bg-white"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            className="text-zinc-900 dark:text-zinc-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#e5e1da] dark:bg-zinc-950 border-b border-zinc-300 dark:border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === link.id 
                      ? 'text-zinc-900 dark:text-white' 
                      : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Available for projects
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8 text-zinc-900 dark:text-white">
            {NAME}
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed mb-10">
            Seorang pelajar dan pengembang web yang berfokus pada pembuatan pengalaman digital yang bersih, elegan, dan fungsional.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="px-8 py-4 bg-[#1c1917] dark:bg-zinc-50 text-[#e5e1da] dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center group shadow-lg shadow-zinc-400/20 dark:shadow-none"
            >
              Lihat Karya
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-8 py-4 border border-zinc-400/30 dark:border-zinc-800 text-[#1c1917] dark:text-zinc-50 rounded-full font-medium hover:bg-zinc-300/20 dark:hover:bg-zinc-900 transition-all"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/khabil/1000/1000" 
              alt={NAME}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e5e1da] dark:bg-zinc-900 p-4 rounded-2xl shadow-xl hidden md:block">
            <div className="w-full h-full border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-xl flex items-center justify-center text-center">
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">Est. 2007</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const age = calculateAge(BIRTH_DATE);

  return (
    <section id="about" className="py-24 px-6 bg-[#dcd7cc] dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">About Me</h2>
            <h3 className="text-4xl font-serif font-bold leading-tight text-zinc-900 dark:text-white">Membangun masa depan melalui kode.</h3>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Halo! Saya Khabil Ramandika, seorang pemuda berusia {age} tahun yang memiliki gairah besar dalam dunia teknologi dan desain. Lahir pada 23 September 2007, saya mulai mengeksplorasi dunia pemrograman sejak usia dini.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase font-bold mb-1">Nama Lengkap</p>
                <p className="font-medium text-zinc-800 dark:text-zinc-200">{NAME}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase font-bold mb-1">Tanggal Lahir</p>
                <p className="font-medium text-zinc-800 dark:text-zinc-200">23 September 2007</p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase font-bold mb-1">Umur</p>
                <p className="font-medium text-zinc-800 dark:text-zinc-200">{age} Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">Expertise</h2>
          <h3 className="text-5xl font-serif font-bold text-zinc-900 dark:text-white">Keahlian & Teknologi</h3>
        </div>
        
        <div className="space-y-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={category.title}>
              <h4 className="text-xl font-bold mb-8 text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-center md:text-left">
                {category.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-[#f0ede6] dark:bg-zinc-900 border border-zinc-300/20 dark:border-zinc-800 rounded-2xl hover:shadow-xl hover:border-zinc-400/30 dark:hover:border-zinc-700 transition-all group"
                  >
                    <div className="w-12 h-12 bg-zinc-300/30 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1c1917] dark:group-hover:bg-zinc-50 group-hover:text-[#e5e1da] dark:group-hover:text-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400">
                      {skill.icon}
                    </div>
                    <h5 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{skill.name}</h5>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">{skill.level}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#dcd7cc]/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">Portfolio</h2>
          <h3 className="text-5xl font-serif font-bold text-zinc-900 dark:text-white">Proyek Pilihan</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#f0ede6] dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-300/20 dark:border-zinc-800 hover:shadow-2xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">{project.title}</h4>
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-300/30 dark:bg-zinc-800 rounded-full hover:bg-[#1c1917] dark:hover:bg-zinc-50 hover:text-[#e5e1da] dark:hover:text-zinc-900 transition-all text-zinc-600 dark:text-zinc-400"
                  >
                    {project.type === 'youtube' && <Youtube className="w-5 h-5" />}
                    {project.type === 'web' && <Globe className="w-5 h-5" />}
                    {project.type === 'discord' && <MessageSquare className="w-5 h-5" />}
                    {project.type === 'instagram' && <Instagram className="w-5 h-5" />}
                    {project.type === 'other' && <ExternalLink className="w-5 h-5" />}
                  </a>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Lihat detail proyek ini di {project.type === 'youtube' ? 'YouTube' : 'Web'}.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Prestasi = () => {
  return (
    <section id="prestasi" className="py-24 px-6 bg-[#e5e1da] dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">Achievements</h2>
            <h3 className="text-5xl font-serif font-bold text-zinc-900 dark:text-white">Prestasi & Pengakuan</h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-sm">
            Beberapa pencapaian yang telah saya raih selama perjalanan belajar saya di bidang teknologi.
          </p>
        </div>
        
        <div className="space-y-12">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group grid md:grid-cols-12 gap-8 items-center py-12 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
            >
              <div className="md:col-span-1 text-2xl font-serif text-zinc-200 dark:text-zinc-800 italic">
                0{i + 1}
              </div>
              <div className="md:col-span-6">
                <span className="text-zinc-400 dark:text-zinc-500 text-sm font-mono mb-2 block">{item.year}</span>
                <h4 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-zinc-500 transition-colors">{item.title}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
              <div className="md:col-span-5 relative overflow-hidden rounded-xl aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#dcd7cc] dark:bg-zinc-900/50 rounded-[3rem] p-12 md:p-24 text-center border border-zinc-300/30 dark:border-zinc-800">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 mb-6">Get in touch</h2>
          <h3 className="text-5xl md:text-7xl font-serif font-bold mb-12 text-[#1c1917] dark:text-white">Mari berkolaborasi.</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="p-8 bg-[#f0ede6] dark:bg-zinc-900 rounded-3xl border border-zinc-300/20 dark:border-zinc-800 hover:shadow-xl transition-all group"
            >
              <Phone className="w-8 h-8 mb-4 mx-auto text-zinc-400 group-hover:text-[#1c1917] dark:group-hover:text-white transition-colors" />
              <p className="text-sm text-zinc-500 uppercase font-bold mb-2">Telepon</p>
              <p className="text-xl font-medium text-[#1c1917] dark:text-white">{PHONE_NUMBER}</p>
            </a>
            <a 
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#f0ede6] dark:bg-zinc-900 rounded-3xl border border-zinc-300/20 dark:border-zinc-800 hover:shadow-xl transition-all group"
            >
              <MessageCircle className="w-8 h-8 mb-4 mx-auto text-zinc-400 group-hover:text-green-600 transition-colors" />
              <p className="text-sm text-zinc-500 uppercase font-bold mb-2">WhatsApp</p>
              <p className="text-xl font-medium text-[#1c1917] dark:text-white">Kirim Pesan</p>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: <Github />, href: "#" },
              { icon: <Linkedin />, href: "#" },
              { icon: <Instagram />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-14 h-14 rounded-full bg-[#f0ede6] dark:bg-zinc-900 flex items-center justify-center hover:bg-[#1c1917] dark:hover:bg-zinc-50 hover:text-[#e5e1da] dark:hover:text-zinc-900 transition-all shadow-sm border border-zinc-300/20 dark:border-zinc-800"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-zinc-900 dark:selection:bg-zinc-50 selection:text-white dark:selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Prestasi />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
