import React from 'react'
import {LogOut} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("role");

        navigate("/");
    };
  return (
    <div className='flex justify-between px-4 py-2 border-b border-gray-200'>
        <div>
            <div><img src="" alt="" /></div>
            <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-xl'>JanSeva Portal</h1>
                <p className='text-gray-500 text-sm'>Public issue Reporting</p>
            </div>
        </div>
        <div className='text-gray-500 flex gap-10 items-center'>
            <p>Welcome </p>
            <button onClick={handleLogout} className='hover:bg-[#FF9933]/25 cursor-pointer hover:text-black px-2 py-1 rounded-lg flex gap-1 items-center'><LogOut size={16} strokeWidth={2} />Logout</button>
        </div>
    </div>
  )
}

export default Navbar