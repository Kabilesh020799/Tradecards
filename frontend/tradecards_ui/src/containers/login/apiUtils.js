const onLogin = (userName, password) => {
  const data = {
    emailId: userName,
    password,
  };
  return fetch(process.env.REACT_APP_END_POINT + 'api/login', {
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
  return fetch(process.env.REACT_APP_END_POINT + 'api/signup', {
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
