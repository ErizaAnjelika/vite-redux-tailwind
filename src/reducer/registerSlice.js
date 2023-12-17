import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRegisterUser = createAsyncThunk('register/registerUser', async (userData) => {
  try {
    //check function kita benar atau tidak
    const response = await fetch('https://reqres.in/api/register', {
      //method base on API => Delete, put, patch, post
      method: 'POST',
      //header=> content apa? appliaction/json
      headers: {
        'Content-Type': 'application/json',
      },
      //isi body sesuai API, biasanya JSON String
      body: JSON.stringify(userData),
    });

    //check response
    if (!response.ok) {
      //mau ngapain
      throw new Error('login gagal');
    }

    //respon success
    console.log('response berhasil');
    const data = await response.json();
    //response oke akan return data
    return data;
  } catch (error) {
    //untuk handle error
    console.log('error try catch', error);
    throw error;
  }
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    response: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        state.response = action.payload;
      })

      .addCase(fetchRegisterUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default registerSlice.reducer;
