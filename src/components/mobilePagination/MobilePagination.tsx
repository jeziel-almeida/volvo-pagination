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