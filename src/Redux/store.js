import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import requirementReducer from './requirementRedux';
export default configureStore({
  reducer: {
    cart: cartReducer,
    requirement:requirementReducer,
  },
});