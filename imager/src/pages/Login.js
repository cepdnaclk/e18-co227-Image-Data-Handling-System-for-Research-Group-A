import React from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Login() {

    const [password,setpassword] = useState("");
    const [email,setemail ]= useState("");
    const navigate = useNavigate()

    
   const  loginsubmit = () =>{
        console.log(`email: ${email}  password ${password} `)
        Axios.post("http://localhost:8000/api/users/login/",{email:email,password:password})
        .then(function(response){
            console.log(response);
            navigate('/')
            
        })
        .catch((e)=>console.log(e)) 

   }

    // useEffect(()=>{
    //     // Axios.post("http://localhost:5000/testapi/",{hello:123})
    //     // .then(()=>console.log("quaery sent"))
    //     // .catch((e)=>console.log(e)) 
    //     console.log(password)
    // },[])




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
            <div id="loginform" >

                <input id="email" type="email" name ="email" placeholder="Email" className="input"
                onChange={(e)=> setemail(e.target.value)} />
                    
                <input id="password" type="password" name="password" placeholder="Password" className="input" 
                 onChange={(e)=> setpassword(e.target.value)}/>
                <i className='bx bx-hide eye-icon'></i>

                <div className="center-align normal-padd">
                    <button type='submit' className="normal var2 medium"
                    onClick={loginsubmit}>Login</button>
                </div>

                <div className="forgot-pass">
                    <a href="#">Forgot password?</a>
                </div>

            </div>

            <div className="extra">
            Don't have an account?<Link to="/Signup">Sign up</Link>
            </div>

        </section>

    {/* <script src="js/script.js"></script> */}
    </React.Fragment>
  )
}
