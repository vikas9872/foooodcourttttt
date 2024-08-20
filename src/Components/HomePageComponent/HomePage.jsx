import './HomePage.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const HomePage = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <>
            <div className="contentBox">
                <div className="content">
                    <div className="mainContent" data-aos="fade-down">
                        <div className="firstPart">
                            <h1>Eat <span>healthy,</span></h1>
                        </div>
                        <div className="secondPart">
                            <h1><span>Stay</span> healthy</h1>
                        </div>
                    </div>
                    <div className="contentexp" data-aos="fade-up">
                        <p>"Craving something delicious and nutritious? Dive into our healthy menu! 🌿✨</p>
                        <p>Whether you're looking for a light bite or a hearty meal,</p>
                        <p>we've got something that will satisfy your taste buds and fuel your day."</p>
                    </div>
                    <button className="orderbtn" data-aos="fade-up">Order now!!</button>
                </div>
            </div>
        </>
    )
}
export default HomePage;