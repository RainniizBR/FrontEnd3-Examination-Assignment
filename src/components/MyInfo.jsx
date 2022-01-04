import React, { useEffect, useState } from "react";
import { MyInfoStyled } from "../styles/MyInfoStyled";

export default function MyInfo() {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const url = "https://frebi.willandskill.eu/api/v1/me";
    const token = localStorage.getItem("js3-examassignment");
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, []);

  return (
    <div>
      <MyInfoStyled>
        {myData && (
          <>
            <h3>
              Welcome Back! {myData.firstName} {myData.lastName}
            </h3>
            <p>Your Email: {myData.email}</p>
          </>
        )}
      </MyInfoStyled>
    </div>
  );
}
