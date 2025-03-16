const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    counter: 1
}

const switchComponentSlice = createSlice({
    name: "switch-component",
    initialState,
    reducers: {
        backToPrevious: (state) => {
            state.counter = Math.max(1, state.counter - 1)
        },
        moveToNext: (state) => {
            state.counter = Math.min(3, state.counter + 1)
        }
    }
})

export const {backToPrevious, moveToNext} = switchComponentSlice.actions
export default switchComponentSlice.reducer