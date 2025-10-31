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
    <div className="flex items-center space-x-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 shadow-lg">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <Image 
          src="/images/photo/coder.png" 
          alt="ShiXiong Han" 
          width={96} 
          height={96} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">ShiXiong Han</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">Senior Full Stack Engineer</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Dalian, China</p>
      </div>
    </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m <strong>ShiXiong Han</strong>, a senior full‑stack engineer in Dalian, China. Over the past 10+ years I&apos;ve shipped production systems end‑to‑end across SaaS, blockchain, and enterprise teams—owning architecture, implementation, testing and delivery. My focus is pragmatic execution: modern UIs (React/Next.js, Vue.js, Angular), reliable APIs and services (Node.js, Python, PHP), cloud on AWS, CI/CD, performance, and security. I pair clean design with measurable outcomes to deliver robust, scalable software.
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
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Full-Stack Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;ve led and delivered complex products across SaaS (PillarMarkets), productivity apps (The Track App), blockchain platforms (AlphaSwap), and open‑source (LimeSurvey). I own projects end‑to‑end—from discovery and architecture to delivery—designing robust APIs and microservices in Node.js, Python, PHP, and building accessible, performant UIs with React/Next.js, Vue.js, and Angular. I focus on scalable, maintainable systems with clean architecture, automated testing, CI/CD, observability, and pragmatic AI/ML integrations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">AI/ML Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🤖 AI Integration</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• OpenAI GPT API integration</li>
                    <li>• LangChain for AI workflows</li>
                    <li>• Custom AI chatbot development</li>
                    <li>• Natural language processing</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🧠 Machine Learning</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• TensorFlow & PyTorch models</li>
                    <li>• Computer vision applications</li>
                    <li>• Data preprocessing & analysis</li>
                    <li>• Model deployment & optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Backend Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Development</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• RESTful API design & implementation</li>
                    <li>• GraphQL APIs with Node.js & Python</li>
                    <li>• Microservices architecture</li>
                    <li>• API documentation & testing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Database & Infrastructure</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• PostgreSQL, MongoDB, MySQL</li>
                    <li>• Docker containerization</li>
                    <li>• AWS & cloud deployment</li>
                    <li>• CI/CD pipeline setup</li>
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
        </div>


        {/* Recommendations Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 overflow-hidden flex-shrink-0">
                  <Image src="/images/clients/vlad.png" alt="Vladimir Agaev" width={48} height={48} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Vladimir Agaev</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AlphaSwap company<br />CTO</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                &ldquo;ShiXiong is a motivated developer with excellent communication skills. He quickly adapts to new technologies and delivers quality work across both backend and frontend development.&rdquo;
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 overflow-hidden flex-shrink-0">
                  <Image src="/images/clients/hubert.jpg" alt="Hubert Hilczer" width={48} height={48} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Hubert Hilczer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lead Developer</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                &ldquo;ShiXiong is a versatile and hardworking developer with strong technical skills. I can always rely on his expertise to deliver high-quality solutions and meet project deadlines effectively.&rdquo;
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 overflow-hidden flex-shrink-0">
                  <Image src="/images/clients/kiran-rathni.png" alt="Kiran Rathni" width={48} height={48} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Kiran Rathni</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">PillarMarkets<br />CTO</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                &ldquo;ShiXiong is a talented full-stack developer with excellent problem-solving skills. He consistently delivers high-quality solutions and has strong expertise in React, Next.js, and modern web technologies. I highly recommend his services.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
