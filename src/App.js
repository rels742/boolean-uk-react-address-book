import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContactsList from "./components/ContactsList";
import ContactsAdd from "./components/ContactsAdd";
import ContactsView from "./components/ContactsView";
import "./styles/styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);

  //TODO: Load all contacts on useEffect when component first renders

  // I will not need any dependencies,
  // use fecth within useEffect and fetch the contacts data
  // don't forget to log the data to see whats going on

  useEffect(() => {
    fetch(`http://localhost:4000/contacts`)
      .then((res) => res.json())

      .then((data) => {
        console.log("the data", data);
        setContacts(data);
      });
  }, []);

  // to get the list of contacts to show, create a link - for when it loads

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <Link to="/">Contacts List</Link>
          {/* <li>Contacts List</li> */}
          <li>Add New Contact</li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsList contacts={contacts} />} />
        </Routes>
      </main>
    </>
  );
}
