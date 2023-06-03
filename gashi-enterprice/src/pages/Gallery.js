import './styles/gallery.css'
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

import SlideshowImages from "../components/SlideshowImages";

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
            <section className='services'>
                <div className="container gallery__container">
                    <SectionHeader className={'gallery__header'}
                                   title={'Our work'}/>

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
                            <SlideshowImages className={'demolition__images'} slideImages={project_1}/>
                        </div>
                    </div>

                    <div className="before__after-content plumbing__service">
                        <div className="before__after-left">
                            <ReactCompareImage
                                hover={false}
                                vertical={false}
                                leftImage={Post4}
                                rightImage={Post5}
                            />
                        </div>
                        <div className="before__after-right">
                            <h2>Plumbing services</h2>
                            <p>In addition, we offer a comprehensive range of plumbing services,
                                including installation, repair, and maintenance. Our team of skilled
                                plumbers can tackle any job, from fixing a leaky faucet to installing
                                a new sewer line.</p>
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
                            <SlideshowImages className={'demolition__images'} slideImages={project_2}/>
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