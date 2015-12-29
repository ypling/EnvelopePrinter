import React from 'react';
import EnvelopeActions from '../../actions/EnvelopeActions';

export default React.createClass({

  _editClickHandler(e){
    EnvelopeActions.edit(this.props.receiverAddr)
  },

  _printClickHandler(e){
    EnvelopeActions.print(this.props.receiverAddr);
  },
  _deleteClickHandler(e){
    EnvelopeActions.remove(this.props.receiverAddr);
  },

  render() {
    let receiverAddr=this.props.receiverAddr.data;
    return (
      <tr className="task">
        <td>
          {receiverAddr.fullName}
        </td>
        <td>
          {receiverAddr.line1+', '+receiverAddr.city+', '+receiverAddr.state}
        </td>
        <td>
          <button className="btn" onClick={this._editClickHandler}>
            <span className="glyphicon glyphicon-pencil"></span>
            Edit
          </button>
        </td>
        <td>
          <button className="btn" onClick={this._printClickHandler}>
            <span className="glyphicon glyphicon-print"></span>
            Print
          </button>
        </td>
        <td>
          <button className="btn" onClick={this._deleteClickHandler}>
            <span className="glyphicon glyphicon-remove"></span>
            Delete
          </button>
        </td>
      </tr>
    );
  }
});
