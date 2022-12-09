import '../styles/character-card.css'
import CLAZZ_IMAGES from './clazzImages'

export default function CharacterCard(props) {
    return (
        <div className="character-card">
            
            <img className="clazz-image" src={CLAZZ_IMAGES[props.name]} />
            {/* <p>Cool picture</p> */}
            <div className='character-footer'>
                <h2 className='card-title'>{props.name}</h2>
            </div>
            
        </div>

    )

}