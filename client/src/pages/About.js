import './styles/about.css'
import Work from "../components/Work";
import Values from "../components/Values";
import Reviews from "../components/Reviews";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const About = () => {
    return (
        <>
            <ScrollUpButton/>
            <Work/>
            <Values/>
            <Reviews/>
        </>
    )
}
export default About