import React from 'react'

const FrontPage = () => {
  return (
<div className="desk" id="main_container">
        <div style={{ padding: '20px', height: '85vh' }}>
          <div style={{ display: 'table', width: '100%' }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle' }}></div>
            <div id="sign_up_button_front_page" style={{ display: 'table-cell', verticalAlign: 'middle', width: '190px', textAlign: 'right' }}>
              <div className="landing_white_button" style={{ display: 'inline-block', backgroundColor: 'rgb(36,116,204)', borderColor: 'rgb(36,116,204)', color: 'white', width: '150px' }} onClick={() => new PageContents().changePage('/signup')}>
                Sign up
              </div>
            </div>
            <div id="log_in_button_front_page" style={{ display: 'table-cell', verticalAlign: 'middle', width: '190px', textAlign: 'right', paddingRight: '20px' }}>
              <div className="landing_white_button" style={{ display: 'inline-block', backgroundColor: 'white', border: '1px solid rgb(36,116,204)', color: 'rgb(36,116,204)', width: '150px' }} onClick={() => new PageContents().changePage('/login')}>
                Log in
              </div>
            </div>
          </div>

          <div style={{ display: 'table', width: '100%', paddingLeft: '20px', paddingRight: '20px', height: '100%' }}>
            <div style={{ display: 'table', width: '40%', marginLeft: '30%', textAlign: 'center', verticalAlign: 'middle', paddingTop: '8%' }}>
              <input style={{ display: 'none' }} type="text" name="fakeusernameremembered" />
              <input style={{ display: 'none' }} type="password" name="fakepasswordremembered" />
              <img style={{ width: '15vw', marginTop: '5px', cursor: 'pointer' }} onClick={() => new PageContents().changePage('/#')} src="static/img/arxena-logo/arxena-logo.png" />
              {/* ... Search bar components */}
              <p id="error_home_page" style={{ fontSize: '12px', float: 'left', marginLeft: '20px', display: 'none' }}></p>
              <div id="front_page_search_bar_loader" style={{ textAlign: 'right', marginTop: '-6.5%', marginLeft: '-1%', marginBottom: '2%', width: '10%', marginLeft: '85%' }}>
                <div id="button_dropdown_search_jd" onClick={() => new SearchBarLoadersDropdowns().placeDropdownBelowSearchforJDInput()} style={{ cursor: 'pointer', textAlign: 'right', marginTop: '-6.25%' }}>
                  <img style={{ width: '25px' }} src="/static/img/new_upload.png" />
                </div>
              </div>
              <div id="home_page_dropdown_elements" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>
              <div id="home_page_jd_dropdown_element"></div>
            </div>
            <div style={{ marginTop: '5%' }}>
              <center><img src="/static/img/powered_by_gpt4.png" alt="Open AI Logo" width="200" /></center>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', bottom: '0%', textAlign: 'center' }}>
          <div style={{ display: 'table', width: '100%' }}>
            <div style={{ display: 'table-cell', width: '100%', paddingLeft: '20px', paddingTop: '2%', textAlign: 'left' }}>
              <div style={{ paddingLeft: '25px', display: 'inline-block' }}>
                OrgGPT - Talent Identification Software for Ambitious Companies <br />
                <a style={{ fontSize: '10pt' }} href="/pricing">Pricing</a> | <a style={{ fontSize: '10pt' }} href="/eula">Terms of Service</a> | <a style={{ fontSize: '10pt' }} href="/privacy">Privacy Policy</a> | <a style={{ fontSize: '10pt' }} href="javascript:" onClick={() => new UtilityFunctions().openHelpModal()}>How to Use</a> | <a style={{ fontSize: '10pt' }} href="/download_chrome_extension" onClick={() => new UtilityFunctions().openHelpModal()}>Download Extension</a><br /><br />
              </div>
              <div style={{ display: 'table-cell', padding: 'left:25px', float: 'right', marginRight: '5%' }}>
                <div style={{ display: 'table-cell', width: '70px' }}>
                  <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style={{ width: '35px', cursor: 'pointer' }} src="static/img/linkedin-icon-png-circle-2.png" /></a>
                </div>
                <div style={{ display: 'table-cell', width: '70px' }}>
                  <a href="https://twitter.com/arxenainc" target="_blank"><img style={{ width: '43px', cursor: 'pointer' }} src="static/img/tw.png" /></a>
                </div>
                <div style={{ display: 'table-cell', width: '70px' }}>
                  <a href="https://facebook.com/arxenainc" target="_blank"><img style={{ width: '35px', cursor: 'pointer' }} src="static/img/facebook.png" /></a>
                </div>
                <div style={{ display: 'table-cell', width: '70px' }}>
                  <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style={{ width: '35px', cursor: 'pointer' }} src="static/img/youtube.png" /></a>
                </div>
                <div style={{ display: 'table-cell' }}></div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
  )
}

export default FrontPage