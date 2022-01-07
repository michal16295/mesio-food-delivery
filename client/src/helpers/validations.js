export const passwordsMatch = (password1, password2) => password1 === password2;

export const emptyField = obj => {
  let res = false;
  Object.keys(obj).map(key => {
    if (obj[key] === null) {
      res = true;
      return;
    }
  });
  return res;
};

export const passwordValidationLength = password =>
  password === null || password?.length < 8;
