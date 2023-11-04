import { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import { Car } from '@/types/Car';
import CarCard from '../carCard/CarCard';
import Image from 'next/image';

const Carousel = () => {

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/api/cars');
            const data = await res.json();
            setCars(data);
        }
        fetchData();

    }, [])

    const handleLeftClick = () => {

    }

    const handleRightClick = () => {

    }

    return (
        <div className={styles.carouselWrapper}>

            <h1>Todos os modelos Recharge</h1>
            <div className={styles.carousel}>
                {cars.map((car) => (
                    <CarCard car={car} key={car.id} />
                ))}
            </div>
            <div className={styles.buttons}>
                <button onClick={handleLeftClick}>
                    <Image className={styles.btnRight} src="/images/chevron-circled.svg" alt='Scroll left' width={40} height={40} />
                </button>
                <button onClick={handleRightClick}>
                    <Image src="/images/chevron-circled.svg" alt='Scroll right' width={40} height={40} />
                </button>
            </div>

        </div>
    )
}

export default Carousel