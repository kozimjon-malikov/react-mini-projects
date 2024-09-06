import React, { Component } from 'react'
import AddPlayer from './AddPlayer';

export default class Players extends Component {
    state = {
        players: [],
        modalStatus: false,
    }
    componentDidMount() {
        const players = [
            {
                name: 'Lionel Messi',
                club: 'Inter Miami',
                age: 37,
                price: 100.00
            },
            {
                name: 'Cristiano Ronaldo',
                club: 'Al Nassr',
                age: 39,
                price: 50.00
            },
            {
                name: 'Kylian Mbappé',
                club: 'Paris Saint-Germain',
                age: 25,
                price: 180.00
            },
            {
                name: 'Virgil van Dijk',
                club: 'Liverpool',
                age: 33,
                price: 75.00
            },
            {
                name: 'Kevin De Bruyne',
                club: 'Manchester City',
                age: 33,
                price: 90.00
            }
        ];
        players.sort((items)=>(console.log(items)));
        this.setState({ players })
    }
    removePlayer = (index) => {
        const players = this.state.players;
        players.splice(index, 1);
        this.setState({ players });
    }
    openModal = () => {
        this.setState({ modalStatus: true });
    }j
    closeModal = () => {
        this.setState({ modalStatus: false });
    }
    render() {
        const { players } = this.state
        return (
            <div className='my-10'>
                <div className='container mx-auto'>
                    <div className="relative overflow-x-auto p-10 shadow-md sm:rounded-lg">
                        <button onClick={this.openModal} className='bg-blue-600 text-white px-4 py-2 rounded-md my-5'>Add player</button>
                        {this.state.modalStatus ? <AddPlayer closeModal={this.closeModal} /> : ''}
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase hover:text-gray-900  bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Club
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only"></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((item, index) => (
                                    <tr key={index} className="bg-white border-b  hover:bg-gray-200  dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.club}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">${item.price}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a onClick={() => this.removePlayer(index)} href="#" className="font-medium bg-orange-600 hover:bg-orange-800 text-white px-4 py-2 rounded-md">Remove</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
