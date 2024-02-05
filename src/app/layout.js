import Footer from "./components/footer";
import Navbar from "./components/navbar";
import './global.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        < Navbar />
        {children}
        < Footer />
      </html>
    )
  }
