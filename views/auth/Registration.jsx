const React = require('react');
const Layout = require('../Layout');

module.exports = function RegUser() {
  return (
    <Layout>

      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid gray"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form id="regUser" action="/auth/registration" method="POST">

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="inputLogMail"
                    className="form-control form-control-lg"
                    placeholder="Enter your login"
                    name="login"
                  />
                  <label className="form-label" htmlFor="form3Example3">Login</label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="inputLogMail"
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                    name="name"
                  />
                  <label className="form-label" htmlFor="form3Example3">Name</label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="inputLog"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                  />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">

                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-secondary"

                  >
                    Register

                  </button>

                </div>

              </form>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  );
};
