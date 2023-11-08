import { RefObject, useEffect, useState } from 'react';
import styles from './MobilePagination.module.css';

interface MobilePaginationProps {
    carousel: RefObject<HTMLDivElement>;
    carouselItemsLength: number;
    carouselWidth: number;
    cardWidth: number;
}

const MobilePagination = ({ carousel, carouselItemsLength, carouselWidth, cardWidth }: MobilePaginationProps) => {

    const [currentBtn, setCurrentBtn] = useState(0);

    const sidesWidth = carouselWidth - cardWidth;
    const secondCardStart = cardWidth - (sidesWidth / 2);

    const handleBtnClick = (actualBtn: number) => {
        setCurrentBtn(actualBtn);
        if(carousel.current) {
            if(actualBtn === 0) {
                carousel.current.scrollLeft = 0;
            } else {
                carousel.current.scrollLeft = (actualBtn * cardWidth) - (sidesWidth / 2);
            }
            
        }
    }

    useEffect(() => {

        carousel.current?.addEventListener('scrollend', () => {

            const clientWidth = carousel.current?.clientWidth

            if(clientWidth && clientWidth < 460) {

                const scrollNumber = carousel.current?.scrollLeft;
        
                if(scrollNumber) {
        
                    if(scrollNumber < sidesWidth) {
                        carousel.current.scrollLeft = 0;
                        setCurrentBtn(0);
                    } else {
        
                        for(let i = 0; i < carouselItemsLength; i++) {
                            if(scrollNumber >= sidesWidth + (i * cardWidth) && scrollNumber < carouselWidth + (i * cardWidth)) {
                                carousel.current.scrollLeft = secondCardStart + (i * cardWidth);
                                setCurrentBtn( i + 1 );
                                break;
                            }
                        }
                    }
                } else {
                    setCurrentBtn(0);
                }
            }
        })

    }, [])

    
    return (
        <div className={styles.mobilePagination}>
            {Array.from({length: carouselItemsLength}).map((_, idx) => {
                return (
                    <button 
                        key={idx}
                        className={currentBtn === idx ? `${styles.btnCurrent}` : ''}
                        onClick={() => handleBtnClick(idx)}
                    ></button>
                )
            })}
        </div>
    )
}

export default MobilePagination