import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/counterSlice';
import modalReducer from '../reducer/modalSlice';
import toggleReducer from '../reducer/darkModeSlice';
import todosReducer from '../reducer/todoSlice';
import todosByIdReducer from '../reducer/todoDinamicSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    toggle: toggleReducer,
    todos: todosReducer,
    todosById:todosByIdReducer,
  },
});
