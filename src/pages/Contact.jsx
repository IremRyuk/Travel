import React,{useReducer} from 'react'
import '../styles/Contacts/contacts.css'
import Sea from '../Photoes/contactsBg.webp'
import backImg from '../Photoes/background2.webp'
import { Contact_Values, conReducer } from '../components/ContactsReducer'

export default function Contact() {
const [state, dispatch] = useReducer(conReducer,Contact_Values)
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
  let x = new Form(state.name,state.lastName,state.gmail,state.information)
  let Send = (e) =>{
    e.preventDefault()
    alert('information in Console and ready to send in Gmail')
    x.run()
    clearInputs()
  }
  const clearInputs = () =>{
    dispatch({type:'name',perName:''})
    dispatch({type:'lastName',perLastName:''})
    dispatch({type:'gmail',perGmail:''})
    dispatch({type:'information',perInfo:''})
  }
  return (
    <>
    <div className='contact'>
      <div className='contact-backdrop'>
        <form className='contact-form' onSubmit={Send}>
          <p className='con-form-p'>Name</p>
          <input type='text' placeholder='Enter Name' onChange={(e)=>dispatch({type:'name',perName:e.target.value})} className="con-form-input" value={state.name} title='Person Name' />
          <br />
          <p className='con-form-p'>Last Name</p>
          <input type='text' placeholder='Enter LastName' onChange={(e)=>dispatch({type:'lastName',perLastName:e.target.value})} className="con-form-input" value={state.lastName} title='Person Last Name' />
          <br />
          <p className='con-form-p'>Gmail</p>
          <input type='text' placeholder='Enter Gmail' onChange={(e)=>dispatch({type:'gmail',perGmail:e.target.value})} className="con-form-input" value={state.gmail} title='Person Gmail' />
          <br />
          <p className='con-form-p'>Information</p>
          <textarea className='con-form-textArea' placeholder='about you...' onChange={(e)=>dispatch({type:'information',perInfo:e.target.value})} value={state.information} title='Your Problem'/>
          <br />
          <div className='form-btns'>
          <input type='reset' value='Clear' onClick={()=>{clearInputs()}} className='con-form-btnA'/>
          <input type='submit' className='con-form-btnB'/>
          </div>
        </form>
        <div className='travel-cont-img-box'>
          <img src={Sea} className='travel-cont-img' alt='travel-cont-img' />
        </div>
      </div>
    </div>
    <img src={backImg} className='backImg' alt=' Travel Background'/>
    </>
  )
}
