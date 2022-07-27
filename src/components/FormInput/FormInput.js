import "./FormInput.css";

function handleChange(event, func) {
  event.preventDefault();

  if (typeof func == "function") {
    func(event.target.value);
  }
}

function FormInput(props) {
  const { name, type, label, callback } = props;
  return (
    <div className="form-input-group">
      <input
        required={true}
        type={type}
        name={name}
        autoComplete="off"
        onChange={(event) => handleChange(event, callback)}
      />
      <label>{label === undefined ? name : label}</label>
      <span>&nbsp;</span>
    </div>
  );
}

export default FormInput;
