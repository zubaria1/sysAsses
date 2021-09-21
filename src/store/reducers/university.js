// import { TOGGLE_FAVORITE } from '../actions/meals';



const initialState = {
  universityList: [],
  countryList: []
};

export const universityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "initialData": {
      return {...state, universityList: [...action.payload]};
    }
    case "contryData": {
      return {...state, countryList: [...action.payload]};
    }
    default:
      return state;
  }
};
