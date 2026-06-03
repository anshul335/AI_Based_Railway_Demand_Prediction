function Features() {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Powerful AI Features
          </h2>

          <p className="text-muted">
            Everything you need to forecast railway demand accurately.
          </p>
        </div>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-6 col-lg-4">
  <div className="card h-100 shadow-sm border-0">
    <div className="card-body p-4">
    <i
  className="bi bi-graph-up-arrow text-primary"
  style={{ fontSize: "2.5rem" }}
></i>
      <h5 className="fw-bold">Advanced Forecasting</h5>
      <p className="text-muted">
        AI-powered passenger demand forecasting with high accuracy.
      </p>
    </div>
  </div>
</div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4">
  <div className="card h-100 shadow-sm border-0">
    <div className="card-body p-4">
    <i
  className="bi bi-bar-chart-fill text-success"
  style={{ fontSize: "2.5rem" }}
></i>
      <h5 className="fw-bold">Real-Time Analytics</h5>
      <p className="text-muted">
        Monitor railway operations with live insights.
      </p>
    </div>
  </div>
</div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-4">
  <div className="card h-100 shadow-sm border-0">
    <div className="card-body p-4">
    <i
  className="bi bi-speedometer2 text-danger"
  style={{ fontSize: "2.5rem" }}
></i>
      <h5 className="fw-bold">Capacity Optimization</h5>
      <p className="text-muted">
        Improve train utilization and reduce congestion.
      </p>
    </div>
  </div>
</div>
 
    {/* Card 4 */}

<div className="col-md-6 col-lg-4">
  <div className="card h-100 shadow-sm border-0">
    <div className="card-body p-4">
    <i
  className="bi bi-bullseye text-warning"
  style={{ fontSize: "2.5rem" }}
></i>
      <h5 className="fw-bold">Demand Prediction</h5>
      <p className="text-muted">
        Predict future passenger traffic trends accurately.
      </p>
    </div>
  </div>
</div>
   
   {/* Card 5 */}

<div className="col-md-6 col-lg-4">
  <div className="card h-100 shadow-sm border-0">
    <div className="card-body p-4">
    <i
  className="bi bi-signpost-split-fill text-info"
  style={{ fontSize: "2.5rem" }}
></i>
      <h5 className="fw-bold">Route Intelligence</h5>
      <p className="text-muted">
        Discover bottlenecks and optimize railway routes.
      </p>
    </div>
  </div>
</div>


  {/* Card 6 */}

<div className="col-md-6 col-lg-4">
  <div className="card h-100 shadow-sm border-0">
    <div className="card-body p-4">
    <i
  className="bi bi-cpu-fill"
  style={{
    fontSize: "2.5rem",
    color: "#7c3aed"
  }}
></i>
      <h5 className="fw-bold">Performance Insights</h5>
      <p className="text-muted">
        Get actionable recommendations from AI analytics.
      </p>
    </div>
  </div>
</div>

        </div>

      </div>
    </section>
  );
}

export default Features;