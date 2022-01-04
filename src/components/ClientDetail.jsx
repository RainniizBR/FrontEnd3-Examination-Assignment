import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HeaderStyled } from "../styles/HeaderStyled";

export default function ClientDetailPage() {
  const [clientDetail, setClientDetail] = useState({});

  let params = useParams();

  useEffect(() => {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${params.id}/`;
    const token = localStorage.getItem("js3-examassignment");
    console.log(url);

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClientDetail(data));
  }, []);

  return (
    <div>
      {clientDetail && (
        <>
          <HeaderStyled>
            <h1>Client Detail Page</h1>
          </HeaderStyled>
          <h2>Name: {clientDetail.name}</h2>
          <p>Org. Number: {clientDetail.organisationNr}</p>
          <p>VAT Number: {clientDetail.vatNr}</p>
          <p>Reference: {clientDetail.reference}</p>
          <p>Payment Term: {clientDetail.paymentTerm}</p>
          <p>Website: {clientDetail.website}</p>
          <p>Email: {clientDetail.email}</p>
          <p>Tel: {clientDetail.phoneNumber}</p>
          <p>
            Click <Link to="/home">HERE</Link> to Go Back
          </p>
        </>
      )}
    </div>
  );
}
