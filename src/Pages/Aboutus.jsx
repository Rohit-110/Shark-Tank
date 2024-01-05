import React from 'react';
import './Aboutus.css'; // Make sure to import your CSS file in your JSX file
import { Link } from 'react-router-dom';
import { Context } from '../main';
import { useContext } from 'react';
import { server } from '../main';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AboutUs = () => {

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
        <div className="aboutusintroduction">
          <b><font size="12">About Us </font></b>
        </div>
        <br />
        <br />
        <br />
        <div className="aboutusmiddleContent">
          <p>
            <b>
              <span id="aboutusfirstLetter">S</span>
            </b>
            hark tank provides the platform where entrepreneurs pitch their
            business ideas or products to a panel of wealthy investors, known
            as "sharks," with the goal of securing investment funds in exchange
            for equity in their company. This website provides a platform for
            aspiring entrepreneurs to present their innovations, inventions, or
            business concepts to successful businesspeople who have achieved
            notable success in their respective industries.
          </p>
          <p>
            <span id="aboutusourMission">Our Mission</span>
            <span id="aboutuscontents1">
              : Empowering Entrepreneurs, Building Connections, Inspiring
              Innovation
            </span>
            <br />
            <br />
            Our mission is clear: to empower entrepreneurs on their journey to
            success and inspire innovation that transforms industries. Shark
            Tank Ventures is more than just a television show; it's a thriving
            ecosystem that fosters creativity, resilience, and unparalleled
            opportunities for growth.
          </p>
        </div>
        </>
  );
};

export default AboutUs;
