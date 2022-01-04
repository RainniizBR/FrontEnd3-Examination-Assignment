import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateButtonStyled } from "../styles/CreateButtonStyled";
import { LoginStyled } from "../styles/LoginStyled";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = { email, password };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const token = data.token;
        localStorage.setItem("js3-examassignment", token);
        navigate("/home");
      });
  }

  return (
    <div>
      <LoginStyled>
        <h1>Login</h1>
        <form onSubmit={handleOnSubmit}>
          <label>E-mail </label>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Password </label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <CreateButtonStyled type="submit">LOGIN</CreateButtonStyled>
        </form>
      </LoginStyled>
    </div>
  );
}
