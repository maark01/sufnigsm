import "../styles/Calculation.css"
import { ChosenItemContext } from "../contexts/ChosenItemContext"
import axios from "axios"
import { useContext, useState } from "react"
import CustomMotion from "../components/CustomMotion"
import Currency from "../components/Currency"


export default function Calculation(props) {


    const [phones, setPhones] = useState(null)
    const { activeItem, setActiveItem } = useContext(ChosenItemContext)

    let condition = Math.floor(Math.random() * 100)
    function handleSubmit(event) {

        event.preventDefault();

        axios({
            method: "get",
            params: {
                "brand": event.target.brand.value,
                "model": event.target.model.value,
                "os": event.target.os.value,
                "startPrice": event.target.startPrice.value,
                "releaseYear": event.target.releaseYear.value,
                "startScore": event.target.score.value,
                "condition": event.target.condition.value
            },
            url: "https://softcamp.hu/webler/arkalkulator.php",
            responseType: "json",
        }).then((response) => { response.data.error === null ? setPhones(response.data.data) : alert(response.data.error); console.log(response.data); console.log(response.data.details) }).catch(error => { ("Server Error") });

    }

    /*
     axios.get(`https://softcamp.hu/webler/arkalkulator.php?brand=${actualMobile.brand}&model=${actualMobile.model}&os=
            ${actualMobile.os}&startPrice=${actualMobile.startPrice}&releaseYear=
            ${actualMobile.releaseYear}&startScore=
            ${actualMobile.startScore}&condition=${actualMobile.condition}`)
                .then(response => {
                    !response.data.error ? console.log(response.data.data) : console.log(response.data.error)
                })

                 axios({
            method: "get",
            params: {
                "brand": "iphon",
                "model": "10",
                "os": "ios",
                "startPrice": 566,
                "releaseYear": 2020,
                "startScore": 10,
                "condition": 80
            },
            url: `https://softcamp.hu/webler/arkalkulator.php`,
            responseType: "json",
        }).then((response) => { console.log(response.data)}).catch(err => console.log(err))
    }

      {phones.details.map(detail => <div><p>{detail.year}</p> <p>{detail.price}</p></div>)}

         {phones.data.details.map((detail =>   
                        <div>
                            <p>{detail.year}</p>
                            <p>{detail.price}</p>
                        </div>)
                )}


    */


    return (

        <CustomMotion>
            <div className="calculation container-expand">
                <div className="row">
                    <div className="form-col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <form className="form my-5 mx-auto" onSubmit={handleSubmit}>

                            <label className="form-label" htmlFor="brand">Brand</label>
                            <input className="form-control" type="text" name="brand" defaultValue={activeItem ? activeItem.brand : ""} required autoComplete="none" placeholder="Please, add the brand..." />

                            <label className="form-label" htmlFor="model">Model</label>
                            <input className="form-control" type="text" name="model" defaultValue={activeItem ? activeItem.model : ""} required autoComplete="none" placeholder="Please, add the model..." />

                            <label className="form-label" htmlFor="os">Operating System</label>
                            <input className="form-control" type="text" name="os" defaultValue={activeItem ? activeItem.os : ""} required autoComplete="none" placeholder="Please, add the operating system..." />

                            <label className="form-label" htmlFor="startPrice">Start Price</label>
                            <input className="form-control" type="number" name="startPrice" defaultValue={activeItem ? activeItem.startPrice : ""} required autoComplete="none" placeholder="Please, add the starting price..." />

                            <label className="form-label" htmlFor="releaseYear">Release Year</label>
                            <input className="form-control" type="number" name="releaseYear" defaultValue={activeItem ? activeItem.releaseYear : ""} required autoComplete="none" placeholder="Please, add the release year..." />

                            <label className="form-label" htmlFor="score">Score</label>
                            <input className="form-control" type="number" name="score" defaultValue={activeItem ? activeItem.score : ""} min={0} max={10} required autoComplete="none" placeholder="Please, add the score..." />

                            <label className="form-label" htmlFor="score">Condition</label>
                            <input className="form-control" type="number" name="condition" defaultValue={condition} min={0} max={100} required autoComplete="none" placeholder="Please, add the condition..." />

                            <button className="btn btn-danger d-flex mx-auto" type="submit">Calculate</button>
                        </form>
                    </div>

                    <div className="phone-col col-sm-12 col-md-12 col-lg-6 col-xl-6 my-5" >
                        <h2 className="phone-title">Our Quotation For You</h2>
                        {phones && <div className="phone-offer">
                            <p className="phone-detail">Appliance: {phones.brand} {phones.model}</p>
                            <p className="phone-detail">Operating System: {phones.os}</p>
                            <p className="phone-detail">Release Year: {phones.releaseYear}</p>
                            <p className="phone-detail">Recommended Price: {phones.recommendedPrice} </p>
                            {phones.details.map(detail => <div><p>{detail.year}</p> <p>{detail.price}</p></div>)}

                            <Currency />
                        </div>}
                    </div>
                </div>
            </div>

        </CustomMotion>

    )
}