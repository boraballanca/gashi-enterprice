import './styles/servicehome.css'
import {useState} from 'react'
import ServiceLabel from "../components/ServiceLabel";
import logo from "../assets/logo-11.png";
import ServicesForm from "../components/ServicesForm";
import Card from "../components/Card";
import {BsTelephone} from "react-icons/bs";
import ServiceInfo from "../components/ServiceInfo";

const ServiceForm = () => {

    return (
        <div className='container service_form__container' >
            <div className="service_info__wrapper">
                <div className="service_info__left" >
                    <ServiceInfo/>
                </div>
                <div className="service_info__right">
                    <ServicesForm/>
                </div>
            </div>
        </div>
    )
}
export default ServiceForm