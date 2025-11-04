import { Pillar } from '@/components/icons/Pillar'
import { AlphaSwap } from '@/components/icons/AlphaSwap'
import Image from 'next/image'

type ColorScheme = {
  bg: string
  border: string
  icon: string
  iconText: string
  badge: string
}

const COLOR_SCHEMES: ReadonlyArray<ColorScheme> = [
  {
    bg: 'from-sky-50 to-indigo-50 dark:from-slate-800/40 dark:to-indigo-900/30',
    border: 'border-sky-300 dark:border-indigo-400/60',
    icon: 'bg-sky-100/70 dark:bg-indigo-400/20',
    iconText: 'text-sky-700 dark:text-indigo-200',
    badge: 'bg-sky-100/70 dark:bg-indigo-400/20 text-sky-800 dark:text-indigo-200',
  },
  {
    bg: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
    border: 'border-emerald-300 dark:border-teal-400/60',
    icon: 'bg-emerald-100/70 dark:bg-teal-400/20',
    iconText: 'text-emerald-700 dark:text-teal-200',
    badge: 'bg-emerald-100/70 dark:bg-teal-400/20 text-emerald-800 dark:text-teal-200',
  },
  {
    bg: 'from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20',
    border: 'border-violet-300 dark:border-fuchsia-400/60',
    icon: 'bg-violet-100/70 dark:bg-fuchsia-400/20',
    iconText: 'text-violet-700 dark:text-fuchsia-200',
    badge: 'bg-violet-100/70 dark:bg-fuchsia-400/20 text-violet-800 dark:text-fuchsia-200',
  },
  {
    bg: 'from-amber-50 to-rose-50 dark:from-amber-900/20 dark:to-rose-900/20',
    border: 'border-amber-300 dark:border-rose-400/60',
    icon: 'bg-amber-100/70 dark:bg-rose-400/20',
    iconText: 'text-amber-700 dark:text-rose-200',
    badge: 'bg-amber-100/70 dark:bg-rose-400/20 text-amber-800 dark:text-rose-200',
  },
  {
    bg: 'from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20',
    border: 'border-cyan-300 dark:border-teal-400/60',
    icon: 'bg-cyan-100/70 dark:bg-teal-400/20',
    iconText: 'text-cyan-700 dark:text-teal-200',
    badge: 'bg-cyan-100/70 dark:bg-teal-400/20 text-cyan-800 dark:text-teal-200',
  },
  {
    bg: 'from-zinc-50 to-stone-50 dark:from-zinc-800/30 dark:to-stone-800/30',
    border: 'border-zinc-300 dark:border-stone-400/60',
    icon: 'bg-zinc-100/70 dark:bg-stone-400/20',
    iconText: 'text-zinc-700 dark:text-stone-200',
    badge: 'bg-zinc-100/70 dark:bg-stone-400/20 text-zinc-800 dark:text-stone-200',
  },
]

const getColorScheme = (index: number): ColorScheme =>
  COLOR_SCHEMES[index % COLOR_SCHEMES.length]

const renderCompanyMark = (company: string) => {
  switch (company) {
    case 'LimeSurvey':
      return (
        <Image src="/images/logos/limesurvey.png" alt="LimeSurvey" width={32} height={32} className="object-contain" />
      )
    case 'PillarMarkets':
      return <Pillar className="w-8 h-8" />
    case 'AlphaSwap':
      return <AlphaSwap className="w-8 h-8" />
    case 'InputKit':
      return (
        <Image src="/images/logos/inputkit.png" alt="InputKit" width={32} height={32} className="object-contain" />
      )
    case 'Kaj Medical':
      return (
        <Image src="/images/logos/KAJ-logo-vector.svg" alt="KAJ Medical" width={32} height={32} className="object-contain" />
      )
    default:
      return (
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-300 font-bold text-xs">{company?.[0] ?? '?'}</span>
        </div>
      )
  }
}

export default function Resume() {
  const education = [
    {
      period: 'Aug. 2013 ~ May. 2017',
      institution: 'North Eastern Mindanao State University',
      degree: 'Bachelor of Computer Science',
    },
  ]

  const workHistory = [
    {
      period: 'Feb. 2023 ~ Mar. 2025',
      company: 'PillarMarkets',
      location: 'Indianapolis, IN, USA (Remote)',
      position: 'Senior Frontend Engineer',
      url: 'https://www.pillarmarkets.com/',
    },
    {
      period: 'May 2022 ~ Oct. 2022',
      company: 'InputKit',
      location: 'Longueuil, Quebec, Canada (Remote)',
      position: 'Full-Stack Engineer',
      url: 'https://www.inputkit.io/en/',
    },
    {
      period: 'Jan. 2021 ~ Feb. 2022',
      company: 'Kaj Medical',
      location: 'Jamaica, NY, USA (Remote)',
      position: 'Full-Stack Engineer',
      url: 'https://kajmedical.com/',
    },
    {
      period: 'Apr. 2018 ~ Nov. 2020',
      company: 'AlphaSwap',
      location: 'London, UK (Remote)',
      position: 'Full-Stack Engineer',
    },
  ]

  const frontendSkills = [
    'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Bootstrap', 'Material-UI'
  ]

  const backendDevopsSkills = [
    'Node.js', 'Python', 'Django', 'Java', 'Spring Boot', 'Express.js', 'Nest.js',
    'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Firebase'
  ]

  const aiSkills = [
    'OpenAI API', 'LangChain', 'Vector Databases', 'Machine Learning',
    'Computer Vision', 'Natural Language Processing', 'AI Integration'
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resume</h1>
          <div className="relative">
            <a 
              href="/cv/Senior Full Stack & AI Engineer.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Resume
            </a>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="section-title">Education</h2>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
            <ul className="space-y-4">
              {education.map((edu, index) => (
                <li key={index} className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2 sm:mt-0">{edu.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="section-title">Work History</h2>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-6">
              {workHistory.map((job, index) => (
                <div key={index} className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200/60 dark:border-gray-700/60">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {job.url ? (
                            <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {job.company}
                            </a>
                          ) : (
                            job.company
                          )}
                        </h3>
                        {job.location && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                        )}
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium block">{job.period}</span>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{job.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

      </div>
    </div>
  )
}