const validateCreateThreadForm = (values) => {
  let errors = {};

  if (!values.title) {
    errors.title = ['The title field is required.'];
  }

  if (!values.body) {
    errors.body = ['The body field is required.'];
  }

  if (!values.channel_id) {
    errors.channel_id = ['The channel_id field is required.'];
  }

  return errors;
}

export default validateCreateThreadForm;