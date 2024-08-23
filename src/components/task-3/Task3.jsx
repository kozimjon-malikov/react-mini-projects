import React from 'react'
import Card from './Card'
import movies from '../../task-data/movie'
export default function Task3() {
    return (
        <div className='movie__wrapper'>
            <h2 className='text-center text-4xl font-semibold leading-7 text-indigo-600 py-8'>
                🔗 My movies
            </h2>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {movies.map((item, index) => (
                            <Card movie={item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
