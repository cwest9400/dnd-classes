import CLAZZ_IMAGES from './clazzImages'
import '../styles/character-card.css'

export default function CharacterCard(props) {
    return (
        <div className="character-card">
            <p>{props.name}</p>
            <img className="clazz-image" src={CLAZZ_IMAGES[props.name]} />
            {/* <p>Cool picture</p> */}
            <div className='character-footer'>
                <p className='explore-link'>Explore</p>
            </div>
            
        </div>

    )

}