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