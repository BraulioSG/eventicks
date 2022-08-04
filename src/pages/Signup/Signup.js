// Stylesheet
import './Signup.css';

// Components
import SignupForm from '../../components/Forms/SignupForm/SignupForm';
import MinimalHeader from '../../components/MinimalHeader/MinimalHeader';
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
  /* eslint-disable no-unused-vars */
  const [_location, setLocation] = useLocation();

  const formHandler = async (object) => {
    const status = await sendRequest(object);
    if (status === 'ok') {
      setLocation('/login');
    }
  };
  return (
    <>
      <MinimalHeader />
      <div className="login-form-container">
        {/* Uses the styles from Login.css */}
        <SignupForm setter={formHandler} />
      </div>
    </>
  );
}

export default Signup;
