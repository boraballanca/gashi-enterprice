import './styles/servicehome.css'
import ServicesForm from "../components/ServicesForm";
import ServiceInfo from "../components/ServiceInfo";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
const ServiceForm = () => {

    return (
        <>
            <ScrollUpButton/>
            <div className='container service_form__container'>
                <div className="service_info__wrapper">
                    <div className="service_info__left">
                        <ServiceInfo/>
                    </div>
                    <div className="service_info__right">
                        <ServicesForm/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceForm