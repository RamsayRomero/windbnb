export const changeAdultGuests = (value) => {
  return {
    type: 'CHANGE_ADULT_GUESTS',
    payload: value,
  };
};

export const changeChildGuests = (value) => {
  return {
    type: 'CHANGE_CHILD_GUESTS',
    payload: value,
  };
};

export const changeLocation = (location) => {
  return {
    type: 'LOCATION_CHANGED',
    payload: location,
  };
};
