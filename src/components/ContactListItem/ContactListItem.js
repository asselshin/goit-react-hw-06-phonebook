import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      {name}: {number}
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
