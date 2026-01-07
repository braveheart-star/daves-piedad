import { Pillar } from '@/components/icons/Pillar'
import { TrackApp } from '@/components/icons/TrackApp'
import Image from 'next/image'

type ColorScheme = {
  bg: string
  border: string
}

const COLOR_SCHEMES: ReadonlyArray<ColorScheme> = [
  {
    bg: 'from-sky-50 to-indigo-50 dark:from-slate-800/40 dark:to-indigo-900/30',
    border: 'border-sky-300 dark:border-indigo-400/60',
  },
  {
    bg: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
    border: 'border-emerald-300 dark:border-teal-400/60',
  },
  {
    bg: 'from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20',
    border: 'border-violet-300 dark:border-fuchsia-400/60',
  },
  {
    bg: 'from-amber-50 to-rose-50 dark:from-amber-900/20 dark:to-rose-900/20',
    border: 'border-amber-300 dark:border-rose-400/60',
  },
  {
    bg: 'from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20',
    border: 'border-cyan-300 dark:border-teal-400/60',
  },
  {
    bg: 'from-zinc-50 to-stone-50 dark:from-zinc-800/30 dark:to-stone-800/30',
    border: 'border-zinc-300 dark:border-stone-400/60',
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
    case 'The Track App':
      return <TrackApp className="w-8 h-8" />
    case 'Keeper Memorials':
      return (
        <Image src="/images/logos/keeper.jpeg" alt="Keeper Memorials" width={32} height={32} className="object-contain" />
      )
    case 'PillarMarkets':
      return <Pillar className="w-8 h-8" />
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
      period: 'Aug. 2015 ~ May. 2018',
      institution: 'Manila Central University',
      degree: 'Bachelor of Computer Science',
    },
  ]

  const workHistory = [
    {
      period: 'June. 2023 ~ Aug. 2025',
      company: 'LimeSurvey',
      location: 'Hamburg, Germany',
      position: 'Senior Full Stack Engineer',
      url: 'https://www.limesurvey.org/',
    },
    {
      period: 'June. 2021 ~ May 2023',
      company: 'PillarMarkets',
      location: 'Indianapolis, IN, USA (Remote)',
      position: 'Senior Frontend Engineer',
      url: 'https://www.pillarmarkets.com/',
    },
    {
      period: 'Dec. 2020 ~ May 2021',
      company: 'Keeper Memorials',
      location: 'Montreal, QC',
      position: 'Frontend Developer',
    },
    {
      period: 'June. 2018 ~ Nov. 2020',
      company: 'The Track App',
      location: 'New York, USA',
      position: 'Full-Stack Developer',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resume</h1>
          <div className="relative">
            <a 
              href="/cv/Senior Full Stack Engineer.pdf" 
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
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-indigo-500">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="section-title">Work History</h2>
          <div className="space-y-6">
            {workHistory.map((job, index) => {
              const colorScheme = getColorScheme(index);

              return (
                <div key={index} className={`timeline-item bg-gradient-to-r ${colorScheme.bg} rounded p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 ${colorScheme.border}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
                      {renderCompanyMark(job.company)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {job.url ? (
                          <a 
                            href={job.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
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
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {job.period}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{job.position}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  )
}