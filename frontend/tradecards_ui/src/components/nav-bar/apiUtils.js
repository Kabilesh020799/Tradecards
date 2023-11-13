import { getStorage } from '../../common-utils';

const user = JSON.parse(getStorage('userInfo'));

const getCategories = () => {
  return fetch(process.env.REACT_APP_END_POINT + '/api/categories', { headers: { Authorization: `Bearer ${user.token}`, }, })
    .then((res) => res.json())
    .then((res) => res.filter((resItem) => resItem?.categoryName));
};

export { getCategories, };
