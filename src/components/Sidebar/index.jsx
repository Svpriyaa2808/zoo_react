import { useState } from "react"
import styles from "./sidebar.module.css"
import { getIconUrl } from "../../utils/function"


const Sidebar = ({animalNameClick,animalName,activeClass,animalActive}) => {
    console.log(animalName)
    
    
    const handleClick = (item) => {
        animalNameClick(item)
        activeClass(animalActive === item ? null : item)
        console.log(item)
    }

    return (
        <>
        <div className={styles.sidebar}>
            {animalName.map((item,index)=> (
                <div key={index} className={`${styles.sidebar_menu} ${animalActive === item ? styles.active : ""}`} onClick={()=>handleClick(item)}>
                    <p key={index} className={styles.animal_name}>{item.name}</p>
                    <img className={styles.animal_icon} src={getIconUrl(item.icon)}></img>
                </div>
            ))}
        </div>
        </>
    )
}

export default Sidebar