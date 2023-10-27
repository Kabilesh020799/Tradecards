const baseUrl = 'http://localhost:8080/';

const onForgotPassword = (email) => {
  const data = { email, };
  fetch(baseUrl + 'api/forget-password-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
  ;
};

export { onForgotPassword, };
