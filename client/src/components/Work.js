import {MdOutlinePlumbing, MdOutlineConstruction, MdOutlineArchitecture} from 'react-icons/md'
import {AiFillFormatPainter,} from 'react-icons/ai'
import {FaCouch} from 'react-icons/fa'

import {GrUserWorker} from 'react-icons/gr'
import {GiFloorPolisher,GiPencilRuler,GiStoneWall,GiHeatHaze} from "react-icons/gi";
import SectionHeader from "./SectionHeader";
import Card from './Card'
import {Link} from "react-router-dom";

export const works = [
    {
        id: 1,
        icon: <GiPencilRuler/>,
        title: "Remodeling  ",
        info: "Including heating and cooling services to ensure that your home or business is comfortable year-round.",
        path: "/work/111"
    },
    {
        id: 2,
        icon: <MdOutlineArchitecture/>,
        title: "3D architecture design services",
        info: "Including customized design that maximized the use of space while incorporating the client's brand.",
        path: "/work/444"
    },
    {
        id: 3,
        icon: <AiFillFormatPainter/>,
        title: "Painting",
        info: "Including comprehensive range of plumbing services, including installation, repair, and maintenance.",
        path: "/work/333"
    },
    {
        id: 4,
        icon: <FaCouch/>,
        title: "Interior and exterior design",
        info: "Including customized design that maximized the use of space while incorporating the client's brand.",
        path: "/work/444"
    },
    {
        id: 5,
        icon: <GiStoneWall/>,
        title: "Dry wall installation & repair",
        info: "Including heating and cooling services to ensure that your home or business is comfortable year-round.",
        path: "/work/111"
    },
    {
        id: 6,
        icon: <GiFloorPolisher/>,
        title: "Tiles & Flooring",
        info: "Including safe and controlled demolition of existing structures to clear the site for new construction",
        path: "/work/222"
    },
    {
        id: 7,
        icon: <GiHeatHaze/>,
        title: "Heating & Cooling services",
        info: "Including comprehensive range of plumbing services, including installation, repair, and maintenance.",
        path: "/work/333"
    },
    {
        id: 8,
        icon: <MdOutlinePlumbing/>,
        title: "Plumbing services",
        info: "Including customized design that maximized the use of space while incorporating the client's brand.",
        path: "/work/444"
    },
]

const Work = () => {
    return (
        <div className='work'>
            <div className="container work_container">
                <SectionHeader className={'work__header'}
                               title={'Services'}
                               preview={'High Quality Construction Solutions'}/>
                <div className="work__wrapper">
                    {works.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className={'our__work'} key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Work