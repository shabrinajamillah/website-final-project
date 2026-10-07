const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// =========================
// BACK TO TOP BUTTON
// =========================

const backToTop = document.createElement("button");

backToTop.textContent = "↑";

backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);


// Show button when scrolling down

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


// Scroll back to the top when clicked

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
 
// ==========================================
// 2. CALCULATE & SHOW WEBSITE VISITORS
// ==========================================
const visitorElement = document.getElementById("visitorCount");

if (visitorElement) {
    let visitorCount = localStorage.getItem("website_visitor_count");

    if (!visitorCount) {
        visitorCount = 1;
    } else {
        visitorCount = parseInt(visitorCount) + 1;
    }

    localStorage.setItem("website_visitor_count", visitorCount);
    visitorElement.innerText = visitorCount;
}

// ==========================================
// 3. CONTACT FORM INPUT TO JS VARIABLES
// ==========================================
const contactForm = document.getElementById("contactForm");
let contactDataStorage = {}; // Variabel penampung data

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        contactDataStorage = {
            name: document.getElementById("userName").value,
            email: document.getElementById("userEmail").value,
            message: document.getElementById("userMessage").value,
            submittedAt: new Date().toISOString()
        };

        console.log("Form Input Stored in Variable:", contactDataStorage);
        alert(`Thank you, ${contactDataStorage.name}! Your message has been saved.`);
        contactForm.reset();
    });
}

// ==========================================
// 4. CAROUSEL SLIDER
// ==========================================
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlideIndex = 0;

if (slides.length > 0) {
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        });
    }
}
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

if (burgerMenu && navLinks) {
    burgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
}


// SIMPAN SEMUA TERJEMAHAN DI SINI
const translations = {
    en: {
        // --- NAVBAR (Sama untuk semua halaman) ---
        navHome: "Home",
        navRealms: "Realms",
        navCosmetics: "Cosmetics",
        navEvents: "Events",
        navGuide: "Guide",
        
        // --- INDEX.HTML ---
        heroTitle: "ENTER THE WORLD OF SKY",
        heroDesc: "Explore magical realms and meet friends.",

        // --- ACTIVITIES.HTML ---
        activitiesTitle: "Daily Activities & Quests",
        activitiesDesc: "Complete daily quests to earn candles.",

        // --- COSMETICS.HTML ---
        cosmeticsTitle: "Sky Cosmetics Collection",
        cosmeticsDesc: "Check out all capes, hairs, and masks.",

        // --- EVENTS.HTML ---
        eventsTitle: "Special Events",

        // --- FOOTER & VISITOR COUNT (Di semua halaman) ---
        visitorText: "Total Visitors:",
        footerRights: "All rights reserved."
    },
    id: {
        // --- NAVBAR ---
        navHome: "Beranda",
        navRealms: "Alam (Realms)",
        navCosmetics: "Kosmetik",
        navEvents: "Acara (Events)",
        navGuide: "Panduan",

        // --- INDEX.HTML ---
        heroTitle: "JELAJAHI DUNIA SKY",
        heroDesc: "Jelajahi alam ajaib dan temukan teman baru.",

        // --- ACTIVITIES.HTML ---
        activitiesTitle: "Aktivitas & Misi Harian",
        activitiesDesc: "Selesaikan misi harian untuk mendapatkan lilin.",

        // --- COSMETICS.HTML ---
        cosmeticsTitle: "Koleksi Kosmetik Sky",
        cosmeticsDesc: "Lihat semua jubah, rambut, dan topeng.",

        // --- EVENTS.HTML ---
        eventsTitle: "Acara Spesial",

        // --- FOOTER & VISITOR COUNT ---
        visitorText: "Total Pengunjung:",
        footerRights: "Semua hak dilindungi."
    }
};

// LOGIKA GANTI BAHASA (Otomatis deteksi atribut data-i18n)
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
    localStorage.setItem('preferred_language', lang);
}

// Inisialisasi saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const savedLang = localStorage.getItem('preferred_language') || 'en';

    if (languageSelect) {
        languageSelect.value = savedLang;
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    changeLanguage(savedLang);
});

// ==========================================
// FITUR DARK MODE & LIGHT MODE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("themeToggle");
    
    // Cek tema yang pernah disimpan pengguna di browser
    const currentTheme = localStorage.getItem("theme") || "light";

    // Pasang tema saat pertama kali halaman dibuka
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    if (themeToggleBtn) {
        // Atur teks tombol sesuai tema aktif
        themeToggleBtn.innerText = currentTheme === "dark" ? "☀️ Light" : "🌙 Dark";

        // Fungsi saat tombol diklik
        themeToggleBtn.addEventListener("click", () => {
            let activeTheme = document.documentElement.getAttribute("data-theme");

            if (activeTheme === "dark") {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
                themeToggleBtn.innerText = "🌙 Dark";
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                themeToggleBtn.innerText = "☀️ Light";
            }
        });
    }
});