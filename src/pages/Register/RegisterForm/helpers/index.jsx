import isEmail from 'validator/lib/isEmail';

const validateRegistrationForm = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = ['Email is required.'];
  } else {
    if (!isEmail(values.email)) {
      errors.email = ['Email is invalid.'];
    }
  }

  if (!values.name) {
    errors.name = ['Name is required.'];
  } else {
    if (values.name.length > 15) {
      errors.name = ['Name should length no longer 15.'];
    }
  }

  if (!values.password) {
    errors.password = ['Password is required.'];
  } else {
    if (values.password !== values.password_confirmation) {
      errors.password = ['Password invalid confirm.'];
    }
  }

  return errors;
}

export default validateRegistrationForm;