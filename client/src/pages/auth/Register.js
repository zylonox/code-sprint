import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import {toast} from 'react-toastify'

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    

    //form function
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,email,password,phone);
        toast.success('register successfully');

    }   

  return (
    <Layout title="Register">
        <div className="register">
        <form onSubmit={handleSubmit}>
           <div className="mb-3">
    
    <input type="text" 
    value={name} 
    onChange={(e)=>setName(e.target.value)} 
    className="form-control" 
    id="exampleInputEmail1 " 
    placeholder='Enter your name ' 
    required />
    
  </div>

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
    
    <input type="text" 
    value={phone} 
    onChange={(e)=>setPhone(e.target.value)} 
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter your phone ' 
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
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
      
    </Layout>
  )
}

export default Register
