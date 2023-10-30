import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlenderPhone, faCalendarCheck,  faStreetView } from '@fortawesome/free-solid-svg-icons'

const Section3 = () => {
    return (
        <div className="items-center justify-center  w-full mb-4 h-48">
            <div className="grid grid-cols-3  bg-black rounded-md h-full justify-evenly">

                <div className="rounded-lg bg-slate-800 flex items-center m-2 w-2/3">

                    <div className='pr-4'>
                        <FontAwesomeIcon className='text-orange-500 text-lg' icon={faCalendarCheck} />

                    </div>
                    <div className="text-white">
                        <p>We are open monday-friday</p>
                        <h1 className='text-2xl font-bold'>7:00 am - 9:00 pm</h1>
                    </div>

                </div>

                <div className="rounded-lg bg-slate-800 flex items-center m-2 w-2/3">

                    <div className='pr-4'>
                        <FontAwesomeIcon className='text-orange-500' icon={faBlenderPhone} />

                    </div>
                    <div className="text-white">
                        <p>Have a question?</p>
                        <h1 className='text-2xl font-bold'>+2546 251 2658</h1>
                    </div>

                </div>

                <div className="rounded-lg bg-slate-800 flex items-center m-2 w-2/3">

                    <div className='pr-4'>
                        <FontAwesomeIcon className='text-orange-500' icon={faStreetView} />

                    </div>
                    <div className="text-white">
                        <p>Need a repair? our address</p>
                        <h1 className='text-2xl font-bold'>Liza Street, New York</h1>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Section3
