# Dev-Hive

Sitio web corporativo para **Dev-Hive**, una empresa dedicada al desarrollo de soluciones de software a medida.

## Descripción

Dev-Hive es una landing page moderna y responsiva diseñada para presentar los servicios, tecnologías, proyectos y medios de contacto de la empresa.

Esta primera versión utiliza **HTML, CSS y JavaScript**, con **Vite** como herramienta de desarrollo.

## Características

- Navbar con navegación entre secciones.
- Hero section con animaciones y efectos visuales.
- Sección de servicios.
- Sección de tecnologías.
- Sección "Nosotros".
- Sección de proyectos destacados.
- Formulario de contacto con validación básica mediante JavaScript.
- Footer con información y enlaces.
- Animaciones al hacer scroll.
- Efectos interactivos con `mousemove`.
- Botón para volver al inicio.
- Diseño responsive.
- Estilos CSS separados por sección.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Vite
- Node.js / npm

## Estructura

```text
Dev-Hive/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── public/
└── src/
    ├── main.js
    └── css/
        ├── style.css
        ├── navbar.css
        ├── hero.css
        ├── services.css
        ├── technologies.css
        ├── about.css
        ├── projects.css
        ├── contact.css
        └── footer.css
```

> La estructura puede variar ligeramente dependiendo de la versión actual del proyecto.

## Instalación

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Entrar en la carpeta

```bash
cd Dev-Hive
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Iniciar Vite

```bash
npm run dev
```

Después, abre en el navegador la dirección que indique Vite, normalmente:

```text
http://localhost:5173/
```

## Scripts

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la versión optimizada para producción.

```bash
npm run preview
```

Permite visualizar localmente la versión compilada.

## Diseño

La interfaz utiliza una estética oscura y tecnológica basada principalmente en:

- **Negro:** fondos y superficies.
- **Blanco:** texto principal.
- **Cian `#01B1E1`:** interacción y elementos destacados.
- **Azul `#0111E1` / `#013F9F`:** gradientes y fondos.
- **Naranja `#E13700`:** acentos secundarios.

## JavaScript

El frontend utiliza JavaScript para:

- `IntersectionObserver` para animaciones al hacer scroll.
- Eventos `mousemove` para efectos de iluminación.
- Botón de volver al inicio.
- Manejo y validación básica del formulario.
- Interacciones de navegación.

El formulario actualmente funciona a nivel de frontend. Todavía no existe un backend conectado para enviar o almacenar mensajes.

## Responsive Design

El sitio utiliza media queries para adaptarse a:

- Escritorio.
- Tablets.
- Dispositivos móviles.

## Estado del proyecto

**Versión:** 1.0 — Frontend

El proyecto se encuentra en desarrollo. Se pueden añadir posteriormente funcionalidades de backend, envío real del formulario, almacenamiento de datos y otras mejoras.

## Autor

**Dev-Hive**

Proyecto desarrollado como sitio web corporativo de presentación.

## Licencia

Proyecto privado mientras se encuentra en desarrollo. La licencia puede definirse posteriormente.
