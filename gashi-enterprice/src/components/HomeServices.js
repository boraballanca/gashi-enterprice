import SectionHeader from "./SectionHeader";
import ImageCard from "./ImageCard";
import Post1 from '../assets/post-03.jpeg'
import Post2 from '../assets/post-02.jpeg'
import Post3 from '../assets/post-01.jpeg'
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
        <div className='home__services'>
            <div className="container home__services-container">
                <SectionHeader className={'home__services-header'}
                               title={'What we do'}
                               preview={'High Quality Construction Solutions'}/>
                <div className="home__services-wrapper">
                    {
                        images.map(({id, icon}) => {
                            return (
                                <ImageCard className={'home__services-card'} key={id} image={icon}/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default HomeServices