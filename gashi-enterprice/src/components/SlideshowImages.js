import {useState} from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import ImageCard from "./ImageCard";

const SlideshowImages = ({className, slideImages}) => {
    const [index, setIndex] = useState(0)
    const {image} = slideImages[index]

    const prevGalleryHandler = () => {
        setIndex(prev => prev - 1)
        if (index <= 0) {
            setIndex(slideImages.length - 1)
        }
    }
    const nextGalleryHandler = () => {
        setIndex(prev => prev + 1)
        if (index >= slideImages.length - 1) {
            setIndex(0)
        }
    }
    return (
        <div className={`slideshow__images ${className}`}>
            <ImageCard className={'gallery__image-card'} image={image}/>
            <div className="gallery__btn-wrapper">
                <button className="gallery__btn" onClick={prevGalleryHandler}><AiOutlineLeft/></button>
                <button className="gallery__btn" onClick={nextGalleryHandler}><AiOutlineRight/></button>
            </div>
        </div>
    )
}
export default SlideshowImages