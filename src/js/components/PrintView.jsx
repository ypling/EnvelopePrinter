import React from 'react';
import Actions from '../actions/EnvelopeActions';

export default React.createClass({
  _editClickHandler(){
    Actions.edit();
  },
  render() {
    return (
      <div>
        PrintView
      </div>
    );
  }
});
