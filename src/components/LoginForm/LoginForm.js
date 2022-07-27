// *components
import FormInput from "../FormInput/FormInput";
import Button3D from "../Button3D/Button3D";

// *Stylesheet
import "./LoginForm.css";
import { useState } from "react";

function checkLogin(func, data) {
  const { username, password } = data;
  let title, message, type;

  func({
    title: "login",
    message: "you pressed on login",
    type: "error",
  });
}

function LoginForm(props) {
  const { modalFunc } = props;
  const [inputs, changeInputs] = useState({ username: "", password: "" });

  const changeUsername = (newUsername) => {
    changeInputs({ username: newUsername, password: inputs.password });
  };

  const changePassword = (newPassword) => {
    changeInputs({ username: inputs.username, password: newPassword });
  };

  console.log(inputs);

  return (
    <>
      <form className="LoginForm">
        <h1 className="LoginForm-title">Login</h1>
        <div className="LoginForm-input-container">
          <div className="LoginForm-input">
            <FormInput
              name="username"
              type="text"
              label="Username"
              callback={changeUsername}
            />
          </div>
          <div className="LoginForm-input">
            <FormInput
              name="password"
              type="password"
              label="Password"
              callback={changePassword}
            />
          </div>
        </div>
        <div className="LoginForm-button-container">
          <Button3D
            text="Login"
            theme="secondary"
            func={() => checkLogin(modalFunc, inputs)}
          />
          <Button3D text="Sign Up" theme="light" />
        </div>
      </form>
    </>
  );
}

export default LoginForm;
