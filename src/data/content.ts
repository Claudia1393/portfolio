export interface Profile {
  name: string
  roles: string[]
  location: string
  email: string
  phone: string
  github: string
  intro: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Project {
  name: string
  period?: string
  description: string
  stack: string[]
  repoUrl: string
  liveUrl?: string
  featured?: boolean
}

export interface TimelineItem {
  title: string
  place: string
  period: string
  details: string[]
}

export interface EducationItem {
  title: string
  place: string
  period: string
}

export interface Language {
  name: string
  level: string
}

export interface Testimonial {
  author: string
  role: string
  company: string
  date: string
  content: string
  email: string
}

export const profile: Profile = {
  name: 'Claudia Bernabé Iniesta',
  roles: ['Desarrolladora Full Stack Junior'],
  location: 'Vitoria-Gasteiz, Álava',
  email: 'c.bernabe27@gmail.com',
  phone: '651 14 28 68',
  github: 'https://github.com/Claudia1393',
  intro:
    'Desarrolladora full stack junior especializada en entornos .NET y JavaScript/TypeScript. Tras graduarme en el ciclo superior de DAM, he consolidado mis conocimientos técnicos trabajando en proyectos reales, desarrollando software de extremo a extremo: tanto la lógica de negocio del servidor como la interfaz visual. Antes de esto pasé varios años como enfermera, una etapa que me dejó capacidad de adaptación, resiliencia y una forma muy práctica de resolver problemas bajo presión.',
}

export const skills: SkillGroup[] = [
  { label: 'Backend', items: ['C#', 'ASP.NET Core', 'Entity Framework', 'Java'] },
  { label: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3'] },
  { label: 'Bases de datos', items: ['SQL Server', 'T-SQL', 'Procedimientos almacenados'] },
  { label: 'Herramientas', items: ['Git', 'Docker'] },
  { label: 'Otros lenguajes', items: ['Python', 'Kotlin'] },
]

export const projects: Project[] = [
  {
    name: 'Ludoteca Gajo (Gaztein Jokoan)',
    description:
      'Aplicación completa para la gestión de un club de juegos de mesa: registro de socios mediante QR, reserva de mesas y partidas, y un panel de administración para controlar préstamos, devoluciones e inventario de la ludoteca.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'Firestore'],
    repoUrl: 'https://github.com/Claudia1393/ludoteca-gajo',
    liveUrl: 'https://ludoteca-gajo.vercel.app',
    featured: true,
  },
  {
    name: 'Registro de Jornada',
    description:
      'Aplicación móvil para el fichaje de entrada y salida durante la jornada laboral, con registro de horas trabajadas de forma sencilla y accesible.',
    stack: ['Kotlin', 'Android'],
    repoUrl: 'https://github.com/Claudia1393/registro-jornada-MobileApp',
    featured: false,
  },
]

export const experience: TimelineItem[] = [
  {
    title: 'Desarrolladora Fullstack Junior',
    place: 'Externalia · Vitoria-Gasteiz (prácticas duales FP DAM)',
    period: '07/2025 — 06/2026',
    details: [
      'Backend: desarrollo y mantenimiento de aplicaciones web.',
      'Frontend: creación y optimización de interfaces de usuario dinámicas y reactivas.',
      'Bases de datos: diseño, configuración y gestión.',
      'Testing: implementación de pruebas unitarias y end-to-end para garantizar la calidad del código.',
    ],
  },
  {
    title: 'Enfermera',
    place:
      'Centros de salud de Osakidetza, PAC, residencias para mayores, mutua laboral, hospital psiquiátrico y hospitales',
    period: '2018 — 2023',
    details: [
      'Trabajo en equipos multidisciplinares bajo presión, con capacidad de respuesta y priorización constantes.',
      'Comunicación clara con pacientes y compañeros en contextos de alta exigencia emocional y técnica.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    title: 'FP Grado Superior · Desarrollo de Aplicaciones Multiplataforma (DAM)',
    place: 'Egibide · Campus Arriaga, Vitoria-Gasteiz (Álava)',
    period: '2023 — 2026',
  },
  {
    title: 'Grado en Enfermería',
    place: 'Escuela Universitaria de Enfermería Antonio Coello Cuadrado, Logroño (La Rioja)',
    period: '2014 — 2018',
  },
  {
    title: 'FP Grado Superior · Laboratorio de Diagnóstico Clínico',
    place: 'Colegio Zabalburu Sociedad Cooperativa de Enseñanza, Bilbao (Bizkaia)',
    period: '2012 — 2014',
  },
]

export const languages: Language[] = [
  { name: 'Castellano', level: 'Nativo' },
  { name: 'Inglés', level: 'B2 · Título Aptis ESOL (British Council)' },
]

export const testimonials: Testimonial[] = [
  {
    author: 'Eneko Pérez Oria',
    role: 'Senior Software Developer',
    company: 'Externalia S.L',
    date: '15 de junio de 2026',
    email: 'eneko.perez@externalia.com',
    content: `Claudia ha realizado su formación dual en Externalia durante el período comprendido entre 07/2025 y 06/2026, bajo mi tutorización directa en el equipo de desarrollo de software.

Durante este tiempo, Claudia ha participado activamente en proyectos de desarrollo de software, demostrando una sólida capacidad de aprendizaje y una actitud proactiva ante los retos técnicos. Entre sus contribuciones destacan el desarrollo de integraciones API, desarrollos full-stack para una aplicación SaaS y el análisis y posterior resolución de incidencias. Su evolución a lo largo del año ha sido notable, adaptándose con rapidez a las herramientas, metodologías y flujos de trabajo del equipo.

Más allá de sus competencias técnicas, Claudia ha destacado por su responsabilidad, su capacidad para trabajar en equipo y su disposición para asumir nuevas responsabilidades. Ha sabido comunicarse con claridad tanto con el equipo técnico como con otros interlocutores.

Considero que Claudia reúne las condiciones personales y profesionales para integrarse con éxito en cualquier equipo de desarrollo de software. La recomiendo sin reservas y confío plenamente en que será una aportación valiosa para cualquier organización que tenga la oportunidad de contar con ella.`,
  },
]
