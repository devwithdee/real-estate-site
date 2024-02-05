import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Slide from '../components/imageSlide';
import FeaturesCard from '../components/card';
import { Button } from 'react-bootstrap';
import Link from 'next/link'
import bgImg from '../public/brightchairs.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Estate Website</title>
        <meta name="description" content="Real Estate Rental Site made by Donna-Jo Bohl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.bgImg} style={{
          backgroundImage: `url(${bgImg.src})`
        }} >
          <div className={styles.hero}>
            <h1 className={styles.heading}>Discover your new home.</h1>
            <div className={styles.viewBtnContainer}>
              <Link href="/listings"><Button className={styles.viewBtn}>View Listings</Button></Link>
            </div>
          </div>
        </div>
        <h1 className={styles.title}>Our Locations</h1>
        <Slide
          title_1="Fox Chapel"
          image_1="/foxchapel.jpg"
          alt_1="Fox Chapel"
          title_2="Pittsburgh"
          image_2="/pitt.jpg"
          alt_2="Pittsburgh"
          width={90}
          height={300}
        />
        <h1 className={styles.title}>Features</h1>
        <div className={styles.features}>
          <FeaturesCard
            image="/stainlesskitchen.jpg"
            title="Stainless Steel Appliances"
          />
          <FeaturesCard
            image="/fitness.jpg"
            title="Fitness Center"
          />
          <FeaturesCard
            image="/furnished.jpg"
            title="Furnished Homes"
          />
        </div>
      </main>
    </>
  )
}
