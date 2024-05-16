import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"  required />
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{9}" placeholder="Phone Number (ANNNNNNNN)" required/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail adress" required />
        <button>Add contact</button>
      </form>
    </>
  );
};

