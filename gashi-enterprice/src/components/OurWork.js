import {MdConstruction} from 'react-icons/md'
import {AiFillCaretRight} from "react-icons/ai";
import SectionHeader from "./SectionHeader";
import Card from './Card'
import {Link} from "react-router-dom";


export const works = [
    {
        id: 1,
        icon: <MdConstruction/>,
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/work/111"
    },
    {
        id: 2,
        icon: <MdConstruction/>,
        title: "Program Two",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/work/222"
    },
    {
        id: 3,
        icon: <MdConstruction/>,
        title: "Program Three",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/work/333"
    },
    {
        id: 4,
        icon: <MdConstruction/>,
        title: "Program Four",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/work/444"
    }
]

const OurWork = () => {
  return(
      <section className='work'>
          <div className="container work_container">
              <SectionHeader icon={<MdConstruction/>} title={'Our Work'}/>
              <div className="work__wrapper">
                  {works.map(({id, icon,title,info,path})=>{
                      return(
                          <Card className={'our__work'} key={id}>
                              <span>{icon}</span>
                              <h4>{title}</h4>
                              <small>{info}</small>
                              <Link to={path} className={'btn sm'}> Learn More <AiFillCaretRight/></Link>
                          </Card>
                      )
                  })}
              </div>
          </div>

      </section>
  )
}

export default OurWork