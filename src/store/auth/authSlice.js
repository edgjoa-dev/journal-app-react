import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
name: 'auth',
initialState: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,

},
reducers: {

},
})
// Action creators are generated for each case reducer function
export const { auth } = counterSlice.actions