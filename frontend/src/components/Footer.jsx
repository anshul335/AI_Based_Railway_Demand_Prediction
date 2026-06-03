function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">

        <div className="row">

          {/* Company Info */}
          <div className="col-lg-4 mb-4">
            <h3 className="fw-bold">
              🚆 RailMind AI
            </h3>

            <p className="text-light">
              Enterprise-grade railway demand forecasting powered by
              artificial intelligence and predictive analytics.
            </p>
          </div>

          {/* Product */}
          <div className="col-md-2 col-6 mb-4">
            <h5>Product</h5>

            <ul className="list-unstyled">
              <li className="mb-2">Forecasting</li>
              <li className="mb-2">Analytics</li>
              <li className="mb-2">Optimization</li>
              <li className="mb-2">Dashboard</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 col-6 mb-4">
            <h5>Company</h5>

            <ul className="list-unstyled">
              <li className="mb-2">About</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2 col-6 mb-4">
            <h5>Resources</h5>

            <ul className="list-unstyled">
              <li className="mb-2">Documentation</li>
              <li className="mb-2">API</li>
              <li className="mb-2">Support</li>
              <li className="mb-2">Guides</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2 col-6 mb-4">
            <h5>Contact</h5>

            <ul className="list-unstyled">
              <li className="mb-2">Email</li>
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">GitHub</li>
            </ul>
          </div>

        </div>

        <hr />

        <div className="text-center text-light">
          © 2026 RailMind AI. Enterprise Railway Intelligence Platform.
        </div>

      </div>
    </footer>
  );
}

export default Footer;