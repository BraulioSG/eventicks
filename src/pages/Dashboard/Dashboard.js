//stylesheet
import './Dashboard.css';

//tools
import { useLocation } from 'wouter';
import { GetApiRequest } from '../../services/ApiRequest';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [_location, setLocation] = useLocation();
  const [user, setUser] = useState({});

  let session_id = sessionStorage.getItem('user_id');
  if (session_id === null) setLocation('/login');

  useEffect(() => {
    async function validateSessionId() {
      const status = await GetApiRequest(`/users/find?id=${session_id}`);
      const API_response = status;
      const { error } = API_response;
      if (error !== null) {
        setLocation('/login');
      } else {
        const { email, username } = API_response;
        setUser({ email, username });
      }
    }
    validateSessionId();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <p>user: {user.username}</p>
    </>
  );
}

export default Dashboard;
