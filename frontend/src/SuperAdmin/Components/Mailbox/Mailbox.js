import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Mailbox extends Component {
  render() {
    return (
    <>
      <div className='row'>
        <div className='col-md-3'>
          <h1>Mailbox</h1>
          <Link to='/view' className='btn btn-success btn-sm'><i className='fa fa-plus'></i> Compose</Link>
          <span>MailBox</span>
          <ul>
            <li>
            <i className='fa fa-plus'></i> Inbox
            </li>
          </ul>
        </div>
        <div className='col-md-4'></div>
        <div className='col-md-5'></div>
      </div></>
       )
  }
}
export default Mailbox;