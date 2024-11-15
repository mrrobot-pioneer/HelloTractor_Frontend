import "../../assets/styles/auth/auth-modal.css";
import logo from "../../assets/icons/hello-tractor-logo.png";
import googleIcon from "../../assets/icons/google-icon.png";
import facebookIcon from "../../assets/icons/facebook-icon.png";
import githubIcon from "../../assets/icons/github-icon.png";
import { useAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();
  const [activeForm, setActiveForm] = useState("signin");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when modal is closed
    }

    // Cleanup the effect when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAuthModalOpen]);

  // Close modal when clicking outside of it
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("auth-modal-overlay")) {
      closeAuthModal();
    }
  };

  if (!isAuthModalOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={handleOverlayClick}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeAuthModal}>
          <i className="fa-solid fa-x"></i>
        </button>

        <div className="left flex-clmn">
          <img src={logo} alt="Hello Tractor Logo" />
          <h4>Welcome to Hello Tractor</h4>
          <p>
            Download the mobile app and get a 10% discount on your first order.
          </p>
          <button>Download App</button>
        </div>

        {activeForm === "signin" ? (
          <div className="right flex-clmn">
            <h3>Sign in to continue</h3>

            <div className="social-auth flex">
              <img
                src={googleIcon}
                alt="google icon"
                title="signin with google"
              />
              <img
                src={facebookIcon}
                alt="facebook icon"
                title="signin with facebook"
              />
              <img
                src={githubIcon}
                alt="github icon"
                title="signin with github"
              />
            </div>

            <form className="form flex-clmn">
              <input
                type="text"
                placeholder="Phone Number or Email Address"
                required
              />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="submit-btn btn-primary">
                Sign In
              </button>
            </form>

            <p>
              Don’t have an account?{" "}
              <span
                className="register-link"
                onClick={() => {
                  setActiveForm("register");
                }}
              >
                Register
              </span>
            </p>
          </div>
        ) : (
          <div className="right flex-clmn">
            <h3>Register an Account</h3>

            <div className="social-auth flex">
              <img
                src={googleIcon}
                alt="google icon"
                title="register with google"
              />
              <img
                src={facebookIcon}
                alt="facebook icon"
                title="register with facebook"
              />
              <img
                src={githubIcon}
                alt="github icon"
                title="register with github"
              />
            </div>

            <form className="form flex-clmn">
              <input type="text" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit" className="submit-btn btn-primary">
                Register
              </button>
            </form>

            <p>
              Already have an account?{" "}
              <span
                className="sign-in-link"
                onClick={() => {
                  setActiveForm("signin");
                }}
              >
                Sign in
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
