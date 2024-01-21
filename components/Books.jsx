import styles from "../styles/Books.module.css" 
import Book from "../components/Book.jsx"

export default function Books({ books, search }) {
    let re;
    try {
        re = new RegExp(search, "i");
    } catch (e) {
        re = new RegExp("");
    };

    return (
        <div className={styles.books}>
            {books.filter((item) => re.test(item.title) || re.test(item.author)).map(item => <Book title={item.title} author={item.author} color={item.color} link={"/livros/" + item.id} key={item.id} />)}
        </div>
    );
}
