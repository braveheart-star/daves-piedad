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
          src="/images/photo/daves-photo.jpg" 
          alt="Daves Piedad" 
          width={96} 
          height={96} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="space-y-1 flex-1 min-w-0">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Daves Piedad</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">Senior Full-Stack and AI Engineer</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Caloocan City, Philippines</p>
        <div className="flex md:hidden items-center gap-3 pt-1">
          <a href="https://www.linkedin.com/in/daves-piedad" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors" aria-label="LinkedIn">
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <div className="relative">
            <a href="https://github.com/GoWithMe-AI" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </a>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" aria-hidden="true" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true" />
          </div>
          <a href="mailto:Davespiedad123@gmail.com" className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors" aria-label="Email">
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
      </div>
      <div className="hidden md:flex flex-shrink-0 items-center gap-3 ml-4 self-end">
        <div className="relative">
          <a
            href="https://github.com/GoWithMe-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
          </a>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" aria-hidden="true" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true" />
        </div>
        <a
          href="https://www.linkedin.com/in/daves-piedad"
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
          href="mailto:Davespiedad123@gmail.com"
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
              I&apos;m <strong>Daves Piedad</strong>, a <strong>Senior Full-Stack and AI Engineer</strong> based in Caloocan City, Philippines with <strong>8+ years of experience</strong> delivering production-grade solutions. My core strengths include <strong>React/Next.js</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Python</strong>, <strong>Java/Spring Boot</strong>, and <strong>.NET Core</strong> for end-to-end system development. I also specialize in <strong>AI integration</strong>, <strong>automation workflows</strong>, and <strong>data-driven applications</strong>, while applying <strong>AWS</strong> and other <strong>cloud platforms</strong> to build secure, scalable, and high-performance architectures that create measurable business impact.
              I bring a pragmatic engineering approach focused on maintainability, clean architecture, and rapid delivery. From discovery and solution design to deployment and optimization, I work closely with product and business teams to turn requirements into reliable software. I am comfortable owning full project lifecycles, mentoring developers, and improving development workflows through testing, CI/CD, observability, and automation best practices.
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
                    <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium">Redux Toolkit</span>
                    <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium">React Query</span>
                    <span className="px-3 py-1 bg-lime-100 text-lime-800 rounded-full text-sm font-medium">Shadcn UI</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Backend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js / Express / Nest</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Python / Django / Flask</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">PHP / Laravel</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Java / Spring Boot</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">GraphQL</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">REST API Design</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Microservices</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">AI/ML & Data Science</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">OpenAI GPT</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TensorFlow & PyTorch</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">LangChain & Vector DBs</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Computer Vision</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">NLP & AI Integration</span>
                    <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full text-sm font-medium">RAG Pipelines</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Prompt Engineering</span>
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
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Kubernetes</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">GitHub Actions</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Azure / GCP</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Automation & Web Scraping</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Playwright</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Selenium</span>
                    <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-800 rounded-full text-sm font-medium">Puppeteer</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">BeautifulSoup/Scrapy</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Data Pipelines</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">ETL Orchestration</span>
                    <span className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium">Workflow Automation</span>
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
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Felix Tepel</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;I have been cooperating with Daves Piedad for more than 3 years, and I always feel good when I work with him. Together, we have achieved great success in our business through our common efforts.&rdquo;</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-gray-300 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Mark Florisson</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;Daves Piedad is a versatile and hardworking developer with strong technical skills. I can always rely on his expertise to deliver high-quality solutions and meet project deadlines effectively.&rdquo;</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-gray-300 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Jory Nagel</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;Daves Piedad is a talented full-stack developer with excellent problem-solving skills. He consistently delivers high-quality solutions and has strong expertise in React, Next.js, and modern web technologies. I highly recommend his services.&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
