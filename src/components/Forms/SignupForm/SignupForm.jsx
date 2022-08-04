//Stylesheet
import '../FormStyles/LoginForm.css';

//Components
import FormInput from '../FormInput/FormInput';

//tool
import { Link } from 'wouter';
import { useState } from 'react';

function handleSubmit(event, user, callback) {
  event.preventDefault(); //avoids refreshing component when submit
  const { username, password, passConfirm, email } = user;
  let errors = [];

  //verifies the confirm password
  if (passConfirm !== password) {
    errors.push('passwords are not the same');
  }

  //no errors
  if (errors.length === 0 && typeof callback === 'function') {
    callback({ username, password, email });
  } else {
    alert(errors);
  }
}

function SignupForm(props) {
  const { setter } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [email, setEmail] = useState('');

  const user = { username, password, passConfirm, email };

  return (
    <>
      <form
        className="login-form"
        onSubmit={(evt) => handleSubmit(evt, user, setter)}
      >
        <h2 className="login-form-title">Sign Up</h2>
        <FormInput
          type="text"
          name="username"
          icon="person"
          func={setUsername}
        />
        <FormInput type="email" name="email" icon="mail" func={setEmail} />
        <FormInput
          type="password"
          name="password"
          icon="lock"
          func={setPassword}
        />
        <FormInput
          type="password"
          name="password-confirm"
          label="confirm password"
          icon="lock"
          func={setPassConfirm}
        />
        <input type="submit" value="Sign Up" />
        <p>or</p>
        <Link to="/login" className="login-form-other-option">
          Login
        </Link>
      </form>
    </>
  );
}

export default SignupForm;
