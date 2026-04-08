import './Footer.css';

function Footer() {
  const archiveYears = ['AW26', 'SS26', 'AW25', 'SS25', 'AW24', 'SS24', 'AW23', 'SS23', 'AW22', 'SS22', 'AW21', 'SS21', 'AW20', 'SS20', 'AW19'];

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__section">
          <h4 className="footer__heading">Archive</h4>
          <ul className="footer__archive">
            {archiveYears.map((year) => (
              <li key={year}>
                <a href="#">{year}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Info</h4>
          <ul>
            <li><a href="#">Imprint</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© tar 2026</p>
      </div>
    </footer>
  );
}

export default Footer;
