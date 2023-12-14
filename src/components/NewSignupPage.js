import React,{useState} from 'react'

const NewSignupPage = () => {

   const [fullName, setFullName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleFullNameChange = (event) => {
     setFullName(event.target.value);
   };
 
   const handlePhoneChange = (event) => {
     setPhone(event.target.value);
   };
 
   const handleEmailChange = (event) => {
     setEmail(event.target.value);
   };
 
   const handlePasswordChange = (event) => {
     setPassword(event.target.value);
   };
 
   const handleAccountUseCaseSelect = (useCase) => {
     
     new Selections().selectNewAccountUseCase(useCase);
   };
 
   const handleSignUpClick = () => {
    
     new PageContents().signUp({
       fullName,
       phone,
       email,
       password,
     });
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
       <div
         className="shadow content_section"
         style={{ width: '500px', padding: '30px', backgroundColor: 'rgba(255,255,255)', borderRadius: '5px', textAlign: 'center', left: 0, right: 0 }}
       >
         <div id="signup_form_content">
           <span style={{ fontSize: '16pt', fontWeight: 300 }}>Get started with 10 free org-chart credits.<br />No credit card is needed.</span>
           <br />
           <br />
           <div style={{ width: '90%', left: '5%', position: 'relative' }}>
             <div className="row">
               <div className="col-sm-12">
                 <input
                   id="full_name"
                   type="text"
                   className="form-control-custom"
                   placeholder="Full Name"
                   onInput={handleFullNameChange}
                 /><br />
               </div>
               <div className="col-sm-12 phone_number_input">
                 <input
                   id="phone"
                   type="tel"
                   className="form-control-custom enter_click phone_number"
                   placeholder="Mobile Number"
                   onInput={handlePhoneChange}
                 /><br />
               </div>
               <div className="col-sm-12">
                 <input
                   id="email"
                   type="text"
                   className="form-control-custom enter_click"
                   placeholder="Business Email"
                   onInput={handleEmailChange}
                 /><br />
               </div>
               <div className="col-sm-12">
                 <input
                   id="password"
                   type="password"
                   className="form-control-custom enter_click"
                   placeholder="Password"
                   onInput={handlePasswordChange}
                 /><br />
               </div>
               <div className="col-sm-12 dropdown show">
                 <button
                   id="new_account_use_case"
                   className="btn dropdown-toggle"
                   type="button"
                   style={{ width: '100%', fontSize: '10pt', backgroundColor: 'white', border: '1px solid rgb(210,210,210)', color: '#495057' }}
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="true"
                 >
                   I work for a
                 </button>
                 <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ width: '93%', fontSize: '10pt', position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(0px, 34px, 0px)' }} x-placement="bottom-start">
                   <a className="dropdown-item" onClick={() => handleAccountUseCaseSelect('agency')} use_case="agency" label="Recruitment Agency">
                     Recruitment Agency
                   </a>
                   <a className="dropdown-item" onClick={() => handleAccountUseCaseSelect('corporate')} use_case="corporate" label="Corporate">
                     Corporate
                   </a>
                 </div>
               </div>
             </div>

             <div style={{ width: '100%', textAlign: 'center', position: 'relative', padding: '20px', marginTop: '20px' }}>
               <div
                 id="signup_button_desktop"
                 className="form_button enter_click"
                 style={{ margin: 'auto', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                 onClick={handleSignUpClick}
               >
                 Create account
               </div>
             </div>
           </div>
           <div id="signup_error" style={{ marginTop: '20px' }}></div>
           <div
             style={{ color: 'rgb(197,197,205)', cursor: 'pointer' }}
             onClick={() => new PageContents().changePage('/login')}
           >
             Already registered? <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Log in instead</u>
           </div>
           <br />
           <div style={{ color: 'rgb(197,197,205)' }}>
             <u style={{ borderBottom: '1px dashed', textDecoration: 'none' }}>Account lock: </u>We discourage license sharing. Your account will be accessible from this device only
           </div>
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
       <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</i>
       <br />
       <span style={{ fontSize: '13pt' }}>
         <br />
         <br />
         <strong style={{ fontWeight: 500 }} id="testimonial_name">
           Mannan Pacha
         </strong>{' '}
         |
       </span>
       <span id="testimonial_title" style={{ fontSize: '13pt' }}>
         Manager - Ernst & Young
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

export default NewSignupPage