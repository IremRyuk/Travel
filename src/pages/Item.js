import React,{useState,useEffect} from 'react'
import '../styles/Country/country.css'
import {Link} from 'react-router-dom'

export default function Item(props) {
    let [resizeItem,setResizeItem] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setResizeItem(window.innerWidth)
        })
    })
    let info = props.main
    return (
        <>
        <Link to={`/buy/${info.id}`} style={{textDecoration:'none'}}>
        <div className='item'>
            <center>
                <p className='item-p'>{info.name}</p>
                <img src={info.img} className="item-img" alt={info.name}/>
                <p className='item-p'>{info.price}
                    $
                </p>
            </center>
        </div>
        </Link>
        {resizeItem<=800 && <Link to={`/buy/${info.id}`} style={{textDecoration:'none'}}><div className='item-mini'>
        <center>
            <p className='item-p-mini'>{info.name}</p>
            <img src={info.img} className="item-img-mini" alt={info.name}/>
            <p className='item-p-mini'>{info.price}
                $
            </p>
        </center>
    </div>
    </Link>
    }
    </>
    )
}
