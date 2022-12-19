import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      <div className={styles.box}>
            <a href='#' className={styles.link}><p className={styles.number}>+1-123-456-7890</p></a>
            <h1 className={styles.title}>Real Estate</h1>
            </div>
        <div className={styles.bgImg}>
          <div className={styles.hero}>
          <h1 className={styles.heading}>Real Estate Company</h1>
          <p className={styles.parag}>Where comfort meets luxury.</p>
          <div className={styles.btnContainer}><button type='button' className={styles.btnPrimary}>Contact Us</button></div>
        </div>
        </div>
      </main>
    </>
  )
}
