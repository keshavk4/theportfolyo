import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

const userSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        setData: (state, actions) => {
            state.value = actions.payload;
        }
    }
})

export const { setData } = userSlice.actions
export default userSlice.reducer;