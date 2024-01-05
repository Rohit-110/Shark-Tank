import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import Register from "./Pages/Register.jsx";
import Home from './pages/Home.jsx'
import Form from './pages/Form.jsx'
import Submissions from "./Pages/Submissions.jsx";
function App() {

  return(
  <Router>
      <Routes>   
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login />} />        
        <Route path="/home" element={<Home />} />        
        <Route path="/aboutus" element={<AboutUs />} />              
        <Route path="/contacts" element={<Contacts />} />        
        <Route path="/profile" element={<Profile />} />        
        <Route path="/submissions" element={<Submissions />} />        
        <Route path="/form" element={<Form />} />        
      </Routes>
      <Toaster />  
    </Router>
  );
}
export default App;