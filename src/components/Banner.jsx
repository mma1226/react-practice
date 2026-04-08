import { useState } from 'react';
import './Banner.css';

function Banner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="banner">
      <p>
        Pay the flexible way—Klarna is now available. Free DHL express on orders over £300.
      </p>
      <button className="banner__close" onClick={() => setVisible(false)} aria-label="Close">
        ✕
      </button>
    </div>
  );
}

export default Banner;
