import styles from "../styles/Books.module.css" 
import Book from "../components/Book.jsx"

export default function Books({ books }) {
    console.log(books);
    return (
        <div className={styles.books}>
            {books.map(item => <Book title={item.title} author={item.author} color={item.color} link={"/livros/" + item.id} />)}
        </div>
    );
}
