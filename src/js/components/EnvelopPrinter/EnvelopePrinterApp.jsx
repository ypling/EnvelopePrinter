import React, {PropTypes} from 'react';
import Constants from '../../Constants';
import NavBar from '../Common/NavBar.jsx';
import ListView from './ListView.jsx';
import EditView from './EditView.jsx';
import PrintView from './PrintView.jsx';

export default React.createClass({
  render() {
    var view;
    switch (this.props.currentView) {
      case Constants.EnvelopePrinterAppViews.LIST:
        view = <ListView receiverAddrs={this.props.receiverAddrs} senderAddr={this.props.senderAddr}/>;
        break;
      case Constants.EnvelopePrinterAppViews.EDIT:
        view = <EditView selectedAddr={this.props.selectedAddr} />;
        break;
      case Constants.EnvelopePrinterAppViews.PRINT:
        view = <PrintView receiverAddr={this.props.selectedAddr} senderAddr={this.props.senderAddr}/>;
        break;
    }

    return (
      <div className="container-fluid">
        <NavBar title="EnvelopePrinter" titleHref="/envelopePrinter"/>
        {view}
      </div>
    );
  }
});
