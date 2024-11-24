import { createSlice } from "@reduxjs/toolkit";


const initialState = {count : 0}

const counterSlice = createSlice ({
    name : "counter",
    initialState ,
    reducers : {
        increment : (state , action )=>{
            state.count = state.count + 1;
        },
        decrement : (state , action )=>{
            if(state.count == 0){
                return alert('Can not decrement')
            }
            state.count = state.count - 1;
        },
        incrementByValue : (state , action )=>{
            state.count = state.count + action.payload;
        }
    }
})

export const {decrement , increment , incrementByValue} = counterSlice.actions;


export default counterSlice.reducer;