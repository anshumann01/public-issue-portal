import React from 'react'
import {CirclePlus,Send } from "lucide-react";
import { useState } from 'react';

const NewIssue = ({issues,setIssues}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title || !category || !description) {
      alert("Please fill all fields");
      return;
    }

    const newIssue = {
      id: Date.now(),
      title,
      category,
      description,
      status: "Pending",
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    const updatedIssues = [newIssue, ...issues];

    setIssues(updatedIssues);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));

    setTitle("");
    setCategory("");
    setDescription("");
  };
  return (
    <div className='py-4 px-4 border shadow  border-gray-200 rounded-lg w-1/3 max-h-85'>
        <div className=' flex items-center gap-2 mb-4'>
            <CirclePlus size={22} color="#ff7300" strokeWidth={2} />
            <p className='font-semibold text-lg'>Report New Issue</p>
        </div>
        <form  onSubmit={(e) => {e.preventDefault(); handleSubmit();}} action="" className='flex flex-col gap-4'>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" type="text" placeholder='Enter you issue' name="" id="" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option disabled className='px-4 py-2 cursor-pointer hover:bg-orange-50' value="">Select Issue Type</option>
                <option className='px-4 py-2 cursor-pointer hover:bg-orange-50' value="roads">Roads</option>
                <option className='px-4 py-2 cursor-pointer hover:bg-orange-50' value="water">Water</option>
                <option className='px-4 py-2 cursor-pointer hover:bg-orange-50' value="electricity">Electricity</option>
                <option className='px-4 py-2 cursor-pointer hover:bg-orange-50' value="sanitation">Sanitation</option>
                <option className='px-4 py-2 cursor-pointer hover:bg-orange-50' value="other">Other</option>
            </select>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Describe the issue in detail...' className="bg-gray-50 border border-gray-300 px-4 py-2 max-h-24 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" name="" id=""></textarea>
            <button  type="submit" className='flex items-center gap-2 justify-center focus:border-[#FF9933] text-white font-semibold px-4 py-2 bg-[#FF9933] rounded-lg'><Send size={20} color="#ffffff" strokeWidth={2} />Submit Issue</button>
        </form>
    </div>
  )
}

export default NewIssue