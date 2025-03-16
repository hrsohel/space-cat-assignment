const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    formData: {
        fname: "",
        lname: "",
        dob: "",
        file: null
    }
}

const personalInfoSlice = createSlice({
    name: "personalInfoSlice",
    initialState,
    reducers: {
        loadData: (state = initialState, actions) => {
            state.formData = actions.payload
        },
        resetPersonalData: (state) => {
            state.formData = {...initialState.formData}
        } 
    }
})

export const {loadData, resetPersonalData} = personalInfoSlice.actions
export default personalInfoSlice.reducer