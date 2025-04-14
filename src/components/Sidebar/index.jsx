import { useEffect, useState } from "react"
import styles from "./sidebar.module.css"
import { getIconUrl } from "../../utils/function"
getIconUrl

const Sidebar = ({animalNameClick,animalName}) => {
    console.log(animalName)
    const [classActive,setClassActive] = useState(null)
    
    const handleClick = (item) => {
        animalNameClick(item)
        setClassActive(classActive === item ? null : item)
    }

    return (
        <>
        <div className={styles.sidebar}>
            {animalName.map((item,index)=> (
                <div key={index} className={`${styles.sidebar_menu} ${classActive === item ? styles.active : ""}`} onClick={()=>handleClick(item)}>
                <p key={index} className={styles.animal_name}  >{item.name}</p>
                <img className={styles.animal_icon} src={getIconUrl(item.icon)}></img>
                </div>
            ))}
        </div>
        </>
    )
}

export default Sidebar