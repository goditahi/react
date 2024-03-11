import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h5>please Login</h5>;
  else return <div>hello {user.userName} How are u</div>;
};

export default Profile;
