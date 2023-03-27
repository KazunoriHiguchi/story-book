import "./button.css";
import PropTypes from "prop-types";

function Button({
  children,
  color = "default",
  size = "base",
  handleClick,
}) {
  return (
    <button
      className={`${color} ${size}`}ï
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
