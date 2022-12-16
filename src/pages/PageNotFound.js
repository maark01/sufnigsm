import "../styles/PageNotFound.css"
import chan from "../assets/errorChan.jpg"



export default function PageNotFound(props) {

    
    return (
        <div className="error">
            <h1 className="error-msg">404 - Oh Boy! This site can't find!</h1>
            <img className="error-img" src={chan} alt="chan"/>
        </div>
    )
}