import { Suspense, lazy } from "react";
// *Components
import Button3D from "../Button3D/Button3D";

// *Stylesheets
import "./Modal.css";

//* Images
import error_icon from "../../assets/svg/error.svg";
const warning_icon = lazy(() => import("../../assets/svg/warning.svg"));

function getImage(type) {
  if (type === "error") return error_icon;
  if (type === "warning") return warning_icon;
}

function Modal(props) {
  const { type, title, message, callback, value } = props;
  return (
    <>
      <div className={`Modal-container ${!value ? "hidden" : "show"}`}>
        <div className="Modal-box">
          <img src={getImage(type)} className="Modal-box-icon" />
          <h2>{title}</h2>
          <p>{message}</p>
          <Button3D text="OK" theme="light" func={() => callback(false)} />
        </div>
      </div>
    </>
  );
}

export default Modal;
