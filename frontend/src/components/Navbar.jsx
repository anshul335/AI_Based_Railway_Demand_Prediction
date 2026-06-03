function Navbar() {
  return (
    <nav className="border-bottom py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* Left Section */}
          <div className="d-flex align-items-center">

          <div
  className="d-flex justify-content-center align-items-center rounded-4 shadow-sm"
  style={{
    width: "56px",
    height: "56px",
    background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
    color: "white"
  }}
>
  <i
    className="bi bi-train-front-fill"
    style={{
      fontSize: "26px"
    }}
  ></i>
</div>

            <div className="ms-3">
              <h4 className="mb-0 fw-bold">
                RailMind AI
              </h4>

              <small className="text-muted">
                Demand Forecasting Platform
              </small>
            </div>

          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center">

            <button className="btn me-3">
              Login
            </button>

            <button className="btn btn-dark px-4 py-2">
              Get Started
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;