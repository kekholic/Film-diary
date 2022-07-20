const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function MoviePreviewList({ movie, user }) {
  return (
    <div className="card mb-3">

      <div>
        <h5 id="Title" className="card-title">{movie.Title}</h5>
        <div className="cardImage">
          <img
            src={movie.Poster}
            alt="Trendy Pants and Shoes"
            align="left"
            id="Poster"
          />
        </div>

        <div className="cardText">
          Year:
          {' '}
          <span id="Year">{movie.Year}</span>
          <br />

          Released:
          {' '}
          <span id="Released">{movie.Released}</span>
          <br />
          Rated:
          {' '}
          <span id="Rated">{movie.Rated}</span>
          <br />
          IMDB:
          {' '}
          <span id="Imdb">{movie.imdbRating}</span>
          <br />
          Genre:
          {' '}
          <span id="Genre">{movie.Genre}</span>
          <br />
          Director:
          {' '}
          <span id="Director">{movie.Director}</span>
          <br />
          Runtime:
          {' '}
          <span id="Runtime">{movie.Runtime}</span>
          <br />
          Type:
          {' '}
          <span id="Type">{movie.Type}</span>
          <br />
          Awards:
          {' '}
          <span id="Awards">{movie.Awards}</span>
          <br />
          Language:
          {' '}
          <span id="Language">{movie.Language}</span>
          <br />
          Writer:
          {' '}
          <span id="Writer">{movie.Writer}</span>
          <br />
          Actors:
          {' '}
          <span id="Actors">{movie.Actors}</span>
          <br />
          Plot:
          {' '}
          <span id="Plot">{movie.Plot}</span>
        </div>

      </div>
      <div className="pull-right buttonGroup ">
        <button type="button" className="btn btn-success pull-right">Add to favorite</button>
        <button type="button" className="btn btn-warning pull-right">Skip</button>
      </div>
    </div>
  );
};
