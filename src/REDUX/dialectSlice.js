import { createSlice } from '@reduxjs/toolkit'

export const dialectSlice = createSlice({
    name: 'dialect',
    initialState: {
        lang: 'eng',
        themeMode: 'light',
        userModalData: [],
        modalVisibility: false,
    },
    reducers: {
        langEng: state => { state.lang = 'eng' },
        langRus: state => { state.lang = 'rus' },
        lightMode: state => { state.themeMode = 'light' },
        darkMode: state => { state.themeMode = 'dark' },
        showModal: (state,actions) => { state.modalVisibility = actions.payload},
        getUserModalData: (state,actions) => { state.userModalData = actions.payload}
    }
})

export const { langEng,langRus,lightMode,darkMode,getUserModalData,showModal } = dialectSlice.actions

export default dialectSlice.reducer
