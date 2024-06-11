import React, { useState, useEffect } from 'react';
import styles from './Phonebook.module.css';
import ContactsForm from 'components/ContactsForm/Contactform';
import ContactFilter from 'components/Filtering/Filter';

function Phonebook() {
  const [localContacts, setLocalContacts] = useState([]);

  useEffect(() => {
    const savedContacts = localStorage.getItem("localContacts");
    if (savedContacts) {
      setLocalContacts(JSON.parse(savedContacts));
    }
  }, []);

  const addContact = newContact => {
    setLocalContacts([...localContacts, newContact]);
    localStorage.setItem('localContacts', JSON.stringify([...localContacts, newContact]));
  };

  const removeContact = id => {
    const updatedContacts = localContacts.filter(contact => contact.id !== id);
    setLocalContacts(updatedContacts);
    localStorage.setItem('localContacts', JSON.stringify(updatedContacts));
  };

  return (
    <>
      <ContactsForm onAddContact={addContact} />

      <div className={styles.phonebookContainer}>
        <div className={styles.title}>
          <h2>Contacts List</h2>
          <ContactFilter
            contacts={localContacts}
            setFilteredContacts={setLocalContacts}
          />
        </div>

        <ul className={styles.phonebookList}>
          {localContacts.map((contact, index) => (
            <li key={contact.id}>
              {' '}
              <div className={styles.ContactContainer}>
                {index + 1}. {contact.name}: {contact.number}{' '}
                <button
                  onClick={() => removeContact(contact.id)}
                  type="button"
                  className={styles.buttonContact}
                >
                  Remove
                </button>
              </div>{' '}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Phonebook;
