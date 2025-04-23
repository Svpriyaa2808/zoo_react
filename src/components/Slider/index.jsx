import SimpleImageSlider from "react-simple-image-slider";
import { ImageForSlider } from "../../data/data";
import { getImageUrl } from "../../utils/function";
import styles from './slider.module.css'

const Slider = ({animalName}) => {

    // const Images = [
    //   {url :  ImageForSlider(animalName).map(item => getImageUrl(item.image))
    //   } ]

    const Images = ImageForSlider(animalName).map(item => ({
        url: getImageUrl(item.image)
      }));

    return (
       
        <SimpleImageSlider
          width={"100%"}
          height={"100%"}
          images={Images}
          showBullets={true}
          showNavs={true}
          autoPlay={false}
        />
      
    )
}

export default Slider 