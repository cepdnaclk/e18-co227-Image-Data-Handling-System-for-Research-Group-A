import React from 'react'
import { Link } from 'react-router-dom'


export default function Signup() {
  return (
    <React.Fragment>

        <section className="header">
            <div className="logo">ImageR</div>
            <div className="right-align">
            <Link to="/Login"><button className="small var2 normal">Log in</button></Link>
            </div>

        
        </section>
        <section className="description">
            <h2>Leave your images to us</h2>
            <h4>Upload, Store and Annotate images in your Research</h4>
        </section>

        
        <section className="design column-left">
            <img src="assets/images/vector.png" alt="vector design" className="vector-img" />  
        </section>

   
        <section className="box column-right">

            <h3>Create an account</h3>

            <form action="Home.html" method="POST" id="LoginForm">

                <input type="fname" placeholder="First Name" className="input" id="fname" />

                <input type="lname" placeholder="Last Name" className="input" />
                    
                <select name="role" placeholder="Consultant" className="input">
                    <option value="consultant">Consultant</option>
                    <option value="admin">Admin</option>
                </select>
        
                <input type="email" placeholder="Email" className="input" />
                    
                <div>
                    <input type="password" placeholder="Password" className="input" />
                    <i className='bx bx-hide eye-icon'></i>
                    {/* <i className='far fa-eye eye-icon'></i> */}
                </div>
                        
                <input type="password" placeholder="Confirm Password" className="input" />
                <i className='bx bx-hide eye-icon'></i>
                {/* <!-- <i className='bx bx-hide eye-icon'></i> --> */}

                <div className="center-align normal-padd">
                    <Link to="/Signup"><button id="submitButton" className="normal var2 medium"> Sign up </button></Link>                
                </div>
                        
                <div className="forgot-pass">
                    <a href="#">Forgot password?</a>
                </div>


            </form>

            <div className="extra">
                Have an account already? <Link to="/Login">Log in</Link>
            </div>

        </section>

        {/* <script src="js/script.js"></script> */}
    </React.Fragment>
  )
}
