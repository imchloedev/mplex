import axios from 'axios';

export const URL = process.env.NEXT_PUBLIC_M_BASE_URL;
export const API_KEY = process.env.NEXT_PUBLIC_M_API_KEY;

export const getTvShows = async () => {
  const {
    data: { results },
  } = await axios.get(`https://${URL}/tv/popular?api_key=${API_KEY}`);
  return results;
};