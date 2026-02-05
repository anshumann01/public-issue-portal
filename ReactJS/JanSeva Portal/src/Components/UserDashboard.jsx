import React from 'react'
import Navbar from './Navbar'
import DataCards from './DataCards'
import NewIssue from './NewIssue'
import ReportedIssue from './ReportedIssue'
import { useState, useEffect } from "react";





const UserDashboard = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
  const storedIssues = JSON.parse(localStorage.getItem("issues")) || [];
  setIssues(storedIssues);
}, []);

const handleResolve = (id) => {
  const updatedIssues = issues.map((issue) =>
    issue.id === id
      ? { ...issue, status: "Resolved" }
      : issue
  );

  setIssues(updatedIssues);
  localStorage.setItem("issues", JSON.stringify(updatedIssues));
};


const handleDelete = (id) => {
  const updatedIssues = issues.filter(
    (issue) => issue.id !== id
  );

  setIssues(updatedIssues);
  localStorage.setItem("issues", JSON.stringify(updatedIssues));
};
  return (
    <>
    <Navbar></Navbar>
    <div className='px-12 py-10'>
      <div className='flex flex-col'>
        <h3 className='text-2xl font-semibold'>My Dashboard</h3>
        <p className='text-gray-500'>Report and track public issues in your area</p>
      </div>
      <div className='flex gap-8 w-full'>
        <DataCards/>
        <DataCards/>
        <DataCards/>
      </div>
      <div className='flex gap-12 w-full'>
        <NewIssue issues={issues} setIssues={setIssues}></NewIssue>
        <div className='flex flex-col gap-4 flex-1'>
          <p className='font-semibold text-xl'>My Reported Issue</p>
          {issues.length === 0 ? (
              <p className="text-gray-400">No issues reported yet</p>
            ) : (
              issues.map((issue) => (
                <ReportedIssue key={issue.id} issue={issue} onResolve={handleResolve} onDelete={handleDelete}/>
              ))
            )}
        </div>
      </div>
    </div>
    </>
  )
}

export default UserDashboard