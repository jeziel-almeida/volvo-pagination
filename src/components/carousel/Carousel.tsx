import { RefObject, useRef } from 'react';
import styles from './Carousel.module.css';
import { Car } from '@/types/Car';
import CarCard from '../carCard/CarCard';
import DesktopPagination from '../desktopPagination/DesktopPagination';
import MobilePagination from '../mobilePagination/MobilePagination';

interface CarouselProps {
    data: Car[];
}

const Carousel = ({ data } : CarouselProps) => {
  
    const carousel: RefObject<HTMLDivElement> = useRef(null);

    return (
        <div className={styles.carouselWrapper}>

            <h1>Todos os modelos Recharge</h1>
            <div className={styles.carousel} ref={carousel}>
                {data.map((car) => (
                    <CarCard car={car} key={car.id} />
                ))}
            </div>
            
            <div className={styles.desktopPagination}>
                <DesktopPagination carousel={carousel} />
            </div>
            <div className={styles.mobilePagination}>
                <MobilePagination carousel={carousel} carsLength={data.length} />
            </div>

        </div>
    )
}

export default Carousel