import { useState, useEffect, useRef } from 'react';

import item from '../../locales/carousel.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
    // slider
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    const onSlideChange = () => {
        // change slide on main container
        if (currentIndex === item.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }

        // change slide on preview container
        if (nextIndex === item.length - 1) {
            setNextIndex(0);
        } else {
            setNextIndex(nextIndex + 1);
        }
    };

    // arrows on hover
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    // slider animation
    const firstRender = useRef(true);

    // don't animate on render
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
    });

    const backgroundVariants = {
        initial: { opacity: 0.9 },
        animate: { opacity: 1 }
    };

    const titleVariantsEven = {
        initial: { x: -50, opacity: 0.5 },
        animate: { x: 0, opacity: 1 }
    };

    const titleVariantsOdd = {
        initial: { x: 50, opacity: 0.5 },
        animate: { x: 0, opacity: 1 }
    };

    return (
        <>
            <AnimatePresence initial="false">
                <motion.div
                    key={item[currentIndex].id}
                    variants={firstRender.current ? {} : backgroundVariants}
                    animate="animate"
                    initial="initial"
                    transition={{ duration: 0.5 }}
                    className="carousel-container"
                    style={{
                        backgroundImage: `url(${item[currentIndex].image})`
                    }}>
                    <section className="carousel-content">
                        <h2>{item[currentIndex].heading}</h2>
                        <motion.h1
                            key={item[currentIndex].id}
                            variants={currentIndex % 2 == 0 ? titleVariantsEven : titleVariantsOdd}
                            animate="animate"
                            initial="initial"
                            // exit="exit"
                            transition={{
                                duration: 0.4
                            }}>
                            {item[currentIndex].title}
                        </motion.h1>
                        <h4>{item[currentIndex].subtitle}</h4>
                        <button>Discover</button>
                    </section>

                    <section
                        className="carousel-next-container"
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={onSlideChange}
                        key={item[nextIndex].id}>
                        <div
                            className="carousel-next-bg"
                            style={{
                                backgroundImage: `url(${item[nextIndex].image})`
                            }}></div>

                        <div className="carousel-next-titles">
                            <h1 className="carousel-next-title">{item[nextIndex].title}</h1>
                            <div className="carousel-next-arrow">
                                <h3>Next</h3>
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    style={{ marginLeft: '1rem' }}
                                />
                                <div
                                    className="arrow"
                                    style={{
                                        visibility: isHovering ? 'visible' : 'hidden',
                                        opacity: isHovering ? '1' : '0'
                                    }}>
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        style={{ marginLeft: '0.2rem' }}
                                    />
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        style={{ marginLeft: '0.2rem' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="carousel-next-mobile" onClick={onSlideChange}>
                        <h3>Next</h3>
                        <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '1rem' }} />
                    </section>
                </motion.div>
            </AnimatePresence>
        </>
    );
}
