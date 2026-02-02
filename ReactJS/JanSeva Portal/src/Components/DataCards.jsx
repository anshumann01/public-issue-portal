import React from 'react'
import { NotepadText } from 'lucide-react'

const DataCards = () => {
  return (
    <div className='shadow flex items-center gap-4 border border-gray-200 rounded-lg px-2 py-4 w-full my-6'>
        <div>
            <NotepadText size={28} color="#ff7300" strokeWidth={1} />
        </div>
        <div className='flex flex-col'>
            <p className='font-bold text-3xl'>3</p>
            <p className='text-gray-500'>Total issues</p>
        </div>
    </div>
  )
}

export default DataCards