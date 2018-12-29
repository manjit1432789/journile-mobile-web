import React from 'react';
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import '../styles/BuyNewAd.css'


export class BuyNewAd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 0
    }
  }

  handleBack(event) {
    let page = this.state.page;
    page -= 1;
    this.setState({page: page});
  }

  handleNext(event) {
    let page = this.state.page;
    page += 1;
    this.setState({ page: page });
  }

  handleBuy(event) {
    
  }

  render() {
    const durations = [
      { value: '1 DAY TRIAL (FREE)', label: '1 DAY TRIAL (FREE)' },
      { value: '1 WEEK ($100)', label: '1 WEEK ($100)' },
      { value: '1 MONTH ($180)', label: '1 MONTH ($180)' },
      { value: '3 MONTHS ($540)', label: '3 MONTHS ($540)' },
      { value: '6 MONTHS ($1,000)', label: '6 MONTHS ($1,000)' },
    ];

    const categories = [
      { value: 'POLITICS', label: 'POLITICS' },
      { value: 'SPORTS', label: 'SPORTS' },
      { value: 'BUSINESS', label: 'BUSINESS' },
      { value: 'TRAVEL', label: 'TRAVEL' },
    ];

    const martial_status = [
      { value: 'MARRIED', label: 'MARRIED' },
      { value: 'DIVORCED', label: 'DIVORCED' },
      { value: 'SINGLE', label: 'SINGLE' },
      { value: 'CO-HABITATIONAL', label: 'CO-HABITATIONAL' },
    ];

    const demographics = [
      { value: '16 - 21', label: '16 - 21' },
      { value: '21 - 29', label: '21 - 29' },
      { value: '30 - 38', label: '30 - 38' },
      { value: '38 - 45', label: '38 - 45' },
      { value: '45 - 65', label: '45 - 65' },
    ];

    const genders = [
      { value: 'MALE', label: 'MALE' },
      { value: 'FEMALE', label: 'FEMALE' },
      { value: 'OTHER', label: 'OTHER' },
    ];

    const face_colors = [
      { value: 'WHITE', label: 'WHITE' },
      { value: 'AFRICAN', label: 'AFRICAN' },
      { value: 'MIXED RACE', label: 'MIXED RACE' },
      { value: 'INDIAN', label: 'INDIAN' },
      { value: 'OTHER', label: 'OTHER' },
    ]

    let wizard = null;
    if(this.state.page === 0) {
      wizard = (
        <div id="wizard-1">
          <div className="form-group">
            <small><strong>ENTER MEMO LINK</strong></small>
            <input type="text" className="form-control inputText" />
          </div>
          <div className="form-group">
            <small><strong>10-DIGIT UNIQUE AD ID</strong></small>
            <input maxLength={10} type="text" className="form-control inputText" />
          </div>
          <div className="form-group" style={{ paddingLeft: '0 !important' }}>
            <div className="row">
              <div className="col-6">
                <Dropdown options={durations} placeholder="SELECT DURATION" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.state.page === 1) {
      wizard = (
        <div id="wizard-2" className="mt-3">
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <Dropdown options={categories} placeholder="SELECT CATEGORY" />
              </div>
              <div className="col-6">
                <Dropdown options={martial_status} placeholder="MARITAL STATUS" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.state.page === 2) {
      wizard = (
        <div>
          <div className="row">
            <div className="col-md-5 mb-1"><small><strong>SELECT DEMOGRAPHIC</strong></small></div>
            <div className="col-md-2">
            </div>
            <div className="col-md-5">
              <div className="form-group" style={{ margin: '0 !important' }}>
                <div className="row">
                  <div className="col-6">
                    <Dropdown options={demographics} value="16 - 21" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-1"><small><strong>SELECT GENDER</strong></small></div>
            <div className="col-md-2">
            </div>
            <div className="col-md-5">
              <div className="form-group" style={{ margin: '0 !important' }}>
                <div className="row">
                  <div className="col-6">
                    <Dropdown options={genders} value="MALE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-1"><small><strong>SELECT ETHNICITY</strong></small></div>
            <div className="col-md-2">
            </div>
            <div className="col-md-5">
              <div className="form-group" style={{ margin: '0 !important' }}>
                <div className="row">
                  <div className="col-6">
                    <Dropdown options={face_colors} value="WHITE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{padding: '0 20px'}}>
        <div className="text-center mb-2">
          <small className="step-label">{this.state.page + 1} OF 3</small>
        </div>
        {wizard}
        <div className="mt-5">
          <span>&nbsp;</span>
          {this.state.page !== 0 ?
            <button className="btn btn-small btnSub" style={{ marginLeft: -4, backgroundColor: '#50cb6d', color: '#ffffff', width: '8rem' }}
              onClick={this.handleBack.bind(this)}>Back</button>
          : null}
          {this.state.page !== 2 ?
            <button className="btn btn-small float-right btnSub" style={{ backgroundColor: '#50cb6d', color: '#ffffff', width: '8rem' }}
              onClick={this.handleNext.bind(this)}>Next</button>
          : 
            <button className="btn btn-small float-right btnSub" style={{ backgroundColor: '#50cb6d', color: '#ffffff', width: '8rem' }}
              onClick={this.handleBuy.bind(this)}>Buy</button>
          }
        </div>
        <div className="row mt-5">
          <Link to="/myads" className="mx-auto mt-3">
            <small style={{ color: '#4e7182' }}>
              Return to <strong id="strongLink" style={{ color: '#72ebe7' }}>MyAds</strong>
            </small>
          </Link>
        </div>
      </div>
    );
  }
}