import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../Services/Api.js";
const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState("profile"); 

  useEffect(() => {
    axios.get(`/user/${id}`).then((response) => {
      setUser(response.data);
    });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <div className="tabs">
        <button
          onClick={() => setTab("profile")}
          className={tab === "profile" ? "active" : ""}
        >
          Profile
        </button>
        <button
          onClick={() => setTab("contact")}
          className={tab === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
      {tab === "profile" && <div>Profile Section </div>}
      {tab === "contact" && (
        <div>
          <p>Mobile: {user.mobile}</p>
          <p>Skype: {user.skype}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      {/* <div className="actions">Actions Section</div> */}
    </div>
  );
};

export default UserDetails;
