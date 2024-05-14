export const validation = {
  name: (input) => input.length < 4,
  email: (input) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) ? false : true),
  phone: (input) =>
    /^[-+/\s]*([0-9][-+/\s]*){9,}$/.test(input) ? false : true,
  message: (input) => input.length < 4,
};
export const initialValues = {
  name: '',
  shop: '',
  email: '',
  phone: '',
  message: '',
  result: '',
  checked: false,
};
export const initialErrors = {
  name: false,
  shop: false,
  email: false,
  phone: false,
  message: false,
};
