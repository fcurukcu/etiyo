import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Mailbox.css';
class Mailbox extends Component {
  render() {
    return (
    <>
      <div className='row'>
        <div className='col-md-3'>
          <div className='row mailBoxRow'>
          <h1 className='mailBoxH1'>Mailbox</h1>
          <Link to='/view' className='btn btn-success btn-sm mailBoxLink'><i className='fa fa-plus'></i> Compose</Link>
          
          </div>
          <span className='mailBoxSpan'>MailBoxes</span>
          <ul className='mailBoxUl'>
            <Link className='mailBoxUlLi activeLi'><i className='fa fa-inbox mailBoxUlLii'></i> 
            <div className='mailBoxUldiv'>
              <span className='mailBoxUlDivSpan'>
                Inbox
              </span>
            </div></Link>

            <Link className='mailBoxUlLi'><i className='fa fa-paper-plane mailBoxUlLii'></i> 
            <div className='mailBoxUldiv'>
              <span className='mailBoxUlDivSpan'>
                Sent
              </span>
            </div></Link>

            <Link className='mailBoxUlLi'><i className='fa fa-file mailBoxUlLii'></i> 
            <div className='mailBoxUldiv'>
              <span className='mailBoxUlDivSpan'>
                Drafts
              </span>
            </div></Link>

            <Link className='mailBoxUlLi'><i className='fa fa-exclamation-triangle mailBoxUlLii'></i> 
            <div className='mailBoxUldiv'>
              <span className='mailBoxUlDivSpan'>
                Span
              </span>
            </div></Link>

            <Link className='mailBoxUlLi'><i className='fa fa-trash mailBoxUlLii'></i> 
            <div className='mailBoxUldiv'>
              <span className='mailBoxUlDivSpan'>
                Trash
              </span>
            </div></Link>
            
          </ul>
        </div>
        <div className='col-md-4'>
          <div className='message'>
          <div className='messageDiv'>
            <div className='messageFlex'>
                <div className='messageSticky'>
                    <div className='messafeFlexS'>
                      <div className='messafeFlexSDiv'>
                        <p className='messafeFlexSDivP'>Inbox</p>
                      </div>
                      <div className='messafeFlexSearch'>
                          <div className='messafeFlexSearchIcon'>
                            <i className='fa fa-search mfsfsSearch'></i>
                          </div>
                          <input placeholder="Search for an e-mail or task" type="text" aria-label="Search"
                           class="mfsfsInput" value=""></input>
                      </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
          </div>
          </div>
        </div>
        <div className='col-md-5'></div>
      </div></>
       )
  }
}
export default Mailbox;