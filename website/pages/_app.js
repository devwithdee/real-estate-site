import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout';
import '../styles/globals.css';
import { useEffect } from 'react';
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  },[]);
  
  return (
    <SSRProvider>
    < Layout >
      <Component {...pageProps} />
    </Layout>
    </SSRProvider>
  )

}
