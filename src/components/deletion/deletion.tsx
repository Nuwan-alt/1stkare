import Footer from '../_shared/footer/footer'
import Header from '../_shared/header/header'
import styles from './deletion.module.scss'

export type DeletionProps = {
  content: string
}

function Deletion({ content }: DeletionProps) {
  return (
    <>
      <Header />

      <main className={styles.deletion}>
        <article
          className={styles.deletion__content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      <Footer />
    </>
  )
}

export default Deletion
