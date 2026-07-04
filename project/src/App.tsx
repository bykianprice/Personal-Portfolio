import { useEffect, useRef, useState } from 'react';

const timelineItems = [
  {
    year: '2021',
    title: 'Product Designer',
    subtitle: 'Shaping product experiences with elegant systems and clear interfaces.',
    description:
      'I began by helping startups and founders define their product direction, design strong interaction patterns, and create polished visual systems that feel trustworthy.',
    detail: 'Product design • Systems • Visual strategy',
  },
  {
    year: '2023',
    title: 'Frontend Developer',
    subtitle: 'Bringing product ideas to life with modern web performance.',
    description:
      'I moved into frontend development to build faster, more meaningful websites with React, TypeScript, and Tailwind — always with conversion and clarity in mind.',
    detail: 'React • TypeScript • Tailwind CSS',
  },
  {
    year: '2024',
    title: 'Studio Launchpad',
    subtitle: 'A polished brand refresh for a high-end creative studio.',
    description:
      'This project focused on beautiful storytelling, improved lead capture, and a launch-ready site experience that felt premium from the first scroll.',
    detail: 'React • Tailwind • Brand-led design',
  },
  {
    year: '2025',
    title: 'Signal Notes',
    subtitle: 'A calm, fast interface for note-taking and daily focus.',
    description:
      'I designed a distraction-free product experience that guides users through quick capture, clean reading, and effortless organisation.',
    detail: 'Vite • Accessibility • UI systems',
  },
  {
    year: '2026',
    title: 'Northstar Studio',
    subtitle: 'A brand-first web presence for premium positioning.',
    description:
      'This website helped a creative team stand out with a stronger offer, clearer services, and a refined digital identity.',
    detail: 'Next.js • CMS • SEO-ready copy',
  },
];

const contactDetails = [
  { label: 'Email', value: 'info@thekianprice.co.uk', href: 'mailto:info@thekianprice.co.uk' },
  { label: 'Instagram', value: 'kianandrewp', href: 'https://instagram.com/kianandrewp' },
  { label: 'WhatsApp', value: '@kianaprice', href: 'https://wa.me/?text=Hi%20Kian%20Price' },
];

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#method', label: 'Method' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#finals', label: 'Finals' },
  { href: '#contact', label: 'Contact' },
];

const services = [
  {
    eyebrow: 'Positioning',
    title: 'Offer-first narrative',
    description: 'I shape your message around what makes your work distinct and make every section earn its place.',
    tags: ['clarity', 'storytelling', 'trust'],
  },
  {
    eyebrow: 'Experience',
    title: 'Editorial UI systems',
    description: 'The interface feels calm, premium, and intentional through layered typography, refined spacing, and subtle motion.',
    tags: ['visual rhythm', 'motion', 'typography'],
  },
  {
    eyebrow: 'Build',
    title: 'Launch-ready frontend',
    description: 'The site is engineered for speed, responsiveness, and easy maintenance so it feels effortless to evolve.',
    tags: ['React', 'Tailwind', 'performance'],
  },
];

const approachPoints = [
  {
    title: 'Signal over noise',
    description: 'Design choices are made with intent so the story feels calm, clear and memorable.',
  },
  {
    title: 'Built to convert',
    description: 'Every section is shaped to guide attention toward the right next action.',
  },
  {
    title: 'Refined for launch',
    description: 'The build is lean, responsive and ready for growth without visual compromise.',
  },
];

