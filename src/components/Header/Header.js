import { useState, forwardRef } from 'react';
import './Header.css';
import DrawerLines from './DrawerLines';
import DrawerClose from './DrawerClose';
const Header = forwardRef(({ isTransformed }, ref) => {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <header>
            <div className='HeaderLogo'>
                <span className="FirstName">Quent</span>
                <span className="LastName">Dean</span>
            </div>
            <div className='DrawerIcon' onClick={toggleDrawer}>
                <DrawerLines />
            </div>
            <nav className={`DrawerMenu ${drawer ? 'open' : ''}`}>
                <ul>
                    <a href="#root"><li>Home</li></a>
                    <a href="#root"><li>About</li></a>
                    <a href="#root"><li>Projects</li></a>
                </ul>
                <div className='DrawerClose' onClick={toggleDrawer}>
                    <DrawerClose />
                </div>
            </nav>
        </header>
    );
});
export default Header;