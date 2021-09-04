import '../styles/globals.css'
import { reportWebVitals } from 'next-step-metrics';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export { reportWebVitals }
export default MyApp
