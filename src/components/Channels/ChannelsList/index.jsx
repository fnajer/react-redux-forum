import React from 'react';
import CheckedIcon from '../../../components/CheckedIcon';

const ChannelsList = ({ channels, selectedChannel, setQueryChannel }) => (
  <ul className="list-group">
    {
      channels.map(channel => (
        <li 
          key={channel.id} 
          className="list-group-item"
          onClick={() => setQueryChannel(channel.slug)}
        >
          {
            selectedChannel === channel.slug &&
            <CheckedIcon />
          }
          {channel.name}
        </li>
      ))
    }
  </ul>
);

export default ChannelsList;