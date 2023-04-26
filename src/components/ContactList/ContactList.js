import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteContact,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
}
