//Stylesheet
import './FormInput.css';

function FormInput(props) {
  const { name, placeholder, type, label, func, icon } = props;

  const handleInput = (event, param) => {
    event.preventDefault(); //Avoids refreshing the page
    if (typeof param === 'function') {
      param(event.target.value);
    }
  };

  return (
    <>
      <label className="form-input">
        <input
          required
          className="form-input-field"
          type={type}
          placeholder={placeholder}
          onChange={(e) => handleInput(e, func)}
        />
        <span className="form-input-label">
          <i className="material-icons">{icon}</i>
          {label ? label : name}
        </span>
      </label>
    </>
  );
}

export default FormInput;
