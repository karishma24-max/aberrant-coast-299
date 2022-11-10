import React, { useEffect, useState } from "react";
import "./signin.css"
import BLSignin from "./images/BLSignin.png"
import axios from "axios"


const init = {
    email:"",
    password:""
}

const getusers = async ()=>{
    let data = await fetch("http://localhost:8080/user")
    data = data.data;
    console.log(data);
}

const Signin = ()=>{
    const[data , setdata] = useState({});

    const[state, setstate] = useState(false);

    const[users , setusers] = useState([]);

    const handleChange = (e) =>{
        const {value, name} = e.target
        setdata({...data,[name]:value})
        // console.log(data);
    }
  
    const handleSubmit = () =>{
        if(users.length>1){
            console.log(users);
        }else{
            axios.get("http://localhost:8080/user")
            .then((res)=>{
            let data = (res.data)
            let user = data.filter((el)=>el.email===data.email && el.password==data.password);
            setusers(data);
            localStorage.setItem("user",JSON.stringify(user));
        });
        }
    }
    
   
   
    return (
        <div id="Container">

            <div id="div1">
                <div id="bufferimgdiv">
                    <img id="bufferimg" src="https://static.buffer.com/login/public/img/buffer-logo.svg" alt="" />
                </div>

            
                <div id="formdiv">

                        <h1 id="LOGIN">Log in</h1>
                        <h4 className="lables">Email Adress</h4>
                        <div>
                        <input  type="text" onChange={handleChange} name="email" id="inputs" placeholder="Email" />
                        </div>

                        <h4 className="lables">Password</h4>
                        <div>
                        <input  type="text" onChange={handleChange} name="password" id="inputs" placeholder="Password" />
                        </div>

                        <div>
                            <button id="loginbtn" onClick={handleSubmit}>LOGIN</button>
                        </div> 

                        <div id="cafp">
                            <button id="CRA">Creat an account</button>
                            <button id="FRP">Forgot Password</button>
                        </div>     
                        
                        <div id="suppordiv">
                            <p>We no longer support social sign on. Please click here to set your password and access your account.</p>
                        </div>

                        <div id="lastdiv">
                            <a href="">&#x2022; Terms of Service</a>
                            <a href="">&#x2022; Privacy Policy</a>
                            <a href="">&#x2022; Security</a>
                        </div>

                </div>

            </div>


            <div id="div2">
                <img id="BLSignimg" src={BLSignin} alt="" />
            </div>
        </div>
    )
}

export default Signin