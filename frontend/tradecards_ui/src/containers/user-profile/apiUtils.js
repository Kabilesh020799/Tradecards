import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));
// const REACT_APP_END_POINT = 'http://localhost:8080';
const REACT_APP_END_POINT_PROD = 'http://localhost:8080';

const editUser = (params) => {
  const {
    email,
    password,
  } = params;

  const body = {
    email,
    ...(password && { password, }),
  };
  return fetch(REACT_APP_END_POINT_PROD + '/api/users/update-user', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { Authorization: `Bearer ${user.token}`, },
  })
    .then((res) => res.json());
};

export { editUser, };
