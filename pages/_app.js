import Head from 'next/head'
import Footer from '../components/Footer'
import '../styles/globals.css'
// import '../styles/Footer.module.css'


const ForgetfulNotes = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Forgetful Notes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default ForgetfulNotes;
