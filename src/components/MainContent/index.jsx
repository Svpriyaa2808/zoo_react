import styles from './mainContent.module.css'
import { getIconUrl } from '../../utils/function'
import { NavLink , useLocation} from 'react-router-dom'


const MainContent = ({animalDescription,animalDetails,contentArray}) => {
    
    console.log(contentArray)
    
    const handleClick = () => {
        animalDescription(null)
    }

    // const handleNavigate = (item) => {
    //     activeClass(item)
    // }

    // useEffect(()=> {
    //     activeClass(animalDescription)
    // },[animalDescription])

    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div className={styles.main_description}>
            {!animalDescription &&
            (contentArray.map((item,index)=>(
                <div key={index} className={styles.heading}>
                    <h2>{item.subHeading}</h2>
                    <p>{item.maincontent}</p>
                </div>
            )))}

            {animalDescription &&
                (animalDetails.map((item,index)=>
                    <div key={index} className={styles.animal_container}>
                        <h3 className={styles.animal_name}>{item.name}</h3>
                        <img className={styles.animal_icon} src={getIconUrl(item.icon)} alt={item.icon}></img>
                        <p className={styles.animal_description}>{item.description.length > 200 ? item.description.slice(0,200) + "...." : item.description}</p>
                        <p className={styles.animal_description}><span>Food : </span>{item.food}</p>
                        {isHome  ? 
                                <>
                                    <div className={styles.link}>To Know about more {item.type} 
                                        <p><NavLink to={`/${item.type}`} onClick={handleClick} state={{ from: location.pathname }}> visit {item.type} Page</NavLink></p>
                                    </div>
                                            
                                    <div className={styles.link}>To know about {item.name}
                                        <p><NavLink to={`/${item.type}/${item.name} `}  state={{ from: location.pathname }} >Click here</NavLink></p> 
                                    </div>  
                                </>
                                :   
                                    <div className={styles.link}>To know about {item.name}
                                        <p><NavLink to={`/${item.type}/${item.name}`}  state={{ from: location.pathname }}>Click here</NavLink></p> 
                                    </div>
                        }
                
                    </div>)
                )
            }

        </div>
    )
}

export default MainContent