import React, { Component } from 'react'
import Juice from './Juice'

export default class JuiceData extends Component {
    render() {
        const { elements } = this.props
        return (
            <>
                <div className="card">
                    <img src={elements.imgUrl} alt="" />
                    <span>-%30</span>
                    <div className="card__body">
                        <h2>
                            {elements.name}
                        </h2>
                        <p>
                            {elements.info}
                        </p>
                        <h1>$ {elements.price}</h1>
                        <button>View product</button>
                    </div>
                </div>
            </>
        )
    }
}
