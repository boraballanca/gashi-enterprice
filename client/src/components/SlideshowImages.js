import {useState} from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import ImageCard from "./ImageCard";
import {AnimatePresence, motion} from 'framer-motion'

const variants={
    initial:{
        x:200,
        opacity:0,
    },
    animate:{
        x:0,
        opacity: 1,
        transition:'ease-in'
    },
    exit:{
        x:-200,
        opacity:0,
    },

}

const SlideshowImages = ({className, slideImages}) => {
    const [index, setIndex] = useState(0)
    const [direction,setDirection]=useState(0)
    const {image} = slideImages[index]

    const prevGalleryHandler = () => {
        // setDirection(1)
        setIndex(prev => prev - 1)
        if (index <= 0) {
            setIndex(slideImages.length - 1)
        }
    }
    const nextGalleryHandler = () => {
        // setDirection(-1)
        setIndex(prev => prev + 1)
        if (index >= slideImages.length - 1) {
            setIndex(0)
        }
    }
    return (
        <div className={`slideshow__images ${className}`}>
            <ImageCard className={'gallery__image-card'} image={image}/>
            {/*<AnimatePresence>*/}
            {/*    <motion.img variants={variants} animate='animate' initial='initial'  src={image} alt="images" className={'gallery__image-card'} key={image}/>*/}
            {/*</AnimatePresence>*/}
            <div className="gallery__btn-wrapper">
                <button className="gallery__btn" onClick={prevGalleryHandler}><AiOutlineLeft/></button>
                <button className="gallery__btn" onClick={nextGalleryHandler}><AiOutlineRight/></button>
            </div>
        </div>
    )
}
export default SlideshowImages