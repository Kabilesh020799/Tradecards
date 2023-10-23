import { useNavigate } from 'react-router-dom';

const onLogin = (userName, password) => {
  console.log(userName, password);
};

const onSignup = (userName, password) => {
  const navigate = useNavigate();

  console.log(userName, password);
  navigate('/home');
};

export {
  onLogin,
  onSignup,
};
