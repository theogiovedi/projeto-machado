import styles from "../styles/Highlight.module.css"

export default function Highlight({id, title, author, color}) {
    return (
        <a className={styles.item} style={{backgroundColor: color}} href={"/livros/" + id} key={id}>
            <div className={styles.tag}>
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.author}>{author}</div>
                </div>
            </div>
        </a>
    );
}


