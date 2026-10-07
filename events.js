// =========================
// EVENT INFORMATION
// =========================

const eventInformation = {

    fortune: {
        title: "Days of Fortune",
        type: "CELEBRATION",
        description:
            "Days of Fortune is a festive celebration that brings a joyful atmosphere, special decorations, and limited-time activities to Sky.",
        activities: [
            "Enjoy festive decorations",
            "Explore special activities",
            "Collect event rewards"
        ]
    },

    love: {
        title: "Days of Love",
        type: "CELEBRATION",
        description:
            "Days of Love focuses on friendship, kindness, and togetherness, creating a warm atmosphere for players to enjoy with others.",
        activities: [
            "Spend time with friends",
            "Enjoy the special atmosphere",
            "Collect event items"
        ]
    },

    nature: {
        title: "Days of Nature",
        type: "ENVIRONMENT",
        description:
            "Days of Nature highlights the beauty of nature in Sky and encourages players to appreciate the environment around them.",
        activities: [
            "Explore nature-themed areas",
            "Enjoy environmental changes",
            "Participate in special activities"
        ]
    },

    color: {
        title: "Days of Color",
        type: "CELEBRATION",
        description:
            "Days of Color brings bright colors and cheerful decorations to Sky, creating a colorful experience for players.",
        activities: [
            "Explore colorful areas",
            "Enjoy special decorations",
            "Collect event rewards"
        ]
    },

    mischief: {
        title: "Days of Mischief",
        type: "SPECIAL EVENT",
        description:
            "Days of Mischief introduces a playful and unusual atmosphere with themed activities and a different style of celebration.",
        activities: [
            "Explore unusual activities",
            "Experience the playful theme",
            "Discover special event content"
        ]
    },

    moonlight: {
        title: "Days of Moonlight",
        type: "SPECIAL EVENT",
        description:
            "Days of Moonlight creates a peaceful moonlit atmosphere where players can enjoy a relaxing and beautiful Sky experience.",
        activities: [
            "Enjoy the moonlit atmosphere",
            "Explore special areas",
            "Experience seasonal moments"
        ]
    }

};


// =========================
// ELEMENTS
// =========================

const eventCards = document.querySelectorAll(".featured-event-card");
const eventDetails = document.querySelector("#event-details");


// =========================
// SHOW EVENT DETAILS
// =========================

function showEventDetails(eventName) {

    const event = eventInformation[eventName];

    if (!event) {
        return;
    }

    eventDetails.innerHTML = `

        <p class="section-label">${event.type}</p>

        <h2>${event.title}</h2>

        <p class="event-details-description">
            ${event.description}
        </p>

        <div class="event-detail-list">

            ${event.activities.map(function(activity) {

                return `
                    <div class="event-detail-item">
                        <span>✦</span>
                        <p>${activity}</p>
                    </div>
                `;

            }).join("")}

        </div>

    `;

    eventDetails.classList.add("active");

    eventDetails.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// =========================
// CARD CLICK
// =========================

eventCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const selectedEvent = card.dataset.event;

        showEventDetails(selectedEvent);

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