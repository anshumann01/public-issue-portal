import React from 'react'
// import { LogIn } from 'lucide-react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const defaultUsers=[
        {
    email: "user@example.com",
    password: "password123",
    role: "Citizen",
    }, 
    {
    email: "admin@example.com",
    password: "password123",
    role: "Admin",
    }
    ];

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedusers = users.find(
            (u) => u.email === email && u.password === password 
        );
        if(!matchedusers) {
            alert("Invalid Email or Password!");
            return;
        }
        localStorage.setItem("currentUser",JSON.stringify(matchedusers));
        localStorage.setItem("role",matchedusers.role);

        alert("Successfully Logged in!!");

        if(matchedusers.role==="Admin") {
            navigate("/admin");
        }
        else {
            navigate("/citizen");
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("users")) {
            localStorage.setItem("users",JSON.stringify(defaultUsers));
        }
    },[]);
    
  return (
    <div className='h-screen w-full bg-white flex flex-col  items-center'>
        <div className='flex flex-col items-center mt-12'>
            <h1 className='font-semibold text-2xl'>JanSeva Portal</h1>
            <h2 className='text-gray-500'>Public Issue Reporting & Awareness</h2>
        </div>
        <div >
            <form onSubmit={(e)=>{e.preventDefault(); handleLogin();}} className='flex flex-col items-center border border-gray-400 p-4 rounded-lg mt-12' action="">
                <p className='font-semibold text-lg'>Welcome Back</p>
                <p className='text-gray-500'>Sign in to your account to continue</p>
                <div className='mt-6 flex flex-col gap-4'>
                    <input className='w-70 px-4 py-2 border border-gray-400 bg-gray-50 rounded-lg' type="email" placeholder='E-mail Address' value={email} onChange={(e)=>setEmail(e.target.value) } />
                    <input className='w-70 px-4 py-2 border border-gray-400 bg-gray-50 rounded-lg' type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <div>
                        <button type='submit' className=' focus:border-[#FF9933] text-white font-semibold w-70 px-4 py-2 bg-[#FF9933] rounded-lg'>Sign In</button>
                    </div>
                </div>
                <div className='text-xs text-gray-500 flex flex-col  border bg-gray-50 border-gray-400 p-4 rounded-lg mt-4 w-74'>
            <p className='font-semibold'>Demo Credentials:</p>
            <p><span className='font-semibold'>User:</span> user@example.com</p>
            <p><span className='font-semibold'>Admin:</span> admin@example.com</p>
            <p><span className='font-semibold'>Password: </span>password123</p>
        </div>
            </form>
        </div>
        
    </div>
  )
}

export default LoginPage