import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {
  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { contacts, setContacts } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  //TODO: Implement controlled form
  //send POST to json server on form submit

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputFieldName = event.target.name;
    console.log("I am changing successfully!", inputValue, inputFieldName);

    if (inputFieldName === "firstName") {
      setFirstName(inputValue);
    } else if (inputFieldName === "lastName") {
      setLastName(inputValue);
    } else if (inputFieldName === "street") {
      setStreet(inputValue);
    } else if (inputFieldName === "city") {
      setCity(inputValue);
    } else if (inputFieldName === "email") {
      setEmail(inputValue);
    } else if (inputFieldName === "linkedin") {
      setLinkedin(inputValue);
    } else {
      if (inputFieldName === "twitter") {
        setTwitter(inputValue);
      }
    }
  };

  // an onsubmit handler function that also makes a post fetch request to the json server

  const submitForm = (event) => {
    event.preventDefault();
    const newContact = {
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      email: email,
      linkedin: linkedin,
      twitter: twitter,
    };

    fetch(`http://localhost:4000/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())

      .then((data) => {
        console.log("the data", data);
        setContacts([...contacts, data]);
      });

    console.log("submitted!");

    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setEmail("");
    setLinkedin("");
    setTwitter("");
  };

  return (
    <form className="form-stack contact-form" onSubmit={submitForm}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        value={firstName}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={handleChange}
        value={lastName}
        required
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        onChange={handleChange}
        value={street}
        required
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={handleChange}
        value={city}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={handleChange}
        value={email}
        required
      />

      <label htmlFor="linkedin">LinkedIn:</label>
      <input
        id="linkedin"
        name="linkedin"
        type="text"
        onChange={handleChange}
        value={linkedin}
      />

      <label htmlFor="twitter">Twitter:</label>
      <input
        id="twitter"
        name="twitter"
        type="text"
        onChange={handleChange}
        value={twitter}
      />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default ContactsAdd;

// get first name only working - use console.logs to help me see what I am doing and if I am getting a response.

// make first name field controlled

// add state property for first name

// add change handlers to update the change for first name (onChange I think)

// forget about the other fields for now, just focus on first name

//I NEED TO COMPLETE THIS STEP
//The created contact should be also be added to the contacts list
