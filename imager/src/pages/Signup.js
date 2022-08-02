import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'


export default function Signup() {

    const [password,setpassword] = useState("");
    const [email,setemail ]= useState("");
    const [role,setrole] = useState("");
    const [firstname,setfirstname] = useState("");
    const [lastname,setlastname] = useState("");
    const navigate = useNavigate()


    const  loginsubmit = () =>{
        console.log(`firstname ${firstname} \n lastname ${lastname} \n email: ${email} \n password ${password}  \n role ${role} `)
        Axios.post("http://localhost:8000/api/users/signup",{email:email,password:password,username :firstname + lastname ,role: role})
        .then(function(response){
            console.log(response);
            navigate('/')
            console.log(response);
            
        })
        .catch((e)=>console.log(e)) 

   }



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

            <form action="/" method="POST" id="LoginForm">

                <input type="fname" placeholder="First Name" className="input" id="fname"
                 onChange={(e)=> setfirstname(e.target.value)} />

                <input type="lname" placeholder="Last Name" className="input" 
                onChange={(e)=> setlastname(e.target.value)} />
                    
                <select id="test" name="role" placeholder="Role" className="input"
                onChange={(e)=> {setrole(e.target.value)
                console.log(e)}}>
                    <option value="consultant">Consultant</option>
                    <option value="admin">Admin</option>
                </select>
        
                <input type="email" placeholder="Email" className="input" 
                onChange={(e)=> setemail(e.target.value)}/>
                    
                <div>
                    <input type="password" placeholder="Password" className="input" 
                    onChange={(e)=> setpassword(e.target.value)}/>
                    <i className='bx bx-hide eye-icon'></i>
                    {/* <i className='far fa-eye eye-icon'></i> */}
                </div>
                        
                <input type="password" placeholder="Confirm Password" className="input" />
                <i className='bx bx-hide eye-icon'></i>
                {/* <!-- <i className='bx bx-hide eye-icon'></i> --> */}

                <div className="center-align normal-padd">
                    <Link to="/Signup"><button id="submitButton" className="normal var2 medium" onClick={loginsubmit}> Sign up </button></Link>                
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
