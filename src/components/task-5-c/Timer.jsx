import React, { Children, Component } from "react";
export default class Timer extends Component {
    state = {
        second: 0,
        minute: 0,
        hour: 0,
        btnDisabled: false,
        interval:null,
        intervalStorage:[]
    }
    // Start timer 
    startTimer = () => {
        this.setState({btnDisabled:true})
        let timer = setInterval(() => {
            const { second, minute, hour } = this.state;
            if (second === 59) {
                if(minute===59){
                    this.setState({minute:0,second:0,hour:hour+1})
                }else{
                    this .setState({second: 0, minute: minute + 1 })
                }
            } else {
                this.setState({
                    second: second + 1
                })
            }
        }, 1000)
        this.setState({interval:timer})
    }
    // Stop timer 
    stopTimer=()=>{
        this.setState({btnDisabled:false});
        clearInterval(this.state.interval);
    }
    // Interval 
    getInterval=()=>{
        const {intervalStorage,hour,second,minute}=this.state;
        this.setState({btnDisabled:true});
        intervalStorage.push(`${hour}:${minute}:${second}`);
        this.setState({
            intervalStorage
        })  
    }
    clearAll=()=>{
        this.stopTimer();
        this.setState({
            hour:0,
            minute:0,
            second:0,
            intervalStorage:[],
        })
    }
    renderElements(){
        const {second,minute,hour}=this.state;

    }
    render() {
        this.renderElements()
        const { second, minute, hour, btnDisabled } = this.state;
        return (
            <div className="timer__body">
                <div className="timer__container flex flex-wrap gap-[150px]">
                    <h2 className="text-6xl font-bold shadow-sm drop-shadow-sm"><span>Online</span> Timer</h2>
                    <div className="timer__details flex flex-wrap gap-2">
                        <div className="timer__col">
                            <span>{hour<10 ? `0${hour}`:hour}</span>
                            <p>hour</p>
                        </div>
                        <div className="timer__col">
                            <span>{minute<10 ? `0${minute}`:minute}</span>
                            <p>minute</p>
                        </div>
                        <div className="timer__col">
                            <span>{second < 10 ? `0${second}` : second}</span>
                            <p>second</p>
                        </div>
                    </div>
                </div>
                <div className="timer__container_btn">
                    <button disabled={btnDisabled} onClick={this.startTimer} className="my-3 text-white bg-blue-600 border-0 py-2 px-7 focus:outline-none  rounded text-lg">Start</button>
                    <button onClick={this.stopTimer} className="my-3 text-white bg-rose-500 border-0 py-2 px-7 focus:outline-none hover:bg-rose-600 rounded text-lg">Stop</button>
                    <button disabled={!btnDisabled} onClick={this.getInterval} className="my-3 text-white bg-purple-500 border-0 py-2 px-7 focus:outline-none hover:bg-purple-600 rounded text-lg">Interval</button>
                    <button onClick={this.clearAll} className="my-3 text-white bg-yellow-400 border-0 py-2 px-7 focus:outline-none hover:bg-yellow-600 rounded text-lg">Clear</button>
                </div>
                <div className="interval bg-black text-lime-400 text-center text-xl p-4 w-full h-36 overflow-y-scroll">
                    {this.state.intervalStorage.map((item,i)=>(
                        <div className="flex justify-center my-2" key={i}>
                            <span className="text-center text-lime-300">{i+1}#~ </span><p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>


        )
    }
}