const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Layout = require('./Layout');
const MoviePreviewItem = require('./components/MoviePreviewItem');

module.exports = function PersonalPage({ user, movies }) {
  return (
    <Layout user={user}>
      <h2>My favorites:</h2>
      <div className="allFilmsPersonal" id="allFilmsPersonal">
        {
          movies.map((movie) => <MoviePreviewItem movie={movie} key={movie.id} user={user} />)
        }

      </div>
    </Layout>
  );
};
