import React, {useState} from 'react'

import pmhome1 from '../images/pm-home-1.png'
import pmhome2 from '../images/pm-home-2.png'
import pmhome3 from '../images/pm-home-3.png'
import pmhome4 from '../images/pm-home-4.png'
import pmhome5 from '../images/pm-home-5.png'

export const Home = () => (
   
    
        <>
           <section className="home-container" >
                <div className="three-d-container">
                    {/* <div className ="radio-container ">
                        <input type="radio" className="a" name="three-d" />
                        <span className="radiostyle"></span>
                    </div>
                    <div className ="radio-container">
                        <input type="radio" className="b" name="three-d" />
                        <span className="radiostyle"></span>
                    </div>
                    <div className ="radio-container ">
                        <input type="radio" className="c" name="three-d" />
                        <span className="radiostyle"></span>
                    </div>
                    <div className ="radio-container ">
                        <input type="radio" className="d" name="three-d" />
                        <span className="radiostyle"></span>
                    </div>
                    <div className ="radio-container ">
                        <input type="radio" className="e" name="three-d" />
                        <span className="radiostyle"></span>
                    </div> */}
                    <input type="radio" className="three-d-bullet a" name="three-d" />
                    <input type="radio" className="three-d-bullet b" name="three-d" />
                    <input type="radio" className="three-d-bullet c" name="three-d" />
                    <input type="radio" className="three-d-bullet d" name="three-d" />
                    <input type="radio" className="three-d-bullet e" name="three-d" />
                    

                    <div className="three-d-cube">
                        <figure className="three-d-item">
                            <img src={pmhome1} alt="" />
                        </figure>
                        <figure className="three-d-item">
                            <img src={pmhome2} alt=""/>
                        </figure>
                        <figure className="three-d-item">
                            <img src={pmhome3} alt="" />
                        </figure>
                        <figure className="three-d-item">
                            <img src={pmhome4} alt="" />
                        </figure>
                        <figure className="three-d-item">
                            <img src={pmhome5} alt=""/>
                        </figure>
                    </div>


                </div>

		    </section>
        </>
    
)

export default Home