import { FETCH_WEATHER } from '../actions/index';

export default function(state = null, action) {

  switch (action.type) {
   case FETCH_WEATHER:
      //state.push(action.payload.data);  This will manipulate existing data which is wrong.
      //return state.concat([action.payload.data]); //this is one way of doing.
       return [ action.payload.data, ...state ]; // [cist, city, city] NOT [city, [ city, city] ]
  }
  return state;
}

//NOTE: Never manipulate state in redux.
