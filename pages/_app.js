import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyIcon from '../components/StickyIcon'
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/regalia-logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <StickyIcon />
      <Footer pathname={router.pathname} />
    </div>
  )

}

export default MyApp
