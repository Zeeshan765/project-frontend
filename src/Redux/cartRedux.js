import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import {useState} from 'react';

var storagelength = 0;
var index=0;
var count = 4;
var flag = 0;
var gpuCount = 0;
var MoboCount = 0;
var RamCount = 0;
var PSUCount = 0;
var CoolingCount = 0;
var CasingCount=0;
//var quantity1 = 0;
const cartSlice = createSlice({
  
  name: "cart",
  initialState: {
    products: [],
    prosocket:0,
    ramSupp:0,
    proCount:0,
    casingcount:0,
    gpuCount:0,
    moboCount:0,
    ramCount:0,
    gpuwatt:0,
    psuwatt:0,
    mobosize:0,
    fixedHddCount:4,
    psucount:0,
  //  ProductTotal:0,
    PCBuildTotal:0,
    cpuTotal : 0,
    gpuTotal:0,
    moboTotal: 0 ,
    ramTotal:0,
    hddTotal: 0,
    ssdTotal: 0,
    psuTotal:0,
    casingTotal:0,
    coolingTotal:0,
    //quantity:0,
  
  },
 
  reducers: {
    addProduct: (state, action) => {
      if (state.products[0] === undefined) {
        state.products[0] = action.payload;
        count++;
      state.cpuTotal += action.payload.price ;

        toast.success(state.products[0].name + " has been added to your PC Build ",{
          theme:"colored"
        });
      }
     else if (state.products[0].name === action.payload.name){
        toast.error(state.products[0].name+ " is already in the Build",{
          theme:"colored"
        });
        return;
      }
      else{
      state.cpuTotal = 0 ;

        toast.info(state.products[0].name + " has been replaced by "+ action.payload.name,{
          theme:"colored"
        });
        state.products[0] = action.payload;
      state.cpuTotal += action.payload.price ;

      }
     
      
      // if (state.proCount > 0) {
      //   return alert("Only 1 CPU is allowed");
      // } else {
      //   state.products.push(action.payload);
    
      //state.PCBuildTotal += action.payload.price ;

      state.prosocket = (action.payload.socket);
 
      state.proCount++;
      // }
     
    
  
    },
    addgpu: (state, action) => {
      if (state.products[1] === undefined) {
        state.products[1] = action.payload;
        count++;
      state.gpuTotal += action.payload.price ;

        toast.success(state.products[1].name + " has been added to your PC Build ",{
          theme:"colored"
        });
      }
     else if (state.products[1].name === action.payload.name){
        toast.error(state.products[1].name+ " is already in the Build",{
          theme:"colored"
        });
        return;
      }
      else{
      state.gpuTotal = 0 ;

        toast.info(state.products[1].name + " has been replaced by "+ action.payload.name,{
          theme:"colored"
        });
        state.products[1] = action.payload;
      state.gpuTotal += action.payload.price ;

      }
     
      // if (gpuCount > 0) {
      //   return alert("Only 1 GPU is allowed");
      // } else {
      //   state.products.push(action.payload);
      //state.PCBuildTotal += action.payload.price ;

      state.gpuCount++;
       state.gpuwatt = action.payload.watt;
      // }
      // console.log(gpuCount);

    },
    addMobo: (state, action) => {
      if (state.products[2] === undefined) {
        state.products[2] = action.payload;
        count++;
      state.moboTotal += action.payload.price ;

        toast.success(state.products[2].name + " has been added to your PC Build ",{
          theme:"colored"
        });
      }
     else if (state.products[2].name === action.payload.name){
        toast.error(state.products[2].name+ " is already in the Build",{
          theme:"colored"
        });
        return;
      }
      else{
      state.moboTotal = 0 ;

        toast.info(state.products[2].name + " has been replaced by "+ action.payload.name,{
          theme:"colored"
        });
        state.products[2] = action.payload;
      state.moboTotal += action.payload.price ;

      }
     
     
        //state.PCBuildTotal = state.cpuTotal + state.gpuTotal ;
        state.ramSupp = (action.payload.ramSupport)
    
        state.moboCount++;
        state.mobosize = action.payload.size;
      
  

 
    },
    addRam: (state, action) => {
      if (state.products[3] === undefined) {
        state.products[3] = action.payload;
        count++;
      state.ramTotal += action.payload.price ;

        toast.success(state.products[3].name + " has been added to your PC Build ",{
          theme:"colored"
        });
      }
     else if (state.products[3].name === action.payload.name){
        toast.error(state.products[3].name+ " is already in the Build ",{
          theme:"colored"
        });
        return;
      }
      else{
      state.ramTotal = 0 ;

        toast.info(state.products[3].name + " has been replaced by "+ action.payload.name,{
          theme:"colored"
        });
        state.products[3] = action.payload;
      state.ramTotal += action.payload.price ;

      }
     
 
      // console.log(RamCount);
      // if (state.ramCount > 0) {
     
      //   return alert("Only 1 RAM module is allowed");
      // } else {
      //   state.products.push(action.payload);
       // state.PCBuildTotal += action.payload.price ;
     
        state.ramCount++;
      // }
      

    },

    addHdd: (state, action) => {
      //alert(action.payload);
      // if (flag===1){
      //   count = 4;
      //   state.products[count] = undefined
      //   flag=0;
      // }
      // console.log(count);
     
      if(state.fixedHddCount>0)   {
        // state.products[count] = undefined
        state.products[count]=action.payload;
        count++;
      state.hddTotal += action.payload.price ;

        // storagelength++;
        // index=state.products.length-1+storagelength;
        toast.success(action.payload.name + " has been added to your PC Build ",{
          theme:"colored"
        });
        //state.PCBuildTotal += action.payload.price ;
        
       state.fixedHddCount--;
      
    }
      else{
        toast.error("All SATA ports are occupied",{
          theme:"colored"
        });
      }
      
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },

    addSsd: (state, action) => {
      //alert(action.payload);
      // if (flag===1){
      //   count = 4;
      //   flag=0;
      // }
      // console.log(count);
      if(state.fixedHddCount>0)   {
       
        state.products[count]=action.payload;
        count++;
      state.ssdTotal += action.payload.price ;

        // storagelength++;
        // index=state.products.length-1+storagelength;
        toast.success(action.payload.name + " has been added to your PC Build ",{
          theme:"colored"
        });
    
       // state.PCBuildTotal += action.payload.price ;
     
        state.fixedHddCount--;
      }
    
      else{
        toast.error("All SATA ports are occupied",{
          theme:"colored"
        });
      }
      
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },




    addPSU: (state, action) => {
      //alert(action.payload);
      //state.products = action.payload;
    
      // if (state.psucount > 0) {
     
      //   return alert("Item can not be added");
      // } else {
      //   state.products.push(action.payload);
      // }
       if (state.products[count+1] === undefined) {
        state.products[count+1] = action.payload;
      state.psuTotal += action.payload.price ;

        toast.success(action.payload.name + " has been added to your PC Build ",{
          theme:"colored"
        });
      }
     else if (state.products[count+1].name === action.payload.name){
        toast.error(action.payload.name+ " is already in the Build",{
          theme:"colored"
        });
        return;
      }
    // else if(state.products[count+1].category === "Hdd"||state.products[count+1].category === "Ssd"){
    //   state.products[count+1] = action.payload;
    //   toast.success(action.payload.name + " has been added to your PC Build ",{
    //     theme:"colored"});
    // }
      else{
      state.psuTotal = 0 ;

        toast.info(state.products[count+1].name + " has been replaced by "+ action.payload.name,{
          theme:"colored"
        });
        state.products[count+1] = action.payload;
      state.psuTotal += action.payload.price ;

      }
      //  state.PCBuildTotal += action.payload.price ;

        state.psuwatt = action.payload.watt;
        state.psucount++;
      
   
      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },
    addCooling: (state, action) => {
      if (state.products[count+2] === undefined) {
        state.products[count+2] = action.payload;
      state.coolingTotal += action.payload.price ;


        toast.success(action.payload.name + " has been added to your PC Build ",{
          theme:"colored"
        });
      }
     else if (state.products[count+2].name === action.payload.name){
        toast.error(action.payload.name+ " is already in the Build",{
          theme:"colored"
        });
        return;
      }
      // else if(state.products[count+2].category === "Hdd"||state.products[count+2].category === "Ssd"){
      //   state.products[count+2] = action.payload;
      //   toast.success(action.payload.name + " has been added to your PC Build ",{
      //     theme:"colored"});
      // }
      else{
      state.coolingTotal =  0 ;

        toast.info(state.products[count+2].name + " has been replaced by "+ action.payload.name,{
          theme:"colored"
        });
        state.products[count+2] = action.payload;
      state.coolingTotal += action.payload.price ;

      }
        //state.PCBuildTotal += action.payload.price ;

      
      
     
      // if (CoolingCount > 0) {
     
      //   return alert("Item can not be added");
      // } else {
      //   state.products.push(action.payload);
        state.PCBuildTotal = state.cpuTotal + state.gpuTotal +state.moboTotal + state.ramTotal + state.hddTotal + state.ssdTotal + state.psuTotal +  state.casingTotal +state.coolingTotal;
        CoolingCount++;
      // }
      

    
    },
    addCasing:(state, action) => {
       if (state.products[count+3] === undefined) {
        state.products[count+3] = action.payload;
      state.casingTotal += action.payload.price ;

        
        toast.success(action.payload.name + " has been added to your PC Build ",{
          theme:"colored"
        });
      }
      // else if(state.products[count+3].category === "Hdd"||state.products[count+1].category === "Ssd"){
      //   state.products[count+3] = action.payload;
      //   toast.success(action.payload.name + " has been added to your PC Build ",{
      //     theme:"colored"});
      // }
     else if (state.products[count+3].name === action.payload.name){
        toast.error(action.payload.name+ " is already in the Build",{
          theme:"colored"
        });
        return;
      }
      else{
      state.casingTotal = 0 ;

        toast.info(state.products[count+3].name + " has been replaced by "+ action.payload.name,{
          theme:"colored"
        });
        state.products[count+3] = action.payload;
      state.casingTotal += action.payload.price ;

      }
       
      //alert(action.payload);
      //state.products = action.payload;
      // console.log(CasingCount);
      // if (CasingCount > 0) {
     
      //   return alert("You can select only one casing");
      // } else {
      //   state.products.push(action.payload);
       // state.PCBuildTotal += action.payload.price ;
       state.casingcount++;
        CasingCount++;
      // }

      

      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
    },


    setProductTotal:(state,action)=>{
      state.ProductTotal=action.payload;
    },  
   
    resetSataPorts: (state, action) => {
      flag =1;
     // console.log(index-1)
      state.fixedHddCount = 4;
    }
  },

  
});
export const getCartItems = (state) => state.cart.products;
export const getsocket = (state) => state.cart.prosocket;
export const getramSupp = (state) => state.cart.ramSupp;
export const getproCount = (state)=>state.cart.proCount;
export const getgpuCount = (state)=>state.cart.gpuCount;
export const getmoboCount = (state)=>state.cart.moboCount;
export const getramCount = (state)=>state.cart.ramCount;
export const getgpuwatt = (state)=>state.cart.gpuwatt;
export const getmobosize = (state)=>state.cart.mobosize;
export const getpsucount = (state)=>state.cart.psucount;
export const getcasingcount = (state)=>state.cart.casingcount;
//export const getProductTotal = (state)=>state.cart.ProductTotal;
export const getBuildTotal = (state)=>state.cart.PCBuildTotal;
export const getfixedHddCount = (state)=>state.cart.fixedHddCount;
export const {addSsd, addHdd, addCasing,addCooling,addPSU,addRam,addProduct, addgpu,addMobo,setBuildTotal,setProductTotal,resetSataPorts } = cartSlice.actions;
export default cartSlice.reducer;