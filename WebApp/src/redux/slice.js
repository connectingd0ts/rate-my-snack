import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'appState',
    initialState: {
        image: null
    },
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        }
    }
});

export const { setImage } = appSlice.actions
export default appSlice.reducer