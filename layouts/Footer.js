import React from 'react';
import '../styles/Footer.css'
import Common from '../Common';


export class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: Common.getUser()
    };
  }


  render() {

    return (
      <div id="footerContainer">
        {this.state.user !== null ?
          <div className="modal fade" id="newMemoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="newMemoModalHead">Issue New Memo</h5>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12 profileInfo">
                      <div className="avatar align-self-center">
                        <img src={Common.BACKEND + this.state.user.profilepic} className="round-avatar" alt="small_logo" />
                      </div>
                      <span id="name">
                        {this.state.user.firstname} {this.state.user.lastname} &nbsp;
                        <img src="/assets/images/pro_batch.png" alt="pro_batch" /><br /><span id="nameLink">{this.state.user.email}</span>
                      </span>
                    </div>
                    <div className="col-12 textArea">
                      <textarea className="form-control" rows={5} placeholder="What's on your mind?" id="comment" defaultValue={""} />
                      <div className="smileIcon text-right">
                        { /* eslint-disable-next-line */}
                        <a href="#"><img src="/assets/images/smile_icon.png" alt="" /></a>
                      </div>
                    </div>
                    <div className="col-12 mt-3 d-flex justify-content-between">
                      <div className="actions text-left">
                        <div className="fileUpload">
                          <img src="/assets/images/video_icon.png" alt="" />
                          <input type="file" name="myfile" id="upload" hidden />
                        </div>
                        <img src="/assets/images/gif_icon.png" alt="p_icon-1" />
                        <img src="/assets/images/poll_icon.png" alt="" className="poll_btn" data-toggle="modal" data-target="#newPollModal" data-dismiss="modal" />
                        <img src="/assets/images/map_icon.png" alt="" className="location_btn" data-toggle="modal" data-target="#newMapModal" data-dismiss="modal" />
                        <img src="/assets/images/share_icon.png" alt="" className="gamma_btn" data-toggle="modal" data-target="#newGammaModal" data-dismiss="modal" />
                      </div>
                      <div className="issue">
                        <span className="align-middle">230</span>&nbsp;&nbsp;
                      <button type="button" className="btn btn-outline-secondary">Issue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          null
        }
        {/* Poll Modal */}
        <div className="modal fade" id="newPollModal" tabIndex={-1} role="dialog" aria-labelledby="exp" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 pollTitle py-2">
                      <input type="text" name="field_1" placeholder="Poll Title" />
                    </div>
                    <div className="col-12 pollArea mt-2">
                      <div className="d-flex poll my-2">
                        <div className="mr-2 align-self-center"><span className="checkmark"><img src="/assets/images/square.png" alt="" /></span></div>
                        <div className="mr-2 align-self-center"><input className="choice" placeholder="Choice 1" /></div>
                        <div className="ml-auto align-self-center remove">Remove Poll</div>
                      </div>
                      <div className="d-flex poll my-2">
                        <div className="mr-2 align-self-center"><span className="checkmark"><img src="/assets/images/square.png" alt="" /></span></div>
                        <div className="mr-2 align-self-center"><input className="choice" placeholder="Choice 2" /></div>
                        <div className="ml-auto align-self-center remove">Remove Poll</div>
                      </div>
                      <div className="d-flex poll my-2">
                        <div className="mr-2 align-self-center"><span className="checkmark"><img src="/assets/images/square.png" alt="" /></span></div>
                        <div className="mr-2 align-self-center"><input className="choice" placeholder="Choice 3" /></div>
                        <div className="ml-auto align-self-center remove">Remove Poll</div>
                      </div>
                      <div className="d-flex addPoll my-2">
                        <div className="mr-2 align-self-center"><img src="/assets/images/plus.png" className="img-responsive" alt="plus" /> <span style={{ marginLeft: 20 }}>Add a choice</span></div>
                      </div>
                    </div>
                    <div className="col-12 pollLenght mt-2 py-2">
                      <input type="text" name="field_1" placeholder="Poll lenght: 2 days" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-3 d-flex justify-content-between">
                    <div className="actions text-left">
                      <div className="fileUpload">
                        <img src="/assets/images/video_icon.png" alt="" />
                        <input type="file" name="myfile" id="upload" hidden />
                      </div>
                      <img src="/assets/images/gif_icon.png" alt="p_icon-1" />
                      <img src="/assets/images/poll_icon.png" alt="" className="poll_btn" />
                      <img src="/assets/images/map_icon.png" alt="" className="location_btn" data-toggle="modal" data-target="#newMapModal" data-dismiss="modal" />
                      <img src="/assets/images/share_icon.png" alt="" className="gamma_btn" data-toggle="modal" data-target="#newGammaModal" data-dismiss="modal" />
                    </div>
                    <div className="issue">
                      <span className="align-middle">230</span>
                      <button type="button" className="btn btn-outline-secondary">Issue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newMapModal" tabIndex={-1} role="dialog" aria-labelledby="map" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 pollTitle py-2">
                      <input type="text" name="field_1" placeholder="Memo Title" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 textArea mt-2">
                    <textarea className="form-control" rows={5} placeholder="In your own word's..." id="comment" defaultValue={""} />
                    <div className="smileIcon text-right">
                      { /* eslint-disable-next-line */}
                      <a href="#"><img src="/assets/images/smile_icon.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-between">
                    <div className="actions text-left">
                      <div className="fileUpload">
                        <img src="/assets/images/video_icon.png" alt="" />
                        <input type="file" name="myfile" id="upload" hidden />
                      </div>
                      <img src="/assets/images/gif_icon.png" alt="p_icon-1" />
                      <img src="/assets/images/poll_icon.png" alt="" className="poll_btn" data-toggle="modal" data-target="#newPollModal" data-dismiss="modal" />
                      <img src="/assets/images/map_icon.png" alt="" className="location_btn" />
                      <img src="/assets/images/share_icon.png" alt="" className="gamma_btn" data-toggle="modal" data-target="#newGammaModal" data-dismiss="modal" />
                    </div>
                    <div className="issue">
                      <span className="align-middle">230</span>
                      <button type="button" className="btn btn-outline-secondary">Issue</button>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row location mt-4">
                    { /* eslint-disable-next-line */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14606.939626276837!2d90.38896245!3d23.7568309!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1522437788353" style={{ width: '100%' }} frameBorder={0} allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newGammaModal" tabIndex={-1} role="dialog" aria-labelledby="map" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 pollTitles py-1">
                    <input className="form-control" type="text" name="field_1" placeholder="Enter Citation URL" />
                  </div>
                  <div className="col-12 textAreas mt-2">
                    <input className="form-control" placeholder="Enter γTag Title" id="comment" />
                    <div className="smileIcon text-right">
                      { /* eslint-disable-next-line */}
                      <a href="#"><img src="/assets/images/smile_icon.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-12 pollTitles py-1 mt-2">
                    <input className="form-control" type="text" name="field_1" placeholder="Enter Citation URL" />
                  </div>
                  <div className="col-12 textAreas mt-2">
                    <input className="form-control" placeholder="Enter γTag Title" id="comment" />
                    <div className="smileIcon text-right">
                      { /* eslint-disable-next-line */}
                      <a href="#"><img src="/assets/images/smile_icon.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-12 py-1 mt-2 befCon">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 addTag py-2">
                          <span><img src="/assets/images/plus.png" alt="" />  Add γTag</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-between">
                    <div className="actions text-left">
                      <div className="fileUpload">
                        <img src="/assets/images/video_icon.png" alt="" />
                        <input type="file" name="myfile" id="upload" hidden />
                      </div>
                      <img src="/assets/images/gif_icon.png" alt="p_icon-1" />
                      <img src="/assets/images/poll_icon.png" alt="" className="poll_btn" data-toggle="modal" data-target="#newPollModal" data-dismiss="modal" />
                      <img src="/assets/images/map_icon.png" alt="" className="location_btn" data-toggle="modal" data-target="#newMapModal" data-dismiss="modal" />
                      <img src="/assets/images/share_icon.png" alt="" className="gamma_btn" />
                    </div>
                    <div className="issue">
                      <span className="align-middle">230</span>
                      <button type="button" className="btn btn-outline-secondary">Issue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newTimeModal" tabIndex={-1} role="dialog" aria-labelledby="map" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content bg-none">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="selections d-flex flex-column text-center">
                      <div className="p-2">Embed Memo</div>
                      <div className="p-2">Copy Memo</div>
                      <div className="p-2">Block memo</div><hr />
                      <div className="p-3">Mark Memo As:</div>
                      <div className="p-2">Neutral</div>
                      <div className="p-2">Progressive</div>
                      <div className="p-2">Conservative</div>
                      <div className="p-2">Fabrication</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary btn-block" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newTipModal" tabIndex={-1} role="dialog" aria-labelledby="map" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content bg-none">
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="selections d-flex flex-column text-center">
                      <div className="p-2">Support @johndoe</div>
                      <div className="p-2">γ$1 Tip</div>
                      <div className="p-2">γ$5 Tip</div>
                      <div className="p-2">γ$10 Tip</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary btn-block" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newReissueModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newMemoModalHead">Reissue @johndoe</h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 profileInfo">
                    <div className="avatar align-self-center">
                      <img src="/assets/images/small_logo.png" alt="small_logo" />
                    </div>
                    <span id="name">John Doe <img src="/assets/images/pro_batch.png" alt="pro_batch" /><br /><span id="nameLink">@johndoe</span></span>
                  </div>
                  <div className="col-12 textImg mt-3">
                    <img src="/assets/images/c_post_img_1.png" className="img-responsive" alt="post" />
                  </div>
                  <div className="col-12 textDesc mt-3">
                    <p className="preDesc">Lorem ipsum is simply dummy text of the printing and t..</p>
                    <p className="desc">
                      Uterque enim summo bono fruitur, id est sdavoluptate. Occustion enim summo
                    </p>
                  </div>
                  <div className="col-12 textArea mt-4">
                    <textarea className="form-control" rows={5} placeholder="Reissue with a comment...." id="comment" defaultValue={""} />
                    <div className="smileIcon text-right">
                      { /* eslint-disable-next-line */}
                      <a href="#"><img src="/assets/images/smile_icon.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-between">
                    <div className="actions text-left">
                      <div className="fileUpload">
                        <img src="/assets/images/video_icon.png" alt="" />
                        <input type="file" name="myfile" id="upload" hidden />
                      </div>
                      <img src="/assets/images/gif_icon.png" alt="p_icon-1" />
                    </div>
                    <div className="issue">
                      <span className="align-middle">230</span>
                      <button type="button" className="btn btn-outline-secondary">Reissue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newEngageModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newMemoModalHead">Engaging @johndoe</h5>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 profileInfo">
                    <div className="avatar align-self-center">
                      <img src="/assets/images/small_logo.png" alt="small_logo" />
                    </div>
                    <span id="name">John Doe <img src="/assets/images/pro_batch.png" alt="pro_batch" /><br /><span id="nameLink">@johndoe</span></span>
                  </div>
                  <div className="col-12 textImg mt-3">
                    <img src="/assets/images/c_post_img_1.png" className="img-responsive" alt="post" />
                  </div>
                  <div className="col-12 textDesc mt-3">
                    <p className="preDesc">Lorem ipsum is simply dummy text of the printing and t..</p>
                    <p className="desc">
                      Uterque enim summo bono fruitur, id est sdavoluptate. Occustion enim summo
                    </p>
                  </div>
                  <div className="col-12 textArea mt-4">
                    <textarea className="form-control" rows={5} placeholder="Engage here..." id="comment" defaultValue={""} />
                    <div className="smileIcon text-right">
                      { /* eslint-disable-next-line */}
                      <a href="#"><img src="/assets/images/smile_icon.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-12 mt-3 d-flex justify-content-between">
                    <div className="actions text-left">
                      <div className="fileUpload">
                        <img src="/assets/images/video_icon.png" alt="" />
                        <input type="file" name="myfile" id="upload" hidden />
                      </div>
                      <img src="/assets/images/gif_icon.png" alt="p_icon-1" />
                    </div>
                    <div className="issue">
                      <span className="align-middle">230</span>
                      <button type="button" className="btn btn-outline-secondary">Engage</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="newMailModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 result mt-3">
                      { /* eslint-disable-next-line */}
                      <a href="#">
                        <img src="/assets/images/small_ping_user.png" alt="" />
                        <span><b>WJS</b> <img src="/assets/images/safe.png" alt="" /> @wallstreet_journal</span>
                      </a>
                    </div>
                    <div className="col-12 result mt-3">
                      { /* eslint-disable-next-line */}
                      <a href="#">
                        <img src="/assets/images/small_ping_user.png" alt="" />
                        <span><b>WJS</b> <img src="/assets/images/safe.png" alt="" /> @wallstreet_journal</span>
                      </a>
                    </div>
                    <div className="col-12 result mt-3">
                      { /* eslint-disable-next-line */}
                      <a href="#">
                        <img src="/assets/images/small_ping_user.png" alt="" />
                        <span><b>WJS</b> <img src="/assets/images/safe.png" alt="" /> @wallstreet_journal</span>
                      </a>
                    </div>
                    <div className="col-12 result mt-3">
                      { /* eslint-disable-next-line */}
                      <a href="#">
                        <img src="/assets/images/small_ping_user.png" alt="" />
                        <span><b>WJS</b> <img src="/assets/images/safe.png" alt="" /> @wallstreet_journal</span>
                      </a>
                    </div>
                    <div className="col-12 result mt-3">
                      { /* eslint-disable-next-line */}
                      <a href="#">
                        <img src="/assets/images/small_ping_user.png" alt="" />
                        <span><b>WJS</b> <img src="/assets/images/safe.png" alt="" /> @wallstreet_journal</span>
                      </a>
                    </div>
                    <div className="col-12 result mt-3">
                      { /* eslint-disable-next-line */}
                      <a href="#">
                        <img src="/assets/images/small_ping_user.png" alt="" />
                        <span><b>WJS</b> <img src="/assets/images/safe.png" alt="" /> @wallstreet_journal</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 textArea mt-4">
                    <input className="form-control" placeholder="Ping here..." id="comment" />
                    <div className="smileIcon text-right">
                      { /* eslint-disable-next-line */}
                      <a href="#"><img src="/assets/images/smile_icon.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-12 mt-2 d-flex justify-content-between">
                    <div className="actions text-left">
                      <div className="fileUpload">
                        <img src="/assets/images/video_icon.png" alt="" />
                        <input type="file" name="myfile" id="upload" hidden />
                      </div>
                      <img src="/assets/images/gif_icon.png" alt="p_icon-1" />
                    </div>
                    <div className="issue">
                      <span className="align-middle">230</span>
                      <button type="button" className="btn btn-outline-secondary">Ping</button>
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