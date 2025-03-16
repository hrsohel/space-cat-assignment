const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    formData: {
        street: "",
        city: "",
        postOffice: "",
        policeStation: "",
        pPostOffice: "",
        pPoliceStation: "",
        pCity: "",
        pStreet: ""
    }
}

const addressInfoSlice = createSlice({
    name: "addressInfoSlice",
    initialState,
    reducers: {
        loadAddressData: (state = initialState, actions) => {
            state.formData = actions.payload
        },
        resetAddressData: (state) => {
            state.formData = {...initialState.formData}
        }
    }
})

export const {loadAddressData, resetAddressData} = addressInfoSlice.actions
export default addressInfoSlice.reducer