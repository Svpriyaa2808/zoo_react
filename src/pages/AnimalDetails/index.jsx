import { useNavigate, useParams } from "react-router-dom"
import * as motion from "motion/react-client"
import {XCircle} from '@phosphor-icons/react'
import styles from './animaldetails.module.css'
const AnimalDetails = ({close}) => {
    
    const { type, animal } = useParams()
    const navigate = useNavigate()
  
    const handleClose = () => {
      navigate(-1)
    }
   
    return (
        <div className={styles.animal_details}>
        <motion.div className={styles.details_container}
            
           
        />
        <div className={styles.close} onClick={handleClose}>
        <XCircle size={32} />
        </div>
        <h2>{animal}</h2>
      <p>More detailed info about the {animal} in {type}...</p>
        </div>
    )
}

export default AnimalDetails

// import { useNavigate, useParams } from "react-router-dom"
// import { motion } from "framer-motion"
// import styles from "./animalDetails.module.css"
// import { XCircle } from "@phosphor-icons/react"

// const AnimalDetails = () => {
//   const { type, animal } = useParams()
//   const navigate = useNavigate()

//   const handleClose = () => {
//     navigate(-1)
//   }

//   return (
//     <motion.div
//       className={styles.modal}
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//     >
//       <XCircle size={32} onClick={handleClose} />
//       <h2>{animal}</h2>
//       <p>More detailed info about the {animal} in {type}...</p>
//     </motion.div>
//   )
// }

// export default AnimalDetails
