// *Components
import Link3D from "../../components/Link3D/Link3D";

// *Stylesheet
import "./Error404.css";

function Error404() {
  return (
    <>
      <div className="error404-background-text">
        <h3>404</h3>
      </div>
      <div className="error404-container">
        <div className="error404-content">
          <div className="error404-content-title">
            <h1 className="title3d-light">SORRY</h1>
          </div>

          <div className="error404-content-text">
            <p>Couldn't find the page you're trying to reach.</p> <br />
            <p>Make sure the URL is correct</p> <br />
            <p>Contact the support team</p> <br />
          </div>

          <Link3D text="Go home" location="/" theme="light" />
        </div>
      </div>
    </>
  );
}

export default Error404;
