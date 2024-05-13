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
      // console.log(state[0].text, action);
      state.push(action.payload);
    },
    removeTodo(state , action){  // 傳入id
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    }

  }
});

//用 action 具名匯出 reducers 

export const { createTodo , removeTodo } = todoSLice.actions;

export default todoSLice.reducer;