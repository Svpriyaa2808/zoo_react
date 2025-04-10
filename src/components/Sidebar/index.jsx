import { useState } from "react"
import styles from "./sidebar.module.css"
import { AnimalName } from "../../data/data"

const Sidebar = ({animalNameClick}) => {
    console.log(AnimalName)
    
      
   
    return (
        <div className={styles.sidebar}>
            {AnimalName.map((item,index)=> (
                <p key={index} className={styles.animal_name} onClick={()=>animalNameClick(item)}>{item}</p>
            ))}
        </div>
    )
}

export default Sidebar