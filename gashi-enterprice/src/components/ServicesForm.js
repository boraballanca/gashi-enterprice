// import '../pages/styles/servicehome.css'
import {useState} from 'react'
import ServiceLabel from "../components/ServiceLabel";
import SectionHeader from "./SectionHeader";

const ServicesForm = () => {
    const [checkboxes, setCheckboxes] = useState({
        remodeling: false,
        architecture: false,
        painting: false,
        interior: false,
        exterior:false,
        dry_wall: false,
        flooring: false,
        heating_cooling: false,
        plumbing: false,

        hardwood:false,
        laminate:false,
        vinyl:false,
        tile: false,
        concrete:false,
        bamboo:false,
    })
    const handleCheckboxChange = (checkboxName) => {
        setCheckboxes((prevState) => ({
            ...prevState,
            [checkboxName]: !prevState[checkboxName],
        }));
    };

    return (
        <>
            <div></div>
            <SectionHeader title={'Our Work'}
                           // preview={'Request more information about our services'}
                           className={'form__header'}/>

            <form className={'form__content'}
            >
                <div className="user_info">
                    <input type="text" name={'user_name'} placeholder={'Name'}/>
                    <input type="email" name={'user_email'} placeholder={'Email'}/>
                </div>

                <h4>Select a service</h4>
                <div className={'form__services'}>
                    <label htmlFor={'remodeling'}>
                        <input
                            type="checkbox"
                            id={'remodeling'}
                            name={'remodeling'}
                            checked={checkboxes.remodeling}
                            onChange={() => {
                                handleCheckboxChange('remodeling')
                            }}
                        />
                        Remodeling
                    </label>
                    <label htmlFor={'painting'}>
                        <input
                            type="checkbox"
                            id={'painting'}
                            name={'Painting'}
                            checked={checkboxes.painting}
                            onChange={() => {
                                handleCheckboxChange('painting')
                            }}
                        />
                        Painting
                    </label>
                    <label htmlFor={'interior'}>
                    <input
                        type="checkbox"
                        id={'interior'}
                        name={'interior'}
                        checked={checkboxes.interior}
                        onChange={() => {
                            handleCheckboxChange('interior')
                        }}
                    />
                    Interior Design
                </label>
                    <label htmlFor={'exterior'}>
                    <input
                        type="checkbox"
                        id={'exterior'}
                        name={'exterior'}
                        checked={checkboxes.exterior}
                        onChange={() => {
                            handleCheckboxChange('exterior')
                        }}
                    />
                    Exterior Design
                </label>
                    <label htmlFor={'architecture'}>
                        <input
                            type="checkbox"
                            id={'architecture'}
                            name={'architecture'}
                            checked={checkboxes.architecture}
                            onChange={() => {
                                handleCheckboxChange('architecture')
                            }}
                        />
                        3D Architecture Design
                    </label>


                    <label htmlFor={'dry_wall'}>
                        <input
                            type="checkbox"
                            id={'dry_wall'}
                            name={'dry_wall'}
                            checked={checkboxes.dry_wall}
                            onChange={() => {
                                handleCheckboxChange('dry_wall')
                            }}
                        />
                        Dry Wall Repair
                    </label>
                    <label htmlFor={'flooring'}>
                        <input
                            type="checkbox"
                            id={'flooring'}
                            name={'flooring'}
                            checked={checkboxes.flooring}
                            onChange={() => {
                                handleCheckboxChange('flooring')
                            }}
                        />
                        Flooring Installation
                    </label>
                    <label htmlFor={'heating_cooling'}>
                        <input
                            type="checkbox"
                            id={'heating_cooling'}
                            name={'heating_cooling'}
                            checked={checkboxes.heating_cooling}
                            onChange={() => {
                                handleCheckboxChange('heating_cooling')
                            }}
                        />
                        Heating & Cooling
                    </label>
                    <label htmlFor={'plumbing'}>
                        <input
                            type="checkbox"
                            id={'plumbing'}
                            name={'plumbing'}
                            checked={checkboxes.plumbing}
                            onChange={() => {
                                handleCheckboxChange('plumbing')
                            }}

                        />
                        Plumbing
                    </label>


                </div>
                {(checkboxes.painting || checkboxes.remodeling || checkboxes.dry_wall ||checkboxes.interior) && (
                    <div className={'options'}>
                        <label htmlFor="">How many rooms for ?</label>
                        <input type="number" id={'nr_rooms'} min={0} max={10}/>
                    </div>
                )}
                {(checkboxes.flooring) && (
                    <div className={'options'}>
                        <label htmlFor="">What type of flooring?</label>

                        <label htmlFor={'hardwood'}>
                            <input
                                type="checkbox"
                                id={'hardwood'}
                                name={'hardwood'}
                                checked={checkboxes.hardwood}
                                onChange={() => {
                                    handleCheckboxChange('hardwood')
                                }}
                            />
                            Hardwood
                        </label>

                        <label htmlFor={'laminate'}>
                            <input
                                type="checkbox"
                                id={'laminate'}
                                name={'laminate'}
                                checked={checkboxes.laminate}
                                onChange={() => {
                                    handleCheckboxChange('laminate')
                                }}
                            />
                            Laminate
                        </label>

                        <label htmlFor={'vinyl'}>
                            <input
                                type="checkbox"
                                id={'vinyl'}
                                name={'vinyl'}
                                checked={checkboxes.vinyl}
                                onChange={() => {
                                    handleCheckboxChange('vinyl')
                                }}
                            />
                            Vinyl
                        </label>

                        <label htmlFor={'tile'}>
                            <input
                                type="checkbox"
                                id={'tile'}
                                name={'tile'}
                                checked={checkboxes.tile}
                                onChange={() => {
                                    handleCheckboxChange('tile')
                                }}
                            />
                            Tile
                        </label>

                        <label htmlFor={'concrete'}>
                            <input
                                type="checkbox"
                                id={'concrete'}
                                name={'concrete'}
                                checked={checkboxes.concrete}
                                onChange={() => {
                                    handleCheckboxChange('concrete')
                                }}
                            />
                            Concrete
                        </label>

                        <label htmlFor={'bamboo'}>
                            <input
                                type="checkbox"
                                id={'bamboo'}
                                name={'bamboo'}
                                checked={checkboxes.bamboo}
                                onChange={() => {
                                    handleCheckboxChange('bamboo')
                                }}
                            />
                            Bamboo
                        </label>
                    </div>
                )}

                <label>Message</label>
                <textarea name="message" cols="30" rows="5" placeholder={'Please give us more details!'}/>
                <input type="submit" value={'Send'}/>
            </form>
        </>
        // </div>

    )
}
export default ServicesForm