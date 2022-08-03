// Stylesheet
import './Signup.css';

// Components
import SignupForm from '../../components/Forms/SignupForm/SignupForm';
import FormHeader from '../../components/Forms/FormHeader/FormHeader';
import { useState } from 'react';

// Tools
import { PostApiRequest } from '../../services/ApiRequest';
import { useLocation } from 'wouter';

async function sendRequest(user) {
  let response = await PostApiRequest('/users/signup', user);
  if (response === null) {
    console.error('fetch failed');
    return;
  } else {
    return response.code;
  }
}

function Signup() {
  document.title = 'Eventicks-Signup';
  const [_user, setUser] = useState({});
  const [_location, setLocation] = useLocation();

  const formHandler = async (object) => {
    const status = await sendRequest(object);
    setUser(object);
    if (status === 'ok') {
      setLocation('/login');
    }
  };
  return (
    <>
      <FormHeader />
      <div className="login-form-container">
        {/* Uses the styles from Login.css */}
        <SignupForm setter={formHandler} />
      </div>
    </>
  );
}

export default Signup;
