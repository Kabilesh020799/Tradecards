import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));
// const REACT_APP_END_POINT = 'http://localhost:8080';
const REACT_APP_END_POINT_PROD = 'http://localhost:8080';

const getCategories = () => {
  return fetch(REACT_APP_END_POINT_PROD + '/api/categories', { headers: { Authorization: `Bearer ${user.token}`, }, })
    .then((res) => res.json())
    .then((res) => res.filter((resItem) => resItem?.categoryName));
};

export { getCategories, };
