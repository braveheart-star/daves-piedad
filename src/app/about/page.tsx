import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get to know me</h1>
        </div>

        <div className="space-y-8">
          {/* Photo Section - Horizontal */}
    <div className="flex items-center space-x-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 shadow-lg relative">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <Image 
          src="/images/photo/picture.jpg" 
          alt="Jorie Suan" 
          width={96} 
          height={96} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Jorie Suan</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">Senior Full Stack Engineer</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Bislig, Philippines</p>
      </div>
      <div className="absolute right-6 bottom-6 flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/jorie-suan-5a3017320/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://github.com/braveheart-star"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.001 12.001 0 0024 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="mailto:jorie.suan115@gmail.com"
          className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          aria-label="Email"
        >
          <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m <strong>Jorie Suan</strong>, a senior full‑stack engineer in Bislig, Philippines. Over the past 10+ years I&apos;ve shipped production systems end‑to‑end across SaaS, blockchain, and enterprise teams—owning architecture, implementation, testing and delivery. My focus is pragmatic execution: modern UIs (React/Next.js, Vue.js, Angular), reliable APIs and services (Node.js, Python, PHP), cloud on AWS, CI/CD, performance, and security. I pair clean design with measurable outcomes to deliver robust, scalable software.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Main Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Frontend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React/Next.js</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Angular</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Vue/Nuxt</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">HTML5</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">CSS3</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Sass</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">Bootstrap</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Material-UI</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Backend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js/Nest.js</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Python/Django</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">PHP/Laravel</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Java/Spring Boot</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm font-medium">.NET/.NET Core</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Express.js</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">FastAPI</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI/ML & Data Science</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">OpenAI GPT</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">TensorFlow</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PyTorch</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">LangChain</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Computer Vision</span>
                    <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full text-sm font-medium">Vector Databases</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">Natural Language Processing</span>
                    <span className="px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-sm font-medium">AI Integration</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Database & DevOps</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">MongoDB</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Docker</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">AWS</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Redis</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Firebase</span>
                  </div>
                </div>
              </div>
            </div>

            

            

            

            
          </div>
        </div>


        {/* Recommendations Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Recommendations</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-gray-300 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border overflow-hidden">
                    <Image src="/images/clients/vlad.png" alt="Vladimir Agaev" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Vladimir Agaev</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">AlphaSwap • CTO</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;Jorie is a motivated developer with excellent communication skills. He quickly adapts to new technologies and delivers quality work across both backend and frontend development.&rdquo;</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-gray-300 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border overflow-hidden">
                    <Image src="/images/clients/hubert.jpg" alt="Hubert Hilczer" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Hubert Hilczer</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;Jorie is a versatile and hardworking developer with strong technical skills. I can always rely on his expertise to deliver high-quality solutions and meet project deadlines effectively.&rdquo;</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-gray-300 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border overflow-hidden">
                    <Image src="/images/clients/kiran-rathni.png" alt="Kiran Rathni" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Kiran Rathni</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">PillarMarkets • CTO</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;Jorie is a talented full-stack developer with excellent problem-solving skills. He consistently delivers high-quality solutions and has strong expertise in React, Next.js, and modern web technologies. I highly recommend his services.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
