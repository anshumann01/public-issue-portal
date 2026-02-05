import React from 'react'
import {Trash} from 'lucide-react';

const ReportedIssue = ({issue,onResolve,onDelete,isAdmin}) => {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
  <div className="flex justify-between items-start">
    <h2 className="text-lg font-semibold text-gray-900">
      {issue.title}
    </h2>

    <span
  className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full font-medium
  ${
    issue.status === "Resolved"
      ? "text-green-700 bg-green-100"
      : "text-orange-700 bg-orange-100"
  }`}
>
  <span
    className={`h-2 w-2 rounded-full
    ${
      issue.status === "Resolved"
        ? "bg-green-500"
        : "bg-orange-500"
    }`}
  ></span>

  {issue.status}
</span>

  </div>

  <p className="text-gray-600 mt-1">
    {issue.description}
  </p>

  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
    <span className="flex items-center gap-1 text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
      {issue.category}
    </span>

    <span className="flex items-center gap-1">
      {issue.date}
    </span>
    <button onClick={() => onDelete(issue.id)} className='flex items-center p-2 border  border-red-500 text-red-500 font-semibold rounded-lg cursor-pointer gap-2 hover:bg-red-500 hover:text-white'> Delete</button> 
    {isAdmin && ( <button onClick={() => onResolve(issue.id)} className='flex items-center p-2 border  border-green-500 text-green-500 font-semibold rounded-lg cursor-pointer gap-2 hover:bg-green-500 hover:text-white'>Resolve</button> )}
  </div>
</div>


  )
}

export default ReportedIssue