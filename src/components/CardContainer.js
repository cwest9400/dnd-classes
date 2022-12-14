import '../styles/card-container.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard'

export default function CardContainer(props) {
    const [clazzes, setClazzes] = useState([])
    useEffect(() => {
        fetch("https://api.open5e.com/classes/")
            .then((res) => res.json())
            .then((json) => {
                setClazzes(json.results)
            })
            .catch(console.error)
    }, [])
    return (
        <div>
            <div className="card-container">
                {clazzes.map((clazz) => {
                    return (
                        <Link to={`/details/${clazz.name}`} key={clazz.name}>
                            <CharacterCard name={clazz.name} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
