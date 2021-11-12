function apiCall() {
  let randomNum = Math.floor(Math.random() * episodes.length);

  let randomEpisode = episodes[randomNum];
  $.getJSON(
    'http://www.omdbapi.com/?i=' + encodeURI(randomEpisode) + '&apikey=7bfb5754'
  ).then(function (response) {
    let printSeason = document.getElementById('season');
    let printTitle = document.getElementById('title');
    let printEpisode = document.getElementById('episode');
    let printPlot = document.getElementById('plot');
    $('#poster').attr('src', response.Poster);
    printTitle.innerHTML = `Title: ${response.Title}`;
    printSeason.innerHTML = `Season: ${response.Season}`;
    printEpisode.innerHTML = `Episode: ${response.Episode}`;
    printPlot.innerHTML = `${response.Plot}`;
  });
}

$('button').click(function () {
  apiCall();
});
