
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [asideVisible, setasideVisible] = useState(false);

  const togleAsite = () => {    
    setasideVisible(!asideVisible)
  };

  return (
    <header>
      <nav>
        <div className='header-logo'>
          <Link to={"/"}><img src="/images/dark-logo.png" alt="logo"/></Link>
        </div>
        <ul className='link-bar'>
          <Link to="BookPage"><li>Book Now</li></Link>
        </ul>
          <button className='bar-icon'> <FaBars onClick={togleAsite} /> </button>
      </nav>
      {asideVisible && (
        <aside className='aside'>
          <ul className='clicked'>
            <Link to="Bookpage"><li>Book Now</li></Link>
          </ul>
        </aside>
      )}

    </header>
  )
}

export default Header