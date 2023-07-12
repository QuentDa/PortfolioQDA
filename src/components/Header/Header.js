import { useState } from 'react';
import ThemeSwitch from '../Switch/ThemeSwitch';
import './Header.css';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import logo from '../../img/qdalogo.png'
export default function Header() {
    const { toggleTheme } = useContext(ThemeContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header>
            <div className="header-container">
                <div className="header-drawer-toggle">
                    <button className="drawer-toggle-button" onClick={handleDrawerToggle}>
                        <span className={`drawer-toggle-icon ${isDrawerOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
                <div className='header-links'>
                    <a href="#contact">Contact</a>
                    <a href="#contact">Github</a>
                </div>
                <div className="header-title">
                    <a href='#'><img src={logo} alt="logo" className='logo' /></a>
                </div>
                <div className='header-links'>
                    <a href="#contact">Contact</a>
                    <a href="#contact">Github</a>
                </div>
                <div className="header-switch">
                    <ThemeSwitch onClick={toggleTheme} />
                </div>
            </div>
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <div className='page-width'>
                    <div className="drawer-header">
                        <div className="drawer-title">
                            <img src={logo} alt="logo" className='drawer-logo' />
                        </div>
                        <div className="drawer-toggle">
                            <button className="drawer-toggle-button" onClick={handleDrawerToggle}>
                                <span className={`drawer-toggle-icon ${isDrawerOpen ? 'open' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                    <div className="drawer-links">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <a href="#contact">Github</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
