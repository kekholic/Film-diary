const URL = 'http://localhost:3000';

// search by name func
async function handleSearch(e) {
  e.preventDefault();
  const { searchInput: { value: text }, method } = e.target;
  const movieList = await fetch(`${URL}/api/search/${text}`);
  const result = await movieList.json();
  const body = JSON.stringify({ result });

  const showMovieList = await fetch(`${URL}/search/`, {
    method,
    body,
    headers: { 'Content-Type': 'application/json' },
  });

  const resultList = await showMovieList.json();
  const filmList = document.querySelector('#filmList');
  filmList.innerHTML = resultList;
}

// addSkip func
async function cardAddSkip(e) {
  e.preventDefault();
  // add movie to favourits
  if (e.target.classList.contains('btn-success')) {
    const method = 'POST';
    const Year = document.querySelector('#Year').innerHTML;
    const Title = document.querySelector('#Title').innerHTML;
    const Rated = document.querySelector('#Rated').innerHTML;
    const Released = document.querySelector('#Released').innerHTML;
    const Runtime = document.querySelector('#Runtime').innerHTML;
    const Genre = document.querySelector('#Genre').innerHTML;
    const Director = document.querySelector('#Director').innerHTML;
    const Plot = document.querySelector('#Plot').innerHTML;
    const Poster = document.querySelector('#Poster').src;
    const imdbRating = document.querySelector('#Imdb').innerHTML;

    const Type = document.querySelector('#Type').innerHTML;
    const Awards = document.querySelector('#Awards').innerHTML;
    const Language = document.querySelector('#Language').innerHTML;
    const Writer = document.querySelector('#Writer').innerHTML;
    const Actors = document.querySelector('#Actors').innerHTML;

    // const imdbID = document.querySelector('')
    const body = JSON.stringify({
      Year, Title, Rated, Released, Runtime, Genre, Director, Plot, Poster, imdbRating, Type, Awards, Language, Writer, Actors,
    });

    const addMovieToDB = await fetch(`${URL}/movies/add`, {
      method,
      body,
      headers: { 'Content-Type': 'application/json' },
    });
    if (addMovieToDB.status === 200) alert('Succesful added!');
  }
  // skip movie
  if (e.target.classList.contains('btn-warning')) {
    document.querySelector('.cardManual').remove();
  }
}

// search one by id
async function handleShowOne(e) {
  e.preventDefault();
  if (e.target.parentElement.dataset.id) {
    console.log('perdim');
    const imdbID = e.target.parentElement.dataset.id;
    const movie = await fetch(`${URL}/api/search/one/${imdbID}`);
    const result = await movie.json();
    const body = JSON.stringify({ result });
    const method = 'POST';

    const showMovie = await fetch(`${URL}/search/one`, {
      method,
      body,
      headers: { 'Content-Type': 'application/json' },
    });
    const resultOne = await showMovie.json();

    const newDiv = document.createElement('div');
    newDiv.innerHTML = resultOne;
    newDiv.classList.add('cardManual');
    const container = document.querySelector('.container');

    container.appendChild(newDiv);

    newDiv.addEventListener('click', cardAddSkip);
  }
}

async function handleSkipDeleteFromDB(e) {
  e.preventDefault();
  // skip movie
  if (e.target.classList.contains('btn-warning')) {
    document.querySelector('.cardManual').remove();
  }
  if (e.target.classList.contains('btn-danger')) {
    const id = e.target.parentElement.dataset.dbid;
    const movie = await fetch(`${URL}/movies/${id}`, {
      method: 'DELETE',
    });
    if (movie.status === 200) {
      document.querySelector('.cardManual').remove();
      document.querySelector(`[data-dbid="${id}"]`).remove();
    }
  }
}

// search one by id from DB
async function handleShowOneFromDB(e) {
  e.preventDefault();
  if (e.target.parentElement.dataset.dbid) {
    const { dbid } = e.target.parentElement.dataset;
    // console.log(dbid);
    const movie = await fetch(`${URL}/movies/${dbid}`);
    const result = await movie.json();
    const newDiv = document.createElement('div');
    newDiv.innerHTML = result;
    newDiv.classList.add('cardManual');
    const container = document.querySelector('.container');

    container.appendChild(newDiv);
    const button = newDiv.querySelector('.btn-success');
    button.classList = 'btn btn-danger pull-right';
    button.innerHTML = 'Delete';

    newDiv.addEventListener('click', handleSkipDeleteFromDB);
  }
}

document
  .searchForm
  ?.addEventListener('submit', handleSearch);

document
  .querySelector('#filmList')
  ?.addEventListener('click', handleShowOne);

document
  .querySelector('#allFilmsPersonal')
  ?.addEventListener('click', handleShowOneFromDB);
