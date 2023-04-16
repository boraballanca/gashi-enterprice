import {Link} from 'react-router-dom'
import Gashi from '../assets/logo-01.png'
import Image2 from "../assets/logo-trial.PNG";

const HomeInfo = () => {
  return(
      <header className={'home__header'}>
          <div className="container home__header-container">
              <div className="home__header-bottom">
                  <div className="home__header-left">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum ducimus natus
                          voluptates!
                          Aut delectus inventore perspiciatis repellendus, veritatis vitae.
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Asperiores error explicabo odio ullam veniam?
                          Asperiores dolorem doloremque, est facere non officiis porro reprehenderit.
                          Aspernatur error exercitationem magni nulla quibusdam rerum!</p>
                  </div>
                  <div className="home__header-right">
                      <div className="home__header-logo">
                          <div className="home__header-image">
                              <img src={Gashi} alt="Header Background Image"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
  )
}
export default HomeInfo