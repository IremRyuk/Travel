import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Nav/nav.css'
import $ from 'jquery'

export default function Nav() {
    let [resize,setResize] = useState(window.innerWidth)
    let [hideIt,setHide] = useState(false)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setResize(window.innerWidth)
        })
    })
    // hide and show mini menu
    let hide = () => {
        setHide(!hideIt)
    }
    if(hideIt){
        $('.nav-menu-mini').css({display:'flex'})
    }else if(!hideIt){
        $('.nav-menu-mini').css({display:'none'})
    }
  return (
    <center>
    <div className='nav'>
        <div className='nav-name'>
            <p className='nav-header'><Link className='nav-a' to='/'>Travel</Link></p>
        </div>
        <div className='nav-menu'>
            <ul className='nav-ul'>
                <li className='nav-li'><Link className='nav-a' to='/'>Home</Link></li>
                <li className='nav-li'><Link className='nav-a' to='/country'>Country</Link></li>
                <li className='nav-li'><Link className='nav-a' to='/contact'>Contacts</Link></li>
            </ul>
        </div>
        <button className='button' onClick={()=>{hide()}}><i className="fa-solid fa-bars" /></button>
        {resize<=1000 && <div className='nav-menu-mini'>
            <ul className='nav-ul-mini'>
                <li className='nav-li-mini'><Link className='nav-a' to='/'>Home</Link></li>
                <li className='nav-li-mini'><Link className='nav-a' to='/country'>Country</Link></li>
                <li className='nav-li-mini'><Link className='nav-a' to='/contact'>Contacts</Link></li>
            </ul>
        </div>}
    </div>
    </center>
  )
}
