import Footer from "./components/footer";
import Navbar from "./components/navbar";
import styles from './styles/Home.module.css';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        < Navbar />
        <body>{children}</body>
        < Footer />
      </html>
    )
  }
