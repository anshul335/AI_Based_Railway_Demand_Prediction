function Hero() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">

        
          <div className="col-lg-6">

            <div className="badge bg-light text-dark border px-3 py-2 mb-4">
              🚆 AI-Powered Railway Intelligence
            </div>

            <h1 className="display-3 fw-bold mb-4">
              Transform Railway Operations
              <br />
              with Predictive Analytics
            </h1>

            <p className="lead text-secondary mb-4">
              Enterprise-grade demand forecasting powered by advanced AI
              and machine learning. Optimize capacity, reduce costs, and
              enhance passenger satisfaction with real-time insights.
            </p>

            <div className="d-flex gap-3 mb-5">
              <button className="btn btn-dark btn-lg">
                Start Free Trial
              </button>

              <button className="btn btn-outline-dark btn-lg">
                View Demo Dashboard
              </button>
            </div>

            <div className="d-flex gap-5">
              <div>
                <h3 className="fw-bold">98.7%</h3>
                <p className="text-muted mb-0">
                  Prediction Accuracy
                </p>
              </div>

              <div>
                <h3 className="fw-bold">500+</h3>
                <p className="text-muted mb-0">
                  Railway Stations
                </p>
              </div>

              <div>
                <h3 className="fw-bold">24/7</h3>
                <p className="text-muted mb-0">
                  Real-Time Monitoring
                </p>
              </div>
            </div>

          </div>

      
          
 {/* Right Section */}
<div className="col-lg-6">
<div
  className="shadow-lg rounded-4 p-4"
  style={{
    minHeight: "450px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white"
  }}
>
  <div className="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h5 className="fw-bold mb-1">
        Live Forecast
      </h5>

      <small>
        Next 24 Hours
      </small>
    </div>

    <span className="badge bg-success">
      Active
    </span>
  </div>

  {/* Fake Chart */}
  <div
    className="rounded-3 mb-4"
    style={{
      height: "150px",
      background:
        "linear-gradient(90deg,#2563eb,#06b6d4)"
    }}
  ></div>

  {/* Metrics */}
  <div className="row g-3">

    <div className="col-6">
      <div className="bg-dark rounded-3 p-3">
        <small>Passengers</small>
        <h4 className="fw-bold">127K</h4>
      </div>
    </div>

    <div className="col-6">
      <div className="bg-dark rounded-3 p-3">
        <small>Accuracy</small>
        <h4 className="fw-bold">98.7%</h4>
      </div>
    </div>

    <div className="col-6">
      <div className="bg-dark rounded-3 p-3">
        <small>Stations</small>
        <h4 className="fw-bold">500+</h4>
      </div>
    </div>

    <div className="col-6">
      <div className="bg-dark rounded-3 p-3">
        <small>Monitoring</small>
        <h4 className="fw-bold">24/7</h4>
      </div>
    </div>

  </div>

</div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Hero;