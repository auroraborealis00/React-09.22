import React from 'react'
import { useRef } from 'react'
import './FormStyles.css'
import emailjs from '@emailjs/browser';

const Form = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const subjectRef = useRef()

  const sendEmail = () => {
    const templateParams = {
      "to_name": "NineSound",
      "from_name": nameRef.current.value + ", tema e-mail: " + emailRef.current.value,
      "message": messageRef.current.value


  }
    emailjs.send('service_6glgmgi', 'template_xj0slbf', templateParams, '3b98V4av1_DSLO859')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }

  return (
    <div className='form'>
        
            <label>Your Name</label> 
            <input ref={nameRef} type='text' placeholder='Your name' /> 
            <label>Your E-Mail</label> 
            <input ref={emailRef} type='text' placeholder='Your e-mail' /> 
            <label>Subject</label> 
            <input ref={subjectRef} type='text' placeholder='Subject' /> 
            <label>Message</label> 
            <textarea ref={messageRef} rows='6' placeholder='Type a short Message here ' /> 
            <button onClick={sendEmail} className='btn'>Submit</button> 

    </div>
  )
}

export default Form