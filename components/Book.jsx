import styles from "../styles/Book.module.css"
import Link from "next/link";

export default function Book({title, author, color, link}) {
    return (
        <div className={styles.book}>
            <Link className={styles.cover} href={link} style={{backgroundColor: color}}>
                <div className={styles.tag}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.author}>{author}</div>
                </div>
            </Link>
        </div>
    );
}
