import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: 'PillarMarkets.com',
      period: '2025.5 - 2022.7',
      description: 'Harness AI-powered integrations, intuitive workflows, and a user-friendly interface to unify your critical CRE data and relationships in one seamless ecosystem.',
      technologies: ['Next.js', 'TailwindCSS', 'Java', 'Spring Boot', 'AWS',],
      image: '/images/projects/pillar.png',
      url: 'https://www.pillarmarkets.com/',
    },
  
    {
      title: 'InputKit',
      period: '2022.5 - 2022.10',
      description: 'Customer experience and feedback platform enhancements across web UI and integrations. Implemented Vue.js interfaces for survey/NPS workflows, performance improvements, and analytics. Integrated data pipelines and improved reporting accuracy for high‑volume datasets.',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'Docker', 'Jenkins',  'Cypress', 'CI/CD'],
      image: '/images/projects/inputkit.png',
      url: 'https://www.inputkit.io/en/',
    },
    {
      title: 'KAJ Medical',
      period: '2021.1 - 2022.2',
      description: 'Medical supply chain technology and financing platform initiatives and dashboards. Built operational workflows, integrated data sources, and refined API contracts to support payments, tenders, and logistics visibility.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Jenkins', 'Jest', 'Cypress', ],
      image: '/images/projects/kajmedical.png',
      url: 'https://kajmedical.com/',
    },
    {
      title: 'GiftCash',
      period: '2021.1 - 2021.6',
      description: 'GiftCash designed a brand new platform from the ground-up that makes selling your unwanted gift cards a straightforward and completely secure process.',
      technologies: ['Next.js', 'PHP', 'Laravel', 'Docker', 'MySQL', 'AWS Lambda'],
      image: '/images/projects/giftcash.png',
      url: 'https://giftcash.com/',
    },
    {
      title: 'Skills4School',
      period: '2021.1 - 2021.4',
      description: 'Skills4School is a learning platform that enables students to prepare appropriately for the lesson, the textbook and the teacher. The student learns individually in the app and can see their own learning progress.',
      technologies: ['Ionic React', 'Firebase', 'Directus', 'TypeScript', 'Capacitor', 'Angular', 'Node.js', 'MongoDB'],
      image: '/images/projects/s4c.png',
      url: '#',
    },
    {
      title: 'AlphaSwap',
      period: 'Apr. 2018 ~ Nov. 2020',
      description: "AlphaSwap is an investment technology platform, bundling the community's best stock picks into Data-as-a-Service.",
      technologies: ['React-Redux', 'Node.js (Nest.js)', 'easy-peasy library', 'postgreSQL', 'Docker'],
      image: '/images/projects/alphaswap.png',
      url: '#',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-5">
          Senior Full‑Stack & AI Engineer
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I architect and deliver production‑grade products end‑to‑end: modern React/Next.js UIs,
          scalable services in Node/Python, Java/Spring Boot, and .NET Core, plus reliable data
          pipelines. 10+ years across startups and enterprises—performance, security, cloud (AWS),
          CI/CD, and pragmatic AI (LLMs/CV) that ships measurable value.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/resume" className="btn-secondary w-full sm:w-auto">View Resume</Link>
        </div>
        {/* Quick stats */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="stat-badge">10+ yrs experience</div>
          <div className="stat-badge">25+ shipped projects</div>
          <div className="stat-badge">12+ teams supported</div>
        </div>
        
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          return (
            <div key={index} className="w-full mx-auto animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center mx-auto overflow-hidden transition duration-100 ease-in-out transform rounded-md shadow cursor-pointer hover:-translate-y-1 hover:scale-105 bg-white dark:bg-gray-800">
                <div className="relative group">
                  <div className="absolute z-20 flex items-center justify-center flex-1 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <p className="mx-2 font-sans font-semibold text-gray-600 dark:text-gray-300">
                          LEARN MORE
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="absolute w-full rounded-t-md">
                    <div className="flex-1 float-left w-16 h-16 p-2 m-4 text-center text-white bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg">
                      <span className="font-sans text-xs font-bold tracking-wide">
                        {project.period.split(' ~ ')[0].split('.')[0]}
                      </span>
                      <span className="block font-sans text-xs font-bold tracking-wide uppercase border-t border-white/30">
                        {project.period.split(' ~ ')[0].split('.')[1]}
                      </span>
                    </div>
                  </div>
                  <div className="h-40 md:h-60 relative overflow-hidden rounded-t-md">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 space-y-3 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-b-md">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-300/20 dark:text-blue-50 dark:ring-1 dark:ring-blue-200/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      

      
    </div>
  )
}