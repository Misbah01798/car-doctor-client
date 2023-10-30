import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import { useEffect } from "react";
import { useState } from "react";
import BookRow from "./BookRow";


const Book = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5001/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    const handleDelete = id =>{
        const proceed = confirm('Are You sure you want delete');
        if(proceed){
            fetch(`http://localhost:5001/bookings/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount >0){
                    alert('Deleted Successfully')
                    const remaining = bookings.filter(booking => booking._id !==id);
                    setBookings(remaining)
                }
            })

        }
    }
    const handleBookingConfirm =id =>{
        fetch(`http://localhost:5001/bookings/${id}`, {
            method:'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                //update 
                const remaining = bookings.filter(booking => booking._id !== id);
                const update = bookings.find(booking => booking._id === id);
                update.status ='confirm';
                const newBookings =[update, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="">
                            <th></th>
                            <th>Name</th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookRow>)
                        }
                    </tbody>

                </table>
            </div>

        
    )
}

export default Book
