import { createSlice } from '@reduxjs/toolkit';


const user = JSON.parse(localStorage.getItem('loggedInUser'));
const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoading:false, isAuthenticated: !!user, user: user },
  reducers: {
    signInProgress:(state,action)=>{
      state.isAuthenticated = false;
      state.isLoading = true;
    },
    signInProgressCompleted:(state,action)=>{
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('loggedInUser', JSON.stringify(state.user));
      state.isLoading = false;

    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
      localStorage.setItem('loggedInUser', null);
    },
  },
});

export const { signIn, signOut,signInProgress,signInProgressCompleted } = authSlice.actions;
export default authSlice.reducer;
