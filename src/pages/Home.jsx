import React, { useEffect, useState } from 'react'
import '../styles/Home/home.css'
import BGIMAGE from '../Photoes/NGB.webp'
import MainBackgroundImage from '../Photoes/background2.webp'
import Data from '../Data/storage.json'
import {Link, useNavigate} from 'react-router-dom'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BottomSoc from '../components/BottomSoc'

export default function Home() {
    // Window width
    const [screenW,setScreen] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setScreen(screen=>screen = window.innerWidth)
        })
    })
    // Move Page Top
    useEffect(()=>{
window.scrollTo(0,0)
document.title = 'HV-Travel'
    },[])
    // go to country page
    let navigate = useNavigate()
    const navigatHandler = () => {
        navigate('/country')
    }
    function amountOfImages(){
        if(screenW>900){
            return 3
        }else{
            return 2
        }
    }
    return (
    <>
    <div className = 'home' >
        <div className='description'>
        <p className='descr-p'>Travelling is an amazing way to learn a lot of things in
            life. A lot of people around the world travel every year to many places.
            Moreover, it is important to travel to humans. Some travel to learn more while
            some travel to take a break from their life. No matter the reason, travelling
            opens a big door for us to explore the world beyond our imagination and indulge
            in many things.</p>
        <img src={BGIMAGE} alt='Travel' className='descr-img' unselectable="on"/>
    </div>
    <center>
        <p className='quest'>Where You Want To Go ?</p>
    </center>
    <center>
        <div className='ImagesBoxes'>
        {/* create carousel from Swiper.js */}
            <Swiper
            modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={screenW>=550?amountOfImages():1}
                pagination={{ clickable: true }}
                navigation
                >
                    {/* import images from Data storage */}
                    {Data.map(res=>{
                        return(
                            <SwiperSlide key={res.id}>
                            <Link to={`/buy/${res.id}`} className='btBox' onClick={() => navigatHandler()}>
                                <img src={res.img} className='btImg' alt='Travel Swiper Images'/>
                                <p className='btTitle'>{res.name}</p>
                            </Link>
                        </SwiperSlide>
                        )
                    })}
            </Swiper>
        </div>
    </center>

{/* Bottom Social Information */}
<BottomSoc />

</div>
<img src={MainBackgroundImage} className='backImg' alt='Travel Background'/> 
</>
    )
}