import { RefObject, useRef } from 'react';
import styles from './Carousel.module.css';
import { Car } from '@/types/Car';
import CarCard from '../carCard/CarCard';
import DesktopPagination from '../desktopPagination/DesktopPagination';


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
            
            <DesktopPagination carousel={carousel} />

        </div>
    )
}

export default Carousel