import React, { useContext } from 'react';
import './ThemeSwitch.css'
import { ThemeContext } from '../../App'
import Sun from './sun.js'
import Moon from './moon.js'

export default function ThemeSwitch({ onClick }) {
    const { theme } = useContext(ThemeContext);
    return (
        <span className='ToggleIcon' onClick={onClick}>
            {theme === 'light' ? <Moon /> : <Sun />}
        </span>
    )
}