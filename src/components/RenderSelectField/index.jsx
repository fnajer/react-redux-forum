import React, { Fragment } from 'react';

const RenderSelectField = ({
  input, meta: { error, touched }, children
}) => ((
  <Fragment>
    <select {...input} className={error && touched ? 'form-control is-invalid' : 'form-control'}>
      {children}
    </select>
    {
      touched && error && error.map((e, index) => (
        <span key={index} className="invalid-feedback">
          <strong>{e}</strong>
        </span>
      ))
    }
  </Fragment>
));

export default RenderSelectField;