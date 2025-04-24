import SimpleImageSlider from "react-simple-image-slider"
import { getImageUrl } from "../../utils/function"
import styles from './slider.module.css'

const Slider = ({imageArray}) => {
   
    const imageUrl = imageArray.map(item => ({
        url: getImageUrl(item.image)
      }));

    console.log(imageArray.map(item=> getImageUrl(item.image)))
    return (
        <div className={styles.image_container}>
        <div className={styles.slider_container}>
        <SimpleImageSlider 
        width={"100%"}
        height={"100%"}
        position={"relative"}
        images={imageUrl}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      /> 
      </div>
      </div>
    )
}

export default Slider