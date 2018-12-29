import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Channels.css'
import Common from '../Common'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { countries } from '../data/countries'
import { continents } from '../data/continents'
import $ from 'jquery'


export class Channels extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      channelSource: [],
      channelData: [],
      countrySource: [],
      countryData: [],
      continent: null,
      country: null,
      selected_ids: []
    }
  }

  componentDidMount() {
    if(Common.loggedIn()) {
      this.getCategories();
      this.getCountries();
    }
  }

  getCategories() {
    let url = Common.BACKEND + '/api/channels';

    let self = this;
    $('.loading').show();

    $.ajax({
      url: url,
      method: 'GET',
      headers: {
        'x-access-token': Common.getToken(),
        'Content-Type': 'application/json'
      },
      success: function (data) {
        $('.loading').hide();

        self.setState({ channelSource: data, channelData: data });
        console.log('channels', data);
      },
      error: function (error) {
        Common.handleError(error, function() {
          self.getCategories();
        });
      }
    });
  }

  getCountries() {
    let url = Common.BACKEND + '/api/countries';

    let self = this;
    $('.loading').show();

    $.ajax({
      url: url,
      method: 'GET',
      headers: {
        'x-access-token': Common.getToken(),
        'Content-Type': 'application/json'
      },
      success: function (data) {
        $('.loading').hide();

        self.setState({ countrySource: data });
      },
      error: function (error) {
        Common.handleError(error, function() {
          self.getCountries();
        });
      }
    });
  }

  onSelectContinent(event) {
    this.setState({continent: event.value, country: null});

    let filteredCountries = [];
    for (let i = 0; i < countries.length; i++) {
      let row = countries[i];
      if (row.continent === event.value) {
        filteredCountries.push({value: row.country, label: row.country});
      }
    }
    this.setState({countryData: filteredCountries});
  }

  onSelectCountry(event) {
    this.setState({ country: event.value });

    let channelData = [];
    for (let i = 0; i < this.state.countrySource.length; i++) {
      let row = this.state.countrySource[i];
      if (row.name === event.value) {
        for (let j = 0; j < this.state.channelSource.length; j++) {
          let channel = this.state.channelSource[j];
          if(channel.country_id === row.id) {
            channelData.push(channel);
          }
        }
      }
    }
    this.setState({channelData: channelData});
  }

  onSelectChannel(id) {
    console.log('select', id);

    let selected_ids = this.state.selected_ids;
    let index = selected_ids.indexOf(id);
    if(index > -1) {
      selected_ids.splice(index, 1);
    } else {
      selected_ids.push(id);
    }
    this.setState({selected_ids: selected_ids});
  }

  render() {
    let self = this;

    const channels = this.state.channelData.map(function(item) {
      return (
        <div key={item.id} className="single_chanel">
          <div onClick={self.onSelectChannel.bind(self, item.id)} style={{height: '100%'}}>
            <img src={Common.BACKEND + item.logopath} width='80%' height='100%' alt="" />
            { self.state.selected_ids.indexOf(item.id) > -1 ?
              <i className="fa fa-check channel-check"></i>
            : null}
          </div>
        </div>
      );
    });

    return (
      <div className="channels-container">
        <div>
          <table style={{width: '100%'}}>
            <tbody>
              <tr>
                <td style={{width: '45%'}}>
                  <Dropdown options={continents} onChange={this.onSelectContinent.bind(this)} value={this.state.continent} placeholder="Continents" />
                </td>
                <td style={{ width: '10%' }}>
                </td>
                <td style={{ width: '45%' }}>
                  <Dropdown options={this.state.countryData} onChange={this.onSelectCountry.bind(this)} value={this.state.country} placeholder="Countries" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <div className="chanle_list_header">
            <ul>
              <li>
                <Link className="channel-link" to="#">{this.state.selected_ids.length} of {this.state.channelData.length}</Link>
              </li>
              <li>
                <Link className="channel-link" to="#">{this.state.channelSource.length} Available</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="chanel_img_area">
          {channels}
        </div>
      </div>
    );
  }
}