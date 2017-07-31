import axios from 'axios';

const getUser = (user) => {
  const data = axios.get(`https://api.github.com/users/${user}`);
  const newData = {};
  newData.login = data['login'];
  newData.avatar_url = data['avatar_url'];
  newData.name = data['name'];
  newData.email = data['email'];

  return newData;

}
export default getUser;


    // User does not exist =>
//   {
//   "message": "Not Found",
//   "documentation_url": "https://developer.github.com/v3"
// }