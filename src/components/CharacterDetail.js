import '../styles/character-detail.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import CLAZZ_IMAGES from "./clazzImages"

export default function CharacterDetail(props) {
    const { name } = useParams()
    const url = `https://api.open5e.com/classes/${name.toLowerCase()}/`
    const dndBeyondUrl = `https://www.dndbeyond.com/classes/${name}`
    const [clazzes, setClazzes] = useState([])
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setClazzes(json)
            })
            .catch(console.error)
    }, [name])

    if (!clazzes) {
        return <p>Loading...</p>
    }
    return (
        <>
            <div className='class-detail-title'>
                <h1>{name}</h1>
            </div>
            <div className="character-detail">
                <img src={CLAZZ_IMAGES[name]} />
                {/* <p>{clazzes.desc}</p> */}
                <div className='class-stats-container'>
                    <div className='stats-frame'>
                        <h3 className='title-box'>Class stats</h3>
                        <p><span className='bolder'>Hit Dice:</span> {clazzes.hit_dice}</p>
                        <p><span className='bolder'>Starting HP:</span> {clazzes.hp_at_1st_level}</p>
                        <p><span className='bolder'>Level up HP:</span> {clazzes.hp_at_higher_levels}</p>
                    </div>
                    <div className='proficiencies'>
                        <h3 className='title-box'>Proficiencies</h3>
                        <p><span className='bolder'>Armor:</span> {clazzes.prof_armor}</p>
                        <p><span className='bolder'>Weapon:</span> {clazzes.prof_weapons}</p>
                        <p><span className='bolder'>Tools:</span> {clazzes.prof_tools}</p>
                        <p><span className='bolder'>Saving throws:</span> {clazzes.prof_saving_throws}</p>
                    </div>
                    <div className='skills'>
                        <h3 className='title-box'>Skills</h3>
                        <p>{clazzes.prof_skills}</p>
                    </div>
                    <div className='equipment'>
                        <h3 className='title-box'>Equipment</h3> <p>{clazzes.equipment}</p>
                    </div>
                </div>
                {/* <p>Stat Table {clazzes.table}</p> */}
                <a href={dndBeyondUrl} target="_blank">
                    Advanced description
                </a>
            </div>
        </>
    )
}