export const getArrayOfErrors = (errors) => {
  let arrOfErrors = [];
  for (let err in errors) {
    arrOfErrors.push(errors[err]);
  }
  return arrOfErrors;
};
