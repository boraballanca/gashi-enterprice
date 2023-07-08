import {SlLocationPin} from 'react-icons/sl'
import Card from "./Card";
const HomeLocation = () => {
    return (
        <>
            <div className="home__location">
                <div className="container home__location-container">
                    <div className="location__info">
                        <Card className={'location__card'}>
                            <div className={'location__card-left'}>
                                <span><SlLocationPin/></span>
                            </div>
                            <div className="location__card-right">
                                <h4>You can find us in</h4>
                                <p>Auburn Hills, Birmingham, Bloomfield Hills, Waterford, West Bloomfield , Ann Arbor,
                                    Troy , Sterling Heights, Royal Oak, Pontiac.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )

}
export default HomeLocation