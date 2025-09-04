const apiKey = '69fa8f1ad2224307933822440d1bf3ce';const url = 'https://www.football-data.org/';

fetch(url, {
  method: 'GET',
  headers: {
    'x-apisports-key': apiKey
  }
})
.then(response => response.json())
.then(data => {
  const container = document.getElementById('matches');
  container.innerHTML = '';

  if (data.response.length === 0) {
    container.innerHTML = '<p>No live matches right now.</p>';
    return;
  }

  data.response.forEach(match => {
    const div = document.createElement('div');
    div.className = 'match';
    div.innerHTML = `
      <strong>match.teams.home.name vs{match.teams.away.name}</strong><br>
      Score: match.goals.home -{match.goals.away}<br>
      Time: ${match.fixture.status.elapsed}' min
    `;
    container.appendChild(div);
  });
})
.catch(error => {
  console.error(error);
  document.getElementById('matches').innerHTML = 'Error fetching matches.';
})