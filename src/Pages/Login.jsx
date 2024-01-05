import { useContext } from 'react';
import './Login.css';
import { Link, Navigate } from 'react-router-dom';
import { Context } from '../main';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { server } from '../main';
const Login = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(Context);
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    
    
    const submitHandler = async(e)=>{
        e.preventDefault();
        try{
          const {data} = await axios.post(`${server}/users/login`,{
          email,password,
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
            toast.error('Invalid Email or Password');
            console.log(error.response.data.message);
            setIsAuthenticated(false);
      }

      
  };

    if(isAuthenticated)return <Navigate to="/home"/>


    
    return (
        <>
        <center><div className="loginwrapper">
            <header className='loginlogheader'>Login Form</header>
                <form onSubmit={submitHandler} >
                    <div className="logininput-area">
                    <input className="loginlogtext" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" placeholder="E-Mail" required /><br />
                    <input className="loginlogtext" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" placeholder="Password (min 6 digits)" required /><br />
                    </div>
                < button className="loginlogbtn" type="submit">Login</button>
                </form>
            <div className="loginsign-txt">Not yet a member? </div>
            <Link to={'/'}><button className="loginlogbtn2">Register</button></Link> 
        </div></center>
        </>
    );
};

export default Login;
