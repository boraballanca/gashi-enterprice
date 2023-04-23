
import './styles/gallery.css'
import SectionHeader from "../components/SectionHeader";
import ImageCard from "../components/ImageCard";
import Post1 from "../assets/post-06.jpeg";
import Post2 from "../assets/post-07.jpeg";
import {useState} from "react";
import reviews from "../components/Reviews";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const galleryImages = [
    {
        id: 1,
        image: Post1,
    },
    {
        id: 2,
        image: Post2,
    },
    // {
    //     id: 2,
    //     icon: Post3,
    // },
]

const Gallery = () => {
    const [index, setIndex]=useState(0)
    const {image}=galleryImages[index]

    const prevGalleryHandler =()=>{
        setIndex(prev=>prev-1)
        if(index<=0){
            setIndex(galleryImages.length-1)
        }
    }
    const nextGalleryHandler=()=>{
        setIndex(prev=>prev+1)
        if(index>=galleryImages.length-1){
            setIndex(0)
        }
    }

    return (
        <>
            {/*<section className='services'>*/}
                <div className="container gallery__container">
                    <SectionHeader className={'gallery__header'}
                                   title={'More from our work'}
                                  />
                    <div className="gallery__content">
                        <button className="gallery__btn" onClick={prevGalleryHandler}><AiOutlineLeft/></button>
                        <ImageCard className={'gallery__image-card'} image={image}/>
                        <button className="gallery__btn" onClick={nextGalleryHandler}><AiOutlineRight/></button>
                    </div>

                </div>

            {/*</section>*/}
        </>
    )
}
export default Gallery