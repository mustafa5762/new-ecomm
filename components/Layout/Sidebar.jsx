import { X } from 'lucide-react'
import React from 'react'

function Sidebar({children}) {
  return (
    <div>
        <div className="fixed top-0 right-0 w-[400px] h-screen bg-white z-50 border-l border-neutral-200 p-8">
          <div className="flex justify-end">
            <div className="cursor-pointer">
              <X color='#525252'/>
            </div>
          </div>
          {children}
        </div>
    </div>
  )
}

export default Sidebar