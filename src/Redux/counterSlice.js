import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState:initialState,
    reducers: {


    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer