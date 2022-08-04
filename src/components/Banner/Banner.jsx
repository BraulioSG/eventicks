//stylesheet
import './Banner.css';

//tools
import { Link } from 'wouter';

function Banner() {
  return (
    <>
      <div className="home-banner">
        <div className="home-banner-animated-container">
          <div className="home-banner-animated">
            <span
              className="home-banner-animated-text"
              style={{ '--delay': '0s' }}
            >
              <h2>Tickets</h2>
            </span>
            <span
              className="home-banner-animated-text"
              style={{ '--delay': '2s' }}
            >
              <h2>Analytics</h2>
            </span>
            <span
              className="home-banner-animated-text"
              style={{ '--delay': '4s' }}
            >
              <h2>Management</h2>
            </span>
          </div>
        </div>
        <div className="home-banner-login">
          <p className="home-banner-login-text">
            <strong>
              Start using <em>Eventicks</em> now.
            </strong>
            <br />
            Create an account and start a new event
          </p>
          <div className="home-banner-login-buttons">
            <Link to="/signup" id="homeSignup">
              Signup
            </Link>
            <p id="homeOr">or</p>
            <Link to="/login" id="homeLogin">
              Login
            </Link>
          </div>
        </div>
        <div className="home-banner-more">
          <a href="#about">
            <p>Read More</p>
            <i class="material-icons">expand_more</i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Banner;
