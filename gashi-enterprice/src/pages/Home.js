import logo08 from '../assets/logo-08.png'
import './styles/home.css'
import HomeHeader from '../components/HomeHeader'
import Construction from "../assets/construction-03.jpeg";
import HomeInfo from "../components/HomeInfo";
import HomeServices from "../components/HomeServices";
const Home = () => {
    return (
        <>
            <HomeHeader
                image={Construction}
                title={'A leading Developer of a Grade Commercial & Residential projects'}
                content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid esse, nihil non quia quibusdam sint totam. Dolorum error rerum ullam.'}
            />
            <HomeInfo/>
            <HomeServices/>

        </>
    )
}
export default Home