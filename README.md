# DevLaunch

## Descripción

DevLaunch es una aplicación full-stack que transforma ideas de usuario en conceptos estructurados de startups.

La plataforma genera automáticamente propuestas de producto con información organizada como título, categoría, descripción, problema, funcionalidades, usuarios objetivo, roadmap y un sistema de puntuación.

Los proyectos se almacenan en un backend propio y se visualizan en un dashboard con métricas, filtros y vistas detalladas.

---

## Características principales

- Generación de ideas de startup a partir de texto libre
- Clasificación automática por categoría
- Sistema de scoring de ideas
- Dashboard con estadísticas generales
- Filtros por categoría y puntuación
- Vista detallada de cada proyecto
- Animaciones e इंटरacciones de UI tipo SaaS
- Arquitectura full-stack con API REST

---

## Stack tecnológico

### Frontend
- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM

### Backend
- Node.js
- Express
- TypeScript
- CORS

### Despliegue
- Frontend: Vercel
- Backend: Vercel (serverless)
- Comunicación mediante API REST

---

## Arquitectura del proyecto

El proyecto está dividido en dos partes:

```
DevStart/
├── client/ (Frontend React)
├── server/ (Backend Express API)
├── docs/ (Project documentation)
```

### Flujo de la aplicación

1. El usuario introduce una idea en el frontend
2. El sistema genera una estructura de proyecto
3. Se calcula un score automático
4. El proyecto se envía al backend mediante API REST
5. El backend almacena los datos en memoria
6. El frontend consume los datos desde la API
7. Se muestran en dashboard y vista de detalle

---

## API REST

### URL Vercel
https://devstart-backend.vercel.app/api

### Endpoints

#### Obtener todos los proyectos
GET /projects
```
Respuesta:

```json
[
  {
    "id": 123,
    "title": "Startup SaaS Platform",
    "category": "Startup SaaS Platform",
    "description": "...",
    "problem": "...",
    "features": [],
    "targetUsers": [],
    "roadmap": [],
    "score": 50
  }
]
```
---

## Crear proyecto
```
POST /projects
```
Body:

```
{
  "title": "string",
  "category": "string",
  "description": "string",
  "problem": "string",
  "features": [],
  "targetUsers": [],
  "roadmap": [],
  "score": 0
}
```
---
## Obtener proyecto por ID
```
GET /projects/:id
```
---
## Decisiones técnicas
- Uso de Context API para estado global
- Separación frontend/backend
- API REST para comunicación
- Animaciones con Framer Motion
- Diseño tipo SaaS dashboard con Tailwind
- Persistencia temporal en memoria (sin base de datos)
---
## Problemas encontrados y soluciones

### Error de despliegue en Vercel

- Problema: configuración incorrecta del deploy.
- Solución: separación correcta entre frontend y backend y configuración adecuada del proyecto en Vercel.

### Error "Cannot GET /"
- Problema: ausencia de ruta raíz en Express.
- Solución: uso correcto de rutas bajo /api/projects.

### Error "createRoot target container is not a DOM element"
- Problema: el elemento root no estaba disponible en el DOM.
- Solución: validación del div#root en index.html.

### Problemas de import en navegador
- Problema: interferencias de extensiones del navegador.
- Solución: ejecución en entorno limpio o modo incógnito.

## Resultados
- Aplicación full-stack funcional desplegada en producción
- API REST operativa
- Dashboard con métricas y filtros
- Sistema de generación de ideas automatizado
- UI moderna tipo SaaS
- Animaciones e interacciones fluidas
---

## Documentación

Toda la documentación detallada esta en la carpeta  `/docs` :

- `docs/agile.md` → Teoría de Agile, Scrum & Kanban
- `docs/idea.md` → Definición de la idea
- `docs/project-management.md` → Trello & workflow
- `docs/design.md` → Decisiones Arquitectónicas
- `docs/components.md` → Componentes del React
- `docs/hooks.md` → Uso de hooks en React
- `docs/api.md` → Diseño del API del Backend
- `docs/deployment.md` → Processo del desarollo
- `docs/retrospective.md` → Reflección final

---

## Project Management

Trello Board:
[DevLaunch Project Managment](https://trello.com/b/ojQfqUpa/devlaunch-project-management)

---

## Conclusión

DevLaunch es una aplicación full-stack que demuestra la integración de frontend moderno con React, backend con Express y despliegue en producción.

El proyecto aplica conceptos de arquitectura web, consumo de APIs, estado global, diseño UI tipo SaaS y despliegue en cloud.