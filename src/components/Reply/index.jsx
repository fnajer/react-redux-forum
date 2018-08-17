import React from 'react';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import Gravatar from 'react-gravatar';

const Reply = ( { reply }) => {
  const distanceBetweenDate = distanceInWordsStrict(new Date(), reply.owner.created_at);
  return (
    <div className="card mb-3">
      <div className="card-header">
        <Gravatar email={reply.owner.email} className="mr-3 rounded-circle" width="30px" height="30px" />
        <span className="text-sm text-muted">{reply.owner.name}, <b>{distanceBetweenDate} ago</b></span>
      </div>
      <div className="card-body">
        <p className="text-center">{reply.body}</p>
      </div>
    </div>
  );
};

export default Reply;