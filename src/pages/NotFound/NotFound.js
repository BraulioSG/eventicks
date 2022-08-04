//stylesheet
import './NotFound.css';

//components
import MinimalHeader from '../../components/MinimalHeader/MinimalHeader';

//tools
import { Link } from 'wouter';

//image
import cat404 from '../../assets/svg/cat404.svg';

function NotFound() {
  return (
    <>
      <MinimalHeader />
      <div className="notFound-container">
        <div className="notFound-box">
          <figure className="notFound-figure">
            <img src={cat404} alt="cat 404" />
            <figcaption>
              <a href="https://storyset.com/web">
                Web illustrations by Storyset
              </a>
            </figcaption>
          </figure>
          <div className="notFound-button">
            <Link to="/">
              <span>Home</span>
              <i className="material-icons">chevron_right</i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
