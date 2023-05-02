import axios from 'axios';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2Y4OTAwMmU5YzMyYzNmMDhkZGFhMGQ5ZDBkNTEwMCIsInN1YiI6IjYzNWMzNTkxZjI4ODM4MDA5YmQwMzg4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIKN_YBMgtp3274NYKbPzwIncyl81UfUTer5bLs5jLo';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export const getTrending = async page => {
  const { data } = await axios.get(
    `trending/movie/week?page=${page}&language=en-US`
  );
  console.log(data);
  return data;
};

export const getOneMovie = async id => {
  const { data } = await axios.get(`movie/${id}?language=en-US`);
  console.log(data);
  return data;
};

export const getSearchMovies = async (query, page) => {
  const { data } = await axios.get(
    `search/movie?language=en-US&query=${query}&page=${page}`
  );
  return data;
};

export const getCastMovie = async id => {
  const { data } = await axios.get(`movie/${id}/credits?language=en-US`);
  console.log(data);
  return data;
};

export const getReviewsMovie = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?language=en-US&page=1`);
  return data;
};
