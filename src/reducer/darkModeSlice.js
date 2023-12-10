import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    darkMode:false,
}

const darkModeSlice = createSlice({
    name :'toggle',
    initialState,
    reducers:{
        toggleDarkMode :(state)=>{
            state.darkMode=!state.darkMode
        }
    }
})

export const {toggleDarkMode} = darkModeSlice.actions
// untuk bisa ganti" icon
export const selectedIcon = (state)=>state.toggle.darkMode
export default darkModeSlice.reducer
