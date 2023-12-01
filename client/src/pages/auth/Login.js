import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
   
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const naviagte=useNavigate();

    //form function
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
            if(res && res.data.success){
                toast.success(res.data.message)
                naviagte("/");
            }else{
                toast.error(res.data.message)
            }
            
        } catch (error) {
            console.log(error);
            toast.error("something went wrong")
            
        }
    }   

  return (
    <>
     <Layout title="Register">
        <div className="register">
        <form onSubmit={handleSubmit}>
            <h4>Login Form</h4>
           

  <div className="mb-3">
    
    <input type="email" 
    value={email} 
    onChange={(e)=>setEmail(e.target.value)} 
    className="form-control"
    id="exampleInputEmail1" 
    placeholder='Enter your email' 
    required  />
    
  </div>

  <div className="mb-3">
    
    <input
     type="password" 
     value={password} 
     onChange={(e)=>setPassword(e.target.value)} 
     className="form-control" 
     id="exampleInputPassword1" 
     placeholder='enter your password' required />
  </div>
  
  <button type="submit" className="btn btn-primary">login</button>
</form>

        </div>
      
    </Layout>
      
    </>
  )
}

export default Login

