import React from 'react'

const PasswordResetPage = () => {

   const handleInputChange = (event) => {
      new SessionStorageUpdates().updateEmail(event.target.value);
    };
  
    const handleSendResetLinkClick = () => {
      new PageContents().sendResetLink();
    };
  return (
   
   <div className="desk" style={{ height: '100%' }}>
   <div style={{ display: 'table', width: '100%', height: '100%' }}>
     <div style={{ display: 'table-cell', width: '70%', backgroundColor: 'white', padding: '20px' }}>
       <img
         style={{ width: '10vw', marginTop: '5px', cursor: 'pointer' }}
         onClick={() => new PageContents().changePage('/#')}
         src="static/img/arxena-logo/arxena-logo.png"
         alt="Arxena Logo"
       />
       <div className="shadow content_section" style={{ width: '500px', padding: '30px', backgroundColor: 'rgba(255,255,255)', borderRadius: '5px', textAlign: 'center', left: 0, right: 0, marginTop: '50px' }}>
         <div id="reset_password_form_content">
           <span style={{ fontSize: '16pt', fontWeight: 300 }}>Reset your password</span>
           <br />
           <br />
           <span style={{ fontSize: '10pt' }}>Please enter below the email address you used to sign up for Arxena.</span>
           <br />
           <br />
           <div style={{ width: '90%', left: '5%', position: 'relative' }}>
             <div className="row">
               <div className="col-sm-12">
                 <input id="email" type="text" className="form-control-custom" placeholder="Email" onInput={handleInputChange} />
                 <br />
               </div>
             </div>
             <br />
             <div style={{ width: '100%', textAlign: 'center', position: 'relative', padding: '20px' }}>
               <div className="form_button" style={{ margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} onClick={handleSendResetLinkClick}>
                 Send reset link
               </div>
             </div>
           </div>
           <div id="password_reset_error" style={{ marginTop: '20px' }}></div>
         </div>
       </div>
     </div>
     <div className="signup_lateral" style={{ display: 'table-cell', width: '30%', padding: '20px', textAlign: 'left' }}>
       <br />
       <br />
       <div style={{ textAlign: 'center' }}>
         <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style={{ width: '150px', borderRadius: '50%' }} alt="Mannan Pacha" />
       </div>
       <div style={{ textAlign: 'left' }}>
         <img src="/static/img/quote.png" style={{ width: '40px', marginRight: '40px', marginBottom: '20px' }} alt="Quote" />
       </div>
       <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for resourcing projects.</i>
       <span style={{ fontSize: '13pt' }}>
         <br />
         <br />
         <strong style={{ fontWeight: 500 }} id="testimonial_name">
           Mannan Pacha
         </strong>{' '}
         |
       </span>
       <span id="testimonial_title" style={{ fontSize: '13pt' }}>
         Manager - Consulting
       </span>
       <br />
       <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style={{ height: '20px' }} alt="EY Logo" />
       <br />
       <br />
       <img
         id="linkedin_logo"
         src="/static/img/linkedin_logo.png"
         onClick={() => window.open('https://www.linkedin.com/in/mannanpacha1988')}
         style={{ height: '20px', cursor: 'pointer' }}
         alt="LinkedIn Logo"
       />
       <div style={{ textAlign: 'right' }}>
         <img src="/static/img/quote1.png" style={{ width: '40px', marginRight: '40px' }} alt="Quote" />
       </div>
     </div>
   </div>
 </div>
  )
}

export default PasswordResetPage