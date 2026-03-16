// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll animations with IntersectionObserver
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Active nav link indicator based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    // Default to the first link being active when at the top
    if (window.scrollY === 0) {
        current = 'home';
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
    }

    navLinks.forEach(link => {
        // Reset all links
        link.classList.remove('text-accent');
        const span = link.querySelector('span');
        if (span) span.classList.remove('text-accent');
        
        // Highlight active link
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('text-accent');
            if (span) span.classList.add('text-accent');
        }
    });
});

// Project Modal Logic
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalBackdrop = document.getElementById('modal-backdrop');
const closeModalBtn = document.getElementById('close-modal');
const projectCards = document.querySelectorAll('.project-card');

const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalRole = document.getElementById('modal-role');
const modalDesc = document.getElementById('modal-desc');
const modalTech = document.getElementById('modal-tech');
const modalUrlBtn = document.getElementById('modal-url-btn');

function openModal(card) {
    const title = card.getAttribute('data-title');
    const image = card.getAttribute('data-image');
    const techs = card.getAttribute('data-tech').split(',');
    
    // Check current language for Role and Description
    const desc = currentLang === 'id' && card.hasAttribute('data-id-desc') ? card.getAttribute('data-id-desc') : card.getAttribute('data-desc');
    const role = currentLang === 'id' && card.hasAttribute('data-id-role') ? card.getAttribute('data-id-role') : card.getAttribute('data-role');

    modalTitle.textContent = title;
    modalRole.textContent = role ? role : ''; 
    modalDesc.textContent = desc;
    modalImage.src = image;
    
    // Toggle Web URL Button
    const url = card.getAttribute('data-url');
    if (url) {
        modalUrlBtn.href = url;
        modalUrlBtn.classList.remove('hidden');
        modalUrlBtn.classList.add('inline-flex');
    } else {
        modalUrlBtn.classList.add('hidden');
        modalUrlBtn.classList.remove('inline-flex');
    }
    
    // Clear previous tech badges
    modalTech.innerHTML = '';
    
    // Add new tech badges
    techs.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-badge px-3 py-1.5 rounded text-sm font-mono text-textPrimary hover:text-accent border border-gray-700/50 bg-bgDarker/50 shadow-sm transition-colors cursor-default';
        span.textContent = tech.trim();
        modalTech.appendChild(span);
    });
    
    // Create new icons
    lucide.createIcons();
    
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    
    // Restore background scrolling
    document.body.style.overflow = '';
}

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        openModal(card);
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
        closeModal();
    }
});
