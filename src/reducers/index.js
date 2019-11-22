import { combineReducers } from 'redux';
import searchFilters from './searchFilters';
import passengers from './passengers';
import booking from './booking';
import cities from './cities';
import trains from './trains';
import train from './train';
import user from './user';
import auth from './auth';
import bag from './bag';
import app from './app';

export default combineReducers({
  searchFilters,
  passengers,
  booking,
  cities,
  trains,
  train,
  user,
  auth,
  bag,
  app
});
