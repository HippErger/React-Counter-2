import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <div>
      <button onClick={props.onIncrease} >Increase+</button>
      <h3>Current Value: {props.value}</h3>
      <button onClick={props.onDecrease} >Decrease-</button>
    </div>
  );
}

Counter.propTypes = {
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Counter;
