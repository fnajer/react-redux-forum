import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = ({ pristine, handleSubmit, submitting, error }) => (
  <div className="card">
    <div className="card-header">Login</div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
          <div className="col-md-6">
            <Field id="email" component="input" type="email" className="form-control" name="email" required autoFocus />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label text-md-right">Password</label>
          <div className="col-md-6">
            <Field id="password" component="input" type="password" className="form-control" name="password" required />
          </div>
        </div>
        <div className="form-group row mb-0">
          <div className="col-md-8 offset-md-4">
            {
              error &&
              <p className="text-danger font-weight-bold mb-2">{error}</p>
            }
            <button disabled={pristine || submitting} type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'login-form'
})(LoginForm);
