import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import navLinks from '../../locales/navigation.json';

export default function BurgerMenu() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            const dropdownMenu = inputRef.current;
            dropdownMenu.style.display = 'block';
        }

        if (!open) {
            const dropdownMenu = inputRef.current;
            dropdownMenu.style.display = 'none';
        }
    });

    return (
        <div className="dropdown-burger">
            <label htmlFor="checkbox">
                {!open ? (
                    <FontAwesomeIcon icon={faBars} style={{ fontSize: '2rem', color: 'white' }} />
                ) : (
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{ fontSize: '2.2rem', color: 'white' }}
                    />
                )}
            </label>
            <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={!open ? () => setOpen(true) : () => setOpen(false)}
            />

            <div id="dropdown-menu" ref={inputRef}>
                <nav>
                    <ul>
                        <li key="0">
                            <input type="text" />
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