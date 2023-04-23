import SectionHeader from "./SectionHeader";
import ImageCard from "./ImageCard";
import Post1 from '../assets/post-03.jpeg'
import Post2 from '../assets/post-02.jpeg'
import Post3 from '../assets/post-01.jpeg'
import {Link} from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import {works} from "./OurWork";
import {MdOutlineArchitecture, MdOutlineConstruction} from "react-icons/md";
import {GrUserWorker} from "react-icons/gr";

export const images = [
    {
        id: 0,
        icon: Post1,
    },
    {
        id: 1,
        icon: Post2,
    },
    {
        id: 2,
        icon: Post3,
    },
]


const HomeServices = () => {
    return (
        <section className='services'>
            <div className="container services__container">
                <SectionHeader className={'services__header'}
                               title={'What we do'}
                               preview={'High Quality Construction Solutions'}/>
                <div className="services__wrapper">
                    {
                        images.map(({id, icon}) => {
                            return (
                                <ImageCard className={'image_card'} key={id} image={icon}/>
                            )
                        })
                    }

                </div>
            </div>

        </section>
    )
}
export default HomeServices