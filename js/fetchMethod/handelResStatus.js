export const handelResStatus = (response) => {
  console.log(response);
  if (response && response.statusCode) {
    if (response.statusCode <= 400) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};
