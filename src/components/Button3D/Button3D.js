import "./Button3D.css";

// ! AVOID REFRESHING THE DAMN PAGE
function handleClick(event, func) {
  event.preventDefault();
  if (typeof func === "function") {
    func();
  }
}

function Button3D(props) {
  const { text, theme, func } = props;
  const class_name = `Button3D_${theme}`;
  return (
    <>
      <button
        className={class_name}
        onClick={(event) => handleClick(event, func)}
      >
        {text}
      </button>
    </>
  );
}

export default Button3D;
