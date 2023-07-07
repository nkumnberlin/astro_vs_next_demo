import Image from "next/image";

export interface Props {
	title: string;
	body: string;
	href?: string;
    image: string;
}

import styles from './Card.module.css';

function Card(props: Props) {
	const { href, title, body, image } = props;
    return (
        <li className={styles.linkCard}>
            <div>
                <h2 className={styles.h2}>
                    {title}
                </h2>
                <p className={styles.p}>
                    {body}
                </p>
                {image && <Image src={image} width={100} height={100}  alt={title} /> }
                {href && <div className={styles.container}> <a className={styles.button} href={title}>Sing den Banger &rarr;</a></div>}
            </div>
        </li>
    );
}
export default Card

