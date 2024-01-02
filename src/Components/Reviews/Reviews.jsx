import React, {useEffect} from 'react'
import { AiFillStar } from "react-icons/ai";
import Image1 from "../../Assets/user1.jpg"
import Image2 from "../../Assets/user2.jpg"
import Image3 from "../../Assets/user3.jpg"
import Image4 from "../../Assets/user4.jpg"
import Image5 from "../../Assets/div-image.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'

import "./Reviews.css"


const Reviews = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText" data-aos='fade-up'>FROM OUR CLIENTS</span>
          <h3 data-aos='fade-up'>Real Travel History From Our Beloved Clients</h3>
          <p data-aos='fade-up'>
            By choosing us as their tour agency,
            customers can expect an
            enriching and enjoyable travel experience,
            fill with unforgettable
            memories that will last a lifetime.
          </p>

          <span className='stars flex' data-aos='fade-up'>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          <AiFillStar className="icon"/>
          </span>

          <div className='clientsImages flex'>
            <img src={Image1} alt='Client Image' data-aos='fade-up'/>
            <img src={Image2} alt='Client Image' data-aos='fade-up'/>
            <img src={Image3} alt='Client Image' data-aos='fade-up'/>
            <img src={Image4} alt='Client Image' data-aos='fade-up'/>
          </div>
        </div>
        <div className='imgDiv'>
          <img src={Image5} alt='Div Image' data-aos='fade-down'/>
        </div>
      </div>
    </div>
  )
}

export default Reviews