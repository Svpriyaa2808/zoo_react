import { useEffect, useState } from 'react'
import styles from './mainContent.module.css'
import { homeContent} from '../../data/data'

const MainContent = ({animalDescription,animalDetails}) => {
    const [showShortDescription,setShowShortDescription] = useState(null)

    // const Animal = AnimalShortDescription(animalDescription)

    useEffect(()=> {
        setShowShortDescription(animalDescription)
    },[animalDescription])

    return (
        <div className={styles.main_description}>
            {!showShortDescription  && !animalDescription &&
            (homeContent.map((item,index)=>(
                <div key={index} className={styles.heading}>
                    <h2>{item.subHeading}</h2>
                    <p>{item.maincontent}</p>
                </div>
            )))}

            {showShortDescription && animalDescription && 
                (animalDetails.map((item,index)=>
                <p key={index}>{item.weight}</p>))
            }
        </div>
    )
}

export default MainContent