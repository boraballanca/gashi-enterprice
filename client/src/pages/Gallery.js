import './styles/gallery.css'
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import SectionHeader from "../components/SectionHeader";
import ReactCompareImage from "react-compare-image";
import Post1 from '../assets/bathroom-01.jpg'
import Post2 from '../assets/bathroom-02.jpg'
import Post3 from '../assets/bathroom-03.jpg'
import Post4 from '../assets/post-10.jpg'
import Post5 from '../assets/post-09.jpg'
import Post6 from '../assets/post-05.jpeg'
import Post7 from '../assets/post-06.jpeg'
import Post8 from '../assets/post-07.jpeg'
import Post11 from '../assets/post-11.jpg'
import Post12 from '../assets/post-12.jpg'
import Post13 from '../assets/post-13.jpg'
import demolition_1 from '../assets/gallery_image_demolition_1.jpg'
import demolition_2 from '../assets/gallery_image_demolition_2.jpg'
import demolition_3 from '../assets/gallery_image_demolition_3.jpg'
import demolition_4 from '../assets/gallery_image_demolition_4.jpg'
import plumbing_before from '../assets/gallery_image_plumbing_before.jpg'
import plumbing_after from '../assets/gallery_image_plumbing_after.jpg'

import SlideshowImages from "../components/SlideshowImages";

import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
const architectureImages = [
    {
        id: 1,
        image: Post1,
    },
    {
        id: 2,
        image: Post2,
    },
    {
        id: 3,
        image: Post3,
    },
]

const demolition_process = [
    {
        id: 1,
        image: demolition_1,
    },
    {
        id: 2,
        image: demolition_2,
    },
    {
        id: 3,
        image: demolition_3,
    },
    {
        id: 4,
        image: demolition_4,
    },
]
const project_1 = [
    {
        id: 1,
        image: Post12,
    },
    {
        id: 2,
        image: Post13,
    },
    {
        id: 3,
        image: Post11,
    },
]
const project_2 = [
    {
        id: 1,
        image: Post6,
    },
    {
        id: 2,
        image: Post7,
    },
    {
        id: 3,
        image: Post8,
    },
]
const Gallery = () => {
    return (
        <>
            <ScrollUpButton/>
            <section className='services'>
                <div className="container gallery__container">
                    <SectionHeader className={'gallery__header'}
                                   title={'Different Projects | Our Work'}/>
                    <h2>Work process</h2>
                    <div className="work__process">

                        <div className="work_process-left">
                            <SlideshowImages className={'work__process-images'} slideImages={project_1}/>
                        </div>
                        <div className="work_process-right">
                            <SlideshowImages className={'work__process-images'} slideImages={project_2}/>
                        </div>
                    </div>

                    <div className="slideshow__content demolition__service">
                        <div className="slideshow__content-left">
                            <h2>Demolition services</h2>
                            <p>In one recent project, we provided painting and tile flooring services for a residential
                                client. We worked closely with
                                the client to ensure that their vision was brought to life, and we utilized high-quality
                                materials to
                                ensure a durable and long-lasting result</p>
                        </div>
                        <div className="slideshow__content-right">
                            <SlideshowImages className={'demolition__images'} slideImages={demolition_process}/>

                            {/*{*/}
                            {/*    demolition_process.map(({id,demolition_image}) => {*/}
                            {/*        return (*/}
                            {/*            <Slide>*/}
                            {/*                <div key={id}>*/}
                            {/*                    <img src={demolition_image}*/}
                            {/*                         alt="Demolition service images"/>*/}
                            {/*                </div>*/}
                            {/*            </Slide>*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*}*/}

                        </div>
                    </div>

                    <div className="before__after-content plumbing__service">
                        <div className="before__after-left">
                            <ReactCompareImage
                                hover={false}
                                vertical={false}
                                leftImage={plumbing_before}
                                rightImage={plumbing_after}
                            />
                        </div>
                        <div className="before__after-right">
                            <h2>Plumbing services</h2>
                            <p>In addition, we offer a comprehensive range of plumbing services,
                                including installation, repair, and maintenance. Our team of skilled
                                plumbers can tackle any job, from fixing a leaky faucet to installing
                                a new line.</p>
                        </div>
                    </div>

                    <div className="slideshow__content architecture__service">
                        <div className="slideshow__content-left">
                            <h2>3D architecture design services</h2>
                            <p>In another project, we provided 3D architecture design services
                                for a commercial client who was looking to renovate their office space.
                                Our team of experts created a customized design that maximized
                                the use of space while incorporating the client's brand and aesthetic.</p>
                        </div>
                        <div className="slideshow__content-right">
                            <SlideshowImages className={'architecture__images'} slideImages={architectureImages}/>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
export default Gallery