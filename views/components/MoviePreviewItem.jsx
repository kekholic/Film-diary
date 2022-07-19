const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function FilmPreviewItem({ movie, user }) {
  return (
    <div className="wrapreit">
      <div className="infa">
        {' '}
        <img src={movie.Poster} alt="Brooklyn" />
        <p>{movie.Title}</p>
        <p>
          {movie.Year}
          ,
          {' '}
          {movie.Type}
        </p>
      </div>
    </div>
  );
};
