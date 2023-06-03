import './styles/about.css'
import Work from "../components/Work";
import Values from "../components/Values";
import Reviews from "../components/Reviews";

//Make this just like the cards section
//create a json object to hold the storys and the pictures so that you can just map them into the page
const About = () => {
    return (
        <>
            <Work/>
            <Values/>
            <Reviews/>
        </>
    )
}
export default About