import CustomMotion from "../components/CustomMotion";
import HeroImage from '../assets/homeImg.jpg'
import "../styles/Home.css"
import {Link} from "react-router-dom"



export default function Home(props) {

    
    return (
        <CustomMotion className="home" style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className="homeContainer">
                <h1 className="home-title">Oi mate! Are you Looking for a new Phone?</h1>
                <p className="home-para">Choose simply mate!</p>
                <Link to="/products">
                    <button>Go on, let's see them!</button>
                </Link>
            </div>
        </CustomMotion>
        
    )
}