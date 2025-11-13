import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: 'PillarMarkets.com',
      period: '2025.5 - 2022.7',
      description: 'Harness AI-powered integrations, intuitive workflows, and a user-friendly interface to unify your critical CRE data and relationships in one seamless ecosystem. Implemented ML models for data prediction and automated insights, integrated natural language processing for document analysis, and built intelligent recommendation systems.',
      technologies: ['Next.js', 'TailwindCSS', 'Java', 'Spring Boot', 'AWS', 'Machine Learning', 'NLP'],
      image: '/images/projects/pillar.png',
      url: 'https://www.pillarmarkets.com/',
    },
  
    {
      title: 'InputKit',
      period: '2022.5 - 2022.10',
      description: 'Customer experience and feedback platform enhancements across web UI and integrations. Implemented Vue.js interfaces for survey/NPS workflows, performance improvements, and analytics. Integrated data pipelines with ML-based sentiment analysis, automated categorization using NLP, and improved reporting accuracy for high‑volume datasets using predictive analytics.',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'Docker', 'Jenkins',  'Cypress', 'CI/CD', 'NLP', 'Sentiment Analysis'],
      image: '/images/projects/inputkit.png',
      url: 'https://www.inputkit.io/en/',
    },
    {
      title: 'KAJ Medical',
      period: '2021.1 - 2022.2',
      description: 'Medical supply chain technology and financing platform initiatives and dashboards. Built operational workflows with AI-powered demand forecasting, integrated data sources with ML models for inventory optimization, and refined API contracts to support payments, tenders, and logistics visibility.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Jenkins', 'Jest', 'Cypress', 'Machine Learning', 'Predictive Analytics'],
      image: '/images/projects/kajmedical.png',
      url: 'https://kajmedical.com/',
    },
    {
      title: 'Muscular Hydrostat',
      period: '2021.1 - 2021.6',
      description:
        'Interactive art experience rendered entirely in HTML/CSS/JS with sketch.js driving a reactive tentacle animation. Layered DOM sprites, ambient audio, and dat.gui controls let viewers tune physics in real time.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'sketch.js', 'dat.gui', 'jQuery', 'Web Audio API'],
      image: '/images/projects/muscular-hydrostat.png',
      url: 'https://canvas-animation-muscular.vercel.app/',
    },
    {
      title: 'Flat-Pack Panel Designer',
      period: '2021.1 - 2021.4',
      description:
        'Parametric flat-pack panel designer that converts tabbed inputs into instant SVG templates and Three.js previews. Fraction-aware engine supports cloning multi-panel assemblies, exports to PNG/3D, and highlights fabrication-focused UX.',
      technologies: ['HTML5', 'Bootstrap', 'CSS3', 'JavaScript', 'jQuery 3.4.1', 'math.js', 'Three.js', 'TweenMax', 'canvg', 'canvas-to-blob'],
      image: '/images/projects/threejs.png',
      url: 'https://drawing-svg-3-d.vercel.app/',
    },
    {
      title: 'AlphaSwap',
      period: 'Apr. 2018 ~ Nov. 2020',
      description: "AlphaSwap is an investment technology platform, bundling the community's best stock picks into Data-as-a-Service. Built predictive models for stock analysis, implemented sentiment analysis from social media feeds, and created ML-powered investment recommendations.",
      technologies: ['React-Redux', 'Node.js (Nest.js)', 'easy-peasy library', 'postgreSQL', 'Docker', 'ML Models', 'Sentiment Analysis'],
      image: '/images/projects/alphaswap.png',
      url: '#',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero (New structure) */}
      <section className="relative overflow-hidden rounded-2xl bg-gray-900 text-white p-8 md:p-12 mb-12">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Full Stack AI Expert Building Intelligent Solutions</h1>
          <p className="mt-4 text-lg text-gray-300">I architect and develop end‑to‑end AI-powered applications — combining modern UIs, scalable backends, and cutting-edge AI/ML integrations using OpenAI, LangChain, vector databases, and custom ML models.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/resume" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100">View Resume</Link>
            <Link href="/about" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700">About Me</Link>
          </div>
        </div>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(99,102,241,0.35),transparent),radial-gradient(500px_260px_at_0%_120%,rgba(16,185,129,0.25),transparent)]" />
      </section>

      {/* Case Studies (New structure) */}
      <section className="space-y-10">
        {projects.map((project, index) => (
          <article key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 items-stretch`}>
            <div className="relative w-full md:w-1/2 h-56 md:h-72 rounded-xl overflow-hidden shadow">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200/60 dark:border-gray-700/60">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">{project.period}</span>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">{tech}</span>
                ))}
              </div>
              <div className="mt-6">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  View project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6L10 16"/></svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="mt-16 text-center">
        <p className="text-gray-600 dark:text-gray-300">Want results, not demos?</p>
        <Link href="/about" className="inline-flex items-center justify-center mt-3 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Work with me</Link>
      </section>
    </div>
  )
}