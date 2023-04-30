import {MdOutlineArchitecture,MdOutlineConstruction} from 'react-icons/md'
import {GrUserWorker} from 'react-icons/gr'
import {AiFillCaretRight} from "react-icons/ai";
import SectionHeader from "./SectionHeader";
import Card from './Card'
import {Link} from "react-router-dom";

export const works = [
    {
        id: 1,
        icon: <MdOutlineArchitecture/>,
        title: "Heating & Cooling services",
        info: "Including heating and cooling services to ensure that your home or business is comfortable year-round.",
        path: "/work/111"
    },
    {
        id: 2,
        icon: <MdOutlineConstruction/>,
        title: "Demolition services",
        info: "Including safe and controlled demolition of existing structures to clear the site for new construction",
        path: "/work/222"
    },
    {
        id: 3,
        icon: <GrUserWorker/>,
        title: "Plumbing services",
        info: "Including comprehensive range of plumbing services, including installation, repair, and maintenance.",
        path: "/work/333"
    },
    // {
    //     id: 4,
    //     icon: <GrUserWorker/>,
    //     title: "Heating and cooling services",
    //     info: "Including heating and cooling services to ensure that your home or business is comfortable year-round.",
    //     path: "/work/333"
    // },
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