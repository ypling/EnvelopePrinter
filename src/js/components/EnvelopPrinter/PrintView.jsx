import React from 'react';
import Actions from '../../actions/EnvelopeActions';

export default React.createClass({

  render() {
    let receiverAddr = this.props.receiverAddr.data;
    let senderAddr=this.props.senderAddr.data;
    let receiverAddress = <span>{receiverAddr.line1}</span>;
    let senderAddress = <span>{senderAddr.line1}</span>;
    if (receiverAddr.line2) {
      receiverAddress = <span>{receiverAddr.line2} <br/>{receiverAddr.line1}</span>;
    }
    if (senderAddr.line2) {
      senderAddress = <span>{senderAddr.line2} <br/>{senderAddr.line1}</span>;
    }
    return (
      <div>
        <div className="senderAddress">
          <p>
            {senderAddr.fullName}<br/>
            {senderAddress} <br/>
            {senderAddr.city}, {senderAddr.state}, {senderAddr.ZIP} <br/>
            {senderAddr.country}
          </p>
        </div>
        <div className="receiverAddress">
          <p>
            {receiverAddr.fullName}<br/>
            {receiverAddress} <br/>
            {receiverAddr.city}, {receiverAddr.state}, {receiverAddr.ZIP} <br/>
            {receiverAddr.country}
          </p>
        </div>
      </div>
    );
  }
});
