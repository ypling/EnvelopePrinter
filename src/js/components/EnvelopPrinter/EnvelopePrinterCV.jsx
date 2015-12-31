import React, {PropTypes} from 'react';
import EnvelopeStore from '../../stores/EnvelopeStore';
import EnvelopePrinterApp from './EnvelopePrinterApp.jsx';
import EnvelopeActions from '../../actions/EnvelopeActions';
import Constants from '../../Constants';

function _getStoreState() {
  var receiverAddrs = EnvelopeStore.getReceiverAddrs();
  var senderAddr = EnvelopeStore.getSenderAddr();
  var currentView = EnvelopeStore.getCurrentView();
  var selectedAddr = EnvelopeStore.getSelectedAddr();
  return {
    receiverAddrs: receiverAddrs,
    senderAddr:senderAddr,
    currentView: currentView,
    selectedAddr: selectedAddr
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
    EnvelopeActions.list();
  },
  componentWillUnmount() {
    EnvelopeStore.removeChangeListener(this._onChange);
  },
  componentDidUpdate(){
    if (this.state.currentView  === Constants.EnvelopePrinterAppViews.PRINT) {
      window.print();
      EnvelopeActions.list();
    }
  },
  render() {
    return (
      <EnvelopePrinterApp
        receiverAddrs={this.state.receiverAddrs}
        senderAddr={this.state.senderAddr}
        currentView={this.state.currentView}
        selectedAddr={this.state.selectedAddr}
        />
    );
  }
});
