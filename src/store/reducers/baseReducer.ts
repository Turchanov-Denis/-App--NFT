import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
interface BaseState {
    activeButton: string,
}

const initialState: BaseState = {
    activeButton: 'home'
}
const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        changeActiveButton: (state, action: PayloadAction<string>) => {
            state.activeButton = action.payload
        }
    }
}
)



export const { changeActiveButton } = baseSlice.actions
export default baseSlice.reducer