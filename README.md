# Portfolio · Claudia Bernabé Iniesta

Portfolio personal construido con **React + TypeScript + Vite + Tailwind CSS**.

## Contenido

- Presentación y resumen profesional 
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

## Estructura del proyecto

```
src/
  components/   → Nav, Hero, About, Skills, Projects, Experience, Education, Contact, Footer, PulseLine
  data/         → content.ts (toda la información editable)
  App.tsx       → ensambla las secciones
  main.tsx      → punto de entrada de React
  index.css     → estilos base + Tailwind
```
