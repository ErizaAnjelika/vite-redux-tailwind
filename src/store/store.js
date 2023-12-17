import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/counterSlice';
import modalReducer from '../reducer/modalSlice';
import toggleReducer from '../reducer/darkModeSlice';
import todosReducer from '../reducer/todoSlice';
import todosByIdReducer from '../reducer/todoDinamicSlice';
import registerUserReducer from '../reducer/registerSlice';

//custom midleware to save token
const saveTokenMiddlleware = () => (next) => (action) => {
  //check mana action type yang mau di eksekusi
  if (action.type == 'register/registerUser/fulfilled') {
    const response = action.payload;
    const token = response?.token;
    //save token ke local storage
    console.log('mindleware response', response);
    console.log('mindleware token', token);

    //save token to localstorage
    localStorage.setItem('token', token);
  }
  //kalau misal action type loading
  if (action.type === 'register/registerUser/pending') {
    //do something
  }
  next(action);
};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    toggle: toggleReducer,
    todos: todosReducer,
    todosById: todosByIdReducer,
    register: registerUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //serializable for func
      serializableCheck: false,
    }).concat(saveTokenMiddlleware),
});
