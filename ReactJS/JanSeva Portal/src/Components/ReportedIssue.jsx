import React from 'react'

const ReportedIssue = ({issue}) => {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
  <div className="flex justify-between items-start">
    <h2 className="text-lg font-semibold text-gray-900">
      {issue.title}
    </h2>

    <span className="flex items-center gap-1 text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
      <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
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
  </div>
</div>


  )
}

export default ReportedIssue