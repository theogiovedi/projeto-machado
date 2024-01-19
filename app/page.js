import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import Books from '../components/Books'
import Search from '../components/Search'
import Highlights from '../components/Highlights'

export default function Home() {
  return (
    <div>
        <Header />
        <div className={styles.section}>Destaques</div>
        <Highlights />
        <div className={styles.section}>Acervo</div>
        <Search />
        <Books />
    </div>
  )
}
