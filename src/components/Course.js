import React from 'react'
import {StarIcon} from "@heroicons/react/solid"
import img1 from '../images/womaninacomputer.jpg';

function Course({item, username, vote, students, price }) {
  return (
    <div className="flex flex-col items-start space-y-[1px]">
      <img src={img1}
        alt=""
        className="h-32"/>
        <h2 className="font-bold text-md pt-1">{item.title}</h2>
        <h2 className="text-xs text-gray-700">{item.username}</h2>
        <div className="flex space-x-1">
            <h3 className="text-orange-600 font-bold text-sm ">{item.vote}</h3>
        </div>
        <div className="flex items-center">
            <StarIcon className="w-4 text-orange-400" />
            <StarIcon className="w-4 text-orange-400" />
            <StarIcon className="w-4 text-orange-400" />
            <StarIcon className="w-4 text-orange-400" />
        </div>
        <div className="text-xs">{item.students}</div>
        <div className="flex space-x-4 items-center">
            <h3 className="text-black font-bold">{item.price}</h3>
            
        </div>
    </div>
  )
}

export default Course
