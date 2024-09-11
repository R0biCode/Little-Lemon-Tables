import { useState } from "react";

const ReservationForm = ({availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', date: newDate});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted.");
  };

  return (
    <form style={{maxWidth: '200px', gap: '20px' }} className="FormCustomization" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map(time => (
          <option key={time}>{time}</option>
        ))};
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        placeholder="1" 
        min="1" 
        max="10" 
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default ReservationForm;