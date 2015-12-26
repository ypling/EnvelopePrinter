import React, {PropTypes} from 'react';
import EnvelopeStore from '../stores/EnvelopeStore';
import EnvelopePrinterApp from './EnvelopePrinterApp.jsx';

function _getStoreState() {
  var receiverAdds = EnvelopeStore.getReceiverAdds();
  var currentView= EnvelopeStore.getCurrentView();
  var currentReceiverAdd= EnvelopeStore.getCurrentReceiverAdd();
  return {
    receiverAdds: receiverAdds,
    currentView:currentView,
    currentReceiverAdd:currentReceiverAdd
  };
}

export default React.createClass({
  _onChange() {
    this.setState(_getStoreState());
  },
  getInitialState() {
    return _getStoreState();
  },

  componentDidMount() {
    EnvelopeStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    EnvelopeStore.removeChangeListener(this._onChange);
  },

  render() {

    return (
      <EnvelopePrinterApp
        receiverAdds={this.state.receiverAdds}
        currentView={this.state.currentView}
        currentReceiverAdd={this.state.currentReceiverAdd}
        />
    );
  }
});
