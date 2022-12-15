import axios from "axios";
import { useEffect, useState } from 'react'
//import FiatTile from './FiatTile';


export default function Fiat(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/fiats")
            .then(res => {
                setList(res.data);

            });
    }, []);

    const filteredElements = list.filter(element => element.name.toLowerCase().includes(props.filter.toLowerCase()));

    return (
        <div className='Fiat text-center row'>
            
            {(/*!loading &&*/ props.filter.length > 0 && filteredElements.length === 0) && <>A keresési feltételekre nincs találat ({props.filter})!</>}
            {filteredElements.map(element => <div key={element.name} value={element}></div>)}
        </div>
    )
}