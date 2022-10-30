import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    goal:0,
    target:0,
    measurement:0
  },
  reducers: {
    changegoal: (state , action) => {

      state.value += 1
    },
   
  },
})
export const { changegoal } = filterSlice.actions

export default filterSlice.reducer