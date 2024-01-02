import React, { useState, useEffect } from 'react'
import Accordion from './Accordion'
import "./Questions.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Questions = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  const [active, setActive] = useState("How do I choose the right travel destination for me?")
  return (
    <div className='questions section container'>
      <div className='secHeading'>
        <h3 data-aos='fade-up'>Frequently Asked Questions</h3>
      </div>
      <div className='secContainer grid' data-aos='fade-up'>
        <div className="accordion grid">
          <Accordion
          title="1. How do I choose the right travel destination for me?"
          desc = "Consider your interests, budget, desired experiences, and the type of environtment you enjoy. Research destination that align with your preferences and offer attractions or activities you find appealing"
          active ={active}
          setActive={setActive}
          data-aos='fade-up'/>
          <Accordion
          title="2. What are the best times to visit specific destination?"
          desc = "Consider your interests, budget, desired experiences, and the type of environtment you enjoy. Research destination that align with your preferences and offer attractions or activities you find appealing"
          active ={active}
          setActive={setActive}
          data-aos='fade-up'/>
           <Accordion
          title="3. How can I find budget-friendly travel optins and deals?"
          desc = "Consider your interests, budget, desired experiences, and the type of environtment you enjoy. Research destination that align with your preferences and offer attractions or activities you find appealing"
          active ={active}
          setActive={setActive}
          data-aos='fade-up'/>
           <Accordion
          title="4. What essential items should I pack for my adventure?"
          desc = "Consider your interests, budget, desired experiences, and the type of environtment you enjoy. Research destination that align with your preferences and offer attractions or activities you find appealing"
          active ={active}
          setActive={setActive}
          data-aos='fade-up'/>
          </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos='fade-up'>Do you have any specific questions?</h4>
            <p data-aos='fade-up'>
              Please fill the form below and our
              dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>

          <div className='formContent grid'>
            <input type='email' placeholder='Enter email address' data-aos='fade-up'/>
            <textarea placeholder='Enter your question' data-aos='fade-up'></textarea>
            <button className='btn' data-aos='fade-up'>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions