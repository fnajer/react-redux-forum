import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import isEmail from 'validator/lib/isEmail';

const RenderField = ({
  type, input, meta: { touched, error }
}) => ((
  <Fragment>
    <input type={type} {...input} className={error && touched ? 'form-control is-invalid' : 'form-control'} />
    {
      touched && error && error.map((e, index) => (
        <span key={index} className="invalid-feedback">
          <strong>{e}</strong>
        </span>
      ))
    }
  </Fragment>
));

const RegisterForm = ({ handleSubmit, submitting, valid }) => (
  <div className="card">
    <div className="card-header">Register</div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-4 col-form-label text-md-right">Name</label>
          <div className="col-md-6">
            <Field component={RenderField} id="name" type="text" name="name" required autoFocus />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
          <div className="col-md-6">
            <Field component={RenderField} id="email" type="email" name="email" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label text-md-right">Password</label>
          <div className="col-md-6">
            <Field component={RenderField} id="password" type="password" name="password" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password_confirmation" className="col-sm-4 col-form-label text-md-right">Confirm password</label>
          <div className="col-md-6">
            <Field component={RenderField} id="password_confirmation" type="password" name="password_confirmation" required />
          </div>
        </div>
        <div className="form-group row mb-0">
          <div className="col-md-8 offset-md-4">
            <button type="submit" className="btn btn-primary"
              disabled={!valid || submitting} >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

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

export default reduxForm({
  form: 'register-form',
  validate: validateRegistrationForm,
})(RegisterForm);
