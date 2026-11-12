/**
 * Stray Kids (SKZ) - Interactive Frontend Scripts
 * Fullstack enhancements: Smooth scroll, album search, image lightbox,
 * back-to-top button, and interactive fan club form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
    initBackToTop();
    initSmoothScroll();
    initAlbumSearch();
    initImageLightbox();
    initFandomForm();
});

/**
 * 1. Back to top button visibility and smooth scroll
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('.flecha-arriba');
    if (!backToTopBtn) return;

    // Smooth scroll to top on click
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toggle button visibility based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/**
 * 2. Smooth scrolling for internal anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#inicio') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * 3. Real-time Album Search / Filter on index.html
 */
function initAlbumSearch() {
    const searchInput = document.getElementById('albumSearchInput');
    const albumTable = document.querySelector('#columnaLateralIzquierda table');
    if (!searchInput || !albumTable) return;

    const rows = albumTable.querySelectorAll('tbody tr, tr');
    // Skip header row
    const dataRows = Array.from(rows).filter(r => !r.querySelector('th'));

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        let matchCount = 0;

        dataRows.forEach(row => {
            const text = row.innerText.toLowerCase();
            if (text.includes(query)) {
                row.style.display = '';
                matchCount++;
            } else {
                row.style.display = 'none';
            }
        });

        // Show/hide empty state
        let noResultsMsg = document.getElementById('albumNoResults');
        if (matchCount === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'albumNoResults';
                noResultsMsg.className = 'album-no-results';
                noResultsMsg.innerText = 'No se encontraron álbumes que coincidan con la búsqueda.';
                albumTable.parentNode.appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    });
}

/**
 * 4. Image Lightbox Modal for Artist Galleries
 */
function initImageLightbox() {
    // Select all artist gallery images
    const galleryImages = document.querySelectorAll('.imagenesArtista, #imagenesArtista, .galeria-img');
    if (galleryImages.length === 0) return;

    // Create modal element if it doesn't exist
    let modal = document.getElementById('skzLightboxModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'skzLightboxModal';
        modal.className = 'skz-lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-backdrop"></div>
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Cerrar vista">&times;</button>
                <img class="lightbox-img" src="" alt="Vista previa ampliada">
                <p class="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.lightbox-close');
        const backdrop = modal.querySelector('.lightbox-backdrop');

        const closeModal = () => modal.classList.remove('active');
        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    const modalImg = modal.querySelector('.lightbox-img');
    const modalCaption = modal.querySelector('.lightbox-caption');

    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.setAttribute('title', 'Haz clic para ampliar la imagen');
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalCaption.textContent = img.alt || 'Stray Kids';
            modal.classList.add('active');
        });
    });
}

/**
 * 5. Interactive Fandom Form Handler (10.Formulario.html)
 */
function initFandomForm() {
    const form = document.getElementById('fandomForm');
    if (!form) return;

    // Populate pre-saved bias if any
    const savedBias = localStorage.getItem('skz_favorite_bias');
    const biasSelect = document.getElementById('biasSelect');
    if (savedBias && biasSelect) {
        biasSelect.value = savedBias;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = form.querySelector('[name="nombre"]')?.value.trim();
        const apellidos = form.querySelector('[name="apellidos"]')?.value.trim();
        const email = form.querySelector('[name="mail"]')?.value.trim();
        const bias = biasSelect ? biasSelect.value : 'OT8';

        if (biasSelect) {
            localStorage.setItem('skz_favorite_bias', bias);
        }

        // Show friendly success confirmation card
        const formContainer = form.closest('.formulario-card') || form.parentElement;
        formContainer.innerHTML = `
            <div class="form-success-container">
                <div class="success-icon">✨</div>
                <h2>¡Bienvenid@ a STAY!</h2>
                <p class="success-message">
                    Hola <strong>${nombre || 'Stay'} ${apellidos || ''}</strong>, tu registro en la comunidad oficial de fans de Stray Kids se ha completado con éxito.
                </p>
                <div class="success-details">
                    <p>📧 Hemos enviado una confirmación a: <strong>${email || 'tu correo'}</strong></p>
                    <p>💖 Integrante favorito: <strong>${bias}</strong></p>
                </div>
                <div class="success-actions">
                    <a href="index.html" class="btn-primary">Volver al Inicio</a>
                    <button onclick="window.location.reload()" class="btn-secondary">Registrar otro miembro</button>
                </div>
            </div>
        `;
    });
}
