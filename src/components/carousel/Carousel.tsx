import { RefObject, useEffect, useRef, useState } from 'react';
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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        // Adicione um ouvinte de redimensionamento ao carregar o componente
        window.addEventListener('resize', handleResize);

        // Lembre-se de remover o ouvinte de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [])

    return (
        <div className={styles.carouselWrapper}>

            <h1>Todos os modelos Recharge</h1>
            <div className={styles.carousel} ref={carousel}>
                {data.map((car) => (
                    <CarCard car={car} key={car.id} />
                ))}
            </div>
            
            {windowWidth < 460 ? (
                <MobilePagination carousel={carousel} carsLength={data.length} />
            ) : (
                <DesktopPagination carousel={carousel} />
            )}

        </div>
    )
}

export default Carousel