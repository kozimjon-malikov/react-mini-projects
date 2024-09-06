import React from 'react'
import Card from './Card'
import movies from '../../task-data/movie'
export default function Task3() {
    return (
        <div className='movie__wrapper'>
            <h2 className='text-center text-4xl font-semibold leading-7 text-indigo-600 py-8'>
                🔗 My movies
            </h2>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {movies.map((item, index) => (
                            <Card movie={item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
