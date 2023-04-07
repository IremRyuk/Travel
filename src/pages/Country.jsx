import React, {useReducer, useState} from 'react'
import '../styles/Country/country.css'
import Data from '../Data/storage.json'
import Item from './Item'
import backImg from '../Photoes/background2.webp'
import {Initial_Values, reudcer} from '../components/MainValues'

export default function Country() {
    let [data, setData] = useState(Data)
    const [state, dispatch] = useReducer(reudcer, Initial_Values)
    let filter = (category) => setData(
        Data.filter(res => res.category === category)
    )
    // check places 
    const lookPlace = () => {
        setData(Data.filter(res => {
            if (state.place === 'all' || state.place === '') {
                return Data
            } else {
                return res.category === state.place
            }

        }))
    }
    // Price Filter
    let priceFilter = () =>{
setData(Data.filter(item=>{
    return item.price>=state.minprice && item.price<=state.maxprice
}))
}
// clear input-range values
const clearInputRanges = () =>{
    dispatch({type:'min',minprice:0})
    dispatch({type:'max',maxprice:10000})
}
    return (
    <> 
    <div className = 'country' > <div className='backdrop'>
        <center>
            <div className='coun-search'>
                <input
                    type='text'
                    placeholder='search...'
                    className='coun-inp'
                    onChange={(e) => {
                        dispatch({type: 'search', searched: e.target.value})
                    }}
                    value={state.search}/>
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
        <center>
        <div className='rangeCount'>
        <p className=' range-header'>Price Filter</p>
            <div className='rangeNumber'>
            <input type='number' className='range range-input' onChange={(e)=>{dispatch({type:'min',minprice:e.target.value})}} value={state.minprice}/>
            <input type='number' className='range range-input' onChange={(e)=>{dispatch({type:'max',maxprice:e.target.value})}} value={state.maxprice}/>
            </div>
            <div className='rangeBtn'>
            <button type='reset' className='range range-btn-clear' onClick={()=>clearInputRanges()}>Clear</button>
            <button type='submit' className='range range-btn-submit' onClick={()=>priceFilter()}>Filter</button>
            </div>
        </div>
        </center>
        {/* test */}
        <center>
        <select
            className='selector'
            onClick={() => {
                lookPlace()
            }}
            onChange={(e) => {
                dispatch({type: 'places', places: e.target.value})
            }}>
            <option value='all'>All</option>
            <option value='sea'>Sea</option>
            <option value='nature'>Nature</option>
            <option value='snow'>Snow</option>
        </select>
        </center>
        <div className='items'>
            {
                data
                    .filter(res => {
                        if (state.search === '') {
                            return Data
                        } else if (res.name.toLowerCase().includes(state.search.toLowerCase())) {
                            return state.search
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
<img src={backImg} className='backImg' alt='Travel Background'/>
 </>
    )
}