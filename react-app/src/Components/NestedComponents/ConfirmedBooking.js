import CTAButton from "./CTAButton";
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const { date, guests, occasion, time } = location.state || {};

  return (
    <>
    <div className='ConfirmationWrapper'>
        <img src={require('../../Images/LittleLemonLogo.jpg')} alt="Little Lemon Logo" width="200px" />
      <h1>Booking has been confirmed!</h1>
        <h2>Date: {date}</h2>
        <h2>Number of people: {guests}</h2>
        <h2>Occasion: {occasion}</h2>
        <h2>Time: {time}</h2>
        <CTAButton text="Go back home" className="ChicagoButton" to="/"/>
    </div>
    </>
  );
};

export default ConfirmedBooking;
