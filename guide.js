const topBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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