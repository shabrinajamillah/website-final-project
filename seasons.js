// =========================
// SEASON INFORMATION
// =========================

const seasonInformation = {

    "Season 1": {
        title: "Understanding Seasons",
        description:
            "A Season is a special journey in Sky that introduces new stories, characters, activities, and cosmetics for a limited period.",
        features: [
            "Seasonal Spirits",
            "Seasonal Quests",
            "Unique Cosmetics"
        ]
    },

    "Season 2": {
        title: "Seasonal Stories",
        description:
            "Each Season brings its own theme and story. Players can meet seasonal spirits and learn more about their memories and experiences.",
        features: [
            "Meet Seasonal Spirits",
            "Explore Their Stories",
            "Collect Seasonal Items"
        ]
    },

    "Season 3": {
        title: "Exploring a New Theme",
        description:
            "A new Season can change the way players experience Sky by introducing different activities, environments, stories, and rewards.",
        features: [
            "New Activities",
            "Seasonal Adventures",
            "Special Rewards"
        ]
    },

    "Season 4": {
        title: "A New Seasonal Journey",
        description:
            "Every Season adds another chapter to the world of Sky, giving players new experiences to discover and enjoy.",
        features: [
            "New Seasonal Content",
            "New Stories",
            "Limited-Time Cosmetics"
        ]
    }

};


// =========================
// ELEMENTS
// =========================

const filterButtons = document.querySelectorAll(".season-filter");
const seasonInfo = document.querySelector("#season-info");


// =========================
// SHOW SEASON INFORMATION
// =========================

function showSeasonInfo(seasonName) {

    const season = seasonInformation[seasonName];

    if (!season) {
        return;
    }

    seasonInfo.innerHTML = `

        <p class="section-label">SEASON GUIDE</p>

        <h2>${season.title}</h2>

        <p>${season.description}</p>

        <div class="season-info-features">

            ${season.features.map(function(feature) {

                return `
                    <div class="season-info-feature">
                        <span>✦</span>
                        <p>${feature}</p>
                    </div>
                `;

            }).join("")}

        </div>

    `;

    seasonInfo.classList.add("show");

}


// =========================
// BUTTON EVENTS
// =========================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedSeason = button.dataset.season;

        if (selectedSeason === "all") {

            seasonInfo.innerHTML = `

                <p class="section-label">SEASON GUIDE</p>

                <h2>What Is a Season?</h2>

                <p>
                    A Season is a special limited-time journey in Sky.
                    Seasons introduce new stories, seasonal spirits,
                    quests, activities, and cosmetics.
                </p>

                <div class="season-info-features">

                    <div class="season-info-feature">
                        <span>✦</span>
                        <p>Meet Seasonal Spirits</p>
                    </div>

                    <div class="season-info-feature">
                        <span>✦</span>
                        <p>Complete Seasonal Quests</p>
                    </div>

                    <div class="season-info-feature">
                        <span>✦</span>
                        <p>Collect Special Cosmetics</p>
                    </div>

                </div>

            `;

            seasonInfo.classList.add("show");

            return;
        }

        showSeasonInfo(selectedSeason);

    });

});

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