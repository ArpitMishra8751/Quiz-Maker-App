import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // quizData : [],
    quizData : localStorage.getItem("quizData") ? JSON.parse(localStorage.getItem("quizData")) : [],    
}

export const QuizSlice = createSlice({
    name:"quiz",
    initialState:initialState,
    reducers:{
        add(state,action) {
            state.quizData.push(action.payload);
        }
    }
})

export const {add} = QuizSlice.actions;
export default QuizSlice.reducer;