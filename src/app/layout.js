import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Navbar />
        <body>{children}</body>
        <Footer />
      </html>
    )
  }
