import "./style/login.css";
import HdImage from "../assets/image.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left side - Login Form */}
        <div className="login-form-container">
          <h1 className="login-title">Welcome to Study Buddy!</h1>
          <div id="gapping"></div>
          <form className="login-form">
            <div className="input-group">
              <input type="email" placeholder="Email" className="login-input" />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
            </div>
            <div className="form-footer">
              <div className="remember-forgot">
                <a href="/forgot-password" className="forgot-link">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="login-button">
                Sign in
              </button>
              <div className="remember-forgot">
                <a href="/forgot-password" className="forgot-link">
                  Doesn't have account? Sign Up here
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Right side - Illustration */}
        <div className="login-image-container">
          <img
            src={HdImage}
            alt="Login illustration"
            className="login-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
