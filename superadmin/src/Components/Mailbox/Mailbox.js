import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Mailbox.css';
class Mailbox3 extends Component {
  render() {
    return (
      <>
        <div className='row'>
        
        <div className='col-md-3' style={{ padding: "0px" }}>
          <div className='message'>
            <div className='messageDiv' >
              <div className='messageFlex'>
              

                <div className='allMessageDiv'>
                  <div className='messafeFlexSearch'>
                    <div className='messafeFlexSearchIcon'>
                      <i className='fa fa-search mfsfsSearch'></i>
                    </div>
                    <input placeholder="Search for an e-mail or task" type="text" aria-label="Search"
                      className="mfsfsInput" />
                  </div>
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
                              <p className='messSubHead1P'>Fatma Demir<i className='fa fa-exclamation-circle'></i></p>

                              <p className='messSubHead1date'>25 Haziran</p>
                            </div>
                            <div className='messSubHead2'>
                              <span className='messSubHead2Span'>Lütfen ekteki sözleşmeyi inceleyin ve imzalayın</span>
                            </div>
                          </div>
                        </div>
                        <p className='messFullP'>
                         Merhaba ben fatma demir, firma bilgilerini nereden gireceğim?
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
            <div className="col-md-12" style={{display: "flex", flexDirection: "column" }}>
              <div className='MuiDrawer-root MuiDrawer-docked FusePageSimple-sidebarWrapper permanent opened FusePageSimple-rightSidebar muiltr-1tu59u4'>
                <div className=''>
                  <div className='muiltr-1aat207 ps ps--active-y' style={{ position: "relative" }}>
                    <div className='FusePageSimple-sidebarContent'>
                      <div className='z-10 relative flex flex-col flex-0 w-full border-b'>
  
                        <div className="flex flex-wrap items-center py-20 px-24 msPsMessage">
                          <div className="flex flex-auto my-4 mr-16 text-2xl">Fatma Demir</div>
                          <div className="flex flex-wrap items-center justify-start -mx-4">
                         
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
                <div className="message-blue" style={{height:"100px"}}>
                  <p className="message-content">Merhaba ben fatma demir, firma bilgilerini nereden gireceğim?</p>
                  <div className="message-timestamp-left">SMS 13:37</div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="message-orange">
                  <p className="message-content">Merhaba ayarlar sayfasından firma bilgilerinizi ekleyebilirsiniz.</p>
                  <div className="message-timestamp-right">SMS 13:37</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="message-blue">
                  <p className="message-content">Teşekkürler</p>
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
            <input placeholder="Mesaj yaz" type="text" aria-label="Search"
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