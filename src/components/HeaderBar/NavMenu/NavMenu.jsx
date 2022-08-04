//stylesheet
import './NavMenu.css';

function NavMenu() {
  return (
    <>
      <nav className="NavMenu">
        <ul className="NavMenu-list">
          <li className="NavMenu-list-item">
            <a href="/dashboard" className="NavMenu-list-item-link">
              <span className="NavMenu-list-item-link-text">Dashboard</span>
            </a>
          </li>
          <li className="NavMenu-list-item">
            <a href="#about" className="NavMenu-list-item-link">
              <span className="NavMenu-list-item-link-text">About</span>
            </a>
          </li>
          <li className="NavMenu-list-item">
            <a href="#contact" className="NavMenu-list-item-link">
              <span className="NavMenu-list-item-link-text">Contact</span>
            </a>
          </li>
          <li className="NavMenu-list-item">
            <a href="#faqs" className="NavMenu-list-item-link">
              <span className="NavMenu-list-item-link-text">FAQs</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
