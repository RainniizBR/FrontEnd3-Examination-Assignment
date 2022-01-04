import React from "react";
import ClientDetail from "../components/ClientDetail";

export default function ClientDetailPage({ clientDetail }) {
  return (
    <div>
      <ClientDetail id={clientDetail} />
    </div>
  );
}
