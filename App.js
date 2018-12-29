import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast';
import Header from './layouts/Header';
import Common from './Common';
import { Home } from './pages/Home';
import { Notification } from './pages/Notification';
import { Setting } from './pages/Setting';
import { Profile } from './pages/Profile';
import { Explore } from './pages/Explore';
import { Footer } from './layouts/Footer';
import { Login } from './authentication/Login';
import { ForgotPassword } from './authentication/ForgotPassword';
import { AdvancedSetting } from './pages/AdvancedSetting';
import { Categories } from './pages/Categories';
import { Category } from './pages/Category';
import { ContactUs } from './pages/ContactUs';
import { Engagements } from './pages/Engagements';
import { Media } from './pages/Media';
import { NewsDetails } from './pages/NewsDetails';
import { Signup } from './authentication/Signup';
import { Reissue } from './pages/Reissue';
import { Register } from './authentication/Register';
import { Reading } from './pages/Reading';
import { Readers } from './pages/Readers';
import { PrivacySetting } from './pages/PrivacySetting';
import { Ping3 } from './pages/Ping3';
import { Ping2 } from './pages/Ping2';
import { Ping1 } from './pages/Ping1';
import { MyAds } from './pages/MyAds';
import { Channels } from './pages/Channels';
import { BuyNewAd } from './pages/BuyNewAd';
import { StopAds } from './pages/StopAds';
import { ViewAds } from './pages/ViewAds';
import { NewPing1 } from './pages/NewPing1';
import { NewPing2 } from './pages/NewPing2';
import { NewPing3 } from './pages/NewPing3';
import { MyMoney } from './pages/MyMoney';
import { DepositFunds } from './pages/DepositFunds';
import { WithdrawFunds } from './pages/WithdrawFunds';
import { DonateFunds } from './pages/DonateFunds';
import { DepositsCompleted } from './pages/DepositsCompleted';
import { DonationsReceived } from './pages/DonationsReceived';
import { DonationsSent } from './pages/DonationsSent';
import { WithdrawalsCompleted } from './pages/WithdrawalsCompleted';
import { EditProfile } from './pages/EditProfile';
import { ConfirmAccount } from './authentication/ConfirmAccount';


export const HomeView = () => (<Home />);
export const NotificationView = () => (<Notification />);
export const SettingView = () => (<Setting />);
export const ProfileView = () => (<Profile />);
export const ExploreView = () => (<Explore />);
export const ReissueView = () => (<Reissue />);
export const ReadingView = () => (<Reading />);
export const ReadersView = () => (<Readers />);
export const PrivacySettingView = () => (<PrivacySetting />);
export const Ping1View = () => (<Ping1 />);
export const Ping2View = () => (<Ping2 />);
export const Ping3View = () => (<Ping3 />);
export const LoginView = () => (<Login />);
export const ForgotPasswordView = () => (<ForgotPassword />);
export const ConfirmAccountView = () => (<ConfirmAccount />);
export const AdvancedSettingView = () => (<AdvancedSetting />);
export const CategoriesView = () => (<Categories />);
export const ContactUsView = () => (<ContactUs />);
export const EngagementsView = () => (<Engagements />);
export const MediaView = () => (<Media />);
export const SignupView = () => (<Signup />);
export const RegisterView = () => (<Register />);
export const MyAdsView = () => (<MyAds />);
export const ChannelsView = () => (<Channels />);
export const BuyNewAdView = () => (<BuyNewAd />);
export const StopAdsView = () => (<StopAds />);
export const ViewAdsView = () => (<ViewAds />);
export const NewPing1View = () => (<NewPing1 />);
export const NewPing2View = () => (<NewPing2 />);
export const NewPing3View = () => (<NewPing3 />);
export const MyMoneyView = () => (<MyMoney />);
export const DepositFundsView = () => (<DepositFunds />);
export const WithdrawFundsView = () => (<WithdrawFunds />);
export const DonateFundsView = () => (<DonateFunds />);
export const DepositsCompletedView = () => (<DepositsCompleted />);
export const DonationsReceivedView = () => (<DonationsReceived />);
export const DonationsSentView = () => (<DonationsSent />);
export const WithdrawalsCompletedView = () => (<WithdrawalsCompleted />);
export const EditProfileView = () => (<EditProfile />);


class App extends Component {
  
  componentDidMount() {
    Common.refreshUI();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Notifications />
          <Header />
          <div className="content-wrapper">
            <Route exact path="/" component={HomeView} />
            <Route exact path="/notification" component={NotificationView} />
            <Route exact path="/setting" component={SettingView} />
            <Route exact path="/profile" component={ProfileView} />
            <Route exact path="/explore" component={ExploreView} />
            <Route exact path="/reissue" component={ReissueView} />
            <Route exact path="/reading" component={ReadingView} />
            <Route exact path="/readers" component={ReadersView} />
            <Route exact path="/privacy_setting" component={PrivacySettingView} />
            <Route exact path="/ping1" component={Ping1View} />
            <Route exact path="/ping2" component={Ping2View} />
            <Route exact path="/ping3" component={Ping3View} />
            <Route exact path="/advanced_setting" component={AdvancedSettingView} />
            <Route exact path="/categories" component={CategoriesView} />
            <Route path="/categories/:id" render={(props) => <Category {...props} />} />
            <Route exact path="/contactus" component={ContactUsView} />
            <Route exact path="/engagements" component={EngagementsView} />
            <Route exact path="/media" component={MediaView} />
            <Route exact path="/news_details/:id" render={(props) => <NewsDetails {...props} />} />
            <Route exact path="/auth/login" component={LoginView} />
            <Route exact path="/auth/forgot_password" component={ForgotPasswordView} />
            <Route exact path="/auth/confirmAccount" component={ConfirmAccountView} />
            <Route exact path="/auth/signup" component={SignupView} />
            <Route exact path="/auth/register" component={RegisterView} />
            <Route exact path="/myads" component={MyAdsView} />
            <Route exact path="/channels" component={ChannelsView} />
            <Route exact path="/buynewad" component={BuyNewAdView} />
            <Route exact path="/stopads" component={StopAdsView} />
            <Route exact path="/viewads" component={ViewAdsView} />
            <Route exact path="/newping1" component={NewPing1View} />
            <Route exact path="/newping2" component={NewPing2View} />
            <Route exact path="/newping3" component={NewPing3View} />
            <Route exact path="/mymoney" component={MyMoneyView} />
            <Route exact path="/deposit_funds" component={DepositFundsView} />
            <Route exact path="/withdraw_funds" component={WithdrawFundsView} />
            <Route exact path="/donate_funds" component={DonateFundsView} />
            <Route exact path="/deposits_completed" component={DepositsCompletedView} />
            <Route exact path="/donations_received" component={DonationsReceivedView} />
            <Route exact path="/donations_sent" component={DonationsSentView} />
            <Route exact path="/withdrawals_completed" component={WithdrawalsCompleted} />
            <Route exact path="/edit_profile" component={EditProfileView} />
          </div>
          <Footer />
          <div className="loading" style={{ display: 'none' }}>Loading&#8230;</div>
        </div>
      </Router>
    );
  }
}

export default App;
