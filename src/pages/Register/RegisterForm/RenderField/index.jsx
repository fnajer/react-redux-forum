import React, { Fragment } from 'react';

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

export default RenderField;