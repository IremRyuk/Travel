import React, { useState } from 'react'
import '../styles/Contacts/contacts.css'
import Sea from '../Photoes/sea.webp'

export default function Contact() {
  let [ name,setName] = useState('')
  let [lastName,setLastName] = useState('')
  let [gmail,setGmail] = useState('')
  let [info,setInfo] = useState('')
  class Form {
    constructor(name,lastName,gmail,info){
      this.name = name
      this.lastName = lastName
      this.gmail = gmail
      this.info = info
    }
    run(){
      console.log(`Name: ${this.name} LastName: ${this.lastName}, Gmail: ${this.gmail} and information: ${this.info}` )
      
    }
  }
  let x = new Form(name,lastName,gmail,info)
  let Send = (e) =>{
    e.preventDefault()
    alert('information in Console and ready to send in Gmail')
    x.run()
  }
  return (
    <div className='contact'>
      <div className='contact-backdrop'>
        <form className='contact-form' onSubmit={Send}>
          <p className='con-form-p'>Name</p>
          <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className="con-form-input" required/>
          <p className='con-form-p'>Last Name</p>
          <input type='text' placeholder='Enter LastName' onChange={(e)=>setLastName(e.target.value)} className="con-form-input" required/>
          <p className='con-form-p'>Gmail</p>
          <input type='text' placeholder='Enter Gmail' onChange={(e)=>setGmail(e.target.value)} className="con-form-input" required/>
          <p className='con-form-p'>Information</p>
          <textarea className='con-form-textArea' placeholder='about you...' onChange={(e)=>{setInfo(e.target.value)}}required/>
          <div className='form-btns'>
          <input type='reset' className='con-form-btnA'/>
          <input type='submit' className='con-form-btnB'/>
          </div>
        </form>
        <div className='travel-cont-img-box'>
          <img src={Sea} className='travel-cont-img' alt='travel-cont-img' />
        </div>
      </div>
    </div>
  )
}
