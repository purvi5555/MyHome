import React from 'react'


export default function Contact() {
  return (
    <div className='padmob'>
           {/* <h1 style={{textAlign: "center"}}>Contact Us</h1>
    <div className="container my-5" style={{backgroundColor: "aqua"}}>
    <div className="mb-3">
        <label  className="form-label pt-3">First Name</label>
        <input type="text" name="fname" className="form-control" id="exampleFormControlInput1" placeholder=""/>
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input type="text" name ="lname" className="form-control" id="exampleFormControlInput2" placeholder=""/ >
      </div>
    
      <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" id="exampleFormControlInput3" placeholder=""/>
      </div>
    
      <div className="mb-3 pb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </div> 
      <div className="container">
      <button type="button " className="btn btn-primary">Primary</button>
    </div>*/}
    <div className="container my-5">
    <h1 style={{textAlign: "center"}}>Contact Us</h1>
    <p className="my-3" style={{fontSize: "large"}}>If you would like to contact our organization, if you have any questions/concerns/thoughts or if you just want to say “hello” please feel free to contact us using the form below. We would love to hear from you and will endeavor to reply as soon as possible.</p>
</div>
    <section className="head pb-5">
    <div className="container py-5">
     <div className="card">
        <div className="card-body">
            <h1 className="font-weight-light text-center py-3"> Contact Us</h1>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12  ">
                    <div className="row pt-3">
                        <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                        <span style={{fontSize: "30px" ,color: "cadetblue"}}><i className="fa-solid fa-location-dot"></i></span>
                        </div>
                     <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                      <h3 className="font-weight-light">Find Us at office</h3>
                      <p>375,Alakpuri,Dewas</p>
                     </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                         <span style={{fontSize: "30px",color: "coral"}} ><i className="fa-solid fa-phone-volume"></i></span>
                        </div>
                     <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                      <h3 className="font-weight-light">Give us a Ring !!</h3>
                      <p>Poornima Tanwar <br/>+91-8435792124</p>
                     </div>
                    </div>
                </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
               <form>
                  <div className="form row ">
                    
                    <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="First Name"/>
                    </div>
                
                    <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12 ">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                  </div>
                  <label className="my-2">Email</label>
                 <input type="email" className="form-control" placeholder="Email"/>
                 <label className="my-2">Your Message</label>
                 <textarea className="form-control mb-3 " placeholder="Message" id="" cols="10" rows="10"></textarea>
                 <input type="checkbox"/> <label>I'm not a robort</label> 
                 <button className="float-right btn btn-primary mx-3">Submit</button>
                </form>
              </div>
            </div>
            
        </div>

     </div>
    </div>
</section>

   <div className="container my-5" style={{textAlign: "center"}}>
      <h1 className="my-5">Get Connected</h1>
      <a href="/" className="fa fa-facebook"></a>
      <a href="/" className="fa fa-twitter"></a>
       <a href="/" className="fa fa-google"></a>
       <a href="/" className="fa fa-youtube"></a>
       <a href="/" className="fa fa-instagram"></a>
    </div>
    </div>
  )
}
