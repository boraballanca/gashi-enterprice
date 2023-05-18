import {BsTelephone} from "react-icons/bs";
import Card from "./Card";
import logo from "../assets/logo-11.png";

const ServiceInfo = () => {
    return (
        <div style={{backgroundImage: `url(${logo})`,backgroundRepeat:"no-repeat",backgroundSize:"20rem",backgroundPositionX:'1rem'}}>
            <Card className={'service_info-card'}>
                <div className="quick-info">
                    <div className="location-info">
                        <h3>Our location</h3>
                        <p>Michigan, United States</p>
                    </div>
                    <div className="contact-info">
                        <h3>Quick contact</h3>
                        <p>Email: business@gashienterprise.com</p>
                    </div>
                </div>
                <div className="get-back-info">
                    <p>If you want to get immediate information about our services, please select a service
                        and give us more insights.
                        We will get back to you within 24 hours, or call us everyday from 9:00AM-6:00PM</p>
                    <h3><BsTelephone/> +1 23 456 789</h3>
                </div>
            </Card>
        </div>
    )
}
export default ServiceInfo