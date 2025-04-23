import styles from './homeDetail.module.css'
import Food from '../../assets/food.jpg'
import Cheetah from '../../assets/animal_exp.jpg'
import Elephant from '../../assets/animal_park.jpg'
import WildLife from '../../assets/wildlife_camp.jpg'

const HomeDetail = () =>{
    return (
        <div className={styles.homeDetail_container}>
            <div className={styles.inner_container}>
            <div className={styles.food}>
                <div className={styles.img_container}>
                    <img src={Food} alt='food'></img>
                </div>
                <div className={styles.description}>
                    Food & Drink
                </div>
            </div>
            <div className={styles.food}>
                <div className={styles.img_container}>
                    <img src={Cheetah} alt='cheetah'></img>
                </div>
                <div className={styles.description}>
                    Animal Experience
                </div>
            </div>
            <div className={styles.food}>
                <div className={styles.img_container}>
                    <img src={Elephant} alt='elephant'></img>
                </div>
                <div className={styles.description}>
                    Animals of the Park
                </div>
            </div>
            <div className={styles.food}>
                <div className={styles.img_container}>
                    <img src={WildLife} alt='Wildlife camp'></img>
                </div>
                <div className={styles.description}>
                    Wildlife Camp
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeDetail