import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Mailbox.css';
class Mailbox3 extends Component {
  render() {
    return (
      <>
        <div className='row'>
          {/* <div className='col-md-2' style={{padding: "0px"}}>
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
        </div> */}
          <div className='col-md-3' style={{ padding: "0px" }}>
            <div className='message'>
              <div className='messageDiv' >
                <div className='messageFlex'>
                  {/* <div className='messageSticky'>
                    <div className='messafeFlexS'>
                      <div className='messafeFlexSDiv'>
                        <p className='messafeFlexSDivP'>Inbox</p>
                      </div>
                      <div className='messafeFlexSearch'>
                          <div className='messafeFlexSearchIcon'>
                            <i className='fa fa-search mfsfsSearch'></i>
                          </div>
                          <input placeholder="Search for an e-mail or task" type="text" aria-label="Search"
                           className="mfsfsInput" value="" />
                      </div>
                    </div>
                </div> */}

                  <div className='allMessageDiv'>
                    <div className='messafeFlexSearch'>
                      <div className='messafeFlexSearchIcon'>
                        <i className='fa fa-search mfsfsSearch'></i>
                      </div>
                      <input placeholder="Search for an e-mail or task" type="text" aria-label="Search"
                        className="mfsfsInput" />
                    </div>
                    {/* <span className='allMessageSpan'>
                      <input className="allMessageInput" type="checkbox" data-indeterminate="false" />
                  </span>
                  <Link className='allMessageDown'><i className='fa fa-angle-down'></i></Link> */}
                  </div>
                </div>
                <ul className='allMessageUl scrollbar' id='style-13'>

                  {[...Array(10)].map((x, i) =>

                    <Link key={i} className='allMessageLink'>
                      <div className='allMessageDiv'>
                        <span className='allMessageSpan'>
                          <input className="allMessageInput" type="checkbox" data-indeterminate="false" />
                        </span>
                        <div className='allMess'>
                          <div className='messFullFlex'>
                            <div className='messAvatar'>
                              <img src="https://react-material.fusetheme.com/assets/images/avatars/female-01.jpg" className="MuiAvatar-img muiltr-1hy9t21" />
                            </div>
                            <div className='messHead'>
                              <div className='messSubHead1'>
                                <p className='messSubHead1P'>Myra Dudley <i className='fa fa-exclamation-circle'></i></p>

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
                  )}
                </ul>

              </div>

            </div>
          </div>
          <div className='col-md-9' style={{ padding: "0px" }}>
            <div className="col-md-12" >
              <div className="col-md-12" style={{display: "flex",
    /* flex-direction: row; */
    flexDirection: "column" }}>
                <div className='MuiDrawer-root MuiDrawer-docked FusePageSimple-sidebarWrapper permanent opened FusePageSimple-rightSidebar muiltr-1tu59u4'>
                  <div className=''>
                    <div className='muiltr-1aat207 ps ps--active-y' style={{ position: "relative" }}>
                      <div className='FusePageSimple-sidebarContent'>
                        <div className='z-10 relative flex flex-col flex-0 w-full border-b'>
                          {/* <div className='flex items-center justify-between w-full min-h-64 px-8 border-b MuiBox-root muiltr-bif79f msPsMessage'>
                          <div className="flex flex-1 justify-end items-center">
                            <div>
                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mx-4 muiltr-26yqj3" tabindex="0" type="button" aria-label="Set labels">
                               <svg className="shrink-0 fill-current  MuiBox-root muiltr-ulpizx" size="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <use xlink:href="assets/icons/heroicons-outline.svg#tag"></use>
                                </svg> 
                                <i className='fa fa-search'></i>
                                </button>
                                </div>
                                  
                        </div>
                          </div> */}
                          <div className="flex flex-wrap items-center py-20 px-24 msPsMessage">
                            <div className="flex flex-auto my-4 mr-16 text-2xl">Myra Dudley</div>
                            <div className="flex flex-wrap items-center justify-start -mx-4">
                              {/* <div className="MuiChip-root h-24 border-0 m-4 text-blue-800 bg-blue-100 MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault muiltr-h5blb6">
                                <span className="MuiChip-label px-12 py-4 text-12 font-medium leading-none MuiChip-labelMedium muiltr-9iedg7">Personal</span>
                                </div>
                              <div className="MuiChip-root h-24 border-0 m-4 text-indigo-800 bg-indigo-100 MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault muiltr-h5blb6">
                                <span className="MuiChip-label px-12 py-4 text-12 font-medium leading-none MuiChip-labelMedium muiltr-9iedg7">Work</span>
                                </div> */}
                              <div className="MuiChip-root h-24 border-0 m-4 text-red-800 bg-red-100 MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault muiltr-h5blb6">
                                <span className="MuiChip-label px-12 py-4 text-12 font-medium leading-none MuiChip-labelMedium muiltr-9iedg7">Mesajları Sil</span>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 scrollbar2" id='style-13' style={{ padding: "0px 30px 0 30px"}}>
                <div className="col-md-12">
                  <div className="message-blue">
                    <p className="message-content">This is an awesome message!</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="message-orange">
                    <p className="message-content">I agree that your message is awesome!</p>
                    <div className="message-timestamp-right">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-blue">
                    <p className="message-content">Thanks!</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-orange">
                    <p className="message-content">I agree that your message is awesome!</p>
                    <div className="message-timestamp-right">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-blue">
                    <p className="message-content">Thanks!</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-orange">
                    <p className="message-content">I agree that your message is awesome!</p>
                    <div className="message-timestamp-right">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-blue">
                    <p className="message-content">Thanks!</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-orange">
                    <p className="message-content">I agree that your message is awesome!</p>
                    <div className="message-timestamp-right">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-blue">
                    <p className="message-content">Thanks!</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-orange">
                    <p className="message-content">I agree that your message is awesome!</p>
                    <div className="message-timestamp-right">SMS 13:37</div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="message-blue">
                    <p className="message-content">Thanks!</p>
                    <div className="message-timestamp-left">SMS 13:37</div>
                  </div>
                </div>
              
              </div>
              <div className="col-md-12" style={{display: "flex",
    alignItems: "flex-end",
    flex: 1}}>
            <div className='messafeFlexSearch'>
              <div className='messafeFlexSearchIcon'>
                <i className='fa fa-search mfsfsSearch'></i>
              </div>
              <input placeholder="Search for an e-mail or task" type="text" aria-label="Search"
                className="mfsfsInput" />
            </div>
          </div>
            </div>

           
          </div>
      

        </div></>
    )
  }
}
export default Mailbox3;