import axios from 'src/axios';

export const getInfectionsList = async () => {
  const { data } = await axios.get('/posts');
  return data;
};
