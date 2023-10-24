
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
  const [asideVisible, setasideVisible] = useState(false);

  const togleAsite = () => {    
    setasideVisible(!asideVisible)
  };

  return (
    <header>
      <nav>
        <div className='header-logo'>
          <a href="/"> <img src="/images/dark-logo.png" alt="logo"/></a>
        </div>
        <ul className='link-bar'>
          <li><a href="#">Book Now</a></li>
        </ul>
          <button className='bar-icon'> <FaBars onClick={togleAsite} /> </button>
      </nav>

      {asideVisible && (
        <aside className='aside'>
          <ul className='clicked'>
            <li><a href="#">Book Now</a></li>
          </ul>
        </aside>
      )}

    </header>
  )
}

export default Header