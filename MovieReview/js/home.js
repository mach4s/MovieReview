$(document).ready(() => {
    // let searchText = $('#searchText').val();
    getMovies("Malificent");
});

function getMovies(searchText){
  axios.get("http://www.omdbapi.com/?apikey=6c1b77b8&s=" + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

$(document).ready(() => {
    // let searchText = $('#searchText').val();
    getMovies2("Harry Potter and the Forbidden Journey");
});

function getMovies2(searchText){
  axios.get("http://www.omdbapi.com/?apikey=6c1b77b8&s=" + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $('#movies2').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

$(document).ready(() => {
    // let searchText = $('#searchText').val();
    getMovies3("Crazy Rich Asians");
});

function getMovies3(searchText){
  axios.get("http://www.omdbapi.com/?apikey=6c1b77b8&s=" + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $('#movies3').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

$(document).ready(() => {
    // let searchText = $('#searchText').val();
    getMovies4("Wreck-it Ralph: Ralph Breaks VR");
});

function getMovies4(searchText){
  axios.get("http://www.omdbapi.com/?apikey=6c1b77b8&s=" + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $('#movies4').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}



function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'singlemovie.html'; //chamge page to movie.html
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com/?apikey=6c1b77b8&i='+movieId+'&plot=full')
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">

          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="search.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;


      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
