const projects = [
  {
    title: 'Studio Launchpad',
    summary: 'A refined marketing site for a creative studio that needed a calm, high-conversion experience.',
    stack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Signal Notes',
    summary: 'A lightweight note-taking interface designed for fast capture and a distraction-free reading flow.',
    stack: ['Vite', 'CSS', 'Accessibility'],
  },
];

const skills = ['React', 'TypeScript', 'UI Systems', 'Performance', 'Responsive Design'];
const highlights = [
  'Built for fast loading and simple maintenance.',
  'Styled as a polished personal homepage for GitHub Pages.',
  'Ready for future expansion with more projects and case studies.',
];

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(250,244,232,0.9))] text-ink-950">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-ink-700 uppercase">
          Kian Price
        </a>
        <nav className="flex gap-4 text-sm text-ink-600">
          <a href="#about" className="transition hover:text-ink-900">
            About
          </a>
          <a href="#work" className="transition hover:text-ink-900">
            Work
          </a>
          <a href="#contact" className="transition hover:text-ink-900">
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 lg:px-8">
        <section
          id="home"
          className="grid gap-8 rounded-[2rem] border border-ink-200/70 bg-white/80 p-8 shadow-[0_25px_80px_-30px_rgba(26,31,53,0.35)] backdrop-blur lg:grid-cols-[1.15fr_0.85fr] lg:p-12"
        >
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-burgundy-500">
              Creative developer • portfolio site
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              Crafted digital experiences with clarity, character, and calm precision.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-ink-700">
              This portfolio is now set up as a production-ready Vite site that can be published directly from GitHub Pages.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-ink-700"
              >
                See featured work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink-300 px-5 py-3 text-sm font-medium text-ink-800 transition hover:border-ink-600 hover:bg-ink-50"
              >
                Start a conversation
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-ink-200/70 bg-ink-950 p-7 text-ink-50">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-300">Current focus</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-ink-200">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-base text-gold-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-ink-200/70 bg-white/80 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy-500">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900">Building thoughtful web experiences from concept to launch.</h2>
            <p className="mt-4 text-lg leading-8 text-ink-700">
              I blend strategy, design, and front-end craftsmanship to create sites that feel both elevated and easy to use. This project now runs locally and is ready for GitHub Pages deployment.
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
              <h2 className="mt-2 text-3xl font-semibold text-ink-900">Selected projects and product thinking.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[1.25rem] border border-ink-200/70 bg-ink-50 p-6">
                <h3 className="text-xl font-semibold text-ink-900">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-ink-700">{project.summary}</p>
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

        <section id="contact" className="rounded-[1.5rem] border border-ink-200/70 bg-ink-950 p-8 text-ink-50 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">Let’s build something memorable.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-200">
            Reach out if you want a polished site, a product launch, or a thoughtful digital experience tailored to your audience.
          </p>
          <a href="mailto:kian@example.com" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-100">
            hello@kianprice.dev
          </a>
        </section>
      </main>
    </div>
  );
}
