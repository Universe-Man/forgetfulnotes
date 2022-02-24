// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Forgetful Notes
        </h1>
        <h2>(Did I already tell you that?)</h2>
      </div>
    </>
  )
}

export default Home;