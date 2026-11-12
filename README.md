# Proyecto Web Estático - Stray Kids (SKZ) Official Fan Site

Este repositorio contiene el código fuente de una plataforma web estática moderna, interactiva y 100% responsiva sobre el grupo de K-Pop **Stray Kids (스트레이 키즈)**, desarrollada como parte de mi portfolio de desarrollo web. El proyecto demuestra el uso avanzado de maquetación semántica con **HTML5**, diseño de interfaces moderno con **CSS3 puro** (Glassmorphism, CSS Grid y Flexbox) y funcionalidades interactivas con **JavaScript Vanilla** (`main.js`).

## 🔗 Enlace en Vivo (Live Demo)

El proyecto está desplegado y es accesible públicamente a través de GitHub Pages:
**[Visitar la web en vivo](https://www.annyart-dev.art)** *(Nota: Si el dominio aún se está propagando, puede tardar unas horas en estar disponible).*

## 🚀 Descripción del Proyecto

El objetivo de esta práctica es construir un sitio web completo desde cero sin dependencias de frameworks externos pesados, asegurando una comprensión sólida de los fundamentos de la web y buenas prácticas de ingeniería de software frontend y fullstack.

### 🌟 Funcionalidades Técnicas Destacadas:

* **Diseño 100% Responsivo (Mobile First & Adaptive):**
  * Maquetación fluida mediante **CSS Grid** y **Flexbox** que se adapta a cualquier tamaño de pantalla (Smartphones, Tablets y Escritorio).
  * Video embeds de YouTube en contenedores con relación de aspecto fluida `aspect-ratio: 16 / 9`, eliminando el desbordamiento horizontal en móviles.
  * Menú de navegación sticky con efecto cristal (*backdrop-filter blur*) adaptado a pantallas táctiles.
* **Diseño Visual Moderno (K-Pop Neon / Glassmorphism):**
  * Paleta de colores de alto contraste inspirada en la estética oficial de Stray Kids (acentos en rojo carmesí `#ff2a5f` y azul cian holográfico `#00d2ff` sobre fondos oscuros).
  * Tipografía profesional con la fuente Google Fonts *Plus Jakarta Sans*.
  * Tarjetas de integrantes visuales con efectos de zoom y badges de rol.
* **Interactivad con JavaScript Vanilla (`main.js`):**
  * **Buscador en tiempo real de álbumes:** Filtrado instantáneo en la tabla de discografía mientras el usuario escribe.
  * **Visor Lightbox / Modal:** Visualización ampliada a pantalla completa de las fotografías de las galerías al hacer clic.
  * **Botón Flotante "Volver Arriba":** Detección dinámica de scroll con animación de desvanecimiento y desplazamiento suave.
  * **Validación e Interactividad en Formulario Fandom:** Confirmación animada sin recarga de página y persistencia local del integrante favorito (*Bias*) en `localStorage`.
* **Navegación Multicapa y Accesibilidad:**
  * Enrutamiento funcional entre la página principal (`index.html`), las 8 páginas de detalle de los integrantes y el formulario de membresía.
  * Atributos accesibles (`aria-label`, etiquetas `<label>`, textos alternativos `alt` en imágenes).
* **Diseño Modular de Estilos:** Separación de hojas de estilo (`style.css`, `styleIntegrantes.css`, `styleformulario.css`) para mantener un código escalable y organizado.

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** Estructura limpia (`<header>`, `<nav>`, `<main>`, `<aside>`, `<article>`, `<section>`, `<footer>`).
* **CSS3 Moderno:** Variables CSS (Design Tokens), Flexbox, CSS Grid, Glassmorphism, animaciones y Media Queries.
* **JavaScript (ES6+):** Manipulación del DOM, eventos de scroll, filtrado dinámico en tiempo real y almacenamiento local.
* **Git / GitHub:** Control de versiones y despliegue continuo (CI/CD básico mediante GitHub Pages).

## 🗂️ Estructura del Repositorio

```text
practica-web-estatica-SKZ/
│
├── index.html                  # Landing Page principal y catálogo de integrantes y discografía
├── 02.BangChan.html            # Perfil detallado de Bang Chan (Líder)
├── 03.Leeknow.html             # Perfil detallado de Lee Know
├── 04.Felix.html               # Perfil detallado de Felix
├── 05.Changbin.html            # Perfil detallado de Changbin
├── 06.Han.html                 # Perfil detallado de Han
├── 07.Hyunjin.html             # Perfil detallado de Hyunjin
├── 08.IN.html                  # Perfil detallado de I.N (Maknae)
├── 09.Seungmin.html            # Perfil detallado de Seungmin
├── 10.Formulario.html          # Formulario interactivo de registro en el fandom STAY
├── main.js                     # Scripts de interacción, buscador, lightbox y formulario
├── style.css                   # Hoja de estilos de la página principal
├── styleIntegrantes.css        # Hoja de estilos de los perfiles de integrantes
├── styleformulario.css         # Hoja de estilos del formulario de contacto/registro
├── imágenes/                   # Recursos gráficos, portadas de álbumes y fotografías
└── README.md                   # Documentación técnica del proyecto
```

---
**Desarrollo y Diseño:** Proyecto construido como evidencia práctica de habilidades en diseño Frontend y Fullstack para el ciclo de Desarrollo de Aplicaciones Web (DAW).
