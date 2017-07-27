const API_KEY = "";
const ROOT_URL = '';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function  fetchWaether() {
   return  {
      type: 'FETCH_WEATHER';
    };
}
