import './styles/gallery.css'
import 'react-slideshow-image/dist/styles.css'
import SectionHeader from "../components/SectionHeader";
import ReactCompareImage from "react-compare-image";
import Post1 from '../assets/bathroom-01.jpg'
import Post2 from '../assets/bathroom-02.jpg'
import Post3 from '../assets/bathroom-03.jpg'
import Post11 from '../assets/post-11.jpg'
import Post12 from '../assets/post-12.jpg'
import Post13 from '../assets/post-13.jpg'
import View1 from '../assets/view1.jpg'
import View2 from '../assets/view2.jpg'
import View3 from '../assets/view3.jpg'
import demolition_1 from '../assets/gallery_image_demolition_1.jpg'
import demolition_2 from '../assets/gallery_image_demolition_2.jpg'
import demolition_3 from '../assets/gallery_image_demolition_3.jpg'
import demolition_4 from '../assets/gallery_image_demolition_4.jpg'
import plumbing_before from '../assets/plumbing_before.jpg'
import plumbing_after from '../assets/gallery_image_plumbing_after.jpg'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import Carousel from "../components/Carousel";
const architectureImages = [
    {
        src: Post1,
        alt: "Image 1 for carousel"
    },
    {
        src: Post2,
        alt: "Image 2 for carousel"
    },
    {
        src: Post3,
        alt: "Image 3 for carousel"
    }
]

const demolition_process = [
    {
        src: demolition_1,
        alt: "Image 1 for carousel"
    },
    {
        src: demolition_2,
        alt: "Image 2 for carousel"
    },
    {
        src: demolition_3,
        alt: "Image 3 for carousel"
    },
    {
        src: demolition_4,
        alt: "Image 4 for carousel"
    }
]
const project_1 = [
    {
        src: Post12,
        alt: "Image 1 for carousel"
    },
    {
        src: Post13,
        alt: "Image 2 for carousel"
    },
    {
        src: Post11,
        alt: "Image 3 for carousel"
    }
]
const project_2 = [
    {
        src: View1,
        alt: "Image 1 for carousel"
    },
    {
        src: View2,
        alt: "Image 2 for carousel"
    },
    {
        src: View3,
        alt: "Image 3 for carousel"
    }
]
const Gallery = () => {
    return (
        <>
            <ScrollUpButton/>
            <div className='services'>
                <div className="container gallery__container">
                    <SectionHeader className={'gallery__header'}
                                   title={'Our Work'} preview={'A variety of projects our team has worked on'}/>
                    <div className="work__process">
                        <div className="work_process-left">
                            <Carousel data={project_1}/>
                        </div>
                        <div className="work_process-right">
                            <Carousel data={project_2}/>
                        </div>
                    </div>

                    <div className={'carousel__slideshow'}>
                        <div className="slideshow__info slideshow__content-left">
                            <h2>Demolition services</h2>
                            <p>In one recent project, we provided painting and tile flooring services for a residential
                                client. We worked closely with
                                the client to ensure that their vision was brought to life, and we utilized high-quality
                                materials to
                                ensure a durable and long-lasting result</p>
                        </div>
                        <div className="slideshow__content-right">
                            <Carousel data={demolition_process}/>
                        </div>
                    </div>

                    <div className="before__after-slideshow plumbing__service">
                        <div className="before__after-left">
                            <ReactCompareImage
                                hover={false}
                                vertical={false}
                                leftImage={plumbing_before}
                                rightImage={plumbing_after}
                                style={{borerRadius:'5px'}}
                            />
                        </div>
                        <div className="slideshow__info before__after-right">
                            <h2>Plumbing services</h2>
                            <p>In addition, we offer a comprehensive range of plumbing services,
                                including installation, repair, and maintenance. Our team of skilled
                                plumbers can tackle any job, from fixing a leaky faucet to installing
                                a new line.</p>
                        </div>
                    </div>

                    <div className="carousel__slideshow">
                        <div className="slideshow__info slideshow__content-left">
                            <h2>3D architecture design services</h2>
                            <p>In another project, we provided 3D architecture design services
                                for a commercial client who was looking to renovate their office space.
                                Our team of experts created a customized design that maximized
                                the use of space while incorporating the client's brand and aesthetic.</p>
                        </div>
                        <div className="slideshow__content-right">
                            <Carousel data={architectureImages} className={'architecture__images'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery