import { useState } from 'react';

import item from '../../locales/carousel.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    const onSlideChange = () => {
        if (currentIndex === item.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }

        if (nextIndex === item.length - 1) {
            setNextIndex(0);
        } else {
            setNextIndex(nextIndex + 1);
        }
    };

    return (
        <>
            <section
                className="carousel-container"
                key={item[currentIndex].id}
                style={{
                    backgroundImage: `url(${item[currentIndex].image})`
                }}>
                <section className="carousel-content">
                    <h2>{item[currentIndex].heading}</h2>
                    <h1>{item[currentIndex].title}</h1>
                    <h4>{item[currentIndex].subtitle}</h4>
                    <button>Discover</button>
                </section>

                <section
                    className="carousel-next"
                    onClick={onSlideChange}
                    key={item[nextIndex].id}
                    style={{
                        backgroundImage: `url(${item[nextIndex].image})`
                    }}>
                    <h1>{item[nextIndex].title}</h1>

                    <div>
                        <h3>Next</h3>
                        <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '0.5rem' }} />
                    </div>
                </section>
            </section>
        </>
    );
}
