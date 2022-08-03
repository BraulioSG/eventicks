//Stylesheet
import './login.css';

//components
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import FormHeader from '../../components/Forms/FormHeader/FormHeader';

//tools
import { useState } from 'react';
import { PostApiRequest } from '../../services/ApiRequest';
import { useLocation } from 'wouter';

async function sendRequest(user) {
  let response = await PostApiRequest('/users/login', user);
  if (response === null) {
    console.error('fetch failed');
    return;
  } else {
    return response;
  }
}

function Login() {
  document.title = 'Eventicks - Login';
  const [_user, setUser] = useState({});
  const [_location, setLocation] = useLocation();

  const formHandler = async (object) => {
    setUser(object);
    const status = await sendRequest(object);
    if (status.code === 'ok') {
      sessionStorage.setItem('user_id', status.user_id);
      setLocation('/dashboard');
    } else {
      alert(status.errors);
    }
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
