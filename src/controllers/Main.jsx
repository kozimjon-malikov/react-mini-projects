import React from 'react'
import { Link } from 'react-router-dom'
import Task from '../components/task-1/Task1'
import data from '../task-data/data';
export default function Main() {
    console.log(data)
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-7 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome To React</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here is my dashboard, I will solve tasks and do challanges</p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        {
                            data.map((item, index) => (
                                <div className="px-4 py-2 md:w-1/4 sm:w-1/2 w-full" key={item.id}>
                                    <div className="border-2 border-gray-200 px-4 py-4 bg-green-50-50 rounded-lg">
                                        <h1 className='text-indigo-500 title-font font-medium text-2xl'>{item.icon}</h1>
                                        <h2 className="title-font font-medium text-2xl my-6 text-gray-900">{item.name}</h2>
                                        <Link to={item.link} className="mt-2 text-green-500 leading-relaxed">Click me</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
