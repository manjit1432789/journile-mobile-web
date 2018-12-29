import React from 'react';
import '../styles/Category.css'
import { Link } from 'react-router-dom'
import Common from '../Common'
import Truncate from 'react-truncate';
import renderHTML from 'react-render-html';
import $ from 'jquery'
import { PostCarousel } from '../components/PostCarousel';


export class Category extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categoryId: props.match.params.id,
      offset: 0,
      posts: [],
      ismore: false,
      isfirst: true
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate() {
    $('.post-image').each(function(i, item) {
      $(item).on('error', function() {
        $(this).attr('src', Common.getRandomPostImage());
      });
    });

    // $('.carousel').carousel();
  }

  getPosts() {
    let url = Common.BACKEND + '/api/posts/postsByCategoryId';
    url += '/' + this.state.categoryId;
    url += '/' + this.state.offset;
    console.log(url);

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

        let posts = self.state.posts;
        posts = posts.concat(data);
        let ismore = data.length === 0 ? false : true;
        self.setState({
          posts: posts,
          ismore: ismore,
          isfirst: ismore
        });
        console.log('posts', posts);
      },
      error: function (error) {
        Common.handleError(error, function() {
          self.getPosts();
        });
      }
    })
  }

  handleReadMore() {
    this.setState({
      offset: this.state.offset + 1
    });

    let self = this;
    window.setTimeout(function() {
      self.getPosts();
    }, 10);
  }

  handleReadLatest() {
    this.setState({
      offset: 0,
      ismore: false,
      posts: []
    });

    let self = this;
    window.setTimeout(function () {
      self.getPosts();
    }, 10);
  }

  render() {
    let posts = [];
    if (!this.state.isfirst) {
      posts = (
        <div className="text-center mt-5" style={{width: '100%'}}>
          <span style={{fontSize: 18, fontWeight: 'bold'}}>No Post Found</span>
          <div className="mt-2">
            Return <Link to="/" className="normal-link">home</Link>
          </div>
        </div>
      );
    } else {
      posts = this.state.posts.map(function (item, i) {

        return (
          <div key={'post-' + i} className="col-12 singlePost mb-4">
            <div className="title">
              <div className="row">
                <div className="col-12 mt-1">
                  <Link to={"/news_details/" + item.id}>
                    <span>{item.heading}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="postImg mt-2">
              <PostCarousel data={item} />
            </div>
            <div className="info mt-3 post-info">
              <div className="row">
                <div className="col-2 avatar">
                  <Link to="#">
                    <img src={Common.BACKEND + item.userprofilepic} className="round-avatar-md" alt="small_logo" />
                  </Link>
                </div>
                <div className="col-6 text-left">
                  <div className="postDescName">
                    {item.firstname} {item.lastname}&nbsp;<img src="/assets/images/pro_batch.png" alt="pro_batch" />
                  </div>
                  <span style={{ color: '#0077ff' }} />{item.email}
                    <div className="postTimer">
                    <a href="#category_pop_up" data-toggle="modal" data-target="#newTimeModal">
                      {Common.diff(item.uploadtimestamp)} ago <img src="/assets/images/arrow_down.png" alt="arrow_up" />
                    </a>
                  </div>
                </div>
                <div className="col-4 text-right">
                  <Link to="#"><img src="/assets/images/right.png" alt="arrow_up" /> {item.agreecount}</Link>
                  <Link to="#"><img src="/assets/images/close.png" alt="arrow_up" /> {item.disagreecount}</Link>
                </div>
              </div>
            </div>
            <div className="desc mt-1">
              <div className="row">
                <div className="col-12">
                  <div>
                    <Truncate lines={3} ellipsis={<span>... <Link to='#' className="normal-link">more</Link></span>}>
                      {renderHTML(item.detail)}
                    </Truncate>
                    <Link to="#" className="gamma_c_l">γFriday</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentGammaLinks  d-flex justify-content-between text-left">
              {/* eslint-disable-next-line */}
              <a href="#">γTechGuru</a>
              {/* eslint-disable-next-line */}
              <a href="#">γEngadget</a>
              {/* eslint-disable-next-line */}
              <a href="#">γMyGadgets</a>
            </div>
            <div className="contentGammaOptions d-flex justify-content-between text-center">
              <a href="#categoryModal" data-toggle="modal" data-target="#newTipModal">
                <img src="/assets/images/icon_2.png" alt="" /> <span className="align-middle ml-1">$3.5k</span>
              </a>
              <a href="#reissueModal" data-toggle="modal" data-target="#newReissueModal">
                <img src="/assets/images/icon_reissue.png" alt="" /><span className="align-middle ml-1">50</span>
              </a>
              <a href="#engageModal" data-toggle="modal" data-target="#newEngageModal">
                <img src="/assets/images/icon_respond.png" alt="" /><span className="align-middle ml-1">12</span>
              </a>
              <a href="#pingModal" data-toggle="modal" data-target="#newMailModal">
                <img src="/assets/images/icon_messages.png" alt="" /><span className="align-middle ml-1">100</span>
              </a>
            </div>
          </div>
        )
      });
    }

    return (
      <div className="categories mb-5">
        <div className="container">
          <div className="row">
            <div className="text-center" style={{ width: '100%' }}>
              <button className="can_btn" onClick={this.handleReadLatest.bind(this)}>Load Latest Posts</button>
            </div>
            {posts}
            <div className="text-center" style={{ width: '100%' }}>
              {this.state.ismore ?
                <button className="can_btn" onClick={this.handleReadMore.bind(this)}>Show more results</button>
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}