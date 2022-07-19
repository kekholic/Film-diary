const URL = 'http://localhost:3000';

async function handleSearch(e) {
  e.preventDefault();
  const { searchInput: { value: text }, method } = e.target;
  const movieList = await fetch(
    `${URL}/api/search/${text}`,
    {
      credentials: 'include',
    },
  );
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

document.searchForm
  ?.addEventListener('submit', handleSearch);
