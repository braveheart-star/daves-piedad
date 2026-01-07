import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const projects = [
    
    {
      title: 'Limesurvey.org',
      period: '2023.6 - 2025.8',
      description: 'LimeSurvey is the simple, quick and anonymous online survey tool that\'s bursting with juicy insights. Calling students, professionals and enterprises: design a survey and get the best insights, it\'s free and as easy as squeezing a lime.',
      technologies: ['React', 'Yii PHP Framework', 'StoryBook', 'PHP', 'Bootstrap', 'jQuery', 'Docker', 'Git', 'Composer'],
      image: '/images/projects/limesurvey.png',
      url: 'https://www.limesurvey.org/',
    },
    {
      title: 'PillarMarkets.com',
      period: '2021.6 - 2023.5',
      description: 'Harness AI-powered integrations, intuitive workflows, and a user-friendly interface to unify your critical CRE data and relationships in one seamless ecosystem. Implemented ML models for data prediction and automated insights, integrated natural language processing for document analysis, and built intelligent recommendation systems.',
      technologies: ['Next.js', 'TailwindCSS', 'Java', 'Spring Boot', 'AWS', 'Machine Learning', 'NLP'],
      image: '/images/projects/pillar.png',
      url: 'https://www.pillarmarkets.com/',
    },
       {
      title: 'Keeper',
      period: '2020.12 - 2021.5',
      description: 'Keeper was born out of a simple wish: to help those grieving celebrate the life of each and every person. That is built the best memorial website for our family and yours.',
      technologies: ['Next.js','Node.js', 'Express.js', 'AWS Lambda'],
      image: '/images/projects/keeper.png',
      url: 'https://www.mykeeper.com/',
    },
    {
      title: 'The Track App',
      period: '2018.4 - 2020.11',
      description: 'Track is an intuitive software that automates lead qualification, routing and scheduling. It eliminates a lot of manual work that MDRs and SDRs have to do to qualify leads at the risk of losing the customer sales, and allows the team to convert more leads faster',
      technologies: ['React.js', 'Electron', 'TypeScript', 'Node.js', 'SQLite', 'Material-UI', 'Redux', 'WebRTC'],
      image: '/images/projects/trackapp.png',
      url: '#',
    },
     {
      title: 'Divizend',
      period: '2021.1 - 2022.4',
      description: 'Divizend is the leading international wealth-tax FinTech platform for the fastest way to reclaim foreign dividend withholding taxes.',
      technologies: ['React', 'Styled Components', 'Loopback', 'TypeScript', 'Node.js', 'Angular', 'MongoDB'],
      image: '/images/projects/divizend.png',
      url: "https://divizend.com/en"
    },
    {
      title: 'Skills4School',
      period: '2021.1 - 2021.4',
      description: 'Skills4School is a learning platform that enables students to prepare appropriately for the lesson, the textbook and the teacher. The student learns individually in the app and can see their own learning progress.',
      technologies: ['Ionic React', 'Firebase', 'Directus', 'TypeScript', 'Capacitor', 'Angular', 'Node.js', 'MongoDB'],
      image: '/images/projects/s4c.png',
      url: '#',
    },
 
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-5">
          Senior Full‑Stack, AI & Automation Engineer
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I architect and deliver production‑grade products end‑to‑end: modern React/Next.js UIs,
          scalable services in Node/Python, Java/Spring Boot, and .NET Core, plus automation-ready data
          pipelines and web scraping workflows. 10+ years across startups and enterprises—performance,
          security, cloud (AWS), CI/CD, and pragmatic AI (LLMs/CV) that ships measurable value.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/resume" className="btn-secondary w-full sm:w-auto">View Resume</Link>
        </div>
        {/* Quick stats */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="stat-badge">8 yrs experience</div>
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

      {/* Lightweight Blockchain Audit Section */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Blockchain & Audit Familiarity</h2>
          <a 
            href="https://audits.sherlock.xyz/watson/ami" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            View on Sherlock
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl text-sm mb-6">
          Full-stack delivery is my day-to-day, but I stay close to blockchain by joining selective smart-contract audits on Sherlock. 
          The goal is to keep my security instincts sharp without turning it into my main workload.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-5 border border-yellow-200 dark:border-yellow-800">
            <h4 className="text-base font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Selective Podiums</h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">3 podium finishes • ~$2.4K rewards</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
            <h4 className="text-base font-semibold text-purple-800 dark:text-purple-200 mb-1">Focus Areas</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">ERC-20 incentives, auctions, DEX routing</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
            <h4 className="text-base font-semibold text-blue-800 dark:text-blue-200 mb-1">Tooling</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">Foundry, Hardhat, Echidna, custom differential tests</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-5 border-l-4 border-amber-500">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">vVv Launchpad — 1st place</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">DeFi token distribution • frontrunning fix for claim()</p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-5 border-l-4 border-blue-500">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Ethos Network — Top 10</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Financial contracts • fee calc + reputation market patches</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-5 border-l-4 border-green-500">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Oku Order Types — Ranked</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">DEX UX • order execution safeguards & incentive hardening</p>
          </div>
        </div>
      </div>
    </div>
  )
}