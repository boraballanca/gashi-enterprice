import AboutHeader from "../components/AboutHeader";
import './styles/about.css'
import Image1 from '../assets/logo-01.png'
import Image2 from '../assets/logo-03.png'
import Image3 from '../assets/logo-08.png'

//Make this just like the cards section
//create a json object to hold the storys and the pictures so that you can just map them into the page
const About = () => {
    return (
        <>
            <AboutHeader title={'About Us'} image={Image2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum ducimus natus voluptates!
                Aut delectus inventore perspiciatis repellendus, veritatis vitae.
            </AboutHeader>
            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={Image1} alt="Our Story Image"/>
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam cupiditate odit sit? Aliquid, animi cumque cupiditate,
                            dignissimos earum enim error eveniet fuga inventore ipsum sit
                            soluta tempora unde vero voluptatem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aliquid amet architecto distinctio et facere, fugit iure perspiciatis qui vitae?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A beatae, deleniti dicta doloremque eius est ex illum laudantium natus
                            obcaecati officia placeat porro reiciendis, tempora, ut!
                            Commodi corporis delectus in, ipsam laboriosam maiores modi nihil
                            placeat quae repellendus, reprehenderit temporibus.
                        </p>
                    </div>
                </div>
            </section>
            <section className="about__vision">
                <div className="container about__vision-container">

                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam cupiditate odit sit? Aliquid, animi cumque cupiditate,
                            dignissimos earum enim error eveniet fuga inventore ipsum sit
                            soluta tempora unde vero voluptatem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aliquid amet architecto distinctio et facere, fugit iure perspiciatis qui vitae?
                        </p>
                    </div>
                    <div className="about__section-image">
                        <img src={Image2} alt="Our Vision Image"/>
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={Image2} alt="Our Mission Image"/>
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam cupiditate odit sit? Aliquid, animi cumque cupiditate,
                            dignissimos earum enim error eveniet fuga inventore ipsum sit
                            soluta tempora unde vero voluptatem?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aliquid amet architecto distinctio et facere, fugit iure perspiciatis qui vitae?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A beatae, deleniti dicta doloremque eius est ex illum laudantium natus
                            obcaecati officia placeat porro reiciendis, tempora, ut!
                            Commodi corporis delectus in, ipsam laboriosam maiores modi nihil
                            placeat quae repellendus, reprehenderit temporibus.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About