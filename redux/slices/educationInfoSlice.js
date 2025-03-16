const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    formData: {
        sscPassingYear: "",
        sscPoint: "",
        sscRoll: "",
        sscBoard: "",
        hscPassingYear: "",
        hscPoint: "",
        hscRoll: "",
        hscBoard: ""
    }
}

const educationInfoSlice = createSlice({
    name: "educationInfoSlice",
    initialState,
    reducers: {
        loadEducationData: (state, actions) => {
            state.formData = actions.payload
        },
        resetEducationData: (state) => {
            state.formData = {...initialState.formData}
        } 
    }
})

export const {loadEducationData, resetEducationData} = educationInfoSlice.actions
export default educationInfoSlice.reducer