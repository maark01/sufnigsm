import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Currency.css"

export default function Currency() {


    const [currencyOptions, setcurrencyOptions] = useState([]);



    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/fiats")
            .then((res) => setcurrencyOptions(res.data))
    }, []);

    function handleFiatChange(event) {

        event.preventDefault()

        let currentFiat = {
            name: event.target.name.value,
            rate: event.target.rate.value,
            symbol: event.target.symbol.value,
            imageUrl: event.target.imageUrl.value
        }
        console.log(event.target.value)
    }

    return (
        <div className="currency">
            <select className="currency-select form-select d-flex mx-auto" onChange={handleFiatChange}>
                {
                    currencyOptions.map(fiat => <option key={fiat.name} name={fiat.name} symbol={fiat.symbol} value={fiat.rate}>{fiat.name}</option>)

                }
            </select>
        </div>
    )
}
