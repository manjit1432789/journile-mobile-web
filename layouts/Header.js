import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import Common from '../Common';


export default class Header extends React.Component {

  static instance = null;

  constructor(props) {
    super(props);

    this.state = {
      pathname: '/',
      headerTitle: 'Journile',
      loggedIn: false,
      user: Common.getUser(),
      redirecting: false,
    }

    Header.instance = this;
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
    this.refreshUI();
  }
  
  componentWillUpdate() {
    this.refreshUI();
  }

  refreshUI() {
    this.refreshNavItemActive();
    let pathname = window.location.pathname;
    if (pathname.indexOf('auth') > -1) {
      document.getElementById("headerContainer").style.display = 'none';
      document.getElementById("footerContainer").style.display = 'none';
    } else {
      if(!Common.loggedIn() && pathname !== '/' && !this.state.redirecting) {
        this.setState({redirecting: true});
        window.location.replace("/auth/login");
      }
      document.getElementById("headerContainer").style.display = 'block';
      document.getElementById("footerContainer").style.display = 'block';
    }
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "280px";
  }

  closeNav() {
    if(this.state.user !== null) {
      document.getElementById("mySidenav").style.width = "0";
    }
  }

  refreshNavItemActive() {
    let self = this;
    if (this.state.pathname !== window.location.pathname) {
      this.closeNav();
    }

    window.setTimeout(function () {
      self.setState({
        pathname: window.location.pathname,
        loggedIn: Common.loggedIn()
      });
    }, 1);
  }

  logout() {
    this.closeNav();
    Common.logout();
  }

