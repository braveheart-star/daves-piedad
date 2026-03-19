import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image,
} from '@react-pdf/renderer'

const projects = [
  {
    title: 'Limesurvey.org',
    period: '2023.1 - 2025.7',
    image: 'limesurvey.png',
    description:
      "Built and maintained enterprise survey platform features focused on performance, UX, and scalable delivery.",
    technologies: ['React', 'Yii PHP', 'Storybook', 'PHP', 'Bootstrap', 'Docker'],
    url: 'https://www.limesurvey.org/',
  },
  {
    title: 'The Track App',
    period: '2020.9 - 2022.8',
    image: 'trackapp.png',
    description:
      'Developed lead qualification and scheduling workflows to reduce manual SDR/MDR work and improve conversion speed.',
    technologies: ['React', 'Electron', 'TypeScript', 'Node.js', 'SQLite', 'Redux'],
    url: '#',
  },
  {
    title: 'AlphaSwap',
    period: '2018.1 - 2020.5',
    image: 'alphaswap.png',
    description:
      "Built investment technology apps for AlphaSwap's Data-as-a-Service platform with real-time stock and portfolio workflows.",
    technologies: ['React', 'Next.js', 'PostgreSQL', 'easy-peasy', 'Nest.js', 'GraphQL'],
    url: '#',
  },
]

const mainSkills = [
  {
    title: 'Frontend Technologies',
    tags: ['React/Next.js', 'Angular', 'Vue/Nuxt', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Material-UI'],
    color: '#dbeafe',
    textColor: '#1d4ed8',
  },
  {
    title: 'Backend Technologies',
    tags: ['Node.js / Express / Nest', 'Python / Django / Flask', 'PHP / Laravel', 'Java / Spring Boot'],
    color: '#dcfce7',
    textColor: '#166534',
  },
  {
    title: 'AI/ML & Data Science',
    tags: ['OpenAI GPT', 'TensorFlow & PyTorch', 'LangChain & Vector DBs', 'Computer Vision', 'NLP & AI Integration'],
    color: '#fce7f3',
    textColor: '#9d174d',
  },
  {
    title: 'Database & DevOps',
    tags: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Redis', 'Firebase'],
    color: '#fef3c7',
    textColor: '#92400e',
  },
  {
    title: 'Automation & Web Scraping',
    tags: ['Playwright', 'Selenium', 'Puppeteer', 'BeautifulSoup/Scrapy', 'Data Pipelines'],
    color: '#e0e7ff',
    textColor: '#3730a3',
  },
]

const education = {
  institution: 'Manila Central University',
  degree: 'Bachelor of Computer Science',
  period: 'Aug. 2013 - May. 2017',
}

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: 'Helvetica',
    fontSize: 9,
  },
  content: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
    color: '#1f2937',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 4,
  },
  projectBlock: {
    width: '100%',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  projectRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 4,
    gap: 10,
  },
  projectThumb: {
    width: 64,
    height: 44,
    objectFit: 'cover',
    borderRadius: 4,
    backgroundColor: '#f3f4f6',
  },
  projectBody: {
    flex: 1,
    minWidth: 0,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 1,
  },
  projectPeriod: {
    fontSize: 8,
    color: '#6b7280',
    marginBottom: 3,
  },
  projectDesc: {
    fontSize: 8,
    color: '#4b5563',
    lineHeight: 1.3,
    marginBottom: 4,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  techTag: {
    fontSize: 6,
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 3,
  },
  linkIcon: {
    width: 14,
    height: 14,
  },
  // Get to know me
  partTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1f2937',
    textAlign: 'center',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f5f3ff',
    borderRadius: 8,
  },
  profilePhoto: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#e5e7eb',
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  profileTitle: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 1,
  },
  profileLocation: {
    fontSize: 8,
    color: '#6b7280',
  },
  introText: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#374151',
    marginBottom: 14,
    textAlign: 'justify',
  },
  // Main Skills
  mainSkillsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 6,
    color: '#1f2937',
  },
  skillCategory: {
    marginBottom: 5,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 3,
  },
  skillTagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillTag: {
    fontSize: 7,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginBottom: 2,
  },
  educationCard: {
    marginTop: 10,
    marginBottom: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#eef2ff',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  educationInstitution: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  educationPeriod: {
    fontSize: 9,
    color: '#4b5563',
  },
  educationMeta: {
    fontSize: 10,
    color: '#4b5563',
  },
})

