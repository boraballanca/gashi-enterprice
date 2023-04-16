
import './styles/about.css'
import Image1 from '../assets/logo-01.png'
import Image2 from '../assets/logo-03.png'
import Image3 from '../assets/logo-08.png'
import OurWork from "../components/OurWork";
import Values from "../components/Values";
import Reviews from "../components/Reviews";

//Make this just like the cards section
//create a json object to hold the storys and the pictures so that you can just map them into the page
const About = () => {
    return (
        <>
            <OurWork/>
            <Values/>
            <Reviews/>
        </>
    )
}
export default About