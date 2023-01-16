import {useState, useEffect} from 'react';
import "./style.css"
import CList from './list';
import Form from './form';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Thrall",
            phone_number:"123456"
        },
        {
            fullname:"Orgrim",
            phone_number:"123123"
        },
        {
            fullname:"Drek'Thar",
            phone_number:"654587"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    },[contacts]);

  return (
    <div id='container'>
        <h1>Contacts</h1>
        <CList contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts