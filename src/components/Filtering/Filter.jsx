import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styles from '../Phonebook/Phonebook.module.css';

function ContactFilter({ contacts, setFilteredContacts }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [search, contacts, setFilteredContacts]);

  return (
    <div>
      <input
        className={styles.inputText}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
}

ContactFilter.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    setFilteredContacts: PropTypes.func.isRequired,
}

export default ContactFilter;
