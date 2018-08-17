import React from 'react';
import { connect } from 'react-redux';

import loadingGif from '../../loading.gif';
import getChannels from '../../store/actions/channels';

import ChannelsList from './ChannelsList';

class ChannelsContainer extends React.Component {
  componentWillMount() {
    this.props.getChannels();
  }
  render() {
    return (
      <div>
        {
          !this.props.loading &&
          <ChannelsList channels={this.props.channels} />
        }
        {
          this.props.loading &&
          <div className="text-center">
            <img src={loadingGif} width="40px" height="40px" alt=""/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.channels.data,
  loading: state.channels.loading,
});

const mapDispatchToProps = dispatch => ({
  getChannels: () => {
    dispatch(getChannels());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer);
