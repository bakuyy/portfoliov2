import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { CiLight } from "react-icons/ci";
import { MdModeNight } from "react-icons/md";

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(savedTheme);
        document.body.className = savedTheme === 'light' ? 'light-theme' : 'dark-theme';
    }, []);

    const handleThemeChange = (event, newTheme) => {
        if (newTheme !== null) {
            setTheme(newTheme);
            document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
            localStorage.setItem('theme', newTheme);
        }
    };

    const links = [
        { name: "home", link: '/', id: 'home' },
        { name: "resume", link: '/resume', id: 'resume' },
        { name: "projects", link: '/projects', id: 'projects' },
        { name: "blogs", link: '/blogs', id: 'blogs' },
    ];

    const iconStyle = {
        color: theme === 'light' ? 'black' : '#f2e3c2', 
        fontSize: '1em', 
    };

    return (
        <div className='navbar-container'>
            <div>
                {links.map(({ name, link }) => (
                    <Link
                        className='nav-link noto-serif'
                        key={name}
                        to={link}
                    >
                        {name}
                    </Link>
                ))}
            </div>
            <ToggleButtonGroup
                value={theme}
                exclusive
                onChange={handleThemeChange}
                aria-label="theme toggle"
            >
                <ToggleButton value="light" aria-label="light mode">
                    <CiLight style={iconStyle} />
                </ToggleButton>
                <ToggleButton value="dark" aria-label="dark mode">
                    <MdModeNight style={iconStyle} />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default Navbar;
