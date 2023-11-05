import styles from './DesktopPagination.module.css';
import Image from 'next/image';
import { MouseEvent, RefObject } from 'react';

interface DesktopPaginationProps {
    carousel: RefObject<HTMLDivElement>;
}

const DesktopPagination = ({ carousel }: DesktopPaginationProps) => {

    const handleLeftClick = (e: MouseEvent) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
            //carousel.current.scrollLeft -= 250;
        }
    }

    const handleRightClick = (e: MouseEvent) => {
        e.preventDefault();
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
            //carousel.current.scrollLeft += 250;
        }
    }

    return (
        <div className={styles.buttons}>
            <button onClick={handleLeftClick}>
                <Image className={styles.btnRight} src="/images/chevron-circled.svg" alt='Scroll left' width={40} height={40} />
            </button>
            <button onClick={handleRightClick}>
                <Image src="/images/chevron-circled.svg" alt='Scroll right' width={40} height={40} />
            </button>
        </div>
    )
}

export default DesktopPagination