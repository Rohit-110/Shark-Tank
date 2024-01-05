import React from 'react';
import './Home.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../main';
import axios from 'axios';
import { server } from '../main';
import toast from 'react-hot-toast';
 const Home = () => {   
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
        <div className="homemiddleContent">
          <div className="homemiddleContent1">
            <div className="homecenterText">
              <center>
                <b>Build Connections , Empower Yourself</b>
              </center>
            </div>
            <div className="homemiddlePattern">
              <div className="homesameRow">
                <div className="homebox1"></div>
                <div className="box2"></div>
              </div>
              <div className="homesameColumn">
                <div className="homebox3"></div>
                <div className="homebox4"></div>
              </div>
            </div>
          </div>
          <center>
            <div className="homeimgSlider"></div>
          </center>
          <br/><br/>
        </div>
        <div className="homelastContent">
          <div className="homelastText">To request for pitch click the below button :-</div>
          <div className="homelastButton">
            <center>
              <b>
                <Link to={'/form'}><center><span id="homeapplyTxt">Apply</span></center></Link>
              </b>
            </center>
          </div>
        </div>
        <div className="homemiddleContent2">
          <span id="homewhatWeOffer">What We Offer:</span>
          <ul type="discord-button">
            <li>
              <b><h3>Pitch Your Idea :</h3></b>
              Showcase your groundbreaking ideas to a community of investors, mentors, and potential collaborators. Our
              user-friendly platform makes it easy to create a compelling pitch that captures attention.
              <br />
              <br />
            </li>
            <li>
              <h3>Connect with Investors :</h3>
              Gain access to a network of experienced investors eager to discover the next big thing. Forge meaningful
              connections that go beyond funding — our investors are passionate about supporting your journey to success.
              <br />
              <br />
            </li>
            <li>
              <b>Educational Resources :</b>
              Explore our library of resources designed to enhance your entrepreneurial skills. From expert advice on
              perfecting your pitch to insights on navigating the business landscape, Shark Tank India is your go-to
              source for learning and growth.
              <br />
              <br />
            </li>
          </ul>
        </div>
        
    </>
  );
};
 
export default Home;