  render() {
    // let headerTitle = this.state.headerTitle;
    const pathname = this.state.pathname;
    let controlData = {
      "home": {
        className: "p-2 controlHome",
        pathname: "/",
        imgname: "home",
        title: "Journile"
      },
      "notification": {
        className: "p-2 controlNotifi",
        pathname: "/notification",
        imgname: "notification",
        title: "Notification"
      },
      "channels": {
        className: "p-2 controlChannels",
        pathname: "/channels",
        imgname: "channels",
        title: "Channels"
      },
      "setting": {
        className: "p-2 controlSettings",
        pathname: "/setting",
        imgname: "setting",
        title: "Setting"
      },
      "profile": {
        className: "p-2 controlProfile",
        pathname: "/profile",
        imgname: "profile-icon",
        title: "Profile"
      },
      "explore": {
        className: "p-2 controlSearch",
        pathname: "/explore",
        imgname: "search-icon",
        title: "Search"
      },
      "advanced_setting": {
        pathname: '/advanced_setting',
        title: "Advanced Setting"
      },
      "cagtegories": {
        pathname: '/categories',
        title: "Categories"
      },
      "contactus": {
        pathname: '/contactus',
        title: "Contact Us"
      },
      "engagements": {
        pathname: '/engagements',
        title: "Profile"
      },
      "media": {
        pathname: '/media',
        title: "Profile"
      },
      "news_details": {
        pathname: '/news_details',
        title: "News"
      },
      "privacy_setting": {
        pathname: '/privacy_setting',
        title: "Privacy Setting"
      },
      "readers": {
        pathname: '/readers',
        title: "Profile"
      },
      "reading": {
        pathname: '/reading',
        title: "Profile"
      },
      "reissue": {
        pathname: '/reissue',
        title: "Profile"
      },
      "myads": {
        pathname: '/myads',
        title: "My Ads"
      },
      "buynewad": {
        pathname: '/buynewad',
        title: "Buy New Ad"
      },
      "newping1": {
        pathname: '/newping1',
        title: "New Ping"
      },
      "newping2": {
        pathname: '/newping2',
        title: "New Ping"
      },
      "newping3": {
        pathname: '/newping3',
        title: "New Ping"
      },
      "mymoney": {
        pathname: '/mymoney',
        title: "My Wallet"
      },
      "deposit_funds": {
        pathname: '/deposit_funds',
        title: "Deposit Funds"
      },
      "withdraw_funds": {
        pathname: '/withdraw_funds',
        title: "Withdraw Funds"
      },
      "donate_funds": {
        pathname: '/donate_funds',
        title: "Donate Funds"
      },
      "deposits_completed": {
        pathname: '/deposits_completed',
        title: "Deposits Completed"
      },
      "donations_received": {
        pathname: '/donations_received',
        title: "Donations Received"
      },
      "donations_sent": {
        pathname: '/donations_sent',
        title: "Donations Sent"
      },
      "withdrawals_completed": {
        pathname: '/withdrawals_completed',
        title: "Withdrawals Completed"
      },
      "edit_profile": {
        pathname: '/edit_profile',
        title: "Edit Profile"
      },
    };
    for(let key in controlData) {
      let row = controlData[key];
      let active = false;
      if(row.pathname === '/') {
        active = pathname === '/';
      } else {
        active = pathname.indexOf(row.pathname) > -1;
        if(!Common.loggedIn()) row.pathname = '/auth/login';
      }
      row.className += active ? " active" : "";
      row.imgpath = "/assets/images/";
      row.imgpath += active ? "a_" : "";
      row.imgpath += row.imgname + ".png";

      // if(active) {
      //   headerTitle = controlData[key].title;
      // }
    }

    let profilepic = '/assets/images/avatar.png';
    try {
      profilepic = Common.BACKEND + this.state.user.profilepic;
      if (this.state.user.profilepic === '') {
        profilepic = '/assets/images/avatar.png';
      }
    }
    catch(e) {}
    let setting = Common.getSetting();
    let logoSrc = setting.theme === 'day' ? "/assets/images/logo-day.png" : "/assets/images/logo-night.png";

    return (
      <div id="headerContainer">
        {/* Sidebar */}
        {this.state.user !== null ?
          <div id="mySidenav" className="sidenav">
            <button className="closebtn" onClick={this.closeNav.bind(this)}>×</button>
            <div>
              <div className="user_a_profile">
                <img src="/assets/images/mnoile_nav_bg.png" alt="" />
                <div className="ac_user_info">
                  <Link to="/profile">
                    <div className="user_img_a_m">
                      <img src={profilepic} alt="" />
                    </div>
                    <div className="user_name_m">
                      <h3>{this.state.user.firstname} {this.state.user.lastname}</h3>
                      <p>{this.state.user.email}</p>
                    </div>
                  </Link>
                </div>
                <div className="mobile_s_a_nav">
                  <ul>
                    <li><Link to="/profile">Memos <span>{this.state.user.memoscount}</span></Link></li>
                    <li><Link to="/reading">Reading <span>{this.state.user.readingcount}</span></Link></li>
                    <li><Link to="/readers">Readers <span>{this.state.user.readerscount}</span></Link></li>
                  </ul>
                </div>
              </div>
              <div className="mobile_menu_inner">
                <div className="mobile_nav">
                  <ul>
                    <li>
                      <Link to="/profile">
                        <img src="/assets/images/user_p_m.png" alt="" />Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories">
                        <img src="/assets/images/menu_icon-1.png" alt="" />Categories
                      </Link>
                    </li>
                    <li>
                      <Link to="/newping1">
                        <img src="/assets/images/icon_messages.png" alt="" />New ping
                      </Link>
                    </li>
                    <li>
                      <Link to="/mymoney">
                        <img src="/assets/images/icon_2.png" alt="" />
                        <img src="/assets/images/dollar_icon.png" className="mar_l_m" alt="" />My money
                      </Link>
                    </li>
                    <li>
                      <Link to="/myads">
                        <img src="/assets/images/menu_icon-3.png" alt="" />My Ads
                      </Link>
                    </li>
                    <li>
                      <Link to="/setting">
                        <img src="/assets/images/menu_icon-2.png" alt="" />Setting
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactus">
                        <img src="/assets/images/menu_icon-4.png" alt="" />Help
                      </Link>
                    </li>
                    <li>
                      <Link to="#" onClick={this.logout.bind(this)}>
                        <img src="/assets/images/menu_icon-5.png" alt="" />Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          :
          null
        }
        {/* Navigation */}
        <div className="navigation">
          <div className="container">
            <div className="d-flex justify-content-between text-center  my-3 ">
              <div className="p-2 navAvatar">
                {this.state.user !== null ?
                  <button className="link-button" onClick={this.openNav}>
                    <img src={profilepic} style={{ width: 30, height: 30, borderRadius: 15 }} alt="" />
                  </button>
                  :
                  null
                }
              </div>
              <div className="navSection">
                {/* {headerTitle} */}
                <img src={logoSrc} height="45px" alt="" />
              </div>
              <div className="p-2 navMemo">
                {this.state.user !== null ?
                  <Link to="#" data-toggle="modal" data-target="#newMemoModal"><img src="/assets/images/note-memo.png" alt="" /></Link>
                  : null
                }
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="container">
            <div className="d-flex justify-content-between text-center nav-icon-container my-3 ">
              <div className={controlData.home.className}>
                <Link to={controlData.home.pathname}>
                  <img src={controlData.home.imgpath} alt="" />
                </Link>
              </div>
              <div className={controlData.notification.className}>
                <Link to={controlData.notification.pathname}>
                  <img src={controlData.notification.imgpath} alt="" />
                </Link>
              </div>
              <div className={controlData.channels.className}>
                <Link to={controlData.channels.pathname}>
                  <img src={controlData.channels.imgpath} alt="" />
                </Link>
              </div>
              <div className={controlData.profile.className}>
                <Link to={controlData.profile.pathname}>
                  <img src={controlData.profile.imgpath} alt="" />
                </Link>
              </div>
              <div className={controlData.explore.className}>
                <Link to={controlData.explore.pathname}>
                  <img src={controlData.explore.imgpath} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}