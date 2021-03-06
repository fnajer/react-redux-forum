import React from 'react';
import { reduxForm, Field } from 'redux-form';

import RenderField from '../../../components/RenderField';
import RenderTextField from '../../../components/RenderTextField';
import RenderSelectField from '../../../components/RenderSelectField';

import validateCreateThreadForm from './helpers';

const CreateThreadForm = ({ channels, handleSubmit, submitting, reset, invalid }) => ((
  <div className="modal fade" id="createThread" tabIndex={-1} role="dialog" aria-labelledby="createThreadLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="createThreadLabel">Create Thread</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field component={RenderField} name="title" autoFocus />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <Field component={RenderTextField} name="body" />
            </div>
            <div className="form-group">
              <label htmlFor="channel">Channel</label>
              <Field component={RenderSelectField} name="channel_id">
                {channels.map(channel => <option key={channel.id} value={channel.id}>{channel.name}</option>)}            
              </Field>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={reset} data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-info" disabled={submitting || invalid}>Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
));

export default reduxForm({
  form: 'create-thread-form',
  validate: validateCreateThreadForm,
})(CreateThreadForm);