import React, { Fragment } from 'react';

const RenderTextField = ({
  input, meta: { error, touched }
}) => ((
  <Fragment>
    <textarea {...input} className={error && touched ? 'form-control is-invalid' : 'form-control'} />
    {
      touched && error && error.map((e, index) => (
        <span key={index} className="invalid-feedback">
          <strong>{e}</strong>
        </span>
      ))
    }
  </Fragment>
));

export default RenderTextField;