// const REACT_APP_END_POINT = 'http://localhost:8080';
const REACT_APP_END_POINT_PROD = 'http://csci5308vm13.research.cs.dal.ca:8080';

const onLogin = (userName, password) => {
  const data = {
    emailId: userName,
    password,
  };
  return fetch(REACT_APP_END_POINT_PROD + '/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res)
  ;
};

const onSignup = (userName, password, firstName, lastName) => {
  const data = {
    emailID: userName,
    password,
    firstName,
    lastName,
  };
  return fetch(REACT_APP_END_POINT_PROD + '/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => res)
  ;
};

export {
  onLogin,
  onSignup,
};
