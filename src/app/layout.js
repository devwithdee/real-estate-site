import Footer from "./components/footer";
import Navbar from "./components/navbar";
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import ImportBsJS from './components/importBsJS';
import { AccountProvider } from "../../context/account";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ApplicationProvider } from "../../context/appstatus";


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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      </Head>
      <body>
        <AccountProvider>
          <ApplicationProvider>
            <ImportBsJS />
            < Navbar />
            {children}
            < Footer />
          </ApplicationProvider>
        </AccountProvider>
      </body>
    </html>
  )
}
