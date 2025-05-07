// Search Function
const searchInput = document.getElementById('searchInput');
        
searchInput.addEventListener('keyup', () => {
	const query = searchInput.value.trim().toLowerCase();
	const regionSections = document.querySelectorAll('.region-section');
	const existingResults = document.getElementById('search-results');

	if (existingResults) existingResults.remove();

	if (query === '') {
		regionSections.forEach(section => section.style.display = 'block');
		return;
	}

	regionSections.forEach(section => section.style.display = 'none');

	const allFishCards = document.querySelectorAll('.fish-card');
	const matched = [];

	allFishCards.forEach(card => {
		const name = card.querySelector('h3').textContent.toLowerCase();
		const location = card.querySelector('.location')?.textContent.toLowerCase() || '';
		if (name.includes(query) || location.includes(query)) {
			matched.push(card.cloneNode(true));
		}
	});

	const resultsSection = document.createElement('div');
	resultsSection.id = 'search-results';
	resultsSection.className = 'region-section';

	const heading = document.createElement('h3');
	heading.textContent = 'Search Results';
	resultsSection.appendChild(heading);

	const list = document.createElement('div');
	list.className = 'fish-list';

	if (matched.length > 0) {
		matched.forEach(card => list.appendChild(card));
		} else {
				list.innerHTML = `
				<div style="display: block;">
						<p>No matching fish found.</p>
						<p>Want to add your discovery? <a href="discovery.html" style="color: #0077b6; font-weight: bold;">Go to contribution page.</a></p>
				</div>
				`;
		}

	resultsSection.appendChild(list);
	document.querySelector('.search-container').after(resultsSection);
});

function scrollFish(button, direction) {
  const container = button.closest('.carousel-container');
  const track = container.querySelector('.carousel-track');
  const card = track.querySelector('.fish-card');
  const cardWidth = card.offsetWidth + 30; 
  track.scrollLeft += direction * cardWidth * 3; 
}

// Show button on scroll
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




   // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.cldocument.addEventListener('DOMContentLoaded', function() {
 assList.toggle('active');
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

// Handle file upload display
document.getElementById('photos').addEventListener('change', function(e) {
					const fileName = e.target.files.length > 0 ? 
									(e.target.files.length > 1 ? e.target.files.length + ' files selected' : e.target.files[0].name) : 
									'No file chosen';
					document.querySelector('.file-name').textContent = fileName;
	});
	
	// Form submission
document.getElementById('discoveryForm').addEventListener('submit', function(e) {
	e.preventDefault();
	
	// Here you would normally send the form data to a server
	// For this example, we'll just show an alert
	alert('Thank you for your submission! Our team will review your discovery and get back to you soon.');
	this.reset();
	document.querySelector('.file-name').textContent = 'No file chosen';
});




