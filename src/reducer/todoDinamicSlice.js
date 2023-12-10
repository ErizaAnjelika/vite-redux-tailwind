import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//fetching data todo
// createAsyncThunk => function dari redux toolkit
export const fetchTodoById = createAsyncThunk('todos/fetchTodoById', async (todoId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  const data = await response.json();
  return data;
});

// membuat slice atau tempat menaruh reducer
const todosByIdSlice = createSlice({
  //nama state
  name: 'todosById',
  initialState: {
    //initial state data todos
    todo: {}, //nilai awal objek kosong
    status: 'idle', //status nilainya 'idle'
    error: null, //nilai error null
  },

  //reducer sync
  reducers: {},

  //reducer async
  extraReducers: (builder) => {
    builder
        //addCase => property dari redux
      // untuk loading, simpan ke state 'status'
      .addCase(fetchTodoById.pending, (state) => {
        state.status = 'loading';
      })
      // untuk success, simpan ke state 'status'
      //untuk data, simpan ke state 'todo',payload (response)
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todo = action.payload;
      })
      //untuk gagal, simpan ke state 'status'
      //untuk error, simpan ke state 'error'
      .addCase(fetchTodoById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export todoslice dan reducer
export default todosByIdSlice.reducer;
