import { Car } from '@/types/Car'
import styles from './CarCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface CarCardProps {
    car: Car;
}

const CarCard = ({ car }: CarCardProps) => {

    return (
        <div className={styles.card}>
            <div className={styles.titleWrapper}>
                <p>{car.bodyType}</p>
                <div className={styles.modelWrapper}>
                    <p>{car.modelName}</p>
                    <p>{car.modelType}</p>
                </div>
            </div>
            <Image src={car.imageUrl} alt={`Volvo ${car.modelName}`} width={230} height={180} />
            <div className={styles.linksWrapper}>
                <Link className={styles.link} href={'/learn/' + car.id}>
                    Learn &gt;
                </Link>
                <Link className={styles.link} href={'/shop/' + car.id}>
                    Shop &gt;
                </Link>
            </div>
        </div>
    )
}

export default CarCard