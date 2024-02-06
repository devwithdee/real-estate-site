"use client"
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
       <div>
<footer className="bg-light text-center" style={{width: '100vw'}}>
  
  <div className="container w-100">
  <section style={{ display: 'flex', justifyContent: 'center' }}>
  <a className="btn btn-primary btn-floating m-2" style={{ backgroundColor: '#3b5998', height: '3em', width: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }} href="#!" role="button">
    <i className="bi bi-facebook" style={{ fontSize: '1.75em', textAlign: 'center', color: 'white' }}></i>
  </a>

  <a className="btn btn-primary btn-floating m-2" style={{ backgroundColor: '#55acee', height: '3em', width: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }} href="#!" role="button">
    <i className="bi bi-twitter-x" style={{ fontSize: '1.75em', textAlign: 'center', color: 'white' }}></i>
  </a>

  <a className="btn btn-primary btn-floating m-2" style={{ backgroundColor: '#dd4b39', height: '3em', width: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }} href="#!" role="button">
    <i className="bi bi-google" style={{ fontSize: '1.75em', textAlign: 'center', color: 'white' }}></i>
  </a>

  <a className="btn btn-primary btn-floating m-2" style={{ backgroundColor: '#ac2bac', height: '3em', width: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }} href="#!" role="button">
    <i className="bi bi-instagram" style={{ fontSize: '1.75em', textAlign: 'center', color: 'white' }}></i>
  </a>
</section>


    <section className="mb-4">
      <p>
        Property management company and whatnot.
      </p>
    </section>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '4em'}}>
        <div>
          <h5 className="text-uppercase">Apartments</h5>

          <ul className="list-unstyled">
            <li>
              <a href="/gallery" className="text-dark">Gallery</a>
            </li>
            <li>
              <a href="/features" className="text-dark">Features</a>
            </li>
            <li>
              <a href="/listings/meadows" className="text-dark">The Meadows</a>
            </li>
            <li>
              <a href="/listings/trails" className="text-dark">Trails</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-uppercase">Account</h5>

          <ul className="list-unstyled">
            <li>
              <a href="/portal/login" className="text-dark">Login</a>
            </li>
            <li>
              <a href="/portal/account" className="text-dark">Account</a>
            </li>
            <li>
              <a href="/portal/applicant" className="text-dark">Applications</a>
            </li>
            <li>
              <a href="/portal/delete-account" className="text-dark">Delete Account</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-uppercase">Company</h5>

          <ul className="list-unstyled">
            <li>
              <a href="/company/about" className="text-dark">About</a>
            </li>
            <li>
              <a href="/company/contact" className="text-dark">Contact</a>
            </li>
            <li>
              <a href="/company/careers" className="text-dark">Careers</a>
            </li>
          </ul>
        </div>
    </div>

  </div>

  <div className="text-center p-3" style={{backgroundColor: 'teal', color: 'white'}}>
    © 2020 Copyright:
    <a href="https://github.com/djbohl"> DBDesign</a>
  </div>

</footer>
</div>
    );
}

export default Footer;