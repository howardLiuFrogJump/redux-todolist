import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
})