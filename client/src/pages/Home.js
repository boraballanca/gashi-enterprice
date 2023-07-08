import './styles/home.css'
import HomeHeader from '../components/HomeHeader'
import ConstructionMain from "../assets/log.jpg";
import Gashi from '../assets/logo-10.png'
import HomeInfo from "../components/HomeInfo";
import HomeServices from "../components/HomeServices";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import HomeLocation from "../components/HomeLocation";
import HomeNavigate from "../components/HomeNavigate";

const Home = () => {
    return (
        <>
            <ScrollUpButton/>
            <HomeHeader
                image={ConstructionMain}
                title={'Gashi Enterprise LLC'}
                content={'A young and dynamic company that specializes in providing residential construction and renovation services to clients in the United States.'}
            />
            <HomeInfo
                image={Gashi}
                title={'Full-service construction company'}
                content={'Gashi Enterprise LLC is a full-service construction\n' +
                    'company that specializes in providing a wide range of\n' +
                    'high-quality services to residential clients.\n' +
                    'Our services include painting, tile flooring, 3D architecture\n' +
                    'design, plumbing, heating, and cooling. ' +
                    'Our team of experienced professionals takes pride in delivering\n' +
                    'exceptional workmanship and attention to detail, ensuring that\n' +
                    'each project is completed on time, on budget, and to the highest\n' +
                    'standard.'}
            />
            <HomeServices/>
            <HomeLocation/>
            <HomeNavigate/>
        </>
    )
}
export default Home