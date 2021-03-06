import React,{useContext} from 'react'
import '../Styles/Signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import UserContext  from '../Context/UserContext';


function Signup() {
  let{setUseralredyin}=useContext(UserContext);
  let navigate=useNavigate();
  const setusername=(e)=>{
    e.preventDefault();
    let username=e.target.username.value;
    localStorage.setItem("susername",username);
    setUseralredyin(false);
    navigate("/signup1");

    
  }
  return (
    <div className='main'>
    <div className='loginhead'>
    <ArrowBackIcon style={{color:"#808080"}}/> <h>Go back</h>
    </div>
    <div className='logintext'>
      <h1>Sign up with Username</h1>
      <p>Enter an username to create an <br/><p style={{marginLeft:"35%"}}>account</p></p>
    </div>
    <div style={{display:'flex',justifyContent:"center",marginTop:"30px"}}>
      <h style={{color:"#808080",fontSize:"20px"}}>Your Username</h>
    </div>
    <div >
      <form onSubmit={setusername} className='loginauth'>
      <TextField id="standard-basic" label="" variant="standard" style={{width:"400px"}} name="username" />
       <Button variant="contained" disableElevation style={{marginTop:"80px",borderRadius:"50px",width:"300px",height:"60px",backgroundColor:"#FF6719"}} type="submit">
       Continue
       </Button>
      </form>
    </div>
</div>
  )
}

export default Signup