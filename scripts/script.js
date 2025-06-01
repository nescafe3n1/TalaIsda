const btn = document.getElementById("backToTop");
const searchInput = document.getElementById('searchInput');
const darkModeToggle = document.getElementById('darkModeToggle'); // This is the <input type="checkbox"> now

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleResize);
window.addEventListener("hashchange", updateActiveNav);

document.addEventListener('DOMContentLoaded', function () {
    setupMobileMenu();
    setupDropdowns();
    setupClickOutsideNav();
    updateActiveNav(); // run on page load
    setupSearch();
    setupFormUpload();
    setupDiscoveryForm();
    initializeDarkMode(); // Call the new consolidated dark mode setup
});


// 🔼 Back to Top
function handleScroll() {
    if (btn) {
        btn.classList.toggle("show", window.scrollY > 300);
    }
}

btn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// 📱 Mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// 🔽 Handle dropdowns
function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        dropbtn?.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');

                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown && other.classList.contains('active')) {
                        other.classList.remove('active');
                    }
                });
            }
        });
    });
}

// 📉 Close mobile nav when clicking outside
function setupClickOutsideNav() {
    document.addEventListener('click', function (e) {
        const navMenu = document.querySelector('.nav-menu');
        // Check if the click is outside the nav and not the menu toggle itself
        if (!e.target.closest('nav') && !e.target.closest('.menu-toggle') && navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
}

// 📏 Close nav on resize
function handleResize() {
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (window.innerWidth > 768) {
        navMenu?.classList.remove('active');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
}

// ⭐ Navbar active link handling
function updateActiveNav() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.dropbtn').forEach(btn => btn.classList.remove('active'));

    navLinks.forEach(link => {
        const linkUrl = new URL(link.href);
        const linkPath = linkUrl.pathname;
        const linkHash = linkUrl.hash;
        const isExactPage = currentPath === linkPath && (!linkHash || currentHash === linkHash);

        if (isExactPage) {
            link.classList.add('active');

            const isRegionLink = !!link.hash;
            const dropdown = link.closest('.dropdown');
            if (dropdown) { // Always add active to dropdown if any child link is active
                const dropbtn = dropdown.querySelector('.dropbtn');
                dropbtn?.classList.add('active');
            }
        }
    });

    const isAtRoot = currentPath === '/' || currentPath.endsWith('index.html');
    if (isAtRoot) {
        const homeLink = document.querySelector('.nav-menu a[href*="index.html"]');
        homeLink?.classList.add('active');
        // Ensure dropdown button is not active if home link is active
        document.querySelectorAll('.dropbtn').forEach(btn => btn.classList.remove('active'));
    }
}

// 🔍 Search filter for fish cards
function setupSearch() {
    if (!searchInput) return;

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.trim().toLowerCase();
        const regionSections = document.querySelectorAll('.region-section');
        const allFishCards = document.querySelectorAll('.fish-card');

        if (query === '') {
            regionSections.forEach(section => section.style.display = 'block');
            allFishCards.forEach(card => card.style.display = 'block');
            return;
        }

        regionSections.forEach(section => section.style.display = 'none');

        allFishCards.forEach(card => {
            const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const location = card.querySelector('.location')?.textContent.toLowerCase() || '';
            const sciName = card.querySelector('h4 i')?.textContent.toLowerCase() || '';

            const matchText = `${name} ${location} ${sciName}`;

            if (matchText.includes(query)) {
                card.style.display = 'block';
                const region = card.closest('.region-section');
                if (region) region.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}


// ⬅️ Carousel scrolling
function scrollFish(button, direction) {
    const container = button.closest('.carousel-container');
    const track = container.querySelector('.carousel-track');
    const card = track.querySelector('.fish-card');
    const cardWidth = card.offsetWidth + 30;
    track.scrollLeft += direction * cardWidth * 4;
}

// 📁 Show selected file name
function setupFormUpload() {
    const photoInput = document.getElementById('photos');
    photoInput?.addEventListener('change', function (e) {
        const fileName = e.target.files.length > 0
            ? (e.target.files.length > 1
                ? `${e.target.files.length} files selected`
                : e.target.files[0].name)
            : 'No file chosen';
        document.querySelector('.file-name').textContent = fileName;
    });
}

// ✅ Handle form submission
function setupDiscoveryForm() {
    const form = document.getElementById('discoveryForm');
    form?.addEventListener('submit', function (e) {
        //e.preventDefault();
        //alert('Thank you for your submission! Our team will review your discovery and get back to you soon.');
        //form.reset();
        //document.querySelector('.file-name').textContent = 'No file chosen';
    });
}

// 🌙 Dark Mode Initialization and Toggle Logic (Consolidated)
function initializeDarkMode() {
    const body = document.body;

    // Function to apply the theme (adds/removes class, sets checkbox state, saves to localStorage)
    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            if (darkModeToggle) { // Ensure the toggle element exists on this page
                darkModeToggle.checked = true; // Set the switch to 'on' position
            }
        } else {
            body.classList.remove('dark-mode');
            if (darkModeToggle) { // Ensure the toggle element exists on this page
                darkModeToggle.checked = false; // Set the switch to 'off' position
            }
        }
        localStorage.setItem('theme', theme); // Always save the current theme
    };

    // Apply dark mode preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Default to light mode if no preference found and save it
        applyTheme('light-mode');
    }

    // Add event listener to the switch if it exists
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => { // Use 'change' event for checkboxes
            if (darkModeToggle.checked) {
                applyTheme('dark-mode');
            } else {
                applyTheme('light-mode');
            }
        });
    }
}


// Water Cursor Effect typshi
document.addEventListener("mousemove", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000);
});