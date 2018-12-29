import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/ContactUs.css'


export class ContactUs extends React.Component {

  render() {
    return (
      <div className="contacts mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input className="form-control" id="phone" placeholder="Enter phone" name="phn" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input className="form-control" id="sbj" placeholder="Enter subject" name="subj" />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Query:</label>
                  <textarea className="form-control" rows={5} placeholder="Describe your problem" id="comment" defaultValue={""} />
                </div>
                <div className="text-center">
                  <button type="submit" className="sub_btn">Submit</button>
                  <Link to="/">
                    <button className="can_btn">Cancel</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}