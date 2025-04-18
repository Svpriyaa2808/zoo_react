import { useNavigate, useParams } from "react-router-dom"
import * as motion from "motion/react-client"
import {XCircle} from '@phosphor-icons/react'
import styles from './animaldetails.module.css'
import { getImageUrl } from "../../utils/function"
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
                <h2 className={styles.heading}>{item.name}</h2>
                <img src={getImageUrl(item.image)} alt={item.name}></img>
                <p className={styles.description}>About {item.name} : {item.description} </p>
                <p className={styles.details}>Length : {item.length} </p>
                <p className={styles.details}>Weight : {item.weight} kg </p>
                <p className={styles.details}>LifeSpan : {item.lifespan} </p>
                <p className={styles.details}>Food : {item.food} </p>
                <p className={styles.details}>Found : {item.found} </p>
            </div>)}
        
        </motion.div>
        
        <div className={styles.close} onClick={handleClose}>
        <XCircle size={32} />
        </div>
       
        </div>
    )
}

export default AnimalDetails

