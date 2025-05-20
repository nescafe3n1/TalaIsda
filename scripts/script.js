document.addEventListener('DOMContentLoaded', function() {
	// Mobile menu toggle
	const menuToggle = document.querySelector('.menu-toggle');
	const navMenu = document.querySelector('.nav-menu');
	
	menuToggle.addEventListener('click', function() {
			navMenu.classList.toggle('active');
	});
	
	// Handle dropdowns in mobile view
	const dropdowns = document.querySelectorAll('.dropdown');
	
	dropdowns.forEach(dropdown => {
	const dropbtn = dropdown.querySelector('.dropbtn');
			
	dropbtn.addEventListener('click', function(e) {
		if (window.innerWidth <= 768) {
			e.preventDefault();
			dropdown.classList.toggle('active');
						
			// Close other open dropdowns
			dropdowns.forEach(otherDropdown => {
				if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
					otherDropdown.classList.remove('active');
				}
			});
		}
	});
});
	
	// Close menu when clicking outside
document.addEventListener('click', function(e) {
	if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
		navMenu.classList.remove('active');
	}
});
	
	// Resize handler
window.addEventListener('resize', function() {
	if (window.innerWidth > 768) {
		navMenu.classList.remove('active');
			dropdowns.forEach(dropdown => {
				dropdown.classList.remove('active');
			});
		}
	});
});

// Navbar functionality
function updateActiveNav() {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Reset all active classes
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
      if (dropdown && !isRegionLink) {
        const dropbtn = dropdown.querySelector('.dropbtn');
        if (dropbtn) dropbtn.classList.add('active');
      }
    }
  });

  const isAtRoot = currentPath === '/' || currentPath.endsWith('index.html');
  if (isAtRoot) {
    const homeLink = document.querySelector('.nav-menu a[href*="index.html"]');
    if (homeLink) homeLink.classList.add('active');
    document.querySelectorAll('.dropbtn').forEach(btn => btn.classList.remove('active'));
  }
}

updateActiveNav();

window.addEventListener('hashchange', updateActiveNav);


if (!activeSet && (currentPath === '/' || currentPath === '/pages/index.html')) {
  const homeLink = document.querySelector('.nav-menu a[href="/pages/index.html"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }
}

const searchInput = document.getElementById('searchInput');

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
		const matchText = name + ' ' + location;

		if (matchText.includes(query)) {
			card.style.display = 'block';

			// Also show the region this card belongs to
			const region = card.closest('.region-section');
			if (region) region.style.display = 'block';
		} else {
			card.style.display = 'none';
		}
	});
});

// Side scroll function
function scrollFish(button, direction) {
  const container = button.closest('.carousel-container');
  const track = container.querySelector('.carousel-track');
  const card = track.querySelector('.fish-card');
  const cardWidth = card.offsetWidth + 30;
  track.scrollLeft += direction * cardWidth * 4;
}

// Back to Top button function
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  btn.classList.toggle("show", window.scrollY > 300);
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('photos').addEventListener('change', function (e) {
  const fileName = e.target.files.length > 0
    ? (e.target.files.length > 1
      ? `${e.target.files.length} files selected`
      : e.target.files[0].name)
    : 'No file chosen';

  document.querySelector('.file-name').textContent = fileName;
});

document.getElementById('discoveryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  alert('Thank you for your submission! Our team will review your discovery and get back to you soon.');
  this.reset();
  document.querySelector('.file-name').textContent = 'No file chosen';
});

