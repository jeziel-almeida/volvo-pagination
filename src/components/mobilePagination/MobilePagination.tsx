import { RefObject, useState } from 'react';
import styles from './MobilePagination.module.css';

interface MobilePaginationProps {
    carousel: RefObject<HTMLDivElement>;
    carsLength: number;
}

const MobilePagination = ({ carousel, carsLength }: MobilePaginationProps) => {

    const [currentBtn, setCurrentBtn] = useState(0);

    const carouselWidth = 330;
    const cardWidth = 250;
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

    carousel.current?.addEventListener('scrollend', () => {
        const scrollNumber = carousel.current?.scrollLeft;

        if(scrollNumber) {

            if(scrollNumber < sidesWidth) {
                carousel.current.scrollLeft = 0;
                setCurrentBtn(0);
            } else {

                for(let i = 0; i < carsLength; i++) {
                    if(scrollNumber >= sidesWidth + (i * cardWidth) && scrollNumber < carouselWidth + (i * cardWidth)) {
                        carousel.current.scrollLeft = secondCardStart + (i * cardWidth);
                        setCurrentBtn( i + 1 );
                        break;
                    }
                }

                // let next = true;
                // let i = 0;
                // while(next) {
                //     if(scrollNumber >= sidesWidth + (i * cardWidth) && scrollNumber < carouselWidth + (i * cardWidth)) {
                //         carousel.current.scrollLeft = secondCardStart + (i * cardWidth);
                //         setCurrentBtn( i + 1 );
                //         next = false;
                //     }
                //     i++;
                // }
            }
        }
    })
    
    return (
        <div className={styles.mobilePagination}>
            {Array.from({length: carsLength}).map((_, idx) => {
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