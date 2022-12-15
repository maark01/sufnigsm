import "../styles/Calculation.css"
import { ChosenItemContext } from "../contexts/ChosenItemContext"
import axios from "axios"
import { useContext } from "react"
import CustomMotion from "../components/CustomMotion"
import Currency from "../components/Currency"

export default function Calculation(props) {


    function handleSubmit(event) {

        event.preventDefault();


        let actualMobile = {
            brand: event.target.brand.value,
            model: event.target.model.value,
            os: event.target.os.value,
            startPrice: event.target.startPrice.value,
            releaseYear: event.target.releaseYear.value,
            startScore: event.target.score.value,
            condition: event.target.condition.value
        }
        //const [phones, setPhones] = useState([])

        axios.get(`https://softcamp.hu/webler/arkalkulator.php?brand=${actualMobile.brand}&model=${actualMobile.model}&os=
        ${actualMobile.os}&startPrice=${actualMobile.startPrice}&releaseYear=
        ${actualMobile.releaseYear}&startScore=
        ${actualMobile.startScore}&condition=${actualMobile.condition}`)
            .then(response => {
                const phones = response.data;
                console.log(phones)
            })
            .catch(err => { console.log(err.data) })
    }

    const { activeItem, setActiveItem } = useContext(ChosenItemContext)

    let condition = Math.floor(Math.random() * 100)

    return (

        <CustomMotion>
            <form className="form my-5 mx-auto" onSubmit={handleSubmit}>

                <label className="form-label" htmlFor="brand">Brand</label>
                <input className="form-control" type="text" id="brand" name="brand" defaultValue={activeItem ? activeItem.brand : ""} required autoComplete="none" />

                <label className="form-label" htmlFor="model">Model</label>
                <input className="form-control" type="text" name="model" defaultValue={activeItem ? activeItem.model : ""} required autoComplete="none" />

                <label className="form-label" htmlFor="os">Operating System</label>
                <input className="form-control" type="text" name="os" defaultValue={activeItem ? activeItem.os : ""} required autoComplete="none" />

                <label className="form-label" htmlFor="startPrice">Start Price</label>
                <input className="form-control" type="number" name="startPrice" defaultValue={activeItem ? activeItem.startPrice : ""} required autoComplete="none" />

                <label className="form-label" htmlFor="releaseYear">Release Year</label>
                <input className="form-control" type="number" name="releaseYear" defaultValue={activeItem ? activeItem.releaseYear : ""} required autoComplete="none" />

                <label className="form-label" htmlFor="score">Score</label>
                <input className="form-control" type="number" name="score" defaultValue={activeItem ? activeItem.score : ""} required autoComplete="none" />

                <label className="form-label" htmlFor="score">Condition</label>
                <input className="form-control" type="number" name="condition" defaultValue={condition} required autoComplete="none" />

                <button className="btn btn-success d-flex mx-auto" type="submit">Submit</button>
            </form>

        <Currency/>
 
        </CustomMotion>

    )
}