import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='ContactUs'  id='faq'>
            <div class="container">
                    <div className="row mb-5">
                        
                        <div className="col-md-12 col-lg-12">
                            <h2>
                            Hurry up! Subscribe our newsletter<br/>
                            and get 25% Off
                            </h2>
                            <p className='textHyrry'>
                                Limited time offer for this month. No credit card required.
                            </p>
                        </div>
                    </div>

                    <div className='row justify-content-end align-content-end'>

                       <div className='col-md-8'>
                       <div className="input-group mb-3">
                       <span className="input-group-text" id="basic-addon1">@</span>
                       <input type="text" class="form-control" placeholder="Enter Address Email" aria-label="Username" aria-describedby="basic-addon1"/>
                     </div>
                     
                       </div>

                       <div className='col-md-4'>
                               <button className='btn btn-danger'>Subscribe</button>
                       </div>

                    </div>
            </div>
    </div>
  )
}

export default Contact
