import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name:'data',
  initialState:{
    songs:[],
    vehicles:[]
  },
  reducers:{
    addSong(state,action){
      state.songs.push(action.payload);
    },
    addVehicle(state,action){
      state.vehicles.push(action.payload);
    },
    removeSong(state,action){
      state.songs.splice(action.payload,1);
    },
    removeVehicle(state,action){
      state.vehicles.splice(action.payload,1);
    }
  }
});

const store = configureStore({
  reducer:{
    data:dataSlice.reducer,
  }
})

export default store;