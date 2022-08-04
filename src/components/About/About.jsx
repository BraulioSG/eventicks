//stylesheets
import './About.css';

//images
import teamGears from '../../assets/svg/teamGears.svg';

function About() {
  return (
    <>
      <div className="About-container">
        <img
          loading="lazy"
          src={teamGears}
          className="About-image"
          alt="team members gears"
        />
        <div className="About-content">
          <h1 className="About-title">About Eventicks</h1>
          <p className="About-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            recusandae sequi soluta dolorem ipsam id optio sunt iusto, commodi
            molestias corrupti harum rerum perspiciatis odio nihil ducimus
            beatae, neque possimus!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
