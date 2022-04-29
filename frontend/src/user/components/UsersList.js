import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  const renderUserItems = () => {
    return (
      <ul className="users-list">
        {users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    );
  };

  return (
    <>
      {users.length === 0 && <h2>No users found</h2>}
      {users.length > 0 && renderUserItems()}
    </>
  );
};

export default UsersList;
