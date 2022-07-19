const React = require('react');
const ReactDOMServer = require('react-dom/server');
const MoviePreviewItem = require('./MoviePreviewItem');

module.exports = function MoviePreviewList({ movies, user }) {
  return (

    <>
      <h2>Результат поиска:</h2>
      <div id="allTweets">
        {
          movies.map((movie) => <MoviePreviewItem movie={movie} key={movie.id} user={user} key={movies.id} />)
        }

      </div>
    </>
  );
};
