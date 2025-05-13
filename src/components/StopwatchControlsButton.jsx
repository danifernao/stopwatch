import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ icon, size, shape, title, onClick, disabled }) {
  return (
    <button
      className={`${size} ${shape}`}
      title={title}
      disabled={disabled ? "disabled" : ""}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={["fas", icon]} />
    </button>
  );
}

export default Button;
