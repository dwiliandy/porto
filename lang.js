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
        hero_hello: "> whoami",
        hero_title: "< Backend Developer />",
        hero_desc: "I turn complex systems into scalable backend services with Laravel & Ruby on Rails. Driven by clean architecture and optimized databases.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        about_title: "About Me",
        about_desc: "As a backend developer, my passion lies in solving real-world problems through code. I specialize in Laravel and Rails, focusing on building high-performance APIs and designing efficient databases that scale seamlessly.",
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
        contact_subtitle: "Ready to collaborate?",
        contact_title: "Let's Build Something Great",
        contact_phone: "Phone",
        contact_btn: "Say Hello",
        modal_btn_visit: "Visit Website",
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
        hero_hello: "> whoami",
        hero_title: "< Backend Developer />",
        hero_desc: "Saya menyulap sistem kompleks menjadi layanan backend yang skalabel dengan Laravel & Ruby on Rails. Berfokus pada arsitektur bersih dan optimasi database.",
        hero_btn_projects: "Lihat Proyek",
        hero_btn_contact: "Hubungi Saya",
        about_title: "Tentang Saya",
        about_desc: "Sebagai backend developer, passion saya adalah menyelesaikan masalah dunia nyata melalui kode. Spesialisasi saya di Laravel dan Rails, berfokus membangun API berkinerja tinggi serta merancang database efisien yang mudah diskalakan.",
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
        contact_subtitle: "Siap berkolaborasi?",
        contact_title: "Mari Bangun Sesuatu yang Luar Biasa",
        contact_phone: "Telepon",
        contact_btn: "Kirim Pesan",
        modal_btn_visit: "Kunjungi Situs",
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
