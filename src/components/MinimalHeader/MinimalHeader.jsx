//stylesheet
import './MinimalHeader.css';

//tools
import {Link} from 'wouter'

function FormHeader() {
  return (
    <>
      <div className="FormHeader">
        <h1><Link to="/">Eventicks</Link></h1>
      </div>
    </>
  );
}

export default FormHeader;
