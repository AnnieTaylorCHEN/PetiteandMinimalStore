import React from 'react'

import Store from './store'
import HomeBlogSection from './homeblogsection'

import pmhome1 from '../images/pm-home-1.png'
import pmhome2 from '../images/pm-home-2.png'
import pmhome3 from '../images/pm-home-3.png'
import pmhome4 from '../images/pm-home-4.png'
import pmhome5 from '../images/pm-home-5.png'
import pmhome6 from '../images/pm-home-6.png'

export const Home = () => (
   
    <>
        <section className="home-container" >
            <div className="three-d-container">
                
                <input type="radio" className="three-d-bullet a" name="three-d" />
                <input type="radio" className="three-d-bullet b" name="three-d" />
                <input type="radio" className="three-d-bullet c" name="three-d" />
                <input type="radio" className="three-d-bullet d" name="three-d" />
                <input type="radio" className="three-d-bullet e" name="three-d" />
                <input type="radio" className="three-d-bullet f" name="three-d" />
                

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
                    <figure className="three-d-item">
                        <img src={pmhome6} alt=""/>
                    </figure>
                </div>


            </div>

        </section>
        <Store />
        <HomeBlogSection />
    </>

)

export default Home