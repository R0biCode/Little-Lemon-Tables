import { useReducer } from 'react';
import ReservationForm from './NestedComponents/ReservationComponent';
const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  };
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
      default:
        return state;
    }
  };
const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return(
        <>
        <div style={{justifyContent: 'center',display: 'flex', backgroundColor: '#F4CE14'}}>
        <h1 style={{color: '#FFF'}}>God I hate forms</h1>
        </div>
        <div className="FormWrapper">
            <ReservationForm availableTimes={availableTimes} dispatch={dispatch}  />
        </div>
        </>
    );
}

export default BookingPage;

/* I need to clarify exactly what is going on here so I don't forget later LMAO*/
/* Notion */