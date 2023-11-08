import { RefObject, useState } from 'react';
import styles from './MobilePagination.module.css';

interface MobilePaginationProps {
    carousel: RefObject<HTMLDivElement>;
    carsLength: number;
}

const MobilePagination = ({ carousel, carsLength }: MobilePaginationProps) => {

    const [currentBtn, setCurrentBtn] = useState(0);

    const handleBtnClick = (actualBtn: number) => {
        setCurrentBtn(actualBtn);
        if(carousel.current) {
            carousel.current.scrollLeft = actualBtn * 250;
        }
    }

    carousel.current?.addEventListener('scrollend', () => {
        const scrollNumber = carousel.current?.scrollLeft;
        console.log(scrollNumber);

        if(scrollNumber) {
            if(scrollNumber < 80) carousel.current.scrollLeft = 0;
            if(scrollNumber >= 80 && scrollNumber < 330) {
                carousel.current.scrollLeft = 250;
            }
            if(scrollNumber >= 330 && scrollNumber < 580) {
                carousel.current.scrollLeft = 500;
            }
            if(scrollNumber >= 580 && scrollNumber < 830) {
                carousel.current.scrollLeft = 750;
            }
            if(scrollNumber >= 830 && scrollNumber < 1080) {
                carousel.current.scrollLeft = 1000;
            }
            if(scrollNumber >= 1080 && scrollNumber < 1330) {
                carousel.current.scrollLeft = 1250;
            }
            if(scrollNumber >= 1330 && scrollNumber < 1580) {
                carousel.current.scrollLeft = 1500;
            }
            if(scrollNumber >= 1580 && scrollNumber < 1830) {
                carousel.current.scrollLeft = 1750;
            }
            if(scrollNumber >= 1830 && scrollNumber < 2080) {
                carousel.current.scrollLeft = 2000;
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