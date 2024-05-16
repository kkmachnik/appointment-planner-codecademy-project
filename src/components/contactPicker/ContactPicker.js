import React from "react";

export const ContactPicker = ({ contacts, onChange, name, value }) => {
  return (
    <>
      <select name={name} onChange={onChange} value={value}>
      <option value={""} key={-1}>No Contact Selected</option>
      {contacts.map((contact) => (
        <option value={contact.name} key={contact} > 
          {contact.name}
        </option>

      ))}
      </select>
    </>
  );
};
