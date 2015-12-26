import React, {PropTypes} from 'react';
import Constants from '../Constants';
import ListView from './ListView.jsx';
import EditView from './EditView.jsx';
import PrintView from './PrintView.jsx';
import AddView from './AddView.jsx';

export default React.createClass({
  render() {
    console.log(this.props);
    var view;
    switch (this.props.currentView) {
      case Constants.EnvelopePrinterAppViews.LIST:
        view = <ListView receiverAdds={this.props.receiverAdds}/>;
        break;
      case Constants.EnvelopePrinterAppViews.EDIT:
        view = <EditView receiverAdd={this.props.currentReceiverAdd}/>;
        break;
      case Constants.EnvelopePrinterAppViews.PRINT:
        view = <PrintView receiverAdd={this.props.currentReceiverAdd}/>;
        break;
      case Constants.EnvelopePrinterAppViews.ADD:
        view = <AddView />;
        break;
    }

    return (
      <div>
        {view}
      </div>
    );
  }
});
