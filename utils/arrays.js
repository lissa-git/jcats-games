export const findWhere = (array, searchingValues) => {
  const searchingValuesArr = Object.entries(searchingValues);
  const result = array.find((arrayItem) => {
    for (let i = 0; i < searchingValuesArr.length; i += 1) {
      if (arrayItem[searchingValuesArr[i][0]] !== searchingValuesArr[i][1]) return false;
    };
    return true;
  });
  return result || null;
};