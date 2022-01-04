import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "../styles/HeaderStyled";

export default function ClientList() {
  const [clientList, setClientList] = useState(null);

  useEffect(() => {
    getClientList();
  }, []);

  function getClientList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("js3-examassignment");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClientList(data.results));
  }

  return (
    <div>
      <p>
        Press <button onClick={getClientList}>here</button> to see your recently
        added client.
      </p>
      <HeaderStyled>
        <h1>Your Client List</h1>
      </HeaderStyled>
      {clientList &&
        clientList.map((client) => {
          return (
            <div key={client.id}>
              <h3>{client.name}</h3>
              <ul>
                <li>Org. Number: {client.organisationNr}</li>
                <li>Email: {client.email}</li>
                <li>Tel: {client.phoneNumber}</li>
                <li>
                  Click <Link to={`/client-detail/${client.id}`}>HERE</Link> for
                  more info.
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
