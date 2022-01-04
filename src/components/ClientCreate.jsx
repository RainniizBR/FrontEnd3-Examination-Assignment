import React, { useState } from "react";
import { CreateButtonStyled } from "../styles/CreateButtonStyled";
import { FormStyled } from "../styles/FormStyled";

export default function ClientCreatePage() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber,
    };

    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("js3-examassignment");

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function renderInput(type, placeholder, value, setValue) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }

  return (
    <div>
      <FormStyled>
        <h2>Create a New Client</h2>
        <form onSubmit={handleOnSubmit}>
          {renderInput("text", "Name", name, setName)}
          {renderInput(
            "text",
            "Org. number",
            organisationNr,
            setOrganisationNr
          )}
          {renderInput("text", "VAT number", vatNr, setVatNr)}
          {renderInput("text", "Reference", reference, setReference)}
          {renderInput("number", "Payment Term", paymentTerm, setPaymentTerm)}
          {renderInput("text", "Website", website, setWebsite)}
          {renderInput("email", "Email", email, setEmail)}
          {renderInput("text", "Phone Number", phoneNumber, setPhoneNumber)}
          <CreateButtonStyled type="submit">
            Create New Client
          </CreateButtonStyled>
        </form>
      </FormStyled>
    </div>
  );
}
