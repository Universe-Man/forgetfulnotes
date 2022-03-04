import Head from 'next/head'
import Footer from '../components/Footer'
import '../styles/globals.scss'

const ForgetfulNotes = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Forgetful Notes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="outer-container">
        <div className="inner-container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ForgetfulNotes;