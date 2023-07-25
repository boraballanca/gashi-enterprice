import Logo from '../assets/post-04.jpeg'
import SectionHeader from "./SectionHeader";
import Card from "./Card";
const values = [
    {
        id: 1,
        title: "Safety",
        desc: "Our team is properly trained and equipped to provide a safe working environment."
    },
    {
        id: 2,
        title: "Quality",
        desc: "We provide deliver high-quality workmanship and materials for every project."
    },
    {
        id: 3,
        title: "Customer Service",
        desc: "We prioritize clear communication, and take clients requests into close consideration"
    },
    {
        id: 4,
        title: "Integrity",
        desc: "We adhere to ethical standards, honest and transparent business deals."
    }
]
const Values = () => {
    return (
        <div className={'values'}>
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
                            values.map(({id, title, desc}) => {
                                return (
                                    <Card key={id} className={'values__value'}>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Values