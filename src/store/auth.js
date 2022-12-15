import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticationState = {
    authState: false
};

const authSlice = createSlice({
    name: "Authentication",
    initialState: initialAuthenticationState,
    reducers: {
        login(state) {state.authState = true;},
        logout(state) {state.authState = false;}
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;