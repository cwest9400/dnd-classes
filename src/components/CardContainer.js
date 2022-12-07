import CharacterCard from './CharacterCard'
import '../styles/card-container.css'

export default function CardContainer(props) {
    return (
        <div className="card-container">
            <p> card container</p>
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
        </div>

    )

}