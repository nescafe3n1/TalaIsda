fetch('/api/submissions')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('discovery-container');

    if (data.length === 0) {
      container.innerHTML = '<p>No discoveries submitted yet.</p>';
      return;
    }

    data.forEach(fish => {
      const div = document.createElement('div');
      div.classList.add('fish-card');
      div.innerHTML = `
        <h3>${fish.LocalName || fish.CommonName}</h3>
        <p><strong>Scientific Name:</strong> ${fish.ScientificName || 'Unknown'}</p>
        <p><strong>Region:</strong> ${fish.Region}</p>
        <p><strong>Location:</strong> ${fish.Location}</p>
        <p><strong>Description:</strong> ${fish.Description}</p>
        <p><strong>Submitted by:</strong> ${fish.FirstName} ${fish.LastName}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('discovery-container').innerHTML =
      '<p>Error loading discoveries.</p>';
    console.error(err);
  });
