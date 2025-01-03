import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../Services/Api.js";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
