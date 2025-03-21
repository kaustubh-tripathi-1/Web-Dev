import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {},
        updateTodo: (state, action) => {},
        deleteTodo: (state, action) => {},
        clearTodos: (state, action) => {},
    },
});
