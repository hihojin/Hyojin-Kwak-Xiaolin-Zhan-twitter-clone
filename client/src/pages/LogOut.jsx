import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LogOut  = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000)
  });

  return (
      <section>
        <p>You are now logged out.</p>
      </section>
  )
}

export default LogOut;
