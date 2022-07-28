import { Link } from "wouter";
//* Style sheet
import "./Home.css";

// * Components
import NavMenu from "../components/NavMenu/NavMenu";
import Link3D from "../components/Link3D/Link3D";

//* media
import audiencePhoto from "../assets/imgs/audience.jpg";

function Home() {
  return (
    <>
      <NavMenu />
      <div className="home-banner">
        <div className="home-banner-text">
          <p style={{ "--delay": "0s" }}>Tickets</p>
          <p style={{ "--delay": "2s" }}>Analytics</p>
          <p style={{ "--delay": "4s" }}>Management</p>
        </div>
        <div className="home-banner-login-container">
          <div className="home-banner-login-content">
            <div className="home-banner-login-text">
              <h2>It's time to get started with Eventicks</h2>
              <p>Create an account or login into an existing account</p>
            </div>
            <div className="home-banner-links-container">
              <Link3D location="/login" text="login" theme="light" />
              <p>or</p>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="extra"></div>
    </>
  );
}

export default Home;
