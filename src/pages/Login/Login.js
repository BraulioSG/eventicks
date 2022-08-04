//Stylesheet
import './login.css';

//components
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import MinimalHeader from '../../components/MinimalHeader/MinimalHeader';

//tools
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
  /* eslint-disable no-unused-vars */
  const [_location, setLocation] = useLocation();

  const formHandler = async (object) => {
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
      <MinimalHeader />
      <div className="login-form-container">
        <LoginForm setter={formHandler} />
      </div>
    </>
  );
}

export default Login;
