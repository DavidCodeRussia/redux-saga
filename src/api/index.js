export const getLatestNews = async (searchQueryParams) => {
  const req = await fetch(`http://hn.algolia.com/api/v1/${searchQueryParams}/1`);
  return await req.json();
};

export const getPopularNews = async () => {
  const req = await fetch(`http://hn.algolia.com/api/v1/items/1`);
  return await req.json();
};
