import React, { Component } from "react";
import img1 from '../../assets/images/juice/1.webp'
import img2 from '../../assets/images/juice/2.webp'
import img3 from '../../assets/images/juice/3.png'
import img4 from '../../assets/images/juice/4.png'
import img5 from '../../assets/images/juice/5.avif'
import img6 from '../../assets/images/juice/6.png'
import JuiceData from "./JuiceData";
export default class Juice extends Component {
    render() {
        const data = [
            {
                id: 1,
                imgUrl: img1,
                name: 'Orange Juice',
                info: 'Lorem ipsum dolor sit amet consecteturnemo',
                price: '4.99'
            },
            {
                id: 2,
                imgUrl: img2,
                name: 'Apple Cider',
                info: 'Lorem ipsum dolor sit amet consectetur adipisis',
                price: '3.49'
            },
            {
                id: 3,
                imgUrl: img3,
                name: 'Grape Juice',
                info: 'Lorem ipsum dolor sit amet , quibusdam',
                price: '5.29'
            },
            {
                id: 4,
                imgUrl: img4,
                name: 'Pineapple Smoothie',
                info: 'Lorem ipsum dolor sit amet consectetur ad',
                price: '6.99'
            },
            {
                id: 5,
                imgUrl: img5,
                name: 'Berry Blend',
                info: 'Lorem ipsum dolor sit amet consectetur ',
                price: '4.79'
            },
            {
                id: 6,
                imgUrl: img6,
                name: 'Mango Lassi',
                info: 'Lorem ipsum dolor sit amet consectetur ',
                price: '5.99'
            }
        ];

        return (
            <div>
                <div className="flex_wrapper">
                    {
                        data.map((item, i) => (
                            <JuiceData elements={item} key={i} />
                        ))
                    }
                </div>
            </div>
        )
    }
}