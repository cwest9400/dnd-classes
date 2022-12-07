import CharacterCard from './CharacterCard'
import { useState, useEffect } from "react"
import '../styles/card-container.css'

export default function CardContainer(props) {
    const [clazz, setClazz] = useState ([])
    useEffect(() => {
        fetch("https://api.open5e.com/classes/")
            .then((res) => res.json())
            .then((json) => {
                setClazz(json.results)
            })
    }, [])
    console.log(clazz[1])
    return (
        <div className="card-container">
            <p> card container</p>
            <CharacterCard />
            
        </div>

    )

}