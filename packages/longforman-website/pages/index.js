import classnames from 'classnames'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Longforman - festival divadelní improvizace</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={classnames(styles.main, styles.first)}>
        <span className={styles.logo} />
        <h1 className={styles.title}>
          Longforman <span className={styles.hidden}> - </span>
          <span className={styles.subheading}>
            festival divadelní improvizace
          </span>
        </h1>
        <p className={styles.description}>
          30. 4. - 2. 5. 2021
          <br />
          Praha
        </p>
      </main>
    </div>
  )
}
