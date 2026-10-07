// =========================
// REALM DATA
// =========================

const realms = [

    {
        name: "Isle of Dawn",
        type: "peaceful",
        description: "A calm starting realm where new players learn the basics of Sky.",
        image: "assets/images/isle.jpeg"
    },

    {
        name: "Daylight Prairie",
        type: "peaceful",
        description: "A bright and open realm filled with grasslands and peaceful landscapes.",
        image: "assets/images/prairie.jpeg"
    },

    {
        name: "Hidden Forest",
        type: "challenging",
        description: "A rainy forest realm where players must protect their light.",
        image: "assets/images/forest.jpeg"
    },

    {
        name: "Valley of Triumph",
        type: "challenging",
        description: "A snowy realm known for flying, racing, and beautiful mountain views.",
        image: "assets/images/valley.jpeg"
    },

    {
        name: "Golden Wasteland",
        type: "challenging",
        description: "A dangerous realm filled with ruins, storms, and creatures.",
        image: "assets/images/wasteland.jpeg"
    },

    {
        name: "Vault of Knowledge",
        type: "peaceful",
        description: "A mysterious tower filled with different levels and ancient memories.",
        image: "assets/images/vault.jpeg"
    },

    {
        name: "Eye of Eden",
        type: "challenging",
        description: "The final realm of the main journey and one of the most challenging areas.",
        image: "assets/images/eden.jpeg"
    }

];


// =========================
// DISPLAY REALMS
// =========================

const realmResults = document.querySelector("#realm-results");

function displayRealms(realmList) {

    realmResults.innerHTML = "";

    realmList.forEach(function (realm) {

        realmResults.innerHTML += `
            <article class="realm-filter-card">

                <div class="realm-filter-image">

                    <img 
                        src="${realm.image}" 
                        alt="${realm.name}"
                    >

                </div>

                <div class="realm-filter-content">

                    <span>${realm.type}</span>

                    <h3>${realm.name}</h3>

                    <p>${realm.description}</p>

                </div>

            </article>
        `;

    });

}


// =========================
// SHOW ALL REALMS
// =========================

displayRealms(realms);


// =========================
// FILTER REALMS
// =========================

function filterRealms(category) {

    if (category === "all") {

        displayRealms(realms);

        return;

    }

    const filteredRealms = realms.filter(function (realm) {

        return realm.type === category;

    });

    displayRealms(filteredRealms);

}


// =========================
// FILTER BUTTONS
// =========================

const filterButtons =
    document.querySelectorAll(".realm-filter");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const selectedFilter =
            button.dataset.filter;

        filterRealms(selectedFilter);

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