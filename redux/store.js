import {configureStore} from "@reduxjs/toolkit"
import switchComponentSlice from "./slices/swtichComponentsSlice"
import personalInfoSlice from "./slices/personalInfoSlice"
import addressInfoSlice from "./slices/addressInfoSlice"
import educationInfoSlice from "./slices/educationInfoSlice"

const store = configureStore({
    reducer: {
        switchComponents: switchComponentSlice,
        personalInfoSlice,
        addressInfoSlice,
        educationInfoSlice
    }
})

export default store