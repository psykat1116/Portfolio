import React from 'react'
import Marker from './Marker'

const Profile = () => {
  return (
    <div className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Profiles</div>
      </div>
      <div className="relative w-full flex flex-col gap-5 items-start pt-4 before:absolute before:content-[''] before:h-full before:w-1 before:top-0 before:left-2 before:bg-redcolor">
        
      </div>
    </div>
  )
}

export default Profile