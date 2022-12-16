//import "../styles/Header.css"
import "boxicons"
import { Link } from "react-router-dom"
import "../styles/Header.css"
import Logo from "../assets/sufni-gsm-logo2.png"


export default function Header({ menu }) {


    return (
        <div className="header-container container-expand">
            <div className="header-row">
                <div className="header-logo col-sm-4 col-md-4 col-lg-4">
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="header-menu col-sm-6 col-md-8 col-lg-8 d-flex mx-auto">
                    {menu.filter(e => e.menubar === true).map(element => <Link key={element.path} to={element.path}>
                        {element.icon && <><box-icon name={element.icon} color="#fbead9"></box-icon><br /></>}
                        {element.name}
                    </Link>)}
                </div>
            </div>
        </div>

    )
}   