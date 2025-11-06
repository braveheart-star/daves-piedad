import { Pillar } from '@/components/icons/Pillar'
import { AlphaSwap } from '@/components/icons/AlphaSwap'
import Image from 'next/image'

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
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
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
      description: 'Led frontend development for AI-powered CRE platform, implementing ML models, NLP integrations, and intelligent recommendation systems.',
    },
    {
      period: 'May 2022 ~ Oct. 2022',
      company: 'InputKit',
      location: 'Longueuil, Quebec, Canada (Remote)',
      position: 'Full-Stack Engineer',
      url: 'https://www.inputkit.io/en/',
      description: 'Built customer experience platform with ML-based sentiment analysis, NLP categorization, and predictive analytics for high-volume datasets.',
    },
    {
      period: 'Jan. 2021 ~ Feb. 2022',
      company: 'Kaj Medical',
      location: 'Jamaica, NY, USA (Remote)',
      position: 'Full-Stack Engineer',
      url: 'https://kajmedical.com/',
      description: 'Developed medical supply chain platform with AI-powered demand forecasting and ML models for inventory optimization.',
    },
    {
      period: 'Apr. 2018 ~ Nov. 2020',
      company: 'AlphaSwap',
      location: 'London, UK (Remote)',
      position: 'Full-Stack Engineer',
      description: 'Built investment technology platform with predictive ML models, sentiment analysis from social media, and AI-powered investment recommendations.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
              Resume
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Full Stack AI Expert • 10+ Years Experience
            </p>
          </div>
          <a 
            href="/cv/Senior Full Stack & AI Engineer.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Resume
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
          Education
        </h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {edu.degree}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-green-500 rounded-full"></span>
          Work History
        </h2>
        <div className="space-y-6">
          {workHistory.map((job, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:border-blue-300 dark:hover:border-blue-700"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:bg-white rounded-xl flex items-center justify-center border-2 border-blue-200 dark:border-gray-300 p-2 shadow-sm dark:shadow-md">
                    {renderCompanyMark(job.company)}
                  </div>
                </div>
                
                {/* Job Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {job.position}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {job.url ? (
                          <a 
                            href={job.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                          >
                            {job.company}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          job.company
                        )}
                      </p>
                      {job.location && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg whitespace-nowrap">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium text-green-800 dark:text-green-300">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  {job.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {job.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}