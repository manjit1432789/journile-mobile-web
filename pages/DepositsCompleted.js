import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/DepositsCompleted.css'


export class DepositsCompleted extends React.Component {

  render() {
    return (
      <div className="container-fluid mb-5 deposits-completed">
        <div className="row">
          <div className="col-md-6">
            <small>YOUR BALANCE:</small>
            <div className="box7 rounded mt-2">
              <h6 className="text-center">γ$21,750,15</h6>
            </div>
          </div>
        </div>
        <div className="row rounded m-0 my-3" style={{ backgroundColor: '#4ad2a1' }}>
          <div className="col-md-3 pt-3" style={{ color: 'white' }}>
            <small><strong>Deposits Completed</strong></small>
            <span className="float-right">γ$571</span>
          </div>
          <div className="col-md-9 p-3">
            <img src="/assets/images/modals/table.jpg" alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div style={{ backgroundColor: '#e4f6f8', padding: '1rem', borderRadius: '0.5rem' }} className="my-4">
          <small><strong>History</strong></small>
          <table className="money-history table table-sm rounded table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>28/07/2018</td>
                <td>γ$71 Deposited with ref: 7Y42QM</td>
                <td>
                  <i className="mr-2 far fa-trash-alt" style={{ color: '#475368' }} />
                </td>
              </tr>
              <tr>
                <td>28/07/2018</td>
                <td>γ$71 Deposited with ref: 7Y42QM</td>
                <td>
                  <i className="mr-2 far fa-trash-alt" style={{ color: '#475368' }} />
                </td>
              </tr>
              <tr>
                <td>28/07/2018</td>
                <td>γ$71 Deposited with ref: 7Y42QM</td>
                <td>
                  <i className="mr-2 far fa-trash-alt" style={{ color: '#475368' }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <small style={{ fontWeight: 600 }} className="d-block text-center">Return to <Link to="/mymoney">MyWallet</Link></small>
      </div>
    );
  }
}