import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Nav/nav.css'
import $ from 'jquery'

export default function Nav() {
    let [resize,setResize] = useState(window.innerWidth)
    let [miniMenu,setMiniMenu] = useState(true)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setResize(window.innerWidth)
        })
    })
    // show menu
    const showMenu = () =>{
        setMiniMenu(e=>!e)
        miniMenu?$('.nav-menu-mini').css({right:'0%'}):$('.nav-menu-mini').css({right:'-50%'})
    }
  return (
    <div className='nav'>
            <p className='nav-header' title='Home Page'><Link className='nav-a' to='/'>Travel</Link></p>
            <ul className='nav-ul'>
                <Link className='nav-a' to='/'><li className='nav-li'>Home</li></Link>
                <Link className='nav-a' to='/country'><li className='nav-li'>Country</li></Link>
                <Link className='nav-a' to='/contact'><li className='nav-li'>Contacts</li></Link>
            </ul>
        <button className='button' onMouseDown={()=>showMenu()}><i className="fa-solid fa-bars" /></button>
        {resize<=1000 && <div className='nav-menu-mini'>
            <ul className='nav-ul-mini'>
                <Link className='nav-a' to='/'><li className='nav-li-mini'>Home</li></Link>
                <Link className='nav-a' to='/country'><li className='nav-li-mini'>Country</li></Link>
                <Link className='nav-a' to='/contact'><li className='nav-li-mini'>Contacts</li></Link>
            </ul>
        </div>}
    </div>
  )
}
