import React from 'react';
import { connect } from 'react-redux';
import { parse } from '../../lib/query-string';

import getChannels from '../../store/actions/channels';
import { changeQueryParam } from '../../store/actions/router';

import ChannelsList from './ChannelsList';
import Loader from '../../components/Loader';

class ChannelsContainer extends React.Component {
  componentWillMount() {
    this.props.getChannels();
  }
  render() {
    return (
      <div>
        {
          !this.props.loading &&
          <ChannelsList 
            channels={this.props.channels} 
            selectedChannel={this.props.selectedChannel}
            setQueryChannel={this.props.setQueryChannel}
          />
        }
        {
          this.props.loading &&
          <Loader />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.channels.data,
  loading: state.channels.loading,
  selectedChannel: parse(state.router.location.search).channel,
});

const mapDispatchToProps = dispatch => ({
  getChannels: () => {
    dispatch(getChannels());
  },
  setQueryChannel: (slug) => {
    return dispatch(changeQueryParam('channel', slug));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer);
