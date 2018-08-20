import React from 'react';
import { reduxForm, Field } from 'redux-form';

import RenderTextField from '../../../components/RenderTextField';

const CreateReplyForm = ({ handleSubmit, reset, submitting, invalid }) => {
  return (
    <div className="modal fade" id="createReply" tabIndex={-1} role="dialog" aria-labelledby="createReplyLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createThreadLabel">Create Reply</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <Field component={RenderTextField} name="body" autoFocus />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={reset} data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-info" disabled={submitting || invalid}>Create Reply</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'create-reply-form',
})(CreateReplyForm);