const { createSlice } = require("@reduxjs/toolkit");

const users = createSlice({
    name: 'users',
    initialState:[ {
        id: 0,
        name: '',
        surname: '',
        email:'',
        phone: '',
        password:''
    }],
    reducers: {
        getUsersSlice: (state, action) => {
            state = action.payload.data.data;
            return state;
        },
        addUserSlice: (state, action) => {
            state.push(action.payload.data.data);
            return state;
        },
        editUserSlice: (state, action) => {
            state = state.map(item => item.id == action.payload.id ? action.payload : item);
            return state;
        },
        deleteUserSlice: (state, action) => {
            state = state.filter(item => item.id !== action.payload);
            return state;
        },
    }
})
export const { getUsersSlice, addUserSlice, editUserSlice, deleteUserSlice } = users.actions;
export default users.reducer;