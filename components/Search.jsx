import styles from "../styles/Search.module.css"

export default function Search({ handler }) {
    return (
        <div className={styles.search}>
            <input className={styles.input} onChange={handler} type="text" placeholder="Pesquisar" />
        </div>
    );
}
