import { useEffect, useState } from 'react'
import styles from './mainContent.module.css'
import { getIconUrl } from '../../utils/function'
import { NavLink } from 'react-router-dom'

const MainContent = ({animalDescription,animalDetails,contentArray}) => {
    const [showShortDescription,setShowShortDescription] = useState(null)
    console.log(contentArray)

    const handleClick = () => {
        setShowShortDescription(null)
        animalDescription(null)
    }

    useEffect(()=> {
        setShowShortDescription(animalDescription)
    },[animalDescription])

    return (
        <div className={styles.main_description}>
            {!showShortDescription  && !animalDescription &&
            (contentArray.map((item,index)=>(
                <div key={index} className={styles.heading}>
                    <h2>{item.subHeading}</h2>
                    <p>{item.maincontent}</p>
                </div>
            )))}

            {showShortDescription && animalDescription && 
                (animalDetails.map((item,index)=>
                    <div key={index} className={styles.animal_container}>
                        <img src={getIconUrl(item.icon)} alt={item.icon}></img>
                        <h3>{item.name}</h3>
                        <p>{item.description.length > 200 ? item.description.slice(0,200) + "...." : item.description}</p>
                <NavLink to={item.type} onClick={handleClick}>visit {item.type} Page</NavLink>
                </div>))
                
            }
        </div>
    )
}

export default MainContent