import React from 'react';
import '../styles/Categories.css'
import { Link } from 'react-router-dom'
import Common from '../Common'
import $ from 'jquery'


export class Categories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    if(Common.loggedIn()) {
      this.getCategories();
    }
  }

  getCategories() {
    let url = Common.BACKEND + '/api/categories';

    let self = this;
    $('.loading').show();

    $.ajax({
      url: url,
      method: 'GET',
      headers: {
        'x-access-token': Common.getToken(),
        'Content-Type': 'application/json'
      },
      success: function(data) {
        $('.loading').hide();
        
        self.setState({categories: data});
        console.log('categories', data);
      },
      error: function(error) {
        Common.handleError(error, function() {
          self.getCategories();
        });
      }
    })
  }

  render() {

    const categories = this.state.categories.map(function(item, i) {
      return (
        <div key={item.id} className="col-12 single-category">
          <div className="title">
            <div className="row">
              <div className="col-8 mt-1">
                <Link to={'/categories/' + item.id}>
                  <span>{item.name}</span>
                </Link>
              </div>
              <div className="col-4 text-right">
                <Link to={'/categories/' + item.id}>
                  <img src="/assets/images/angle-right.png" alt="angle-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="postImg mt-2">
            <Link to={'/categories/' + item.id}>
              <img src={Common.BACKEND + item.image_path} className="img-responsive" alt="post" />
            </Link>
          </div>
        </div>
      )
    });

    return (
      <div className="categories">
        <div className="container">
          <div className="row">
            {categories}
          </div>
        </div>
      </div>
    );
  }
}