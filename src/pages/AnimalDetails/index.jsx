import * as motion from "motion/react-client"
import {XCircle} from '@phosphor-icons/react'
import styles from './animaldetails.module.css'
const AnimalDetails = ({close}) => {
    
    const handleClose = () => {
        close(null)
    }

    return (
        <div className={styles.animal_details}>
        <motion.div className={styles.details_container}
            
           
        />
        <div className={styles.close} >
        <XCircle size={32} />
        </div>
        </div>
    )
}

export default AnimalDetails