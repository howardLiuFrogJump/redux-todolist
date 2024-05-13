import { createSlice } from "@reduxjs/toolkit";

export const todoSLice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: '這是一段話 copy by slice'
    },
  ],
});

export default todoSLice.reducer;