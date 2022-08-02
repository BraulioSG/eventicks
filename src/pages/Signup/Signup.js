// Stylesheet
import './Signup.css';

// Components
import SignupForm from '../../components/Forms/SignupForm/SignupForm';
import FormHeader from '../../components/Forms/FormHeader/FormHeader';
import { useState } from 'react';

// Tools
import { PostApiRequest } from '../../services/ApiRequest';

async function sendRequest(user) {
  let response = await PostApiRequest('/api', user);
  if (response === null) {
    console.error('fetch failed');
    return;
  } else {
    console.log(`Response: ${JSON.stringify(response)}`);
  }
}

function Signup() {
  document.title = 'Eventicks-Signup';
  const [user, setUser] = useState({});

  const formHandler = (object) => {
    setUser(object);
    sendRequest(user);
  };
  return (
    <>
      <FormHeader />
      <div className="login-form-container">
        {/* Uses the styles from Login.css */}
        <SignupForm setter={formHandler} />
        <p>{JSON.stringify(user)}</p>
      </div>
    </>
  );
}

export default Signup;
