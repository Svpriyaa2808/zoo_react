import { useEffect, useState } from "react"
import styles from "./sidebar.module.css"


const Sidebar = ({animalNameClick,animalName}) => {
    const [classActive,setClassActive] = useState(null)
    
    const handleClick = (item) => {
        animalNameClick(item)
        setClassActive(classActive === item ? null : item)
    }

   

    return (
        <>
        <div className={styles.sidebar}>
            {animalName.map((item,index)=> (
                <p key={index} className={`${styles.animal_name} ${classActive === item ? styles.active : ""}`} onClick={()=>handleClick(item)}>{item}</p>
            ))}
        </div>
        </>
    )
}

export default Sidebar