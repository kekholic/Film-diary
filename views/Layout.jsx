const React = require('react');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'ReactSSR'}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/application.js" />

      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {user ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href={`/${user.login}`}>{user.name}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/auth/logout">Выйти</a>
                    </li>
                  </>

                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/auth/login">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/auth/registration">Registration</a>
                    </li>
                  </>
                )}

                <li className="nav-item">
                  <a className="nav-link" href="/search">Найти</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
