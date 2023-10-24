const baseUrl = 'http://localhost:8080/';

const onLogin = (userName, password) => {
  const data = {
    emailId: userName,
    password,
  };
  fetch(baseUrl + 'api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
  ;
};

const onSignup = (userName, password, firstName, lastName) => {
  const data = {
    emailID: userName,
    password,
    firstName,
    lastName,
  };
  fetch(baseUrl + 'api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
  ;
};

export {
  onLogin,
  onSignup,
};
