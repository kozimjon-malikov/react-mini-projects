import React, { Component } from "react";
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    // Incrament 
    incrament = () => {
        this.setState({ count: this.state.count + 1 })
    }
    // Decrament 
    decrament = () => {
        this.setState({ count: this.state.count - 1 })
    }
    // Reset 
    reload = () => {
        this.setState({ count: 0 })
    }

    render() {
        const { count } = this.state;
        return (
            <div className="movie__wrapper">
                <div className="container rounded-md p-2  mx-auto min-h-[100vh]">
                    <div className="flex justify-center">
                        <h2 className="shadow w-48 p-3 text-center my-4 text-3xl text-fuchsia-800">Counter: <span className="text-fuchsia-500 text-4xl">{count}</span></h2>
                    </div>
                    <div class="p-2 w-full">
                        <button onClick={this.incrament} class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Incrament</button>
                        <button onClick={this.decrament} class="my-3 flex mx-auto text-white bg-cyan-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded text-lg">Decrament</button>
                        <button onClick={this.reload} class="my-3 flex mx-auto text-white bg-purple-500 border-0 py-2 px-11 focus:outline-none hover:bg-purple-600 rounded text-lg">Reload</button>
                    </div>
                </div>
            </div>
        )
    }
}