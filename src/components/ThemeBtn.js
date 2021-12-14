import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { lightMode,darkMode } from '../Redux/dialectSlice'
import { FaMoon,FaRegSun } from "react-icons/fa"
import './themeBtn.css'

function ThemeBtn() {

    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.dialect.themeMode)

    const switchThemeMode = () => {
        if( themeMode === 'light') {
            dispatch(darkMode())
        }
        else{
            dispatch(lightMode())
        }
    }
    console.log(`MODE = ${themeMode}`) //TODO: delete

    return (
        <div className="theme-switcher"
            onClick={switchThemeMode}>
            {themeMode === 'light' 
                ? <FaMoon color='var(--bg-active)'/> 
                : <FaRegSun color='var(--text-carrot)'/>}
        </div>
    )
}

export default ThemeBtn;
