import React, {useContext, useEffect} from "react";
import AuthContext from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";

const LogOut  = () => {

  const {setAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth("");
    setTimeout(() => {
      navigate("/");
    }, 1000)
  }, []);

  return (
      <section>
        <p>You are now logged out.</p>
      </section>
  )
}

export default LogOut;