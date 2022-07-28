const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};
const isValidName = (email) => {
  return Boolean(email.length > 4);
};

export const isOk = (id, value) =>
  id === 'email' ? isValidEmail(value) : isValidName(value);

export const hasNoError = (value) => value !== null && value === false;
