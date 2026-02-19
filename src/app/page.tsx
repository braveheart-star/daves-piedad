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
        <div className="relative mx-auto max-w-7xl rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-blue-900/20 px-6 py-8 md:px-10 md:py-10 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/30 ring-1 ring-gray-100/80 dark:ring-gray-700/50 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 pointer-events-none" />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 w-1 h-3/4 min-h-[120px] rounded-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-80" />
          <p className="relative pl-8 text-left text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            As a <strong>Senior Fullstack & AI Automation Engineer</strong> with <strong>8+</strong> years of experience, I architect and deliver production-grade, end-to-end systems. I build modern <strong>React/Next.js</strong> frontends, scalable backend services in <strong>Node.js/Python</strong  >, <strong>Java/Spring Boot</strong>, and <strong>.NET Core</strong>, and design automation-ready data pipelines, AI workflows, and web scraping systems. I focus on performance, security, cloud-native architecture <strong>AWS</strong>, <strong>CI/CD</strong>, and pragmatic AI solutions (LLMs, computer vision, intelligent automation) that ship measurable business value across startups and enterprise environments.
          </p>
        </div>
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
    </div>
  )
}