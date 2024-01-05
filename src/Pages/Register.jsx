import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { Context, server } from '../main';
import './Register.css';
const Register = () => {
  
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [mobile, setMobile]=useState("");
    const {isAuthenticated, setIsAuthenticated}=useContext(Context);


    const submitHandler = async(e)=>{
        e.preventDefault();
        let flag=true;
        for(let i=0;i<mobile.length;i++){
          if(mobile[i] >57 && mobile[i]<48)flag=false;
        }
        if(password.length<6){
          toast.error("Password is too short");
        }
        else if(mobile.length!=10){
          toast.error("Enter a valid mobile number");
        }
        else if(!flag){
          toast.error("Enter a valid mobile number");
        }
        else{
          try{
          const {data} = await axios.post(`${server}/users/new`,{
          name,email,password,mobile
        },{
          headers:{          
            "Content-Type":"application/json",          
          },
          withCredentials: true,
        }        
      );
      toast.success(data.message);
      setIsAuthenticated(true);
    }catch(error){
            toast.error("User Already exist");
            console.log(error)
            setIsAuthenticated(false);
      }
    }
  };


  return (
    <>
      <div className="ff">
        <header>
          <div className="header-content">
            <div className="head1">
                <center>Shark Tank India</center>
            </div>
            <div className="middleContent">
            <div className="middleContent1">
            <center><div className='he1'>A Step towards Start-ups :<br/>BUILDING NATION </div></center>
                <div className='associationWith'>Association With: Start-Up-India</div>
                <img className="logo" src="https://cdn.thewire.in/wp-content/uploads/2022/07/17161111/Screenshot-2022-07-17-at-4.10.06-PM-1024x796.png"  />
            </div>
              <div className="signUp">
                <form className="signUpText" onSubmit={submitHandler}>
                    SIGN UP/LOGIN
                    <div className='load-top'></div>
                    <input className="inp" value={name} onChange={(e)=>setName(e.target.value)} type="text" id="name" placeholder="Name" required /><br />
                    <input className="inp" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="E-Mail" required /><br />
                    <input className="inp" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Password (min 6 digits)" required /><br />
                    <input className="inp" value={mobile} onChange={(e)=>setMobile(e.target.value)}  id="mobile" placeholder="Phone Number" required /><br /><br />
                    <button className="signUpBtn1" type="submit" >SIGN UP</button>
                </form>                        
                    <Link to ={"/login"}><button className="signUpBtn2">Log In</button></Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Register;