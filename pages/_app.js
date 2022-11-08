import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyIcon from '../components/StickyIcon'
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
      <div>
        <Navbar />
        <Component {...pageProps} />
        <StickyIcon />
        <Footer pathname={router.pathname} />
        <Analytics />
      </div>
  )

}

export default MyApp
