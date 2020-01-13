import React, {useState} from 'react'

import pmhome1 from '../images/pm-home-1.png'
import pmhome2 from '../images/pm-home-2.png'
import pmhome3 from '../images/pm-home-3.png'
import pmhome4 from '../images/pm-home-4.png'
import pmhome5 from '../images/pm-home-5.png'

export const Home = () => {
    const [check, setCheck] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        console.log('clicked')
        setCheck(!check)
    }

    return (
        <div>
           <section className="home-container" >
                <div className="three-d-container">
                    
                    <div className={check ? 'three-d-bullet a check' : 'three-d-bullet a'} onClick={handleClick}></div>
                    <button type="button" className={check ? 'three-d-bullet b check' : 'three-d-bullet b'} onClick={handleClick}></button>
                    {/* <input type="radio" className="three-d-bullet b" name="three-d" /> */}
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
     
        </div>
    )
}

export default Home