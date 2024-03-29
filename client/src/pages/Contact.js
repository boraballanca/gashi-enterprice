import './styles/contact.css'
import SectionHeader from "../components/SectionHeader";
import {MdEmail, MdLocationOn} from "react-icons/md";
import {FaFacebookSquare} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import Card from "../components/Card";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const contacts = [
    {
        id: 1,
        icon: <MdEmail/>,
        title: "Email",
        info: "info@gashienterprise.com"
    },
    {
        id: 2,
        icon: <FaFacebookSquare/>,
        title: "Facebook",
        link: 'https://www.facebook.com/GashiEnterprise?mibextid=LQQJ4d',
        info: "Gashi Enterprise"
    },
    {
        id: 3,
        icon: <RiInstagramFill/>,
        title: "Instagram",
        link: 'https://instagram.com/gashi_enterprise?igshid=YmMyMTA2M2Y=',
        info: "gashi_enterprise"
    },
    {
        id: 4,
        icon: <MdLocationOn/>,
        title: "Address",
        info: "Michigan"
    }
]
const Contact = () => {
    return (
        <>
            <ScrollUpButton/>
            <div className="container contact__container">
                <div className="contact__header">
                    <SectionHeader className={'contact__head-title'} title={'Contact Us'}/>
                </div>
                <div className="contact__details">
                    {
                        contacts.map(({id, icon, title, link, info}) => {
                                return (

                                    <Card key={id} className={'contact__card'}>
                                        <div className={'contact__card-left'}>
                                            <span>{icon}</span>
                                        </div>
                                        <div className="contact__card-right">
                                            <h4>{title}</h4>
                                            <a href={link}>{info}</a>
                                        </div>
                                    </Card>
                                )
                            }
                        )
                    }
                </div>
            </div>

        </>
    )
}
export default Contact