const apiKey = '69fa8f1ad2224307933822440d1bf3ce';
const url = 'https://www.football-data.org'; // Badilisha na URL ya API yako

fetch(url, {
  method: 'GET',
  headers: {
    'X-API-Key': apiKey
  }
})
.then(response => response.json())
.then(data => {
  const container = document.getElementById('sports');
  container.innerHTML = '<h2>Live Sports Today</h2>';

  data.matches.forEach(match => {
    const matchBox = `
      <div class="match">
        <p>match.homeTeam vs{match.awayTeam}</p>
        <p>match.status -{match.time}</p>
      </div>`;
    container.innerHTML += matchBox;
  });
})
.catch(error => {
  console.error('Error fetching matches:', error);
})