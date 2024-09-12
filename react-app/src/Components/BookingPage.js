import { useReducer } from 'react';
import ReservationForm from './NestedComponents/ReservationComponent';
import { fetchAPI} from './NestedComponents/API/api.js'; /* For some reason it didn't work to implement the API, whatever I did, so I just imported it locally. I even tried using the global object "window" to maybe try and do something, but nothing worked. */
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
  };
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return fetchAPI(new Date(action.date));
      default:
        return state;
    }
  };
const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return(
        <>
        <div style={{justifyContent: 'center',display: 'flex', backgroundColor: '#F4CE14'}}>
        <h1 style={{color: '#FFF'}}>Reserve a table</h1>
        </div>
        <div className="FormWrapper">
            <ReservationForm availableTimes={availableTimes} dispatch={dispatch}  />
        </div>
        </>
    );
}

export default BookingPage;