import React, { useState} from 'react'
import '../styles/Country/country.css'
import Data from '../Data/storage.json'
import Item from './Item'

export default function Country() {
    let [data, setData] = useState(Data)
    let [search, setSearch] = useState('')
    let filter = (category) => setData(
        Data.filter(res => res.category === category)
    )
    return (
        <div className='country'>
            <div className='backdrop'>
                <center>
                    <div className='coun-search'>
                        <input
                            type='text'
                            placeholder='search county ...'
                            className='coun-inp'
                            onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <div className='categories'>
                        <button
                            className='btn'
                            onClick={() => {
                                setData(Data)
                            }}>All</button>
                        <button
                            className='btn'
                            onClick={() => {
                                filter('sea')
                            }}>Sea</button>
                        <button
                            className='btn'
                            onClick={() => {
                                filter('nature')
                            }}>Nature</button>
                        <button
                            className='btn'
                            onClick={() => {
                                filter('snow')
                            }}>Snow</button>
                    </div>
                </center>
                <div className='items'>
                    {
                        data
                            .filter(res => {
                                if (search === '') {
                                    return Data
                                } else if (res.name.toLowerCase().includes(search.toLowerCase())) {
                                    return search
                                }
                            })
                            .map(res =>< Item key = {
                                res.id
                            }
                            main = {
                                res
                            } />)
                    }
                </div>
            </div>
        </div>
    )
}
