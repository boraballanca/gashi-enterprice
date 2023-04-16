import {Link} from 'react-router-dom'
import Gashi from '../assets/logo-01.png'
import Image2 from "../assets/logo-trial.PNG";

const HomeHeader = () => {
    return (

        <div className={'home__header'}>
            <div className="container home__header-container">
                <div className="home__header-top">
                    <h2>Gashi Enterprise</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum ducimus natus!</p>
                    <Link to={'/about'} className={'home__header-btn'}>More about us</Link>
                    <img className={'top__header-image'} src={Image2} alt="This needs to be replaced"/>
                </div>



            </div>
        </div>

    )
}
export default HomeHeader

