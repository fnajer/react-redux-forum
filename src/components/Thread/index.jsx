import React from 'react';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import Gravatar from 'react-gravatar';

const Thread = ( { thread }) => {
  const distanceBetweenDate = distanceInWordsStrict(new Date(), thread.creator.created_at);
  return (
    <div className="card mb-3">
      <div className="card-header">
        <Gravatar email={thread.creator.email} className="mr-3 rounded-circle" width="30px" height="30px" />
        <span className="text-sm text-muted">{thread.creator.name}, <b>{distanceBetweenDate} ago</b></span>
        <a href="" className="btn btn-info btn-xs float-right">view thread</a>
      </div>
      <div className="card-body">
        <h5 className="text-center">{thread.title}</h5>
        <p className="text-center">
          {`${thread.body.substr(0, 90)}...`}
        </p>
      </div>
      <div className="card-footer text-muted">
        <span>{thread.replies_count} replies</span>
        <a href="" className="btn btn-primary float-right btn-xs">{thread.channel.name}</a>
      </div>
    </div>
  );
};

export default Thread;