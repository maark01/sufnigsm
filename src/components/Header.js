//import "../styles/Header.css"
import "boxicons"
import { Link } from "react-router-dom"
import "../styles/Header.css"
import Logo from "../assets/sufni-gsm-logo.png"


export default function Header({ menu }) {


    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={Logo} alt="Logo" className="navbar-logo"/>
            </div>
            <div className="navbar-right">
                {menu.filter(e => e.menubar === true).map(element => <Link key={element.path} to={element.path}>
                    {element.icon && <><box-icon name={element.icon} color='#fbead9'></box-icon><br /></>}
                    {element.name}
                </Link>)}
            </div>
        </div>
    )
}   