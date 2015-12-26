import React from 'react';
import Actions from '../actions/EnvelopeActions';
import ReceiverAdd from './ReceiverAdd.jsx'

export default React.createClass({
  _addClickHandler(){
    Actions.add();
  },
  render() {
    return (
      <div>
        <ul>
          {this.props.receiverAdds.map((receiverAdd,index)=>
              <ReceiverAdd receiverAdd={receiverAdd}  key={index}/>
          )}
        </ul>
        <button onClick={this._addClickHandler}>add</button>
      </div>
    );
  }
});
