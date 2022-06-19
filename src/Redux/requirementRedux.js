import { createSlice } from "@reduxjs/toolkit";
const requirementSlice = createSlice({
    name: "requirement",
    initialState: {
      pubgfps:0,
      pubgreso:0,
      gtafps : 0,
      gtareso:0,
      apexfps:0,
      apexreso:0
      
    },
    reducers: {

      handleLow: (state, action) => {
        state.pubgfps=40
        state.pubgreso=720
        state.gtafps = 25
        state.gtareso=720
        state.apexfps=30
        state.apexreso=720
       
      },
      handleMed: (state, action) => {
        state.pubgfps=60
        state.pubgreso=1080
        state.gtafps = 45
        state.gtareso=1080
        state.apexfps=50
        state.apexreso=1080
       
      },
      handleHigh: (state, action) => {
        state.pubgfps=120
        state.pubgreso=1080
        state.gtafps = 80
        state.gtareso=1080
        state.apexfps=100
        state.apexreso=1080
       
      },
    },
    
  });
export const getpubgfps = (state) => state.requirement.pubgfps;
export const getpubgreso = (state) => state.requirement.pubgreso;
export const getgtafps = (state) => state.requirement.gtafps;
export const getgtareso = (state) => state.requirement.gtareso;
export const getapexfps = (state) => state.requirement.apexfps;
export const getapexreso = (state) => state.requirement.apexreso;
export const { handleLow,handleMed,handleHigh } = requirementSlice.actions;
export default requirementSlice.reducer;
