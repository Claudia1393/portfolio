# Portfolio · Claudia Bernabé Iniesta

Portfolio personal construido con **React + TypeScript + Vite + Tailwind CSS**.

## Contenido

- Presentación y resumen profesional (basado en tu CV)
- Habilidades técnicas agrupadas por área
- Proyectos: **Ludoteca Gajo** (Next.js/React/TS/Firebase, demo en vivo) y **Registro de Jornada** (Kotlin/Android)
- Experiencia profesional y trayectoria como enfermera
- Formación académica
- Contacto

## Cómo ejecutarlo en local

Necesitas [Node.js](https://nodejs.org) 18 o superior instalado.

```bash
# 1. Instala las dependencias
npm install

# 2. Arranca el servidor de desarrollo
npm run dev
```

Abre el navegador en `http://localhost:5173`.

## Cómo generar la versión de producción

```bash
npm run build
```

Esto genera una carpeta `dist/` lista para desplegar en cualquier hosting estático.

## Despliegue recomendado

- **Vercel**: importa el repositorio desde GitHub, detecta Vite automáticamente. Cero configuración.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: usa `npm run build` y sirve el contenido de `dist/` (puedes usar la acción `peaceiris/actions-gh-pages`).

## Editar el contenido

Todo el texto (nombre, biografía, habilidades, proyectos, experiencia, formación y contacto)
vive en un único archivo tipado:

```
src/data/content.ts
```

Edita ese archivo para actualizar cualquier dato sin tocar los componentes visuales.

## Añadir un nuevo proyecto

Añade un nuevo objeto al array `projects` en `src/data/content.ts`:

```ts
{
  name: 'Nombre del proyecto',
  description: 'Qué hace y por qué es interesante.',
  stack: ['TypeScript', 'React'],
  repoUrl: 'https://github.com/Claudia1393/tu-repo',
  liveUrl: 'https://tu-demo.vercel.app', // opcional
  featured: false,
}
```

## Estructura del proyecto

```
src/
  components/   → Nav, Hero, About, Skills, Projects, Experience, Education, Contact, Footer, PulseLine
  data/         → content.ts (toda la información editable)
  App.tsx       → ensambla las secciones
  main.tsx      → punto de entrada de React
  index.css     → estilos base + Tailwind
```
