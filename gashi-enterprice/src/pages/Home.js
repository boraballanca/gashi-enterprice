import logo08 from '../assets/logo-08.png'
import './styles/home.css'
import HomeHeader from '../components/HomeHeader'
import OurWork from "../components/OurWork";
import Values from '../components/Values'
import FAQs from '../components/FAQs'
import Reviews from "../components/Reviews";
const Home = () => {
    return (
        <>
            <HomeHeader/>
            <OurWork/>
            <Values/>
            <FAQs/>
            <Reviews/>
        </>
    )
}
export default Home