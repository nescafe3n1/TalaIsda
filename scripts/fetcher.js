fetch('/JSON/Luzon/ilocos.json')
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

fetch('/JSON/Luzon/central-luzon.json')
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

fetch('/JSON/Luzon/cagayan.json')
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

fetch('/JSON/Luzon/calabarzon.json')
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

fetch('/JSON/Luzon/mimaropa.json')
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

fetch('/JSON/Luzon/bicol.json')
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

fetch('/JSON/Luzon/ncr.json')
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

fetch('/JSON/Luzon/car.json')
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

fetch('/JSON/Visayas/westernvisayas.json')
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

fetch('/JSON/Visayas/centralvisayas.json')
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

fetch('/JSON/Visayas/easternvisayas.json')
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

fetch('/JSON/Mindanao/zamboanga.json')
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

fetch('/JSON/Mindanao/northernmindanao.json')
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

fetch('/JSON/Mindanao/davao.json')
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

fetch('/JSON/Mindanao/soccsksargen.json')
.then(res => res.json())
.then(fishList => {
	const container = document.getElementById('soccsksargenFishCards');
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

fetch('/JSON/Mindanao/caraga.json')
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

fetch('/JSON/Mindanao/barmm.json')
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



