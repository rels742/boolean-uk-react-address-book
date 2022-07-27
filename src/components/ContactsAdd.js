import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {
  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { setContacts, contacts } = props;

  const [firstName, setFirstName] = useState("");

  //TODO: Implement controlled form
  //send POST to json server on form submit

  const handleChange = (event) => {
    const inputValue = event.target.value;
    console.log("I am changing successfully!", inputValue);

    setFirstName(inputValue);
  };

  return (
    <form className="form-stack contact-form">
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
      <input id="lastName" name="lastName" type="text" required />

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required />

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required />

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
