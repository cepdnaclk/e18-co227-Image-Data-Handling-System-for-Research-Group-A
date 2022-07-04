import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <React.Fragment> 
        <section className="header">
            <div className="logo">ImageR</div>
            <div className="right-align">
            <Link to="/Signup"><button className="small var2 normal">Sign up</button></Link>
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
            <h3>Login</h3>
            <form action="Home.html" method="POST">

                <input type="email" placeholder="Email" className="input" />
                    
                <input type="password" placeholder="Password" className="input" />
                <i className='bx bx-hide eye-icon'></i>

                <div className="center-align normal-padd">
                    <button onclick = "signup()" className="normal var2 medium">Login</button>
                </div>

                <div className="forgot-pass">
                    <a href="#">Forgot password?</a>
                </div>

            </form>

            <div className="extra">
            Don't have an account?<Link to="/Signup">Sign up</Link>
            </div>

        </section>

    {/* <script src="js/script.js"></script> */}
    </React.Fragment>
  )
}
