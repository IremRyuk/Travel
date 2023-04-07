import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Buy/buy.css'
import Data from '../Data/storage.json'
import $ from 'jquery'
import { BuyReducer, Buy_Initial_Values } from '../components/BuyReducer'
import MainBackgroundImage from '../Photoes/background2.webp'

export default function Buy() {
  // Initial Values useReducer
  const [state,dispatch] = useReducer(BuyReducer,Buy_Initial_Values)


  // get data and filter 
  let {Id} = useParams()
  let Filter = Data.filter(res=>res.id === parseInt(Id))
  let main = Filter[0]


  // ghost on display
  let buySuccess = () =>{
$('.ghost').css({backgroundColor:'lime',right:'10%'})
$('.ghost-p').text('Your Information Sent')
  }
  $('.ghost').on('click',()=>{
    $('.ghost').css({right:'-50%'})
  })
  

    let buyFail = () =>{
$('.ghost').css({backgroundColor:'red',right:'10%'})
$('.ghost-p').text('Please Fill All Inputss')
  }
  $('.ghost').on('click',()=>{
    $('.ghost').css({right:'-50%'})
  })
  


// clear inputs
const clearBookInputs = () =>{
  dispatch({type:'bookName',bookNameInfo:''})
  dispatch({type:'bookGmail',bookGmailInfo:''})
  dispatch({type:'bookNumber',bookNumberInfo:''})
  dispatch({type:'bookDate',bookDateInfo:''})
}


// class for person information
class BuyTravel {
  constructor(name,gmail,number,travelTime){
    this.name = name
    this.gmail = gmail
    this.number = number
    this.travelTime = travelTime
  }
  buyInfo(){
    return `Person: ${this.name}, Gmail:${this.gmail},Phone:${this.number},Date:${this.travelTime}`
  }
}


// create new Person Information about his trip
let newPersonInformation = new BuyTravel(state.bookName,state.bookGmail,state.bookNumber,state.bookDate)
  // send Information
  const sendInformation = () =>{
    if(state.bookName === '' || state.bookGmail === '' || state.bookNumber === '' || state.bookDate === ''){
      buyFail()
      
    }else{
      console.log(newPersonInformation.buyInfo())
      clearBookInputs()
      buySuccess()
    }
    
  }
  return (
    <>
    <div className='buy'>
      <div className='buy-backdrop'>
        <div className='leftSide'>
      <p className='buy-p'>Name: {main.name}</p>
        <img src={main.img} alt={main.name} className='buy-image' /> 
        <p className='buy-p'>Category: <span className='buy-p'>{main.category}</span></p>
        <p className='buy-p'>Price: {main.price} $</p>
      </div>
      <div className='rightSide'>
        <center>
          <p className='rightSideHeader'>Send Us Your Information To Buy A Trip</p>
        <p className='bookP'>Your Name</p>
        <input type='text' className='bookInp' onChange={(e)=>dispatch({type:'bookName',bookNameInfo:e.target.value})} placeholder='type...' value={state.bookName} />
        <br />
        <p className='bookP'>Your Gmail</p>
        <input type='text' className='bookInp' onChange={(e)=>dispatch({type:'bookGmail',bookGmailInfo:e.target.value})} placeholder='type...' value={state.bookGmail}/>
        <br />
        <p className='bookP'>Your Phone Number</p>
        <input type='number' className='bookInp bookNumber' onChange={(e)=>dispatch({type:'bookNumber',bookNumberInfo:e.target.value})} placeholder='type...' value={state.bookNumber}/>
        <br />
        <p className='bookP'>Choose Flying Date</p>
        <input type='date'  className='bookInp' onChange={(e)=>dispatch({type:'bookDate',bookDateInfo:e.target.value})} value={state.bookDate}/>
        <br />
        <br />
        <div className='bookBtns'>
          <button className='bookBtnClear' onClick={()=>clearBookInputs()} title='Clear Inputs'>Clear Inputs</button>
          <button className='bookBtnSend' onClick={()=>sendInformation()} title='Send Your Information'>Send</button>
        </div>
        </center>
      </div>
      </div>
      <div className='ghost' onClick={()=>{$('.ghost').css({right:'-50%'})}}>
        <p className='ghost-p'></p>
      </div>
    </div>
    <img src={MainBackgroundImage} className='backImg' alt='Travel Background'/> 
    </>
  )
}
