import Logo from '../assets/post-04.jpeg'
import SectionHeader from "./SectionHeader";
import {GiCutDiamond} from 'react-icons/gi';
import {MdConstruction} from 'react-icons/md'
import Card from "./Card";


const values = [
    {
        id: 1,
        icon: <MdConstruction/>,
        title: "Value One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: <MdConstruction/>,
        title: "Value Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: <MdConstruction/>,
        title: "Value Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <MdConstruction/>,
        title: "Value Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]

const Values = () => {
    return (
        <section className={'values'}>
            <SectionHeader title={'Values'} className={'values__title'}/>
            <div className={'container values__container'}>
                <div className="values__left">
                    <div className="values__image">
                        <img src={Logo} alt="Logo image"/>
                    </div>
                </div>
                <div className="values__right">
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return (
                                    <Card key={id} className={'values__value'}>
                                        {/*<span>{icon}</span>*/}
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Values