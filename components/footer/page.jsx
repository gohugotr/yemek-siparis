import Link from 'next/link';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © Telif hakkı 2023 |&nbsp;
      <Link href='https://google.com' target='_blank'>
        Cengiz YILMAZ&nbsp;
      </Link>
      | Tüm Hakları Saklıdır | Cy Bilişim tarafından desteklenmektedir
    </footer>
  )
}

export default Footer
