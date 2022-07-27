import { Link } from "wouter";

import "./Link3D.css";

function Link3D(props) {
  const { location, theme, text } = props;
  return (
    <Link
      to={location}
      className={theme === "light" ? "Link3D_light" : "Link3D_dark"}
    >
      {text}
    </Link>
  );
}

export default Link3D;
