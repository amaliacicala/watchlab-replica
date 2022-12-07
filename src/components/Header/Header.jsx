import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import navLinks from '../../locales/navigation.json';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
    return (
        <header>
            <section className="header-logo">
                <img alt="Watchlab Logo" src="/images/watchlab-logo.png" />
            </section>

            <section className="header-nav">
                <nav>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>

            <section className="header-search">
                <input type="text" />
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            </section>

            <section className="mobile-menu">
                <BurgerMenu />
            </section>
        </header>
    );
}
