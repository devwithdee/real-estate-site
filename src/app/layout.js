import Footer from "./components/footer";
import Navbar from "./components/navbar";
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import ImportBsJS from './components/importBsJS';

const DynamicBootstrapScript = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), {
  ssr: false, // Ensure that it's only loaded on the client side
});

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Head>
        <title>Real Estate Website</title>
        <meta name="description" content="Real Estate Rental Site made by Donna-Jo Bohl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
      <ImportBsJS />
        < Navbar />
        {children}
        < Footer />
        </body>
      </html>
    )
  }
