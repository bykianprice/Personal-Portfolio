const projects = [
  {
    title: 'Studio Launchpad',
    summary:
      'A refined marketing site for a creative studio, centered on calm storytelling, strong conversion paths, and polished mobile performance.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    impact: 'Raised engagement with a more focused, premium presentation.',
  },
  {
    title: 'Signal Notes',
    summary:
      'A lightweight note-taking experience designed for fast capture, distraction-free reading, and a fluid daily workflow.',
    stack: ['Vite', 'UI Systems', 'Accessibility'],
    impact: 'Simplified the experience into a calm, readable product surface.',
  },
  {
    title: 'Northstar Studio',
    summary:
      'A brand-forward web presence focused on showcasing services, case studies, and a strong first impression for potential clients.',
    stack: ['Next.js', 'CMS', 'SEO'],
    impact: 'Improved clarity around offerings and helped drive more qualified inquiries.',
  },
];

const experience = [
  {
    role: 'Frontend Developer',
    period: '2023 - Present',
    description: 'Designing and building performant user interfaces for modern product teams with a strong focus on usability and visual polish.',
  },
  {
    role: 'Product Designer',
    period: '2021 - 2023',
    description: 'Shaping digital products from strategy through delivery, with an emphasis on elegant systems, clean interaction design, and maintainable components.',
  },
];

const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Performance', 'UI Systems', 'GitHub Pages', 'Responsive Design'];
const stats = [
  { label: 'Years building', value: '4+' },
  { label: 'Launches shipped', value: '12' },
  { label: 'Focus areas', value: 'Product + Web' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(250,244,232,0.9))] text-ink-950">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.25em] text-ink-700">
          Kian Price
        </a>
        <nav className="flex gap-4 text-sm text-ink-600">
          <a href="#about" className="transition hover:text-ink-900">About</a>
          <a href="#work" className="transition hover:text-ink-900">Work</a>
          <a href="#experience" className="transition hover:text-ink-900">Experience</a>
          <a href="#contact" className="transition hover:text-ink-900">Contact</a>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 lg:px-8">
        <section
          id="home"
          className="grid gap-8 rounded-[2rem] border border-ink-200/70 bg-white/80 p-8 shadow-[0_25px_80px_-30px_rgba(26,31,53,0.35)] backdrop-blur lg:grid-cols-[1.15fr_0.85fr] lg:p-12"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-burgundy-500">Creative developer • portfolio site</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              I design and build calm, high-impact digital experiences that feel thoughtful from the first click.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-ink-700">
              I’m a front-end developer and designer focused on functional beauty, clean systems, and elegant product experiences that help brands stand out.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-ink-700">
                View selected work
              </a>
              <a href="#contact" className="rounded-full border border-ink-300 px-5 py-3 text-sm font-medium text-ink-800 transition hover:border-ink-600 hover:bg-ink-50">
                Let’s connect
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-ink-200/70 bg-ink-950 p-7 text-ink-50">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-300">What I bring</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-ink-800 bg-ink-900/70 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-ink-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-ink-200/70 bg-white/80 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy-500">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900">Building thoughtful web experiences from concept to launch.</h2>
            <p className="mt-4 text-lg leading-8 text-ink-700">
              My work sits at the intersection of design, development, and storytelling. I enjoy creating interfaces that feel effortless, memorable, and purposeful for the people using them.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-700">
              This site is now a complete portfolio experience that can be shared publicly through GitHub Pages and scaled as your work grows.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-ink-200/70 bg-ink-900 p-8 text-ink-50 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Core skills</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-ink-700 bg-ink-800 px-3 py-2 text-sm text-ink-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="rounded-[1.5rem] border border-ink-200/70 bg-white/80 p-8 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy-500">Featured work</p>
              <h2 className="mt-2 text-3xl font-semibold text-ink-900">Selected projects and digital outcomes.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[1.25rem] border border-ink-200/70 bg-ink-50 p-6">
                <h3 className="text-xl font-semibold text-ink-900">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-700">{project.summary}</p>
                <p className="mt-4 text-sm font-medium text-burgundy-600">{project.impact}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-2 text-sm text-ink-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.5rem] border border-ink-200/70 bg-ink-950 p-8 text-ink-50 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold">A process built around clarity, craft, and momentum.</h2>
            <p className="mt-4 text-lg leading-8 text-ink-200">
              I approach projects with a balance of strategy, visual thinking, and execution so everything feels coherent and useful.
            </p>
          </div>

          <div className="space-y-4">
            {experience.map((item) => (
              <div key={item.role} className="rounded-[1.25rem] border border-ink-200/70 bg-white/80 p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-ink-900">{item.role}</h3>
                  <span className="text-sm font-medium text-burgundy-600">{item.period}</span>
                </div>
                <p className="mt-3 text-base leading-7 text-ink-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[1.5rem] border border-ink-200/70 bg-ink-950 p-8 text-ink-50 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">Let’s build something memorable together.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-200">
            Whether you need a polished launch site, a fresh product experience, or a portfolio that actually reflects your work, I’d love to hear about it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@kianprice.dev" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-100">
              hello@kianprice.dev
            </a>
            <a href="https://github.com/fxelysrism" className="rounded-full border border-ink-700 px-5 py-3 text-sm font-medium text-ink-100 transition hover:bg-ink-800">
              GitHub profile
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
