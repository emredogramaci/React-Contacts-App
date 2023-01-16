import {useState, useEffect} from 'react';

const initialFormValues = {fullname:"", phone_number:""};

function Form( {addContact, contacts} ) {
    const [form, setForm] = useState (initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    },[contacts]);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname ==='' || form.phone_number === ''){
            return false;
        }

        addContact([...contacts, form]);
    };
    
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name='fullname' onChange={onChangeInput} value={form.fullname} placeholder='Full Name' />
        </div>
        <div>
            <input name='phone_number' onChange={onChangeInput} value={form.phone_number} placeholder='Phone Number' />
        </div>
        <div className="btn">
            <button onClick={onSubmit}>Add</button>
        </div>
    </form>
  )
}

export default Form