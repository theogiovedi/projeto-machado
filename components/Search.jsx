import styles from "../styles/Search.module.css"

export default function Search() {
    return (
        <div className={styles.search}>
            <input className={styles.input} type="text" placeholder="Pesquisar" />
        </div>
    );
}
