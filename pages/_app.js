import '../styles/globals.css'
import "../Components/Homepage.css";
import "../Components/About.css";
import "../Components/Contact.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
