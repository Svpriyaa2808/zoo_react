import { useNavigate, useParams } from "react-router-dom"
import * as motion from "motion/react-client"
import {XCircle} from '@phosphor-icons/react'
import styles from './animaldetails.module.css'
import { getImageUrl } from "../../utils/function"
import { AnimalFullDescription } from "../../data/data"
import Slider from "../../components/Slider"

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
                    <div className={styles.heading}>
                        <div className={styles.title}>
                            <h2>{item.name}</h2>
                        </div>
                        <div className={styles.close} onClick={handleClose}>
                            <XCircle size={38} />
                        </div>
                    </div>
                    {/* <img src={getImageUrl(item.image)} alt={item.name}></img> */}
                    <div className={styles.slider}>
                    <Slider animalName={animal}/>
                    </div>
                    <div className={styles.description}>
                        <h4>About {item.name}</h4>
                        <p> {item.description} </p>
                    </div>
            
                    <div className={styles.details_div}>
                        <h4>Features</h4>
                        <p className={styles.details}>Length : {item.length} cm</p>
                        <p className={styles.details}>Weight : {item.weight} kg </p>
                        <p className={styles.details}>LifeSpan : {item.lifespan} years</p>
                        <p className={styles.details}>Food : {item.food}</p>
                        <p className={styles.details}>Found : {item.found} </p>
                    </div>
                </div>)}
             </motion.div> 
        </div>
    )
}

export default AnimalDetails

