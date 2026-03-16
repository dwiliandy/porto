// Translations Dictionary
const translations = {
    en: {
        nav_about: "About",
        nav_tech_stack: "Tech Stack",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_engineering: "Engineering",
        nav_contact: "Contact",
        nav_about_mobile: "About",
        nav_tech_stack_mobile: "Tech Stack",
        nav_experience_mobile: "Experience",
        nav_projects_mobile: "Projects",
        nav_engineering_mobile: "Engineering",
        nav_contact_mobile: "Contact",
        hero_hello: "Hi, my name is",
        hero_title: "Backend Developer",
        hero_desc: "Backend Developer with 4+ years experience building database-driven applications and APIs.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        about_title: "About Me",
        about_desc: "Backend developer with experience in Laravel and Ruby on Rails. Focused on building scalable backend systems, designing efficient databases, and creating reliable APIs.",
        projects_title: "Projects",
        experience_title: "Experience",
        experience_resp: "Responsibilities:",
        experience_resp_1: "Develop backend services and REST APIs",
        experience_resp_2: "Design and optimize database structures",
        experience_resp_3: "Implement authentication and authorization",
        experience_resp_4: "Improve application performance",
        experience_resp_5: "Debug and maintain existing systems",
        engineering_title: "Engineering Experience",
        engineering_desc: "Experience in building backend systems, automation tools, and managing application deployment.",
        github_desc: "More projects available on my GitHub profile.",
        github_btn: "GitHub Profile",
        contact_subtitle: "What's Next?",
        contact_title: "Get In Touch",
        contact_phone: "Phone",
        contact_btn: "Send Email",
        footer_copy: "Copyright"
    },
    id: {
        nav_about: "Tentang",
        nav_tech_stack: "Tech Stack",
        nav_experience: "Pengalaman",
        nav_projects: "Proyek",
        nav_engineering: "Engineering",
        nav_contact: "Kontak",
        nav_about_mobile: "Tentang",
        nav_tech_stack_mobile: "Tech Stack",
        nav_experience_mobile: "Pengalaman",
        nav_projects_mobile: "Proyek",
        nav_engineering_mobile: "Engineering",
        nav_contact_mobile: "Kontak",
        hero_hello: "Halo, nama saya",
        hero_title: "Backend Developer",
        hero_desc: "Backend Developer dengan spesialisasi lebih dari 4 tahun membangun aplikasi dan API berbasis database.",
        hero_btn_projects: "Lihat Proyek",
        hero_btn_contact: "Hubungi Saya",
        about_title: "Tentang Saya",
        about_desc: "Backend developer dengan pengalaman di Laravel dan Ruby on Rails. Berfokus pada pembangunan sistem backend yang skalabel, desain optimisasi database yang efisien, dan pembuatan API yang andal.",
        projects_title: "Proyek",
        experience_title: "Pengalaman",
        experience_resp: "Tanggung Jawab:",
        experience_resp_1: "Mengembangkan layanan backend dan REST API",
        experience_resp_2: "Mendesain dan mengoptimalkan struktur database",
        experience_resp_3: "Mengimplementasikan proses autentikasi dan otorisasi",
        experience_resp_4: "Meningkatkan performa aplikasi",
        experience_resp_5: "Proses debug dan memelihara sistem yang ada",
        engineering_title: "Pengalaman Engineering",
        engineering_desc: "Pengalaman dalam membangun sistem backend, fitur otomatisasi, dan mengatur jalannya aplikasi",
        github_desc: "Proyek lainnya tersedia di profil GitHub saya.",
        github_btn: "Profil GitHub",
        contact_subtitle: "Selanjutnya?",
        contact_title: "Hubungi Saya",
        contact_phone: "Telepon",
        contact_btn: "Kirim Email",
        footer_copy: "Hak Cipta"
    }
};

let currentLang = 'en';

// Language Toggle Logic
const langToggleBtn = document.getElementById('lang-toggle');
const langToggleMobileBtn = document.getElementById('lang-toggle-mobile');

function updateLanguage(lang) {
    currentLang = lang;
    
    // Update simple text translations based on data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update buttons UI with flag and text to show ACTIVE language
    const activeText = lang === 'en' ? 'EN' : 'ID';
    const flagSrc = lang === 'en' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/id.png';
    const flagAlt = lang === 'en' ? 'EN Flag' : 'ID Flag';
    
    if(langToggleBtn) {
        langToggleBtn.querySelector('.lang-text').textContent = activeText;
        langToggleBtn.querySelector('.lang-flag').src = flagSrc;
        langToggleBtn.querySelector('.lang-flag').alt = flagAlt;
    }
    if(langToggleMobileBtn) {
        langToggleMobileBtn.querySelector('.lang-text').textContent = activeText;
        langToggleMobileBtn.querySelector('.lang-flag').src = flagSrc;
        langToggleMobileBtn.querySelector('.lang-flag').alt = flagAlt;
    }

    // Update Projects desc and role display directly on the cards based on currentLang
    document.querySelectorAll('.project-card').forEach(card => {
        const descElement = card.querySelector('.project-desc');
        if(descElement) {
            descElement.textContent = lang === 'id' && card.hasAttribute('data-id-desc') 
                ? card.getAttribute('data-id-desc') 
                : card.getAttribute('data-desc');
        }
    });
}

function toggleLangEvent() {
    const nextLang = currentLang === 'en' ? 'id' : 'en';
    updateLanguage(nextLang);
}

if(langToggleBtn) langToggleBtn.addEventListener('click', toggleLangEvent);
if(langToggleMobileBtn) langToggleMobileBtn.addEventListener('click', toggleLangEvent);
