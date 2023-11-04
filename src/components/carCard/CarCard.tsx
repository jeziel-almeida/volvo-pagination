import { Car } from '@/types/Car'
import styles from './CarCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface CarCardProps {
    car: Car;
}

const CarCard = ({ car }: CarCardProps) => {

    return (
        <div>
            <div className={styles.titleWrapper}>
                <span className={styles.bodyType}>{car.bodyType}</span>
                <div className={styles.modelWrapper}>
                    <p>{car.modelName}</p>
                    <p>{car.modelType}</p>
                </div>
            </div>
            <Image src={car.imageUrl} alt={`Volvo ${car.modelName}`} width={200} height={150} />
            <div className={styles.linksWrapper}>
                <Link href={'/learn/' + car.id}>
                    Learn &gt;
                </Link>
                <Link href={'/shop/' + car.id}>
                    Shop &gt;
                </Link>
            </div>
        </div>
    )
}

export default CarCard