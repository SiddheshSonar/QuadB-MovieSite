import { React, useState } from 'react';
import NavB from '../navbar/NavB';
import '../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MovieIcon from '@mui/icons-material/Movie';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import GradeIcon from '@mui/icons-material/Grade';
import toast, { Toaster } from 'react-hot-toast';


const Summary = ({ film }) => {
    console.log(film);
    const content = film.show.summary;
    const genres = film.show.genres.join(', ');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const available = film.show.schedule.days.length > 0 && film.show.schedule.time.length > 0;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [numSeats, setNumSeats] = useState(1);
    const [paymentMode, setPaymentMode] = useState('Cash');
    const seatPrice = 100;
    const totalAmount = numSeats * seatPrice;
    const isFormValid = name && email && phone && numSeats && paymentMode;

    const incrementSeats = () => {
        setNumSeats(numSeats + 1);
    };

    const decrementSeats = () => {
        if (numSeats > 1) {
            setNumSeats(numSeats - 1);
        }
    };

    const handlePaymentModeChange = (event) => {
        setPaymentMode(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const payment = totalAmount;
        const seats = numSeats;
        const bookingDetails = {
            name,
            email,
            phone,
            seats,
            payment,
            paymentMode,
        };
        console.log(bookingDetails);
        toggle();
        localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
        toast.success('Booking Confirmed!');
      };

    const handleCancel = () => {
        toast.error('Booking Cancelled!');
        toggle();
    };

    return (
        <div>
            <NavB />
            <div className='summary-section'>
                <img className='summary-img' src={film.show.image.original} alt={film.show.name} />
                <div className='show-info'>
                    <div className='info-head'>
                        <h1 className='show-title'>{film.show.name}</h1>
                        {film.show.rating.average && <h6>Rating: {film.show.rating.average}<GradeIcon className='star-icon' /></h6>}
                    </div>
                    <div className='show-summary' dangerouslySetInnerHTML={{ __html: content }}></div>
                    <div className='info-foot'>
                        <p className='foot'>Language: {film.show.language}</p>
                        <p className='foot'>Genre: {genres}</p>
                    </div>
                    <div className='btn-container'>
                        <button className='btn btn-danger book-btn' onClick={toggle}><MovieIcon className='icon' />Book Tickets</button>
                    </div>
                </div>
                <div>
                    <Toaster/>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}><InfoIcon className='icon' />Booking Details</ModalHeader>
                        <ModalBody>
                            <div className='modal-body'>
                                <div className='modal-section'>
                                    <img className='modal-img' src={film.show.image.original} alt={film.show.name} />
                                    <div className='book-info'>
                                        <div className='book-head'>
                                            <h1 className='book-title'>{film.show.name}</h1>
                                        </div>
                                        <div className='book-foot'>
                                            <p className='foot'>Language: {film.show.language}</p>
                                            <p className='foot'>Genre: {genres}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='user-info'>
                                    {available ? (
                                        <div className='book-deets'>
                                            <div className='schedule'>
                                                <p className='sched'>Schedule:-</p>
                                                {<p className='days'>Days: {film.show.schedule.days.join(', ')}</p>}<p className='time'>Time: {film.show.schedule.time}</p>
                                            </div>
                                            <div className='user-deets'>
                                                <p className='deets-title'>Please Enter Your Details:-</p>
                                                <div className='form-deets'>
                                                <div className="form-group user-name">
                                                    <label htmlFor="name">Name:</label>
                                                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                                </div>
                                                <div className="form-group user-email">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                </div>
                                                <div className="form-group user-phone">
                                                    <label htmlFor="phone">Phone:</label>
                                                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                                </div>
                                                <div className="form-group user-seats">
                                                    <label htmlFor="seats">Number of Seats:</label>
                                                    <div className="seat-counter">
                                                        <button type="button" className="counter-btn" onClick={decrementSeats}>-</button>
                                                        <input className='seat-size' type="text" id="seats" name="seats" value={numSeats} readOnly />
                                                        <button type="button" className="counter-btn" onClick={incrementSeats}>+</button>
                                                    </div>
                                                </div>
                                                <div className='form-group user-amt'>
                                                    <label htmlFor="amount">Total Amount: {totalAmount}</label>
                                                </div>
                                                <div className="form-group user-pay">
                                                    <label htmlFor="payment">Payment Mode:</label>
                                                    <select id="payment" name="payment" value={paymentMode} onChange={handlePaymentModeChange}>
                                                        <option value="Cash">Cash</option>
                                                        <option value="Credit Card">Credit Card</option>
                                                        <option value="Debit Card">Debit Card</option>
                                                        <option value="PayPal">UPI</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (<p className='sched'>No Available Shows, Sorry!</p>)}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter className='modal-footer'>
                            <Button color="primary" disabled={!available || !isFormValid} onClick={handleSubmit}>
                                <ThumbUpAltIcon className='icon' />Confirm Booking
                            </Button>{' '}
                            <Button color="secondary" onClick={handleCancel}>
                                <CancelIcon className='icon' />Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Summary;
