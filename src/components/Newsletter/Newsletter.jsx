export default function Newsletter() {
    return (
        <section className="newsletter" style={{ backgroundImage: 'url(/images/newsletter.png' }}>
            <section className="newsletter-text">
                <h2>Get in Touch</h2>
                <h4>Discover more about news, exclusive events and discount</h4>

                <div className="input-wrapper">
                    <input type="email" placeholder="Type your email" />
                    <input type="submit" value="ok" />
                </div>
            </section>
        </section>
    );
}
