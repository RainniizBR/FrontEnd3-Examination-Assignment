import React from "react";
import ClientCreate from "../components/ClientCreate";
import ClientList from "../components/ClientList";
import MyInfo from "../components/MyInfo";
import { HeaderStyled } from "../styles/HeaderStyled";

export default function HomePage() {
  return (
    <div>
      <HeaderStyled>
        <h1>My Home Page</h1>
      </HeaderStyled>

      <MyInfo />
      <ClientCreate />
      <ClientList />
    </div>
  );
}
