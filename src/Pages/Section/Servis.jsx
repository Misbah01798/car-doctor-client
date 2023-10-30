import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Servis = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div>
            <div className="card card-compact w-96 h-96 space-y-8 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className="card-actions flex">
                        <p className='text-orange-500'>Price: {price}</p>
                    <Link to={`/booking/${_id}`}><FontAwesomeIcon className='text-orange-500' icon={faArrowRight} /></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Servis
