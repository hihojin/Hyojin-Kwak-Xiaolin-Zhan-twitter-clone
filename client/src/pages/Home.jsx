import NavBar from "../components/navBar";
import PostContainer from "../components/postContainer";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import AuthContext from "../context/AuthProvider";

export default function Home() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const userResponse = await axios.get("/user");
      setUserName(userResponse.data.user);
    }
    fetchUserName().then();
  }, []);

  return (
      <div>
        <NavBar user={userName}></NavBar>
        <PostContainer user={null} editable={false}></PostContainer>
      </div>
  )
}
