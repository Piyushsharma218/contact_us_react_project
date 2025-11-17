import React from 'react'
import './form.css'
import Button from './Button'
import {MdMessage} from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import {TiMail} from 'react-icons/ti'

function Form() {
    return (
     <section className='main'>
        <div className='form_contact'>
            <div className="topbtn">
                <Button text='VIA SUPPORT CHAT' icon={<MdMessage style={{fontSize: '20px'}} />} />
                <Button text='VIA CALL' icon={<FaPhoneAlt style={{fontSize: '20px'}} />} />
            </div>

            <Button isoutline={true} text='VIA EMAIL FORM' icon={<TiMail style={{fontSize: '30px'}} />} /> 
            <form >
            <div className="up_mid_form">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
            </div>

            <div className="up_mid_form">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' />
            </div>  

            <div className="up_mid_form">
                <label htmlFor="text">Text</label>
                <textarea name='text' rows='8' />
            </div>

            <div style={{
                display: 'flex',
                justifyContent:'end',
            }}>
                <Button  text='SUBMIT BUTTON' /> 
            </div>



        </form>
        
        </div>

        

        <div className='image'>
                <img src="/images/service.svg" alt="service illustration" />
        </div>

     </section>  
    )
}

export default Form
