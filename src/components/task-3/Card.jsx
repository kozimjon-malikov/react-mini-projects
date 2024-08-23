import React from 'react'

export default function Card({movie}) {
  return (
     <div className="p-4 w-full  md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-72 md:h-36 w-full object-cover object-center" src={movie.imgUrl} alt={movie.name} />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{movie.category}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{movie.name}</h1>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{movie.year}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>{movie.liked}
              </span>
            
            </div>
          </div>
        </div>
      </div>
  )
}
