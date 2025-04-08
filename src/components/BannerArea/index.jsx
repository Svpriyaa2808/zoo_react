import styles from './bannerArea.module.css'

const BannerArea = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner_area}>
                <div className={styles.overlay}></div>
                <div className={styles.content}></div>
            </div>
        </div>
    )
}

export default BannerArea