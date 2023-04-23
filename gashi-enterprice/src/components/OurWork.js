import {MdOutlineArchitecture,MdOutlineConstruction} from 'react-icons/md'
import {GrUserWorker} from 'react-icons/gr'
// import {IoConstructOutline} from 'react-icons/io'
import {AiFillCaretRight} from "react-icons/ai";
import SectionHeader from "./SectionHeader";
import Card from './Card'
import {Link} from "react-router-dom";
import Logo from '../assets/logo-04.png'

export const works = [
    {
        id: 1,
        icon: <MdOutlineArchitecture/>,
        title: "Architecture & Construction",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        path: "/work/111"
    },
    {
        id: 2,
        icon: <MdOutlineConstruction/>,
        title: "Construction Consultants",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        path: "/work/222"
    },
    {
        id: 3,
        icon: <GrUserWorker/>,
        title: "Construction Management",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        path: "/work/333"
    },
    // {
    //     id: 4,
    //     icon: <MdConstruction/>,
    //     title: "Program Four",
    //     info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //     path: "/work/444"
    // }
]

const OurWork = () => {
    return (
        <section className='work'>
            <div className="container work_container">
                <SectionHeader className={'work__header'}
                               title={'High Quality Construction Solutions'}
                               preview={'The Best A Grade Commercial & Residential Services'}/>
                <div className="work__wrapper">
                    {works.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className={'our__work'} key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className={'card__btn'}> Read More
                                    <div className={'card__btn-icon'}><AiFillCaretRight/></div>
                                </Link>
                            </Card>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default OurWork