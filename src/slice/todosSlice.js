import { createSlice } from "@reduxjs/toolkit";

export const todoSLice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: '這是一段話 copy by slice'
    },
  ],
  reducers: { // 狀態管理器
    createTodo(state , action){
      console.log(state[0].text, action);
      state.push(action.payload);
    },
    removeTodo(state , action){  // 傳入id
      // const index = state.findIndex((todo) => todo.id === action.payload);
      // state.splice(index, 1);

      // 覆蓋state  直接return
      return state.filter((todo) => todo.id !== action.payload);
      // newTodo = state.filter((todo) => todo.id !== action.payload);
      // state = newTodo;
      // console.log(state.length , newTodo.length);
    
    },
    updateTodo(state , action){
      console.log(state, action.payload);

      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = action.payload.text;
    }

  }
});

//用 action 具名匯出 reducers 

export const { createTodo , removeTodo , updateTodo } = todoSLice.actions;

export default todoSLice.reducer;