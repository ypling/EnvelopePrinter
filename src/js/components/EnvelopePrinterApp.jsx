import React, {PropTypes} from 'react';
import Constants from '../Constants';
import ListView from './ListView.jsx';
import EditView from './EditView.jsx';
import PrintView from './PrintView.jsx';
import AddView from './AddView.jsx';

export default React.createClass({
  render() {
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
      <div className="container-fluid">
        <div className="row title">
          <div className="col-lg-12">
            <h1 style={{backgroundColor:'gray',color:'white',textAlign:'center'}}>ReceiverAddress Management</h1>
          </div>
        </div>
        {view}
      </div>
    );
  }
});
