import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
// import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    // user: userReducer,
    // other reducers
  }
});

export default store;
