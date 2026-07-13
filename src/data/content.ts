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

export const profile: Profile = {
  name: 'Claudia Bernabé Iniesta',
  roles: ['Desarrolladora Fullstack Junior'],
  location: 'Vitoria-Gasteiz, Álava',
  email: 'c.bernabe27@gmail.com',
  phone: '651 14 28 68',
  github: 'https://github.com/Claudia1393',
  intro:
    'Desarrolladora fullstack junior especializada en entornos .NET y JavaScript/TypeScript. Tras graduarme en el ciclo superior de DAM, he consolidado mis conocimientos técnicos trabajando en proyectos reales, desarrollando software de extremo a extremo: tanto la lógica de negocio del servidor como la interfaz visual. Antes de esto pasé varios años como enfermera, una etapa que me dejó capacidad de adaptación, resiliencia y una forma muy práctica de resolver problemas bajo presión.',
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
