import { useState } from 'react';
import item from '../../locales/body-text.json';
import collection from '../../locales/collection.json';
import press from '../../locales/body-carousel.json';

export default function Body() {
    // slider
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNextSlide = () => {
        if (currentIndex === press.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const onPreviousSlide = () => {
        if (currentIndex === press.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <main>
            <section className="body-intro">
                <h1>{item.intro.title}</h1>
                <div className="body-intro-grid">
                    <div className="body-intro-col1">
                        <p>{item.intro.textLeft}</p>
                    </div>
                    <div className="body-intro-col2">
                        <p>{item.intro.textRight}</p>
                    </div>
                </div>
            </section>
            <section className="body-collection">
                {collection.map((collection) => (
                    <section key={collection.id} className="body-collection-item">
                        <div>
                            <h3>{collection.heading}</h3>
                            <h2>{collection.title}</h2>
                            <p>{collection.text}</p>
                            <button>View</button>
                        </div>
                        <div>
                            <img src={collection.image} alt={collection.title} />
                        </div>
                    </section>
                ))}
            </section>
            <section className="body-press">
                <div>
                    <h1>{item.press.title}</h1>
                    <p>{item.press.textLeft}</p>
                </div>
                <div className="press-carousel-container" key={press[currentIndex].id}>
                    <div className="grey-square"></div>
                    <img src={press[currentIndex].image} />
                    <h4>Press</h4>
                    <h3>{press[currentIndex].date}</h3>
                    <h2>{press[currentIndex].title}</h2>
                    <button onClick={onNextSlide}>Previous</button>
                    <button onClick={onPreviousSlide}>Next</button>
                </div>
            </section>
            <section className="body-instagram">
                <div className="instagram-col1">
                    <h5>Instagram</h5>
                    <h1>Discover Watch Lab</h1>
                </div>
                <div className="instagram-col2">
                    <img src="/images/discover2.png" alt="Watch Lab Instagram" />
                    <img src="/images/discover3.png" alt="Watch Lab Instagram" />
                    <img src="/images/discover4.png" alt="Watch Lab Instagram" />
                    <img src="/images/discover5.png" alt="Watch Lab Instagram" />
                </div>
            </section>
        </main>
    );
}
