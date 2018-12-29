import React from 'react';
import '../styles/AdvancedSetting.css'


export class AdvancedSetting extends React.Component {

  render() {
    return (
      <div className="advSettings pt-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card" id="monetize">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8 align-self-center">
                      <span className="align-middle">Monetize Your Content</span>
                    </div>
                    <div className="col-4 align-self-center text-right">
                      <div className="switch-group">
                        <span className="switch switch-sm">
                          <input type="checkbox" className="switch" id="switch-monetize" />
                          <label htmlFor="switch-monetize" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card" id="money">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8 align-self-center">
                      <span className="align-middle">My Money</span>
                    </div>
                    <div className="col-4 align-self-center text-right">
                      {/* eslint-disable-next-line */}
                      <a href="#" data-toggle="modal" data-target="#moneyModal" className="mt-1"><i className="fa fa-angle-right" style={{ fontSize: 26, color: '#54798b' }} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card" id="proContent">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8 align-self-center">
                      <span className="align-middle">Display Content from CertifiedPro Users only</span>
                    </div>
                    <div className="col-4 align-self-center text-right">
                      <div className="switch-group">
                        <span className="switch switch-sm">
                          <input type="checkbox" className="switch" id="switch-proContent" />
                          <label htmlFor="switch-proContent" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card" id="familyFilter">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8 align-self-center">
                      <span className="align-middle">Family Safe Filter (Pin Required)</span>
                    </div>
                    <div className="col-4 align-self-center text-right">
                      <div className="switch-group">
                        <span className="switch switch-sm">
                          <input type="checkbox" className="switch" id="switch-family" />
                          <label htmlFor="switch-family" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}