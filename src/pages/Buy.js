import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Buy/buy.css'
import Data from '../Data/storage.json'
import $ from 'jquery'

export default function Buy() {
  let {Id} = useParams()
  let Filter = Data.filter(res=>res.id === parseInt(Id))
  let main = Filter[0]
  let buy = () =>{
$('.ghost').css({right:'10%'})
  }
  $('.ghost').on('click',()=>{
    $('.ghost').css({right:'-50%'})
  })
  return (
    <div className='buy'>
      <div className='buy-backdrop'>
      <p className='buy-p'>Name: {main.name}</p>
        <img src={main.img} alt={main.name} className='buy-image' />
        <p className='buy-p'>Category: <span className='buy-p'>{main.category}</span></p>
        <p className='buy-p'>Price: {main.price}<span style={{color:'green'}}>$</span></p>
        <button className='buy-btn' onClick={()=>{buy()}}>Buy</button>
      </div>
      <div className='ghost' onClick={()=>{$('.ghost').css({right:'-50%'})}}>
        <p className='ghost-p'>Congrats You Bought Tickets :)</p>
      </div>
    </div>
  )
}
