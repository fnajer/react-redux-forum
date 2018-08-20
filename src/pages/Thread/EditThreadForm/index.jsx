import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RenderField from '../../../components/RenderField';
import RenderTextField from '../../../components/RenderTextField';

const EditThreadForm = ({ handleSubmit, submitting }) => ((
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <Field type="text" component={RenderField} name="title" />
    </div>
    <div className="form-group">
      <Field type="text" component={RenderTextField} name="body" />
    </div>
    <button type="submit" disabled={submitting} className="btn btn-info float-right">Update Thread</button>
  </form>
));

export default reduxForm({
  'form': 'edit-thread-form',
})(EditThreadForm);