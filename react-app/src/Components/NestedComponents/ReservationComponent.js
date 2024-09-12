import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './API/api';

const ReservationForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [time, setTime] = useState(availableTimes[0]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { date, guests, occasion, time };
    if(submitAPI(formData)===true){
      navigate('/confirmed-booking', { state: formData });
    };
  };

  return (
    <form style={{maxWidth: '200px', gap: '20px' }} className="FormCustomization" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        min="1" 
        max="10" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default ReservationForm;
