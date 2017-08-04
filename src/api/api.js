import axios from 'axios';

const getUser = async (user) => {
  const clientId = 'aae10265963c19909412';
  const clientSecret = '94a1551edaedc85e7b70ebb58045eff530e7c99f';
  const data = await axios.get(`https://api.github.com/users/${user}?client_id=${clientId}&client_secret=${clientSecret}`);
  return data;
}

export default getUser;

    // User does not exist =>
//   {
//   "message": "Not Found",
//   "documentation_url": "https://developer.github.com/v3"
// }
