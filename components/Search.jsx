import styles from "../styles/Search.module.css"

const Search = () => {
    return (
        <div className={styles.search}>
            <input className={styles.input} type="text" placeholder="Pesquisar" />
        </div>
    );
}

export default Search;
