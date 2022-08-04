//stylesheet
import './HeaderBar.css';

//components
import NavMenu from './NavMenu/NavMenu';

//tools
import { useState } from 'react';

function HeaderBar() {
  const [showMobile, setShowMobile] = useState('hide');
  const [menuIcon, setMenuIcon] = useState('menu');

  const toggleMobile = (evt) => {
    evt.preventDefault();
    if (showMobile === 'show') {
      setShowMobile('hide');
      setMenuIcon('menu');
    } else {
      setShowMobile('show');
      setMenuIcon('close');
    }
  };

  return (
    <>
      <div className="HeaderBar">
        <h1>Eventicks</h1>
        <NavMenu />
        <button
          className="HeaderBar-burger-button"
          onClick={(e) => toggleMobile(e)}
        >
          <i className="material-icons">{menuIcon}</i>
        </button>
      </div>
      <div className={`mobileMenu ${showMobile}`}>
        <NavMenu />
      </div>
    </>
  );
}

export default HeaderBar;
