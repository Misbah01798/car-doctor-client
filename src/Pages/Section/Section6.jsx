import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock, faHeadphonesSimple, faPeopleGroup, faScrewdriverWrench, faShieldHeart } from '@fortawesome/free-solid-svg-icons'

const Section6 = () => {
    return (
        <div>

            <div className="text-center">
                <h3 className="text-2xl font-bold text-red-500">Core Features</h3>
                <h3 className="text-4xl font-bold">Why Choose Us</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised  <br /> words which don't look even slightly believable. </p>

            </div>

            <div className="items-center text-center w-full mb-4 h-48">
                <div className="grid grid-cols-6 text-center mt-6 bg-white rounded-md h-full justify-evenly">

                    <div className="rounded-lg bg-slate-200 text-center h-40 pt-7 w-40">
                            <FontAwesomeIcon className='text-orange-500 text-5xl' icon={faPeopleGroup} />
                            <h1 className='text-md font-bold'>Expert Team</h1>
                    </div>
                    <div className="rounded-lg bg-slate-200 text-center h-40 pt-7 w-40">
                            <FontAwesomeIcon className='text-orange-500 text-5xl' icon={faClock} />
                            <h1 className='text-md font-bold'>Timely Delivery</h1>
                    </div>
                    <div className="rounded-lg bg-slate-200 text-center h-40 pt-7 w-40">
                            <FontAwesomeIcon className='text-orange-500 text-5xl' icon={faHeadphonesSimple} />
                            <h1 className='text-md font-bold'>24/7 Support</h1>
                    </div>
                    
                    <div className="rounded-lg bg-slate-200 text-center h-40 pt-7 w-40">
                            <FontAwesomeIcon className='text-orange-500 text-5xl' icon={faScrewdriverWrench} />
                            <h1 className='text-md font-bold'>Best Equipment</h1>
                    </div>
                    <div className="rounded-lg bg-slate-200 text-center h-40 pt-7 w-40">
                            <FontAwesomeIcon className='text-orange-500 text-5xl' icon={faShieldHeart} />
                            <h1 className='text-md font-bold'>100% Guranty</h1>
                    </div>
                    <div className="rounded-lg bg-slate-200 text-center h-40 pt-7 w-40">
                            <FontAwesomeIcon className='text-orange-500 text-5xl' icon={faPeopleGroup} />
                            <h1 className='text-md font-bold'>Timely Delivery</h1>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default Section6
