//Stylesheet
import './login.css';

//components
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import FormHeader from '../../components/Forms/FormHeader/FormHeader';

//tools
import { useState } from 'react';

function Login() {
  document.title = 'Eventicks - Login';
  const [user, setUser] = useState({});

  const formHandler = (object) => {
    setUser(object);
    console.log(user);
  };
  return (
    <>
      <FormHeader />
      <div className="login-form-container">
        <LoginForm setter={formHandler} />
      </div>
    </>
  );
}

export default Login;
