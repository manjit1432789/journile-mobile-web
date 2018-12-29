import React from 'react';
import '../styles/DepositFunds.css'


export class DepositFunds extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <form action="">
          <div className="row">
            <div className="col-md form-group">
              <small>AMOUNT</small>
              <div className="box7 rounded mt-2">
                <input maxLength={10} type="text" placeholder="γ$21,750,15" className="form-control text-center inputText" />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md form-group">
              <small>REFERENCE</small>
              <div className="box7 rounded mt-2">
                <input maxLength={10} type="text" placeholder="Account Load" className="form-control text-center inputText" />
              </div>
            </div>
          </div>
          <div className="row"><button id="btnSub" style={{ backgroundColor: '#61d837', color: '#ffffff' }} className="btn btn-small mx-auto px-5 mt-3">Deposit</button></div>
          <div className="row mt-3">
          </div>
          <small style={{ fontWeight: 600, color: '#78dace' }} className="d-block text-center"><em>You will be transferred to PayPal to complete transaction</em></small>
        </form>
      </div>
    );
  }
}