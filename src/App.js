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

          <li>
            <Link to="/">Contacts List</Link>
          </li>

          <li>
            <Link to="/contacts/add">Add New Contact</Link>
          </li>

          {/* <li>Contacts List</li> */}
          {/* <li>Add New Contact</li> */}
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsList contacts={contacts} />} />

          <Route
            path="/contacts/add"
            element={
              <ContactsAdd contacts={contacts} setContacts={setContacts} />
            }
          />

          <Route path="/contacts/:id" element={<ContactsView />} />
        </Routes>
      </main>
    </>
  );
}

// inside ContactsAdd - I need to make it a controlled form. Look back at how to make controlled forms.

// add state properties for each field

// and add change handlers to update the state (onChange I think)

//Summary of the day:

// I used use effect to fetch data from the given server

// I set the routes and links so that the contacts list would be rendered

// i was also able to create the add a cotact requirement by creating states for the fields,

// making the forms controlled and adding change handlers to update the states

// got onto the submit handler with a fetch and Post... still sort of in progress

// made sure to make notes, break things down into steps, check hints, focus on one thing at a time, read over previous slides and use google and well as teacher support.
