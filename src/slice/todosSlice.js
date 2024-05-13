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
    }

  }
});

//用 action 具名匯出 reducers 

export const { createTodo } = todoSLice.actions;

export default todoSLice.reducer;