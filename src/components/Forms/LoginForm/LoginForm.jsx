// Stylesheet
import '../FormStyles/LoginForm.css';

// components
import FormInput from '../FormInput/FormInput';

// tools
import { useState } from 'react';
import { Link } from 'wouter';

function handleSubmit(evt, user, callback) {
  evt.preventDefault(); //avoids re-rendering the component
  //const { username, password } = user;
  let errors = [];
  if (errors.length === 0 && typeof callback === 'function') {
    callback(user);
  }
}

function LoginForm(props) {
  const { setter } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = { username, password };
  return (
    <>
      <form
        className="login-form"
        onSubmit={(evt) => handleSubmit(evt, user, setter)}
      >
        <h2 className="login-form-title">Login</h2>
        <FormInput
          type="text"
          name="username"
          icon="person"
          func={setUsername}
        />
        <FormInput
          type="password"
          name="password"
          icon="lock"
          func={setPassword}
        />
        <input type="submit" value="Login" />
        <p>or</p>
        <Link to="/signup" className="login-form-other-option">
          Sign Up
        </Link>
      </form>
    </>
  );
}

export default LoginForm;
