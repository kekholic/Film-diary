const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function FilmPreviewItem({ movie, user }) {
  return (
    <div data-id={movie.imdbID} className="card cardCustom" style={{ width: '18rem' }}>
      <img src={movie.Poster} className="card-img-top" alt="Sunset Over the Sea" />
      <div className="card-body">
        <p className="card-text">{movie.Title}</p>
        <p className="card-text">
          {movie.Year}
          {'  '}
          {movie.Type}
        </p>
      </div>
    </div>

  );
};
