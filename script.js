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
        <p>
          Want to add your discovery?
          <a href="discovery.html" style="color: #0077b6; font-weight: bold;">Go to contribution page.</a>
        </p>
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
