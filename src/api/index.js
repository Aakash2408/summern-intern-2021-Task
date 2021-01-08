export const fetchList = async (search, page) => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${search}&page=${page}&type=movie&apikey=b3bc3ab1`
  );
  let movies = await response.json();
  return movies.Response === "True" ? movies.Search : [];
};
