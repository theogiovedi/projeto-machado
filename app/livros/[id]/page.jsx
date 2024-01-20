import books from "../../books.json";
import styles from "../../../styles/Details.module.css";
import Cover from "../../../components/Cover.jsx";
import Info from "../../../components/Info.jsx";
import Header from "../../../components/Header.jsx";

export default function Page({ params }) {
    const book = books[params.id - 1];

    return (
        <div>
            <Header />
            <div className={styles.details}>
                <div className={styles.left}>
                    <Cover title={book.title} author={book.author} color={book.color} />
                </div>
                <div className={styles.right}>
                    <Info id={params.id} universities={book.universities} links={book.links} />
                </div>
            </div>
        </div>
    );
}

