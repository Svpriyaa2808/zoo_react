import { useEffect, useState } from 'react'
import styles from './mainContent.module.css'
import { getIconUrl } from '../../utils/function'
import { NavLink , useLocation} from 'react-router-dom'
import AnimalFullDetails from '../AnimalFullDetails'
import AnimalDetails from '../../pages/AnimalDetails'

const MainContent = ({animalDescription,animalDetails,contentArray}) => {
    const [showShortDescription,setShowShortDescription] = useState(null)
    const [fullDetails,setFullDetails] = useState(null)
    console.log(contentArray)

    const handleClick = () => {
        setShowShortDescription(null)
        animalDescription(null)
    }

    const handleDetails = () => {
        setFullDetails("show")
        
        
    }

    useEffect(()=> {
        setShowShortDescription(animalDescription)
    },[animalDescription])

    const location = useLocation()
    const isHome = location.pathname === '/'

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
                        <h3 className={styles.animal_name}>{item.name}</h3>
                        <img className={styles.animal_icon} src={getIconUrl(item.icon)} alt={item.icon}></img>
                        <p className={styles.animal_description}>{item.description.length > 200 ? item.description.slice(0,200) + "...." : item.description}</p>
                        
                        {isHome  ? <div className={styles.link}>To Know about more {item.type} 
                                    <p><NavLink to={`/${item.type}`} onClick={handleClick}> visit {item.type} Page</NavLink></p>
                                    </div>
                                : <div className={styles.link}>To know about {item.name}
                                    <p><NavLink to={`/${item.type}/${item.name}` } onClick={handleDetails}>Click here</NavLink></p> 
                                </div>
                        }
                
                    </div>)
                )
            }

            {fullDetails && <AnimalDetails close={setFullDetails}/>}
        </div>
    )
}

export default MainContent