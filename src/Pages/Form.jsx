import './Form.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { server } from '../main';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Context } from '../main';
import { useContext } from 'react';


const Form = () =>{
    
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [qualifications, setQualifications]=useState("");
    const [profession, setProfession]=useState("");
    const [age, setAge]=useState("");
    const [mobile, setMobile]=useState("");
    const [aadhar, setAadhar]=useState("");
    const [description, setDescription]=useState("");
    const [companysize, setCompanySize]=useState("");
    const [targetaudience, setTargetAudience]=useState("");
    const [equity, setEquity]=useState("");
    const [budget, setBudget]=useState("");
    const [expinc, setExpinc]=useState("");
    const [startuplevel, setStartupLevel]=useState("");
    const {isAuthenticated, setIsAuthenticated}=useContext(Context);
    
    const resetForm = () => {
        setName("");
        setEmail("");
        setQualifications("");
        setProfession("");
        setAge("");
        setMobile("");
        setAadhar("");
        setDescription("");
        setCompanySize("");
        setTargetAudience("");
        setEquity("");
        setBudget("");
        setExpinc("");
        setStartupLevel("");
      };


    const formHandler = async(e)=>{
        e.preventDefault();
        console.log("Hello ");
        try{
          const {data} = await axios.post(`${server}/form/new`,{
          name,age,email,qualifications,profession,mobile,aadhar,description,companysize,targetaudience,equity,budget,expinc, startuplevel,
        },{
          headers:{          
            "Content-Type":"application/json",          
          },
          withCredentials: true,
        }    
      );
      toast.success("Form Submitted Succefully");
      resetForm();
    }catch(error){
            toast.error('Form NOT Sunmitted');
            console.log(error.response.data.message);
      }

      
  };


    return(
        <><div className="navbarhead">
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
          <Link to ={"/register"}><div className="navbarcontacts">
          <div class="navbara"><span id="navbarcontactsText"><b>Logout</b></span></div>
          </div></Link>
        </div>
      </div>
    <h1 className="formh1"><font color="white" size="10"><center>Startup Application Form</center></font></h1>
    <form className="formForm" onSubmit={formHandler}>
        <div className="formstart">
        <div className="formcol-1">
            <h2 className='formper'>Personal Details</h2>
            <label className=" formtext" for="name"><b>Name:</b></label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="forminp" type="text" id="formName" name="name"  required /><br/><br/>

            <label className=" formtext"  for="age"><b>Age:</b></label>
            <input  value={age} onChange={(e)=>setAge(e.target.value)} className="forminp"  type="text" id="formAge" name="age"  required /><br/><br/>

            <label className=" formtext"  for="qualifications"><b>Qualifications/Achievements:</b></label>
            <input   value={qualifications} onChange={(e)=>setQualifications(e.target.value)} className="forminp" type="text" id="formQualifications" name="qualifications"  required/><br/><br/>

            <label  className=" formtext" for="profession"><b>Profession:</b></label>
            <input   value={profession} onChange={(e)=>setProfession(e.target.value)} className="forminp" type="text" id="formProfession" name="profession"  required /><br/><br/>

            <label  className=" formtext" for="email"><b>Email-Id:</b></label>
            <input   value={email} onChange={(e)=>setEmail(e.target.value)} className="forminp" type="email" id="formEmail" name="email"  required/><br/><br/>

            <label  className=" formtext" for="mobile"><b>Mobile No:</b></label>
            <input  value={mobile} onChange={(e)=>setMobile(e.target.value)} className="forminp"  type="text" id="formMobile" name="mobile" required /><br/><br/>

            <label className=" formtext"  for="aadhar"><b>Aadhar No.</b></label>
            <input  value={aadhar} onChange={(e)=>setAadhar(e.target.value)} className="forminp"  type="text" id="formAadhar" name="aadhar"  required /><br/><br/>
            
        </div>
        <div className="formcol-2">

            <h2 className='formper'>Start-Up Idea</h2>
            <label  className=" formtext" for="description"><b>Detailed Description:</b></label>
            <input  value={description} onChange={(e)=>setDescription(e.target.value)} className="forminp"  type ="text "id="description" name="description" placeholder=""  required/><br/><br/>

            <label  className=" formtext" for="companySize"><b>Company-Size:</b></label>
            <input  value={companysize} onChange={(e)=>setCompanySize(e.target.value)} className="forminp"  type ="text "id="companysize" name="companysize" placeholder="Small / Large"  required/><br/><br/> 

            <label  className=" formtext" for="targetAudience"><b>Target Audience:</b></label>
            <input   value={targetaudience} onChange={(e)=>setTargetAudience(e.target.value)} className="forminp" type="text" id="targetaudience" name="targetaudience" placeholder="" required /><br/><br/>

            <label  className=" formtext" for="equity"><b>Equity Demand:</b></label>
            <input   value={equity} onChange={(e)=>setEquity(e.target.value)} className="forminp" type="text" id="equity" name="equity" placeholder="in %" required  /><br/><br/>

            <label  className=" formtext" for="budget"><b>Budget Investment:</b></label>
            <input  value={budget} onChange={(e)=>setBudget(e.target.value)} className="forminp"  type="text" id="budget" name="budget" placeholder="Rs"  required /><br/><br/>

            <label  className=" formtext" for="income"><b>Annual Expected Income:</b></label>
            <input   value={expinc} onChange={(e)=>setExpinc(e.target.value)} className="forminp" type="text" id="expinc" name="expinc" placeholder="Rs" required  /><br/><br/>

            <label  className=" formtext" for="startupLevel"><b>Start-Up Level:</b></label>
            <input   value={startuplevel} onChange={(e)=>setStartupLevel(e.target.value)} className="forminp" type ="text "id="startuplevel" name="startuplevel" placeholder="" required  /><br/><br/>
            <br/><br/>
        </div>
    </div>

        <button type="submit" className="formButton">Submit</button>
    </form>
    </>
    );
};

export default Form;