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
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

export default function App() {
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      <header className="sticky top-4 z-30 mx-auto flex w-full max-w-[120rem] items-center justify-between gap-4 rounded-full border border-white/10 bg-[#081125]/90 px-6 py-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 animate-fade-in lg:px-10">
        <div className="flex items-center gap-4">
          <span className="flex h-3.5 w-3.5 rounded-full bg-gold-300 shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
          <div>
            <a href="#home" className="text-sm font-semibold uppercase tracking-[0.45em] text-white transition hover:text-gold-300">
              KIAN PRICE
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
                className="rounded-full border border-slate-700/70 bg-white/5 px-4 py-2 transition hover:border-gold-300 hover:text-gold-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <a href="#contact" className="rounded-full bg-gradient-to-r from-gold-300 via-fuchsia-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
            Start a project
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/70 bg-[#0c1223]/90 text-slate-200 transition hover:border-gold-300 hover:text-gold-300 md:hidden"
        >
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'translate-y-0.5 rotate-45' : '-translate-y-1.5'}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-300 ${isMenuOpen ? '-translate-y-0.5 -rotate-45' : 'translate-y-1.5'}`} />
        </button>
        <div className={`fixed inset-0 z-40 md:hidden ${isMenuOpen ? 'visible' : 'pointer-events-none invisible'}`}>
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
          <div className="relative mx-4 mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-[#081125]/95 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-slate-400">Navigation</p>
                <p className="mt-1 text-sm font-semibold text-white">Explore the site</p>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border border-slate-700/70 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-gold-300 hover:text-gold-300"
              >
                Close
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-4 text-lg text-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-3xl border border-slate-700/70 bg-white/5 px-5 py-4 transition hover:border-gold-300 hover:text-gold-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-gold-300 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
            >
              Start a project
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full">
        <section id="home" data-animate className="reveal-on-scroll relative overflow-hidden border-b border-slate-700/50 bg-[#0c1122] px-6 py-24 lg:px-10">
          <div className="absolute inset-0 overflow-hidden">
            <span className="hero-dot left-10 top-20 bg-fuchsia-500/20" />
            <span className="hero-dot right-16 top-10 bg-cyan-400/16" />
            <span className="hero-dot left-1/2 top-10 bg-gold-300/20" />
            <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-full opacity-80" />
          </div>
          <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.4em] text-gold-300/80">Hi, I’m Kian — I build portfolio websites that feel thoughtful and premium.</p>
              <div className="max-w-4xl space-y-6">
                <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
                  A clean, full-width <span className="bg-gradient-to-r from-gold-300 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">timeline</span> for your growth, not a boxed template.
                </h1>
                <p className="text-lg leading-8 text-slate-300">
                  I design websites for founders and creative teams who want a confident digital presence with premium storytelling, polished motion, and a clearer path to conversion.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#timeline" className="inline-flex items-center justify-center rounded-full bg-gold-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-gold-200">
                  View timeline
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-gold-300 hover:text-gold-300">
                  Let’s talk
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
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-50px_rgba(255,255,255,0.15)] animate-rise-up">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Featured outcome</p>
                <p className="mt-3 text-lg font-semibold text-white">A premium landing experience that feels cinematic, polished, and built for conversion.</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[36rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111227]/90 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.8)] animate-float">
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
          <div className="mx-auto max-w-[92rem]">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">About</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">I create portfolio websites that tell a story from start to scroll.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Every project begins with your business goals, then shapes content, visuals, and structure into a timeline that guides visitors toward action.
              </p>
            </div>
          </div>
        </section>

        <section id="services" data-animate className="reveal-on-scroll w-full bg-[#0a1120] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem]">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Services</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Strategic design, polished builds, and higher-converting websites.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="interactive-card rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8 animate-rise-up">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Strategy</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Offer-led structure</h3>
                <p className="mt-4 text-slate-300">I turn your story and positioning into an intentional site experience that builds trust and leads visitors toward action.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Design</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Cohesive UI systems</h3>
                <p className="mt-4 text-slate-300">Clean visuals, purposeful interactions, and refined typography that feel premium without being overdesigned.</p>
              </div>
              <div className="interactive-card rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Build</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Fast, maintainable sites</h3>
                <p className="mt-4 text-slate-300">Modern frontend tooling with performance-focused code, responsive layouts, and a smooth mobile-first experience.</p>
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
              <h2 className="mt-4 text-4xl font-semibold text-white">A scrolling story of projects, growth, and modern web design.</h2>
              <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-800/80">
                <div
                  className="progress-bar h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Progress: <span className="font-semibold text-white">{Math.round(progress)}%</span> of the timeline.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-slate-700/50" />
              <div className="space-y-20">
                {timelineItems.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div key={item.title} className="grid gap-6 lg:grid-cols-[1fr_0.5rem_1fr]">
                      {isLeft ? (
                        <>
                          <div className="lg:col-start-1 lg:text-right">
                            <div className="inline-flex rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8 text-left shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]">
                              <div className="max-w-xl">
                                <p className="text-xs uppercase tracking-[0.3em] text-gold-300">{item.year}</p>
                                <h3 className="mt-3 text-3xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-4 text-lg leading-8 text-slate-300">{item.subtitle}</p>
                                <p className="mt-4 text-base leading-7 text-slate-400">{item.description}</p>
                                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-slate-500">{item.detail}</p>
                              </div>
                            </div>
                          </div>
                          <div className="relative col-start-2 flex justify-center">
                            <span className="timeline-dot absolute top-8 h-4 w-4 rounded-full bg-gold-300 ring-4 ring-[#091026]" />
                          </div>
                          <div className="hidden lg:block" />
                        </>
                      ) : (
                        <>
                          <div className="hidden lg:block" />
                          <div className="relative col-start-2 flex justify-center">
                            <span className="timeline-dot absolute top-8 h-4 w-4 rounded-full bg-gold-300 ring-4 ring-[#091026]" />
                          </div>
                          <div className="lg:col-start-3">
                            <div className="inline-flex rounded-[2rem] border border-slate-700/70 bg-[#111227]/95 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]">
                              <div className="max-w-xl">
                                <p className="text-xs uppercase tracking-[0.3em] text-gold-300">{item.year}</p>
                                <h3 className="mt-3 text-3xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-4 text-lg leading-8 text-slate-300">{item.subtitle}</p>
                                <p className="mt-4 text-base leading-7 text-slate-400">{item.description}</p>
                                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-slate-500">{item.detail}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" data-animate className="reveal-on-scroll w-full bg-[#091026] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[92rem] grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-gold-300">Contact</p>
              <h2 className="text-4xl font-semibold text-white">Ready to move from a boxed page to a full story?</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                If you want a website that feels like a confident timeline instead of a stack of cards, I’d love to build it with you.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
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
