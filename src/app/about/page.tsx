import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20">
            <Image 
              src="/images/photo/picture.jpg" 
              alt="Jorie Suan" 
              fill
              className="object-cover" 
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
              Jorie Suan
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
              Full Stack AI Expert
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Transforming ideas into intelligent, scalable solutions through cutting-edge AI/ML integration, modern web architectures, and pragmatic engineering practices.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/jorie-suan-5a3017320/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/braveheart-star" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-800 dark:bg-gray-700 text-white font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.001 12.001 0 0024 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="mailto:jorie.suan115@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I&apos;m <strong>Jorie Suan</strong>, a full stack AI expert based in Bislig, Philippines. With over 10+ years of experience, I specialize in building end-to-end AI-powered applications that combine modern web technologies with cutting-edge machine learning and artificial intelligence.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My expertise spans the entire development lifecycle—from architecting scalable frontends with React, Next.js, and Vue.js to designing robust backend systems using Node.js, Python, and cloud infrastructure. What sets me apart is my deep integration of AI/ML capabilities: OpenAI GPT models, LangChain for agent orchestration, vector databases, custom ML models, and production-ready AI pipelines.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;ve delivered production systems across SaaS, enterprise, healthcare, fintech, and investment platforms—always focusing on pragmatic execution, measurable outcomes, and robust, scalable solutions. Whether it&apos;s RAG pipelines, sentiment analysis, predictive models, or intelligent automation, I bring AI capabilities to life in real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Core Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI/ML Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building intelligent systems with OpenAI, LangChain, vector databases, and custom ML models for production-ready AI solutions.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full Stack Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              End-to-end application development with modern frameworks, scalable architectures, and cloud-native deployments.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Production Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Shipping robust, scalable software with CI/CD, monitoring, performance optimization, and security best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Frontend Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium">React/Next.js</span>
              <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg text-sm font-medium">Angular</span>
              <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg text-sm font-medium">Vue/Nuxt</span>
              <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-lg text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium">JavaScript</span>
              <span className="px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg text-sm font-medium">HTML5</span>
              <span className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-lg text-sm font-medium">CSS3</span>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Backend Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm font-medium">Node.js/Nest.js</span>
              <span className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-lg text-sm font-medium">Python/Django</span>
              <span className="px-3 py-1.5 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-lg text-sm font-medium">PHP/Laravel</span>
              <span className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg text-sm font-medium">Java/Spring Boot</span>
              <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-sm font-medium">.NET/.NET Core</span>
              <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium">Express.js</span>
              <span className="px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg text-sm font-medium">FastAPI</span>
            </div>
          </div>

          {/* AI/ML */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              AI/ML & Data Science
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg text-sm font-medium">OpenAI GPT</span>
              <span className="px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg text-sm font-medium">TensorFlow</span>
              <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium">PyTorch</span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm font-medium">LangChain</span>
              <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium">Computer Vision</span>
              <span className="px-3 py-1.5 bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300 rounded-lg text-sm font-medium">Vector Databases</span>
              <span className="px-3 py-1.5 bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 rounded-lg text-sm font-medium">NLP</span>
              <span className="px-3 py-1.5 bg-lime-100 dark:bg-lime-900/30 text-lime-800 dark:text-lime-300 rounded-lg text-sm font-medium">AI Integration</span>
            </div>
          </div>

          {/* DevOps */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Database & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium">PostgreSQL</span>
              <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm font-medium">MongoDB</span>
              <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium">Docker</span>
              <span className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-lg text-sm font-medium">AWS</span>
              <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium">Redis</span>
              <span className="px-3 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg text-sm font-medium">Firebase</span>
              <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg text-sm font-medium">CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">VA</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Vladimir Agaev</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">AlphaSwap • CTO</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              &ldquo;Jorie is a motivated developer with excellent communication skills. He quickly adapts to new technologies and delivers quality work across both backend and frontend development.&rdquo;
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">HH</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Hubert Hilczer</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              &ldquo;Jorie is a versatile and hardworking developer with strong technical skills. I can always rely on his expertise to deliver high-quality solutions and meet project deadlines effectively.&rdquo;
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">JN</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">John Nnamchi</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kaj Medical • CTO</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              &ldquo;Jorie is a talented full-stack developer with excellent problem-solving skills. He consistently delivers high-quality solutions and has strong expertise in React, Next.js, and modern web technologies. I highly recommend his services.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}