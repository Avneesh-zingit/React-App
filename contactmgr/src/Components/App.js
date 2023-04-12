import React ,{useState, useEffect} from'react';
import './App.css';
import Header from './Header';
import Contactcard from './Contactcard';
import Contactlist from './Contactlist';
import Addcontact from './Addcontact';


function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts]=useState([]);
  const addContactHandler= (contact)=>{
    console.log(contact);
    setContacts([...contacts,contact])

  }
  useEffect(()=>{
  const retriveContact=  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveContact)        
  setContacts(retriveContact);
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="App">
      <Header/>
      <Addcontact addContactHandler={addContactHandler}/>
      <Contactlist contacts={contacts}/>
     
    </div>
  );
}

export default App;
