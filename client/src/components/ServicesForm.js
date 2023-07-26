import {useState} from 'react'
import SectionHeader from "./SectionHeader";
import axios from 'axios'

const ServicesForm = () => {
    const [recipient_email, setEmail] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerNumber, setCustomerNumber] = useState('');
    const [service, setService] = useState([]);
    const [rooms, setRooms] = useState(0);
    const [flooring, setFlooring] = useState([]);
    const [cleaning, setCleaning] = useState([]);
    const [message, setMessages] = useState('');
    function sendEmail() {
        if (recipient_email && customerName && customerNumber) {
            axios.post('/send_email', {
                recipient_email,
                customerName,
                customerNumber,
                service,
                rooms,
                flooring,
                cleaning,
                message
            }).then(() => alert('Email sent successfully!'))
                .catch(() => alert('Something went wrong, check again!'))
            return;
        }
        return alert('Please fill in all required fields!')
    }
    const [checkboxes, setCheckboxes] = useState({
        remodeling: false,
        architecture: false,
        painting: false,
        interior: false,
        exterior: false,
        dry_wall: false,
        flooring: false,
        heating_cooling: false,
        plumbing: false,
        cleaning: false,
        hardwood: false,
        laminate: false,
        vinyl: false,
        tile: false,
        concrete: false,
        bamboo: false,
        residential: false,
        commercial: false,
    })
    const handleCheckboxChange = (checkboxName) => {
        setCheckboxes((prevState) => ({
            ...prevState,
            [checkboxName]: !prevState[checkboxName],
        }));
    };
    const handleServices = (checked, serviceName) => {
        if (checked) {
            setService((prevState) => [...prevState, serviceName])
        } else {
            setService((prevState) => prevState.filter((item) => item !== serviceName))
        }
    };
    const handleFlooring = (checked, flooringName) => {
        if (checked) {
            setFlooring((prevState) => [...prevState, flooringName])
        } else {
            setFlooring((prevState) => prevState.filter((item) => item !== flooringName))
        }
    };
    const handleCleaning = (checked, cleaning) => {
        if (checked) {
            setCleaning((prevState) => [...prevState, cleaning])
        } else {
            setCleaning((prevState) => prevState.filter((item) => item !== cleaning))
        }
    };
    return (
        <>
            <div></div>
            <SectionHeader title={'Our Work'}
                           className={'form__header'}/>

            <form className={'form__content'}>
                <div className="user_info">
                    <label htmlFor="name">First & Last Name* :
                        <input type="text" name={'user_name'} required
                               onChange={(e) => setCustomerName(e.target.value)}/>
                    </label>
                    <label htmlFor="number"> Phone number* :
                        <input type="text" name={'phone_number'} required
                               onChange={(e) => setCustomerNumber(e.target.value)}/>
                    </label>
                    <label htmlFor="email"> Email address* :
                        <input type="email" name={'user_email'} required
                               onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                </div>

                <h4>Select a service</h4>
                <div className={'form__services'}>
                    <label htmlFor={'remodeling'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'remodeling'}
                            name={'remodeling'}
                            checked={checkboxes.remodeling}
                            onChange={() => {
                                handleCheckboxChange('remodeling')
                                handleServices(!checkboxes.remodeling, 'Remodeling')
                            }}

                        />
                        Remodeling
                    </label>
                    <label htmlFor={'painting'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'painting'}
                            name={'Painting'}
                            checked={checkboxes.painting}
                            onChange={() => {
                                handleCheckboxChange('painting')
                                handleServices(!checkboxes.painting, 'Painting')
                            }}
                        />
                        Painting
                    </label>
                    <label htmlFor={'interior'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'interior'}
                            name={'interior'}
                            checked={checkboxes.interior}
                            onChange={() => {
                                handleCheckboxChange('interior')
                                handleServices(!checkboxes.interior, 'Interior Design')
                            }}
                        />
                        Interior Design
                    </label>
                    <label htmlFor={'exterior'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'exterior'}
                            name={'exterior'}
                            checked={checkboxes.exterior}
                            onChange={() => {
                                handleCheckboxChange('exterior')
                                handleServices(!checkboxes.exterior, 'Exterior Design')
                            }}
                        />
                        Exterior Design
                    </label>
                    <label htmlFor={'architecture'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'architecture'}
                            name={'architecture'}
                            checked={checkboxes.architecture}
                            onChange={() => {
                                handleCheckboxChange('architecture')
                                handleServices(!checkboxes.architecture, '3D Architecture Design')
                            }}
                        />
                        3D Architecture Design
                    </label>
                    <label htmlFor={'dry_wall'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'dry_wall'}
                            name={'dry_wall'}
                            checked={checkboxes.dry_wall}
                            onChange={() => {
                                handleCheckboxChange('dry_wall')
                                handleServices(!checkboxes.dry_wall, 'Drywall Repair')
                            }}
                        />
                        Dry Wall Repair
                    </label>
                    <label htmlFor={'flooring'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'flooring'}
                            name={'flooring'}
                            checked={checkboxes.flooring}
                            onChange={() => {
                                handleCheckboxChange('flooring')
                                handleServices(!checkboxes.flooring, 'Flooring Installation')
                            }}
                        />
                        Flooring Installation
                    </label>
                    <label htmlFor={'heating_cooling'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'heating_cooling'}
                            name={'heating_cooling'}
                            checked={checkboxes.heating_cooling}
                            onChange={() => {
                                handleCheckboxChange('heating_cooling')
                                handleServices(!checkboxes.heating_cooling, 'Heating & Cooling')
                            }}
                        />
                        Heating & Cooling
                    </label>
                    <label htmlFor={'plumbing'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'plumbing'}
                            name={'plumbing'}
                            checked={checkboxes.plumbing}
                            onChange={() => {
                                handleCheckboxChange('plumbing')
                                handleServices(!checkboxes.plumbing, 'Plumbing')
                            }}

                        />
                        Plumbing
                    </label>
                    <label htmlFor={'cleaning'} className={'main_options'}>
                        <input
                            type="checkbox"
                            id={'cleaning'}
                            name={'cleaning'}
                            checked={checkboxes.cleaning}
                            onChange={() => {
                                handleCheckboxChange('cleaning')
                                handleServices(!checkboxes.cleaning, 'Cleaning Service')
                            }}

                        />
                        Cleaning Service
                    </label>
                </div>
                {(checkboxes.painting || checkboxes.remodeling || checkboxes.dry_wall || checkboxes.interior) && (
                    <div className={'options'} className={'room_options'}>
                        <label htmlFor="">How many rooms for ?
                            <input type="number" id={'nr_rooms'} min={0} max={10} onChange={(e) => {
                                setRooms(e.target.valueAsNumber)
                                console.log(rooms)
                            }}/> </label>
                    </div>
                )}
                {(checkboxes.flooring) && (
                    <>
                        <h4>What type of flooring?</h4>
                        <div className={'options'}>
                            <label htmlFor={'hardwood'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'hardwood'}
                                    name={'hardwood'}
                                    checked={checkboxes.hardwood}
                                    onChange={() => {
                                        handleCheckboxChange('hardwood')
                                        handleFlooring(!checkboxes.hardwood, 'Hardwood')
                                    }}
                                />
                                Hardwood
                            </label>

                            <label htmlFor={'laminate'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'laminate'}
                                    name={'laminate'}
                                    checked={checkboxes.laminate}
                                    onChange={() => {
                                        handleCheckboxChange('laminate')
                                        handleFlooring(!checkboxes.laminate, 'Laminate')
                                    }}
                                />
                                Laminate
                            </label>

                            <label htmlFor={'vinyl'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'vinyl'}
                                    name={'vinyl'}
                                    checked={checkboxes.vinyl}
                                    onChange={() => {
                                        handleCheckboxChange('vinyl')
                                        handleFlooring(!checkboxes.vinyl, 'Vinyl')
                                    }}
                                />
                                Vinyl
                            </label>

                            <label htmlFor={'tile'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'tile'}
                                    name={'tile'}
                                    checked={checkboxes.tile}
                                    onChange={() => {
                                        handleCheckboxChange('tile')
                                        handleFlooring(!checkboxes.tile, 'Tile')
                                    }}
                                />
                                Tile
                            </label>

                            <label htmlFor={'concrete'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'concrete'}
                                    name={'concrete'}
                                    checked={checkboxes.concrete}
                                    onChange={() => {
                                        handleCheckboxChange('concrete')
                                        handleFlooring(!checkboxes.concrete, 'Concrete')
                                    }}
                                />
                                Concrete
                            </label>

                            <label htmlFor={'bamboo'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'bamboo'}
                                    name={'bamboo'}
                                    checked={checkboxes.bamboo}
                                    onChange={() => {
                                        handleCheckboxChange('bamboo')
                                        handleFlooring(!checkboxes.bamboo, 'Bamboo')
                                    }}
                                />
                                Bamboo
                            </label>
                        </div>
                    </>
                )}

                {(checkboxes.cleaning) && (
                    <>
                        <h4>What type of cleaning service?</h4>
                        <div className="options">
                            <label htmlFor={'residential'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'residential'}
                                    name={'residential'}
                                    checked={checkboxes.residential}
                                    onChange={() => {
                                        handleCheckboxChange('residential')
                                        handleCleaning(!checkboxes.residential, 'Residential')
                                    }}
                                />
                                Residential
                            </label>
                            <label htmlFor={'commercial'} className={'other_options'}>
                                <input
                                    type="checkbox"
                                    id={'commercial'}
                                    name={'commercial'}
                                    checked={checkboxes.commercial}
                                    onChange={() => {
                                        handleCheckboxChange('commercial')
                                        handleCleaning(!checkboxes.commercial, 'Commercial')
                                    }}
                                />
                                Commercial
                            </label>
                        </div>
                    </>
                )}
                <label>Message</label>
                <textarea name="message" cols="30" rows="5" placeholder={'Please give us more details!'}
                          onChange={(e) => setMessages(e.target.value)}/>
                <input type="submit" value={'Send'} onClick={() => sendEmail()}/>
            </form>
        </>
    )
}
export default ServicesForm