export type PortfolioPDFProps = {
  imageData?: Record<string, string>
  iconData?: Record<string, string>
}

function ProjectBlock({
  project,
  imageData,
}: {
  project: (typeof projects)[0]
  imageData?: Record<string, string>
}) {
  const thumbSrc = project.image && imageData?.[project.image]
  const body = (
    <View>
      <Text style={styles.projectTitle}>{project.title}</Text>
      <Text style={styles.projectPeriod}>{project.period}</Text>
      <Text style={styles.projectDesc}>{project.description}</Text>
      <View style={styles.techRow}>
        {project.technologies.map((tech, i) => (
          <View key={i} style={styles.techTag}>
            <Text>{tech}</Text>
          </View>
        ))}
      </View>
    </View>
  )
  return (
    <View style={styles.projectBlock}>
      {thumbSrc ? (
        <View style={styles.projectRow}>
          <Image style={styles.projectThumb} src={thumbSrc} />
          <View style={styles.projectBody}>{body}</View>
        </View>
      ) : (
        body
      )}
    </View>
  )
}

export function PortfolioPDFDocument(props: PortfolioPDFProps) {
  const { imageData, iconData } = props ?? {}
  return (
    <Document>
      {/* Single-page PDF */}
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <Text style={styles.partTitle}>Get to know me</Text>
          <View style={styles.profileCard}>
            {imageData?.profile ? (
              <Image style={styles.profilePhoto} src={imageData.profile} />
            ) : null}
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>Daves Piedad</Text>
              <Text style={styles.profileTitle}>Senior Full-Stack & AI Engineer</Text>
              <Text style={styles.profileLocation}>Caloocan City, Philippines</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 6 }}>
              {iconData?.github ? (
                <Link src="https://github.com/GoWithMe-AI">
                  <Image style={styles.linkIcon} src={iconData.github} />
                </Link>
              ) : null}
              {iconData?.linkedin ? (
                <Link src="https://www.linkedin.com/in/daves-piedad">
                  <Image style={styles.linkIcon} src={iconData.linkedin} />
                </Link>
              ) : null}
              {iconData?.email ? (
                <Link src="mailto:Davespiedad123@gmail.com">
                  <Image style={styles.linkIcon} src={iconData.email} />
                </Link>
              ) : null}
            </View>
          </View>
          <Text style={styles.introText}>
            I'm Daves Piedad, a senior full-stack, AI, and automation engineer based in Caloocan City, Philippines.
            I architect and deliver production-grade systems end-to-end: modern React/Next.js, Vue, and Angular UIs;
            scalable services in Node/Python, Java/Spring Boot, and .NET Core; plus automation-ready data pipelines
            and intelligent workflow automation. Over 10+ years across startups and enterprise environments, I've owned
            performance optimization, security best practices, cloud-native architecture (AWS), CI/CD pipelines, and
            pragmatic AI integrations (LLMs and computer vision) that ship measurable business value.
          </Text>

          <Text style={styles.mainSkillsTitle}>Main Skills</Text>
          <View style={{ marginBottom: 8 }}>
            {mainSkills.map((category, i) => (
            <View key={i} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category.title}</Text>
              <View style={styles.skillTagRow}>
                {category.tags.map((tag, j) => (
                  <View
                    key={j}
                    style={[styles.skillTag, { backgroundColor: category.color }]}
                  >
                    <Text style={{ fontSize: 7, color: category.textColor }}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Selected Projects</Text>
          {projects.map((project, index) => (
            <ProjectBlock key={index} project={project} imageData={imageData} />
          ))}

          <Text style={[styles.sectionTitle, { marginTop: 14 }]}>Education</Text>
          <View style={styles.educationCard}>
            <View style={styles.educationHeader}>
              <Text style={styles.educationInstitution}>{education.institution}</Text>
              <Text style={styles.educationPeriod}>{education.period}</Text>
            </View>
            <Text style={styles.educationMeta}>{education.degree}</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
