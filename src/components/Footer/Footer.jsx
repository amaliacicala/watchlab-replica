export default function Footer() {
    return (
        <footer>
            <section className="footer-logo">
                <img src="/images/watchlab-logo.png" alt="Watchlab Logo" />
            </section>
            <section className="footer-grid-container">
                <section className="footer-col1">
                    <p>Watch/Lab - Innovation brings success</p>
                    <div className="address">
                        <p>Via Borgogna 5, Milan</p>
                        <p>Italy</p>
                    </div>
                </section>
                <section className="footer-col2">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Brand</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Magazine</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className="footer-col3">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Contacts</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Search</a>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className="footer-col4">
                    <ul>
                        <li>
                            <a href="tel:+393929133937">T. +39 392 9133937</a>
                        </li>
                        <li>
                            <a href="mailto:info@watch-lab.it">M. info@watch-lab.it</a>
                        </li>
                        <li>
                            <a href="#" className="social">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="footer-credits">
                    <p>Copyright Watch/Lab all rights reserved</p>
                    <p>website by nss factory</p>
                </section>
            </section>
        </footer>
    );
}
