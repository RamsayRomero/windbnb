import { combineReducers } from 'redux';

const initialGuests = {
  adults: 0,
  children: 0,
};

const initialLocation = 'Finland';

const guestReducer = (guests = initialGuests, action) => {
  switch (action.type) {
    case 'CHANGE_ADULT_GUESTS': {
      return {
        ...guests,
        adults: action.payload,
      };
    }
    case 'CHANGE_CHILD_GUESTS': {
      return {
        ...guests,
        children: action.payload,
      };
    }
    default:
      return guests;
  }
};

const locationReducer = (location = initialLocation, action) => {
  switch (action.type) {
    case 'LOCATION_CHANGED': {
      return action.payload;
    }
    default:
      return location;
  }
};

export default combineReducers({
  guests: guestReducer,
  location: locationReducer,
});
