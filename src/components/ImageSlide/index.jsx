import styles from './imageSlide.module.css'
import tasmanian from '../../assets/tasmanianmammal.jpg'

const ImageSlide = () => {
    return(
        <div className={styles.image_container}>
            <div className={styles.image_1}>
                <img src={tasmanian} width={200} height={200}></img>
            </div>
            <div className={styles.image_2}></div>
            <div className={styles.image_3}></div>
        </div>
    )
}

export default ImageSlide