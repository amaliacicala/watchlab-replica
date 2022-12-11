import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import navLinks from '../../locales/navigation.json';

export default function BurgerMenu() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            const dropdownMenu = inputRef.current;
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.opacity = '1';
        }

        if (!open) {
            const dropdownMenu = inputRef.current;
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.opacity = '0';
        }
    });

    return (
        <div className="dropdown-burger">
            <label htmlFor="checkbox">
                {!open ? (
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{
                            fontSize: '2rem',
                            color: 'white',
                            transition: 'all 0.4s ease-in-out'
                        }}
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{
                            fontSize: '2.2rem',
                            color: 'white',
                            transition: 'all 0.4s ease-in-out'
                        }}
                    />
                )}
            </label>
            <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={!open ? () => setOpen(true) : () => setOpen(false)}
            />

            <div id="dropdown-menu" className="open" ref={inputRef}>
                <nav>
                    <ul>
                        <li key="0">
                            <input type="text" />
                            {/* <img
                                src="/icons/magnifying-glass-mobile.png"
                                style={{ cursor: 'pointer' }}
                            /> */}
                            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                        </li>

                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
