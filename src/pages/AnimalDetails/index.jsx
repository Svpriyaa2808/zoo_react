import { useNavigate, useParams } from "react-router-dom"
import * as motion from "motion/react-client"
import {XCircle} from '@phosphor-icons/react'
import styles from './animaldetails.module.css'
import { getIconUrl } from "../../utils/function"
import { AnimalFullDescription } from "../../data/data"

const AnimalDetails = () => {
    
    const { type, animal } = useParams()
    const navigate = useNavigate()
  
    const handleClose = () => {
        navigate(`/${type}`)
    }
    
    console.log(animal)
     const AnimalDisplayed = AnimalFullDescription(animal)

    return (
        <div className={styles.animal_details}>
        <motion.div className={styles.details_container}>
            {AnimalDisplayed.map((item,index)=>
            <div key={index} className={styles.full_details_container}>
                <h2 >{item.name}</h2>
                <img src={getIconUrl(item.icon)}></img>
                <p>Length : {item.length} </p>
                <p>Weight : {item.weight} </p>
                <p>LifeSpan : {item.lifespan} </p>
                <p>Food : {item.food} </p>
                <p>Found : {item.found} </p>
                <p>About {item.name} : {item.description} </p>
            </div>)}
        
        </motion.div>
        
        <div className={styles.close} onClick={handleClose}>
        <XCircle size={32} />
        </div>
       
        </div>
    )
}

export default AnimalDetails

