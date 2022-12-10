import { useState } from 'react';

import item from '../../locales/body-text.json';
import collection from '../../locales/collection.json';
import press from '../../locales/body-carousel.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
                        <div className="body-collection-item-text">
                            <h3>{collection.heading}</h3>
                            <h2>{collection.title}</h2>
                            <p>{collection.text}</p>
                            <button>View</button>
                        </div>
                        <div className="body-collection-item-image">
                            <img src={collection.image} alt={collection.title} />
                        </div>
                    </section>
                ))}
            </section>
            <section className="body-press">
                <div className="body-press-text">
                    <h1>{item.press.title}</h1>
                    <p>{item.press.textLeft}</p>
                </div>
                <div className="body-press-carousel">
                    <div className="grey-square"></div>
                    <div className="press-carousel-container" key={press[currentIndex].id}>
                        <img src={press[currentIndex].image} />
                        <div className="press-carousel-text">
                            <h4>Press</h4>
                            <h3>{press[currentIndex].date}</h3>
                            <h2>{press[currentIndex].title}</h2>
                            <div className="press-carousel-buttons">
                                <FontAwesomeIcon
                                    onClick={onNextSlide}
                                    icon={faAngleLeft}
                                    style={{ cursor: 'pointer' }}
                                />
                                <FontAwesomeIcon
                                    onClick={onPreviousSlide}
                                    icon={faAngleRight}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                        </div>
                    </div>
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
