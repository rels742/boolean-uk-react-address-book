import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactsView() {
  const [contact, setContact] = useState(false);

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  let { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/contacts/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())

  //     .then((data) => {
  //       console.log("data fetched for contact:", data);
  //       setContact(data);
  //     });
  // }, [id]);

  //nts, this version of the fetch commented out is not needed because by deafult fetch uses the GET method, hence why the code above and below both worked.

  useEffect(() => {
    fetch(`http://localhost:4000/contacts/${id}`)
      .then((res) => res.json())

      .then((data) => {
        setContact(data);
      });
  }, [id]);

  //nts if fetch fails, check how I've coded the url - have I hardcoded instead of interpolated. Eg before the useEffect above was working, I wrote http://localhost:4000/contacts/:id instead of what is now above

  if (!contact) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        {contact.street} {contact.city}
      </p>

      <h3>Contact details:</h3>

      <p>
        {contact.email} {contact.linkedin} {contact.twitter}
      </p>
    </div>
  );
}

export default ContactsView;
