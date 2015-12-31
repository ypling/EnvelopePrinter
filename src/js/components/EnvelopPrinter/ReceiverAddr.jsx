import React from 'react';
import EnvelopeActions from '../../actions/EnvelopeActions';

export default React.createClass({

  _editClickHandler(){
    EnvelopeActions.edit(this.props.receiverAddr)
  },
  _printClickHandler(){
    EnvelopeActions.print(this.props.receiverAddr);
  },
  _deleteClickHandler(){
    EnvelopeActions.remove(this.props.receiverAddr);
  },

  render() {
    let receiverAddr = this.props.receiverAddr.data;
    return (
      <tr className="task">
        <td>
          {receiverAddr.fullName}
        </td>
        <td>
          {receiverAddr.line1 + ', ' + receiverAddr.city + ', ' + receiverAddr.state}
        </td>
        <td>
          <div>
            <button className="btn" onClick={this._editClickHandler}>
              <span className="glyphicon glyphicon-pencil"></span> Edit
            </button>  <button className="btn" onClick={this._printClickHandler}>
              <span className="glyphicon glyphicon-print"></span> Print
            </button>  <button className="btn" onClick={this._deleteClickHandler}>
              <span className="glyphicon glyphicon-remove"></span> Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
});
