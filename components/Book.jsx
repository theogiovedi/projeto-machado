import styles from "../styles/Book.module.css"

export default function Book({title, author, color, link}) {
    return (
        <div className={styles.book}>
            <a className={styles.cover} href={link} style={{backgroundColor: color}}>
                <div className={styles.tag}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.author}>{author}</div>
                </div>
            </a>
        </div>
    );
}
