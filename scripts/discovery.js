document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/fish')
    .then(res => res.json())
    .then(fishList => {
      const container = document.getElementById('discoveryFishCards');
      fishList.forEach(fish => {
        container.innerHTML += `
          <div class="fish-card">
            <img src="${fish.ImagePath}" alt="${fish.CommonName} (${fish.ScientificName})">
            <h3>${fish.CommonName}</h3>
            <h4><i>${fish.ScientificName}</i></h4>
            <p>${fish.Description}</p>
            <span class="location">Location: ${fish.Location} (${fish.RegionName})</span>
          <span><strong>Contributed by:</strong> ${fish.FirstName} ${fish.LastName}</span>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error('Error fetching fish:', error);
    });
});
