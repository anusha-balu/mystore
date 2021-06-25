import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 2, showCounter: true };
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});
//counterSlice.actions.toggleCounter; //callin like this will create action object
// we dont have to create action object. it will be created automatically

// const store = configureStore({ reducer: counterSlice.reducer });
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});
//createStore(counterSlice.reducers); //we can pass only one reducer to createStore
//but with bigger applications with multiple state slices its not possible with createStore
//so go for configureStore
//
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
