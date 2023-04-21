import React from 'react'
import Course from './Course'; 
import data from '../data.json';

function Courses() {
  return (
    <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
      <h2 className="text-4xl font-bold">Cursos disponibles</h2>
      <h3 className="text-xl">Puedes elegir variedad de cursos tecnicos online </h3>
      <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
        <h3>Transac SQL</h3>
        <h3>Excel</h3>
        <h3>Macros</h3>
        <h3>Tablas Dinamicas</h3>
        <h3>C-Sharp</h3> 
      </div>

        <div className="text-left w-full border border-gray-300 p-7">
            <h2 className="text-2xl font-bold mb-2">Expande tus Posibilidades aprendiendo nuevas Tecnología</h2>
            <h3>Profesor Background</h3>
            <button className="border border-dark font-bold text-sm p-2 mt-4 mb-8">
                El Profesor Tony
            </button>
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
                {data.map((item)=> (
                    <div className="h-60 w-60" key={item.id}>
                        <Course item={item}/>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Courses
