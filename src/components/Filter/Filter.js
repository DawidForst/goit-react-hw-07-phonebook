import css from "./Filter.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setFilter } from "../../redux/contactsSlice";

PropTypes.propTypes = {
  value: PropTypes.string,
};

export default function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}
