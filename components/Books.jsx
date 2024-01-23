import styles from "../styles/Books.module.css" 
import Book from "../components/Book.jsx"

export default function Books({ books, search, author, university, year }) {
    let searchFilter, authorFilter, universityFilter;

    console.log(year)

    try {
        searchFilter = new RegExp(search, "i");
    } catch (e) {
        searchFilter = new RegExp("");
    };
    
    authorFilter = new RegExp(author);
    universityFilter = new RegExp(university);
    
    let display = books.filter(item => searchFilter.test(item.title) || searchFilter.test(item.author)
    ).filter(item => authorFilter.test(item.author)
    ).filter(item => item.universities.reduce((state, option) => state ? true : universityFilter.test(option.name), false)
    ).filter(item => item.universities.reduce((state, option) => year == -1 ? true : (state ? true : (year >= option.start && year <= option.end)), false)
    ).map(item => 
        <Book title={item.title} author={item.author} color={item.color} link={"/livros/" + item.id} key={item.id} />
    );

    return (
        <div className={styles.books}>
            {/*display.length == 0 ? <div className={styles.empty}>Nenhuma obra encontrada</div> : display*/}
            {display}
        </div>
    );
}
