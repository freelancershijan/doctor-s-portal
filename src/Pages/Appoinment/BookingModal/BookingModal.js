import { format } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selected }) => {
    const { name, slots } = treatment; // treatment is appointment options
    const date = format(selected, 'PP')
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone
        }

        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display success toast
        console.log(booking);
        setTreatment(null);
        toast.success('We have recived Your Appointment')
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-5">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className="input input-bordered input-secondary w-full my-1" />
                        <select name='slot' className="select select-success w-full my-1" required>
                            <option >Pick your Time</option>

                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-secondary w-full my-1" required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-secondary w-full my-1" required />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered input-secondary w-full my-1" required />
                        <br />
                        <input className='w-full btn btn-active mt-3' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;