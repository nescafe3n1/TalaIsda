fetch('JSON/Luzon/ilocos.json')
	.then(res => res.json())
	.then(fishList => {
		const container = document.getElementById('ilocosFishCards');
		fishList.forEach(fish => {
			container.innerHTML += `
				<div class="fish-card">
					<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
					<h3>${fish.name} (${fish.commonName})</h3>
					<h4><i>${fish.scientificName}</i></h4>
					<p>${fish.description}</p>
					<span class="location">Location: ${fish.location}</span>
				</div>
			`;
		});
	});

fetch('JSON/Luzon/central-luzon.json')
	.then(res => res.json())
	.then(fishList => {
		const container = document.getElementById('centralFishCards');
		fishList.forEach(fish => {
			container.innerHTML += `
				<div class="fish-card">
					<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
					<h3>${fish.name} (${fish.commonName})</h3>
					<h4><i>${fish.scientificName}</i></h4>
					<p>${fish.description}</p>
					<span class="location">Location: ${fish.location}</span>
				</div>
			`;
		});
	});

fetch('JSON/Luzon/cagayan.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('cagayanFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Luzon/calabarzon.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('calabarzonFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Luzon/mimaropa.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('mimaropaFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Luzon/bicol.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('bicolFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Luzon/ncr.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('ncrFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Luzon/car.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('carFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Visayas/westernvisayas.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('westernFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Visayas/centralvisayas.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('centralVisayasFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Visayas/easternvisayas.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('easternFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Mindanao/zamboanga.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('zamboangaFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Mindanao/northernmindanao.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('northernFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Mindanao/davao.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('davaoFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Mindanao/soccsksargen.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('soccskargenFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Mindanao/caraga.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('caragaFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});

fetch('JSON/Mindanao/barmm.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('barmmFishCards');
	fishList.forEach(fish => {
		container.innerHTML += `
			<div class="fish-card">
				<img src="${fish.image}" alt="${fish.name} (${fish.commonName})">
				<h3>${fish.name} (${fish.commonName})</h3>
				<h4><i>${fish.scientificName}</i></h4>
				<p>${fish.description}</p>
				<span class="location">Location: ${fish.location}</span>
			</div>
		`;
	});
});




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
			const region = card.closest('.region-section');
			if (region) region.style.display = 'block';
		} else {
			card.style.display = 'none';
		}
	});
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

