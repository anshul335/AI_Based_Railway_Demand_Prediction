import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", { email, password });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "#ffffff",
          borderRadius: "20px",
          border: "1px solid #e0e0e0",
          padding: "56px 48px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "#111111",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
            >
              <i
                className="bi bi-train-front-fill"
                style={{ fontSize: "24px", color: "white" }}
              ></i>
            </div>
            <div style={{ textAlign: "left" }}>
              <h5
                style={{
                  fontWeight: 700,
                  marginBottom: "2px",
                  fontSize: "22px",
                  color: "#111111",
                  letterSpacing: "-0.3px",
                }}
              >
                RailMind AI
              </h5>
              <small
                style={{
                  color: "#555555",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                }}
              >
                Demand Forecasting
              </small>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h3
            style={{
              fontWeight: 700,
              marginBottom: "10px",
              fontSize: "30px",
              color: "#111111",
              letterSpacing: "-0.5px",
            }}
          >
            Welcome back
          </h3>
          <p
            style={{
              color: "#666666",
              margin: 0,
              fontSize: "16px",
            }}
          >
            Sign in to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: "22px" }}>
            <label
              htmlFor="login-email"
              style={{
                display: "block",
                fontWeight: 600,
                fontSize: "15px",
                color: "#222222",
                marginBottom: "8px",
              }}
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="admin@railmind.ai"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 18px",
                border: "1.5px solid #d4d4d4",
                borderRadius: "10px",
                fontSize: "16px",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                backgroundColor: "#fafafa",
                color: "#111111",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#111111";
                e.target.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.08)";
                e.target.style.backgroundColor = "#fff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d4d4d4";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "#fafafa";
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <label
                htmlFor="login-password"
                style={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#222222",
                }}
              >
                Password
              </label>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "#333333",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                Forgot password?
              </a>
            </div>
            <div style={{ position: "relative" }}>
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "14px 48px 14px 18px",
                  border: "1.5px solid #d4d4d4",
                  borderRadius: "10px",
                  fontSize: "16px",
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  backgroundColor: "#fafafa",
                  color: "#111111",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#111111";
                  e.target.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.08)";
                  e.target.style.backgroundColor = "#fff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#d4d4d4";
                  e.target.style.boxShadow = "none";
                  e.target.style.backgroundColor = "#fafafa";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#888888",
                  fontSize: "18px",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            id="login-submit-btn"
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              background: "#111111",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.25s ease",
              letterSpacing: "0.2px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#333333";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#111111";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
            }}
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#666666",
            fontSize: "15px",
            marginBottom: 0,
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#111111",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
