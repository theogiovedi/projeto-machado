import styles from "../styles/Cover.module.css"

export default function Cover({ title, author, color }) {
    return (
        <div className={styles.cover} style={{backgroundColor: color}}>
            <div className={styles.tag}>
                <div className={styles.title}>{title}</div>
                <div className={styles.author}>{author}</div>
            </div>
        </div>
    );
}

