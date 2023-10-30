import { useContext } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider";


const Booking = () => {
    const service = useLoaderData();
    const { title, _id, img, price } = service;
    const {user} =useContext(AuthContext)
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const booking={
            customerName:name,
            email,
            date, service_id: _id,
            price: price,
            img,
            ServiceName:title
        }
        console.log(booking)
        fetch('http://localhost:5001/bookings', {
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body: JSON.stringify(booking)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('Service Book Successfully')
            }
        })
    }

    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Booking: {title}</h1>
            <div className="hero bg-base-200">
              
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleBookService} className="card-body">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered" required />
                            </div>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text" defaultValue={price} className="input input-bordered" required />
                            </div>
                           </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary btn-block" value='Order Confirm' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      
    )
}

export default Booking
