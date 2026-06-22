import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronUp,
  Mail,
  Linkedin,
  Github,
  Code,
  Database,
  Globe,
  Brain,
  BookOpen,
  Shield,
  Heart,
  TrendingUp,
  MapPin,
  GraduationCap,
  Send,
  ExternalLink,
  Sparkles,
  Zap,
  Target,
  Award,
  BarChart3,
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/niharika-reddem-2849a432a',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/niharikareddem30-oss',
    icon: Github,
  },
];

const SKILLS_DATA = {
  programmingLanguages: [
    { name: 'Python', level: 90, icon: Code },
    { name: 'Java', level: 80, icon: Code },
    { name: 'C', level: 75, icon: Code },
  ],
  webTechnologies: [
    { name: 'HTML', level: 95, icon: Globe },
    { name: 'CSS', level: 90, icon: Globe },
    { name: 'JavaScript', level: 85, icon: Globe },
  ],
  database: [{ name: 'SQL', level: 85, icon: Database }],
  tools: [{ name: 'Power BI', level: 80, icon: BarChart3 }],
};

const PROJECTS_DATA = [
  {
    title: 'Fake News Detection',
    description:
      'Developed a machine learning-based system to identify and classify fake news articles using natural language processing techniques.',
    icon: Shield,
    tags: ['Machine Learning', 'NLP', 'Python'],
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Women Safety System',
    description:
      'Designed a smart safety solution that helps women send emergency alerts and location information during critical situations.',
    icon: Heart,
    tags: ['Mobile App', 'Safety', 'GPS'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Educare – An App for Education',
    description:
      'Built an educational platform that provides learning resources, academic support, and student engagement features.',
    icon: BookOpen,
    tags: ['Education', 'Web Platform', 'Full Stack'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Smart Blood Donation Finder App',
    description:
      'Created a system that connects blood donors with recipients efficiently using location-based matching.',
    icon: Heart,
    tags: ['Healthcare', 'Location-Based', 'Mobile'],
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'Sales Forecasting System',
    description:
      'Developed a data analytics and machine learning model to predict future sales trends and support business decision-making.',
    icon: TrendingUp,
    tags: ['Data Analytics', 'ML', 'Forecasting'],
    color: 'from-green-500 to-emerald-500',
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = document.querySelectorAll('section[id]');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || 'home';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer scrollToTop={scrollToTop} showScrollTop={showScrollTop} />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110 animate-bounce-subtle"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
}

function Navbar({ darkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass dark:glass-dark shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            NR
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 pb-1 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/niharikareddem30-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </a>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white/90 text-sm font-medium">Welcome to my Portfolio</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up text-shadow-lg">
          Niharika Reddem
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Artificial Intelligence & Machine Learning Student | Data Science Learner | Aspiring Full Stack Developer
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="btn-primary px-8 py-3 rounded-full text-white font-medium inline-flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            View Projects
          </a>
          <a
            href="https://github.com/niharikareddem30-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-full text-white font-medium inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            GitHub Projects
          </a>
        </div>

        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label={link.name}
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Get to Know Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <GraduationCap className="w-24 h-24 mx-auto text-primary-500 mb-4" />
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                      B.Tech CSE (AI & ML)
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Passionate about Technology & Innovation
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization
              in Artificial Intelligence and Machine Learning at Pragati Engineering College. I am passionate
              about Machine Learning, Artificial Intelligence, Data Science, and Web Development.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              I enjoy exploring emerging technologies, analyzing data to uncover insights, and developing
              user-friendly applications that address real-world challenges. Through continuous learning
              and hands-on projects, I strive to strengthen my technical expertise and build innovative solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: 'AI & ML' },
                { icon: BarChart3, label: 'Data Science' },
                { icon: Code, label: 'Full Stack' },
                { icon: Award, label: 'Problem Solving' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                    <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Programming Languages', skills: SKILLS_DATA.programmingLanguages, color: 'from-blue-500 to-cyan-500' },
    { title: 'Web Technologies', skills: SKILLS_DATA.webTechnologies, color: 'from-green-500 to-emerald-500' },
    { title: 'Database', skills: SKILLS_DATA.database, color: 'from-orange-500 to-amber-500' },
    { title: 'Tools & Analytics', skills: SKILLS_DATA.tools, color: 'from-rose-500 to-pink-500' },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 relative"
    >
      <div className="absolute inset-0 pattern-dots text-primary-200 dark:text-primary-900/30 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="animate-on-scroll glass dark:glass-dark rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 150}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.title}
              className="animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full glass dark:glass-dark rounded-2xl overflow-hidden card-hover">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-badge px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="https://github.com/niharikareddem30-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 rounded-full text-white font-medium inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Academic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-cyan-500 transform md:-translate-x-1/2"></div>

            <div className="animate-on-scroll">
              <div className="relative flex items-start md:justify-center">
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 ring-4 ring-primary-100 dark:ring-primary-900/50 z-10"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                  <div className="glass dark:glass-dark rounded-2xl p-6 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex-shrink-0">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                          B.Tech – Computer Science and Engineering
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                          (Artificial Intelligence & Machine Learning)
                        </p>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          <span>Pragati Engineering College</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 text-sm">
                          <Award className="w-4 h-4" />
                          <span>Currently Pursuing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or collaborations in AI/ML and Full Stack Development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <a
              href="mailto:niharikareddem30@gmail.com"
              className="animate-on-scroll glass dark:glass-dark rounded-2xl p-6 text-center card-hover group"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-white mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm break-all">
                niharikareddem30@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/niharika-reddem-2849a432a"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll glass dark:glass-dark rounded-2xl p-6 text-center card-hover group"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Connect with me
              </p>
            </a>

            <a
              href="https://github.com/niharikareddem30-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll glass dark:glass-dark rounded-2xl p-6 text-center card-hover group"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-white mb-2">GitHub</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                View my projects
              </p>
            </a>
          </div>

          <div className="text-center animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <a
              href="mailto:niharikareddem30@gmail.com"
              className="btn-primary px-10 py-4 rounded-full text-white font-medium inline-flex items-center gap-2 text-lg"
            >
              <Send className="w-5 h-5" />
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FooterProps {
  scrollToTop: () => void;
  showScrollTop: boolean;
}

function Footer({ scrollToTop }: FooterProps) {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text mb-4 inline-block">
              NR
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI & ML enthusiast passionate about building innovative solutions and exploring emerging technologies.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Navigation</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="mailto:niharikareddem30@gmail.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2026 Niharika Reddem. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ChevronUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
