import CLAZZ_IMAGES from './clazzImages'
import '../styles/character-card.css'

export default function CharacterCard(props) {
    return (
        <div className="character-card">
            <p>{props.name}</p>
            <p>Cool picture</p>
            <p>Explore</p>
        </div>

    )

}