const methodHighlights = [
  {
    step: '01',
    title: 'Listen',
    description: 'We clarify the story, the audience and the feeling you want the site to create.',
  },
  {
    step: '02',
    title: 'Shape',
    description: 'I turn that into a clear structure with strong rhythm, messaging and visual hierarchy.',
  },
  {
    step: '03',
    title: 'Launch',
    description: 'The final build is polished, responsive and ready to support your growth.',
  },
];

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const sectionTop = timelineRef.current.getBoundingClientRect().top;
      const sectionHeight = timelineRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalDistance = sectionHeight + windowHeight;
      const scrolled = windowHeight - sectionTop;
      const progressValue = Math.min(Math.max((scrolled / totalDistance) * 100, 0), 100);
      setProgress(progressValue);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useEffect(() => {
    const animatedItems = document.querySelectorAll<HTMLElement>('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    animatedItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#070a14] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-glow" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }} />
        <div className="ambient-orbit ambient-orbit-one" />
        <div className="ambient-orbit ambient-orbit-two" />
      </div>

      <header className="sticky top-4 z-30 mx-auto flex w-full max-w-[120rem] flex-wrap items-center justify-between gap-4 rounded-[2.5rem] border border-white/10 bg-[#081125]/95 px-5 py-4 shadow-[0_35px_90px_-45px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 animate-fade-in md:px-7 lg:px-10">
        <div className="flex min-w-[16rem] items-center gap-4">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-3xl border border-white/15 bg-slate-950/80 text-sm font-semibold uppercase tracking-[0.35em] text-gold-300 shadow-[0_0_30px_-10px_rgba(251,191,36,0.3)]">
            KP
          </span>
          <div className="min-w-0">
            <a href="#home" className="block text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:text-gold-300">
              Kian Price
            </a>
            <p className="text-[10px] uppercase tracking-[0.45em] text-slate-500">Brand-led web design</p>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <nav className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-pill group"
              >
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#contact" className="nav-cta inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-300 via-fuchsia-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
            Start a project
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-[#0d1323]/95 text-slate-200 transition hover:border-gold-300 hover:text-gold-300 md:hidden"
        >
          <span
            className={`relative block h-0.5 w-5 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'translate-y-0.5 opacity-0' : ''}`}
          />
          <span
            className={`relative block h-0.5 w-5 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'rotate-45' : 'mt-2'}`}
          />
          <span
            className={`relative block h-0.5 w-5 rounded-full bg-current transition duration-300 ${isMenuOpen ? '-rotate-45' : 'mt-2'}`}
          />
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl md:hidden" role="dialog" aria-modal="true">
            <div className="relative mx-4 w-full max-w-[40rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#091126]/95 p-6 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.45em] text-slate-400">Navigation</p>
                  <p className="mt-1 text-sm font-semibold text-white">Tap a section</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-slate-700/70 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-gold-300 hover:text-gold-300"
                >
                  Close
                </button>
              </div>
              <nav className="mt-8 grid gap-4 text-lg text-slate-100">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-[1.75rem] border border-slate-700/70 bg-[#111227]/95 px-5 py-4 text-center transition hover:border-gold-300 hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-gold-300 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                >
                  Start a project
                </a>
                <p className="text-center text-sm text-slate-400">Works smoothly on any device, with a bold mobile experience.</p>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 w-full">
        <section id="home" data-animate className="reveal-on-scroll relative overflow-hidden border-b border-slate-700/50 bg-[#0c1122] px-6 py-24 lg:px-10">
          <div className="absolute inset-0 overflow-hidden">
            <span className="hero-dot left-10 top-20 bg-fuchsia-500/20" />
            <span className="hero-dot right-16 top-10 bg-cyan-400/16" />
            <span className="hero-dot left-1/2 top-10 bg-gold-300/20" />
            <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-full opacity-80" />
          </div>
          <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full bg-gold-300" />
                Brand-led digital experiences
              </div>
              <div className="max-w-4xl space-y-6">
                <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  I build <span className="bg-gradient-to-r from-gold-300 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">premium websites</span> that feel as considered as the brands behind them.
                </h1>
                <p className="text-lg leading-8 text-slate-300">
                  From first impression to conversion, I shape thoughtful interfaces that are clean, calm and unmistakably refined for founders, studios and modern service brands.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#timeline" className="inline-flex items-center justify-center rounded-full bg-gold-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-gold-200">
                  Explore the journey
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-gold-300 hover:text-gold-300">
                  Start a conversation
                </a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="interactive-card rounded-[1.75rem] border border-slate-700/70 bg-white/5 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Conversion lift</p>
                  <p className="mt-4 text-3xl font-semibold text-white">+32%</p>
                  <p className="mt-3 text-sm text-slate-300">Premium positioning that increases trust and leads.</p>
                </div>
                <div className="interactive-card rounded-[1.75rem] border border-slate-700/70 bg-white/5 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Launch speed</p>
                  <p className="mt-4 text-3xl font-semibold text-white">2–3 weeks</p>
                  <p className="mt-3 text-sm text-slate-300">Fast, production-ready sites with polished build quality.</p>
                </div>
                <div className="interactive-card rounded-[1.75rem] border border-slate-700/70 bg-white/5 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Clarity</p>
                  <p className="mt-4 text-3xl font-semibold text-white">100%</p>
                  <p className="mt-3 text-sm text-slate-300">Every page is designed to guide visitors to your next step.</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                className="glass-panel relative w-full max-w-[36rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111227]/90 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.8)] animate-float"
                style={{
                  backgroundImage: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.16), transparent 24%), linear-gradient(135deg, rgba(17,18,39,0.95), rgba(9,16,38,0.9))`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_28%)]" />
                <div className="relative space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Project spotlight</p>
                    <h3 className="text-3xl font-semibold text-white">Studio Launchpad</h3>
                    <p className="text-sm leading-7 text-slate-300">
                      A launch experience built around clarity, momentum, and easy discovery for premium creative brands.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-950/70 p-5 text-sm text-slate-300">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Role</p>
                      <p className="mt-2 font-semibold text-white">Design + Frontend</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/70 p-5 text-sm text-slate-300">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Stack</p>
                      <p className="mt-2 font-semibold text-white">React · Tailwind · Vite</p>
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-[#0d1324]/90 p-5 text-sm text-slate-300">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Why it works</p>
                    <p className="mt-2 leading-7">Full-width storytelling, meaningful structure, and a refined brand feel that helps clients stand out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" data-animate className="reveal-on-scroll w-full bg-[#091026] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem] grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">About</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">I create portfolio websites that feel intentional from the first impression to the final click.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Every project begins with your business goals, then shapes content, visuals, and structure into an experience that feels calm, premium and easy to trust.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Design philosophy</p>
              <p className="mt-4 text-2xl font-semibold text-white">Less visual noise, more confidence.</p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                I build with restraint and rhythm so your work appears polished, clear and unmistakably premium without feeling overworked.
              </p>
            </div>
          </div>
        </section>

        <section id="approach" data-animate className="reveal-on-scroll w-full bg-[#080e1d] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(9,16,38,0.95),rgba(236,72,153,0.12))] p-8 shadow-[0_30px_90px_-42px_rgba(0,0,0,0.65)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Approach</p>
                <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A method designed for thoughtful brands that want to stand out without shouting.</h3>
              </div>
              <div className="grid gap-4">
                {approachPoints.map((point) => (
                  <div key={point.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
                    <h4 className="text-xl font-semibold text-white">{point.title}</h4>
                    <p className="mt-3 text-base leading-7 text-slate-300">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="method" data-animate className="reveal-on-scroll w-full bg-[#080e1d] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_-42px_rgba(0,0,0,0.65)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Method</p>
                <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A calm, focused process that keeps the work distinctive without becoming overbuilt.</h3>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  I keep each project deliberate and generous in the right places so the final result feels elevated, clear and unmistakably personal.
                </p>
                <div className="mt-6 inline-flex rounded-full border border-gold-300/20 bg-gold-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-gold-300">
                  Quietly strategic • built to convert
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {methodHighlights.map((item) => (
                  <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">{item.step}</p>
                    <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="finals" data-animate className="reveal-on-scroll w-full bg-[#080e1d] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.065),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_-42px_rgba(0,0,0,0.65)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Finals</p>
                <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A refined finish that looks polished at every scroll depth.</h3>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  This site is designed to feel intentional, fast and distinctive without overwhelming the visitor — a strong final chapter for your portfolio.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Minimal noise</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Clear storytelling</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">The layout feels premium because it’s deliberate, not crowded.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Ready for deploy</p>
                  <p className="mt-3 text-2xl font-semibold text-white">GitHub Pages</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">The project config is prepared for a gh-pages deployment path.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" data-animate className="reveal-on-scroll w-full bg-[#0a1120] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem]">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Services</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">A sharper digital presence, designed like a launch campaign.</h2>
            </div>
            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="service-hero rounded-[2.2rem] border border-slate-700/70 bg-[linear-gradient(135deg,rgba(251,191,36,0.16),rgba(15,23,42,0.95),rgba(236,72,153,0.14))] p-8 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.55)] lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-slate-200">refined offer</span>
                  <span className="rounded-full border border-gold-300/20 bg-gold-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-gold-300">founder-ready</span>
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">I connect strategy, storytelling and build into one premium experience.</h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Every service is shaped around one goal: help your audience understand who you are, why you matter, and what to do next.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Outcome</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Clearer positioning</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">A sharper message that guides visitors from curiosity to confidence.</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Delivery</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Fast launch</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">Thoughtful builds that ship quickly without losing polish or clarity.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {services.map((service, index) => (
                  <article key={service.title} className={`service-card rounded-[1.8rem] border border-slate-700/70 bg-[#111227]/95 p-7 ${index === 1 ? 'lg:translate-x-3' : ''}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">{service.eyebrow}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
                      </div>
                      <span className="rounded-full border border-gold-300/20 bg-gold-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-300">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-700/70 bg-slate-950/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" data-animate className="reveal-on-scroll w-full bg-[#081025] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem]">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Projects</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Recent work built to convert and feel premium.</h2>
            </div>
            <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
              <div className="interactive-card group rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8 transition animate-rise-up">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-300">Studio Launchpad</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Launch experience</h3>
                <p className="mt-4 text-slate-300">A clean, elevated homepage built to showcase a creative studio with clarity, trust, and conversion-focused sections.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition group-hover:text-white">
                  <span>View case study</span>
                  <span className="inline-block transform transition duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
              <div className="interactive-card group rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8 transition">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-300">Signal Notes</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Product interface</h3>
                <p className="mt-4 text-slate-300">A minimal interface designed for fast workflows, distraction-free capture, and polished readability across devices.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition group-hover:text-white">
                  <span>View case study</span>
                  <span className="inline-block transform transition duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
              <div className="interactive-card group rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8 transition">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-300">Northstar Studio</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Brand presence</h3>
                <p className="mt-4 text-slate-300">A premium portfolio site that positions a creative studio with stronger visual hierarchy and clearer service messaging.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition group-hover:text-white">
                  <span>View case study</span>
                  <span className="inline-block transform transition duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" ref={timelineRef} data-animate className="reveal-on-scroll relative w-full overflow-hidden bg-[#070a14] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-[92rem]">
            <div className="mb-16 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">timeline</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">A living story of momentum, craft, and modern web design.</h2>
              <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-800/80">
                <div
                  className="progress-bar h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Progress: <span className="font-semibold text-white">{Math.round(progress)}%</span> through the journey.
              </p>
            </div>

            <div className="relative ml-2 border-l border-slate-700/40 pl-6 md:pl-10">
              {timelineItems.map((item) => (
                <article key={item.title} className="timeline-item group relative pb-10 md:pb-14">
                  <span className="timeline-marker" />
                  <div className="timeline-card rounded-[1.75rem] border border-slate-700/70 bg-[#111227]/95 p-7 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.6)] md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-gold-300">{item.year}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <span className="rounded-full border border-slate-700/70 bg-slate-950/60 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-400">
                        milestone
                      </span>
                    </div>
                    <p className="mt-4 text-lg leading-8 text-slate-300">{item.subtitle}</p>
                    <p className="mt-4 text-base leading-7 text-slate-400">{item.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.detail.split('•').map((tag) => (
                        <span key={tag} className="rounded-full border border-slate-700/70 bg-slate-950/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" data-animate className="reveal-on-scroll w-full bg-[#091026] px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(17,18,39,0.95))] p-8 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.7)] lg:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Ready to move from a boxed page to a full story?</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                If you want a website that feels like a confident, modern presence instead of a generic template, I’d love to build it with you.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="interactive-card rounded-[1.75rem] border border-slate-700/70 bg-[#111227]/95 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Trusted by</p>
                  <p className="mt-3 text-3xl font-semibold text-white">12+</p>
                  <p className="mt-2 text-sm text-slate-300">Brand experiences delivered.</p>
                </div>
                <div className="interactive-card rounded-[1.75rem] border border-slate-700/70 bg-[#111227]/95 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Launch-ready</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Focused</p>
                  <p className="mt-2 text-sm text-slate-300">From brief to live in weeks.</p>
                </div>
                <div className="interactive-card rounded-[1.75rem] border border-slate-700/70 bg-[#111227]/95 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Confidence</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Higher</p>
                  <p className="mt-2 text-sm text-slate-300">More clarity, more trust.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-[1.75rem] border border-slate-700/70 bg-[#111227]/90 px-6 py-6 text-white transition hover:border-gold-300 hover:bg-[#141a34]"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
