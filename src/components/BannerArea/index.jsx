import styles from './bannerArea.module.css'

const BannerArea = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner_area}>
                <div className={styles.overlay}></div>
                <div className={styles.banner}>
                    <div className={styles.content}>
                    A World of Wildlife Awaits.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerArea