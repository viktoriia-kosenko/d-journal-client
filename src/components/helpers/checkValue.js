export const checkValue = obj => {
  for (let key in obj) {
    if (obj[key].length === 0) return false;
  }
  return true;
};
