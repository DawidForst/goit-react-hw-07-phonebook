import PropTypes from "prop-types";
import css from "./ContactListItem.module.css";

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li className={css.contactItem}>
      <span>
        {name}: {number}
      </span>
      <button onClick={onDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
}
