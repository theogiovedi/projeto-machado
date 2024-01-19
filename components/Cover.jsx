import styles from "../styles/Cover.module.css"

const Cover = () => {
    return (
        <div className={styles.cover} style={{backgroundColor: "#FFFF31"}}>
            <div className={styles.tag}>
                <div className={styles.title}>Vida e morte de M.J. Gonzaga de Sá</div>
                <div className={styles.author}>Lima Barreto</div>
            </div>
        </div>
    );
}

export default Cover;
