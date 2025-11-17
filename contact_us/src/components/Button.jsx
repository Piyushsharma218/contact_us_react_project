import React from 'react'
import {MdMessage} from 'react-icons/md'
import './Button.css' 


const Button = (props) => {
  return (
    <button className={props.isoutline ? 'outline' : 'primary'}>
        {/* <props.icon fontSize='20px'/> */}
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button