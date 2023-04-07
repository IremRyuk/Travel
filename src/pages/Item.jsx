import React from 'react'
import '../styles/Country/country.css'
import {Link} from 'react-router-dom'

export default function Item(props) {
    let info = props.main
    return (
        <>
        <Link to={`/buy/${info.id}`} className='item'>
            <center>
                <p className='item-p'>Name:{info.name}</p>
                <img src={info.img} className="item-img" alt={info.name}/>
                <p className='item-p'>Price:{info.price}$</p>
            </center>
        </Link>
    </>
    )
}
