import React,{useState} from 'react'


const ReferalSignupPage = () => {

   const [emails, setEmails] = useState('');

  const handleInputChange = (event) => {
    setEmails(event.target.value);
  };

  const handleButtonClick = () => {
  };

  const handleCompleteButtonClick = () => {
  };

  const handleCopyLinkClick = () => {
  };

  return (
   <div className="desk" style={{ height: '100%' }}>
      <div style={{ display: 'table', width: '100%', height: '100%' }}>
        <div style={{ display: 'table-cell', width: '70%', backgroundColor: 'white', padding: '20px' }}>
          <img
            style={{ width: '10vw', cursor: 'pointer', marginTop: '-3%', marginLeft: '-5%' }}
            onClick={() => new PageContents().changePage('/#')}
            src="static/img/arxena-logo/arxena-logo.png"
            alt="Arxena Logo"
          />
          <div className="shadow content_section" style={{ width: '500px', padding: '30px', backgroundColor: 'rgba(255,255,255)', borderRadius: '5px', textAlign: 'center', left: 0, right: 0 }}>
            <div id="signup_form_content">
              <span style={{ fontSize: '16pt', fontWeight: 300 }}>
                Get up to 1000 free org chart credits by inviting your friends to arxena.
              </span>
              <br />
              <br />
              <span style={{ fontSize: '10pt' }}>
                For every friend who joins Arxena, we will give you both 1000 free org charts credits!
              </span>
              <br />
              <br />
              <div style={{ width: '90%', left: '5%', position: 'relative' }}>
                <div style={{ textAlign: 'center' }}>
                  <textarea id="textarea" value={emails} onChange={handleInputChange}></textarea>
                  <br />
                  <button id="sub_btn" onClick={handleButtonClick}>
                    Show Tags
                  </button>
                </div>
                <br />
                <div style={{ width: '100%', textAlign: 'center', position: 'relative', padding: '20px' }}>
                  <div id="referral_signup_button" className="form_button enter_click" style={{ margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} onClick={handleCompleteButtonClick}>
                    Complete
                  </div>
                </div>
              </div>
              <br />
              <br />
              <span style={{ fontSize: '9pt' }}>More ways to invite your friends</span>
              <div style={{ display: 'table', width: '100%', fontSize: '10pt' }}>
                <div style={{ display: 'table-cell', width: '170px' }}>
                  <div style={{ width: '130px', display: 'inline-block' }} className="small_button_white" onClick={handleCopyLinkClick}>
                    Copy invite link
                  </div>
                </div>
                <div style={{ display: 'table-cell' }}>
                  <input id="signup_invite_link" type="text" className="search-bar" style={{ borderColor: 'rgb(232,232,232)', placeholderColor: 'rgb(232,232,232)' }} readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signup_lateral" style={{ display: 'table-cell', width: '30%', padding: '20px', textAlign: 'left' }}>
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <img id="testimonial_photo" src="/static/img/NicolasDumoulin-300x300.jpg" style={{ width: '150px', borderRadius: '50%' }} alt="Testimonial" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <img src="/static/img/quote.png" style={{ width: '40px', marginRight: '40px', marginBottom: '20px' }} alt="Quote" />
          </div>
          <i id="testimonial_quote">
            Before Arxena, I had used everything from DiscoverOrg to LucidCharts and nothing worked, locating the right decision makers took hours… now it takes me
            minutes, Arxena has helped close over 300k in ARR, this is by far the best sales outreach tool I have used.
          </i>
          <span style={{ fontSize: '13pt' }}>
            <br />
            <br />
            <strong style={{ fontWeight: 500 }} id="testimonial_name">
              Nicolas Dumoulin
            </strong>{' '}
            |
          </span>
          <span id="testimonial_title" style={{ fontSize: '13pt' }}>
            Senior Managing Director, Michael Page
          </span>
          <br />
          <img id="testimonial_logo" src="/static/img/michael_page.webp" style={{ height: '20px' }} alt="Testimonial Logo" />
          <div style={{ textAlign: 'right' }}>
            <img src="/static/img/quote1.png" style={{ width: '40px', marginRight: '40px' }} alt="Quote" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferalSignupPage