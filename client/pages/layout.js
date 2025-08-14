import HeaderTop from '../components/Layout/HeaderTop';
import Footer from '../components/Layout/Footer';
import HeaderMenu from '../components/Layout/HeaderMenu';

export default function MainLayout({ children, currentUser }) {
  return (
    <html lang="en">
      <body>
        <HeaderTop />
        <HeaderMenu currentUser={currentUser} />
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}