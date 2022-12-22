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
                           class="mfsfsInput" value="" />
                      </div>
                    </div>
                </div>

                <div className='allMessageDiv'>
                  <span className='allMessageSpan'>
                      <input className="allMessageInput" type="checkbox" data-indeterminate="false" />
                  </span>
                  <Link className='allMessageDown'><i className='fa fa-angle-down'></i></Link>
                </div>
            </div>
            <ul className='allMessageUl'>
              <Link className='allMessageLink'>
              <div className='allMessageDiv'>
                  <span className='allMessageSpan'>
                      <input className="allMessageInput" type="checkbox" data-indeterminate="false" />
                  </span>
                  <div  className='allMess'>
                    <div  className='messFullFlex'>
                      <div className='messAvatar'>
                          <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" class="MuiAvatar-img muiltr-1hy9t21" />
                      </div>
                      <div className='messHead'>
                          <div className='messSubHead1'>
                              <p className='messSubHead1P'>Myra Dudley</p>
                              <i className='fa fa-exclamation-circle messSubHead1I'></i>
                              <p className='messSubHead1date'>Jan 25</p>
                          </div>
                          <div className='messSubHead2'>
                          <span className='messSubHead2Span'>Please review and sign the attached agreement</span>
                          </div>
                      </div>
                    </div>
                    <p className='messFullP'>
                    Hi Brian,Ullamco deserunt commodo esse deserunt deserunt quis eiusmod. Laborum sint excepteur non sit eiusmod sunt voluptate ipsum nisi ullamco magna. Lorem consectetur est do...
                    </p>
                  </div>
                </div>
                </Link>
            </ul>

          </div>
          </div>
        </div>
        <div className='col-md-5'></div>
      </div></>
       )
  }
}
export default Mailbox;