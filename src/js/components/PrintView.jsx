import React from 'react';
import Actions from '../actions/EnvelopeActions';

export default React.createClass({

  render() {
    let receiverAdd = this.props.receiverAdd.data;
    let address = <span>{receiverAdd.line1}</span>;
    if (receiverAdd.line2) {
      address = <span>{receiverAdd.line2} <br/>{receiverAdd.line1}</span>;
    }
    return (
      <div>
        <div className="sendAddress">
          <p>
            Lane International Trading Inc.<br/>
            33155 Transit Ave <br/>
            Union City, CA, 94587 <br/>
          </p>
        </div>
        <div className="receiverAddress">
          <p>
            {receiverAdd.fullName}<br/>
            {address} <br/>
            {receiverAdd.city}, {receiverAdd.state}, {receiverAdd.ZIP} <br/>
            {receiverAdd.country}
          </p>
        </div>
      </div>
    );
  }
});
