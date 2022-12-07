import CharacterCard from './CharacterCard'
import { useState, useEffect } from "react"
import '../styles/card-container.css'

export default function CardContainer(props) {
    const [clazzes, setClazzes] = useState ([])
    useEffect(() => {
        fetch("https://api.open5e.com/classes/")
            .then((res) => res.json())
            .then((json) => {
                setClazzes(json.results)
            })
            .catch(console.error)
    }, [])
    // console.log(clazzes[1])
    return (
        <div className="card-container">
           {clazzes.map((clazz) => (
               <div className="character-card">
               <p>{clazz.name}</p>
               <p>Cool picture</p>
               
           </div>

           ))}
            
        </div>

    )

}