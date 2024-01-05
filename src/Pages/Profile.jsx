import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { Context } from '../main';
import axios from 'axios';
import { server } from '../main'; 
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Profile = () => {
  const {isAuthenticated, setIsAuthenticated}= useContext(Context);
    
  const logoutHandler = async()=>{
    console.log("Hello ");
    try{
      const {data} = await axios.get(`${server}/users/logout`,
    {
      withCredentials: true,
    }
  );
  toast.success("You are logged out");
  setIsAuthenticated(false);
}catch(error){
        toast.error("Error");
        setIsAuthenticated(true);
  }
};

if(!isAuthenticated)return <Navigate to="/"/>


const [appliers,setAppliers]=useState([]);

useEffect(()=>{

  axios.get(`${server}/users/me`,{
    withCredentials: true,
  }).then((res)=>{
    setAppliers(res.data.user);
    setIsAuthenticated(true);
  }).catch((error)=>{
    toast.error('Error');
  })

},[]);

  return (
    <>
    <div className="navbarhead">
    <div className="navbarLogo">
      <b>Shark Tank India</b>
    </div>
    <div className="navbarnavBar">
    <Link to ={"/home"}><div className="navbarhome">
      <div class="navbara"><span id="navbarhomeText"><b>Home</b></span></div>
      </div></Link>
      <Link to ={"/aboutus"}><div className="navbaraboutUs">
      <div class="navbara"><span id="navbaraboutUsText"><b>About</b></span></div>
      </div></Link>
      <Link to ={"/submissions"}><div className="navbarmySubmissions">
        <div class="navbara"><span id="navbarmySubmissionsText"><b>Submissions</b></span></div>
      </div></Link>
      <Link to ={"/contacts"}><div className="navbarcontacts">
      <div class="navbara"><span id="navbarcontactsText"><b>Contacts</b></span></div>
      </div></Link>
      <Link to ={"/profile"}><div>
      <img class="navbarprofileLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&usqp=CAU"/>
      </div></Link>
      {isAuthenticated ? (
            <button class="navbaralogout" onClick={logoutHandler} ><span id="navbarcontactsText"><b>Logout</b></span></button>           

        ) : (
            <Link to ={"/login"}><div className="navbarcontacts">
            <div class="navbara"><span id="navbarcontactsText"><b>Login</b></span></div>
            </div></Link>  
        )
        }
    </div>
  </div>
      <><div className="profileTopContent">
          <center>User Profile</center>
        </div><br /><br /><div className="profileMiddleContent">
            <center>
              <div className="profileinformation">Information</div>
            </center><br /><br />
            <div className="profileName">
              Name : {" " + appliers.name}
            </div>
            <br />
            <div className="profileId">
              ID :  {" " + appliers.email}
            </div>
            <br />
            <div className="profileMobileNumber">
              Mobile Number :  {" " + appliers.mobile}
            </div>
            <br />
          </div></>
    </>
  );
};

export default Profile;
