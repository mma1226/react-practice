import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="header__nav">
<div className="header__logo">
          <a href="#">tar</a>
        </div>

      </nav>
    </header>
  );
}

export default Header;
