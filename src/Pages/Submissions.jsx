import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import toast from "react-hot-toast";
import { server } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import './Submissions.css';
const Submissions = ()=>{
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

    
    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
            axios.get(`${server}/form/my`,{
                withCredentials: true,
            }).then(res=>{
                setTasks(res.data.entrepreneur);
                console.log(res.data.entrepreneur);
            }).catch(e=>{
                toast.error("Eror h bhai");
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
      <center><div className="submissionheading">You Have {tasks.length} Form Submissions</div></center>
      {
        tasks.map((task, index) => (
            <div className="submissioncontainer">
                <div className="submissioncontent1">
                    <b>Name:</b>{"      " + task.name}
                    <br/>
                    <br/>
                    <b>Age:</b>{"      " + task.age}
                    <br/>
                    <br/>
                    <b>Email:</b>{"      " + task.email}
                    <br/>
                    <br/>
                    <b>Mobile:</b>{"      " + task.mobile}
                    <br/>
                    <br/>
                    <b>Aadhar:</b>{"      " + task.aadhar}
                    <br/>
                    <br/>
                </div>
                <div className="submissioncontent1">
                <b>Qualification:</b>{"      " + task.qualifications}
                    <br/>
                    <br/>
                    <b>Profession:</b> {"      " + task.profession}
                    <br/>
                    <br/>

                    <b>Description:</b>{"      " +task.description}
                    <br/>
                    <br/>
                    <b>Company Size:</b>{"      "+ task.companysize}
                    <br/>
                    <br/>
                    <b>Target Audience:</b>{"      "+ task.targetaudience}
                    <br/>
                    <br/>
                    </div>
                <div className="submissioncontent1">
                    <b>Equity:</b>{"      "+task.equity}
                    <br/>
                    <br/>
                    <b>Budget:</b>{"      "+task.budget}
                    <br/>
                    <br/>
                    <b>Expected Income:</b>{"      "+task.expinc}
                    <br/>
                    <br/>
                    <b>Start Up Level:</b>{"      "+task.startuplevel}
                    <br/>
                    <br/>

                </div>
            </div>
        ))
        

}
        </>
    );

};
export default Submissions;
