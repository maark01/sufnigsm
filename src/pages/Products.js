import { useContext } from "react"
import { ChosenItemContext } from "../contexts/ChosenItemContext"
import "../styles/Products.css"
import CustomMotion from "../components/CustomMotion"


const data = require("../assets/phones_schema.json")


export default function Products(props) {

    const { activeItem, setActiveItem } = useContext(ChosenItemContext)

    function handleActiveItem(elem) {

   activeItem === null || activeItem !== undefined ? setActiveItem() : setActiveItem(elem);
        console.log(activeItem)
    }


    return (
        <CustomMotion className="container my-5">

            <div className="row row-cols-5">
                {
                    data.map(elem => <div className={`item-cards col-sm-12 col-sm-2 col-lg-2 mx-auto ${activeItem === elem ? "active" : "none"}`} key={elem.id}>
                        <img className="item-img card-img-top" src="https://via.placeholder.com/300x200" alt="img" />
                        <div className="item-body">
                            <h5 className="item-title">{elem.brand} {elem.model}</h5>
                            <p>Operating System: {elem.os.toUpperCase()}</p>
                            <p>Release Year: {elem.releaseYear}</p>
                            <p>Start Price: {elem.startPrice}</p>
                            <p>Score: {elem.score}</p>
                        </div>
                        <button className="btn btn-success my-2 d-flex mx-auto" onClick={() => { handleActiveItem(elem) }}>Choose</button>
                    </div>)
                }
            </div>

        </CustomMotion>
    )
}