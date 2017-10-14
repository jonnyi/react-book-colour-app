import React from 'react';
import PropTypes from 'prop-types';

const AddColourForm = ({ onNewColour = (f) => f }) => {
  let _title, _colour;
  const submit = (e) => {
    e.preventDefault();
    onNewColour(_title.value, _colour.value);
    _title.value = '';
    _colour.value = '#000000';
    _title.focus();
  };
  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="colourName">Colour name:</label>
        <input
          ref={(input) => (_title = input)}
          id="colourName"
          type="text"
          className="form-control"
          placeholder="Add a new colour name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="colourHex">Colour: </label>
        <input
          ref={(input) => (_colour = input)}
          type="color"
          id="colourHex"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add colour
      </button>
    </form>
  );
};
AddColourForm.propTypes = {
  onNewColour: PropTypes.func.isRequired
};
AddColourForm.defaultProps = {
  onNewColour: (f) => f
};

export default AddColourForm;
