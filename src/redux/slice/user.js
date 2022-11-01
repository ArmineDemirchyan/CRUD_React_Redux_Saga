const { createSlice } = require("@reduxjs/toolkit");

const user = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: "",
        surname: "",
        email: "",
        phone: "",
        password:""
    },
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})
export const { setUserSlice } = user.actions;
export default user.reducer;