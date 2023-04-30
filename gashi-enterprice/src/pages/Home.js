import './styles/home.css'
import HomeHeader from '../components/HomeHeader'
import Construction from "../assets/construction-03.jpeg";
import Gashi from '../assets/logo-10.png'
import HomeInfo from "../components/HomeInfo";
import HomeServices from "../components/HomeServices";

const Home = () => {
    return (
        <>
            <HomeHeader
                image={Construction}
                title={'A full-service construction company'}
                content={'With a team of professionals, we offer painting, tile flooring, 3D architecture design, plumbing, heating and cooling services'}
            />
            <HomeInfo
                image={Gashi}
                title={'Gashi Enterprise LLC'}
                content={'Gashi Enterprise LLC is a full-service construction\n' +
                    'company that specializes in providing a wide range of\n' +
                    'high-quality services to residential and commercial clients.\n' +
                    'Our services include painting, tile flooring, 3D architecture\n' +
                    'design, plumbing, heating, and cooling. ' +
                    'Our team of experienced professionals takes pride in delivering\n' +
                    'exceptional workmanship and attention to detail, ensuring that\n' +
                    'each project is completed on time, on budget, and to the highest\n' +
                    'standard.'}
            />
            <HomeServices/>

        </>
    )
}
export default Home