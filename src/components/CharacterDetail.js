import { useState, useEffect } from "react"
import { useParams } from "react-router"
import '../styles/character-detail.css'

export default function CharacterDetail(props) {
    const [clazzes, setClazzes] = useState([])
    useEffect(() => {
        fetch("https://api.open5e.com/classes/")
            .then((res) => res.json())
            .then((json) => {
                setClazzes(json.results)
            })
            .catch(console.error)
    }, [])
    console.log(clazzes[0])
    if (!clazzes) {
        return <p>Loading bird information ...</p>
      }
    return (
        
        <div className="character-detail">
            <h2>{clazzes.name}</h2>
            <p>cool picture</p>
            <p>character Detail</p>
            <p>character stats</p>
            
           
        </div>

    )

}