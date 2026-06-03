function Stats() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Trusted Railway Intelligence Platform
          </h2>

          <p className="text-muted">
            Delivering accurate predictions and actionable insights.
          </p>
        </div>

        <div className="row text-center g-4">

          <div className="col-md-3">
            <h1 className="fw-bold text-primary">98.7%</h1>
            <p className="text-muted">Prediction Accuracy</p>
          </div>

          <div className="col-md-3">
            <h1 className="fw-bold text-success">500+</h1>
            <p className="text-muted">Railway Stations</p>
          </div>

          <div className="col-md-3">
            <h1 className="fw-bold text-danger">2M+</h1>
            <p className="text-muted">Predictions Generated</p>
          </div>

          <div className="col-md-3">
            <h1 className="fw-bold text-warning">24/7</h1>
            <p className="text-muted">Live Monitoring</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;