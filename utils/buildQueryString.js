export const bqs = (params) => {
  const searchParams = new URLSearchParams(params);
  searchParams.sort();
  return searchParams.toString();
};