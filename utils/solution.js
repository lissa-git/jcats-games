export const genDiff = (firstObj, secondObj) => {
  let differenses = {};
  for (let key in firstObj) {
    switch (true) {
      case !Object.hasOwn(secondObj, key):
        differenses[key] = 'deleted';
        break;
      case Object.hasOwn(secondObj, key) && firstObj[key] === secondObj[key]:
        differenses[key] = 'changed';
        break;
      case Object.hasOwn(secondObj, key) && firstObj[key] !== secondObj[key]:
        differenses[key] = 'unchanged';
        break;
    };
  }
  for (let key in secondObj) {
    if (!Object.hasOwn(firstObj, key)) {
      differenses[key] = 'added';
    }
  }
  return differenses;
};