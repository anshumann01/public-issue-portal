import { useEffect, useState } from "react";
import ReportedIssue from "./ReportedIssue";
import Navbar from './Navbar'
import DataCards from './DataCards';

const AdminDashboard = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(storedIssues);
  }, []);

  const handleDelete = (id) => {
  const updatedIssues = issues.filter(
    (issue) => issue.id !== id
  );

  setIssues(updatedIssues);
  localStorage.setItem("issues", JSON.stringify(updatedIssues));
};


  const handleResolve = (id) => {
  const updatedIssues = issues.map((issue) =>
    issue.id === id
      ? { ...issue, status: "Resolved" }
      : issue
  );

  setIssues(updatedIssues);
  localStorage.setItem("issues", JSON.stringify(updatedIssues));
};

  return (
    <>
    <Navbar></Navbar>
    
    <div className="p-10">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-500">Manage and resolve reported public issues</p>
      <div className="flex gap-4">
        <DataCards/>
        <DataCards/>
        <DataCards/>
        <DataCards/>
      </div>
      <h2 className="text-2xl font-semibold mb-4">
        All Reported Issues
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {issues.length === 0 ? (
        <p>No issues found</p>
      ) : (
        issues.map(issue => (
          <ReportedIssue onResolve={handleResolve} key={issue.id} issue={issue} isAdmin={true}/>
        ))
      )}
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
