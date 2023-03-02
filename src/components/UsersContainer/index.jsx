import React from "react";
import User from "./components/User";

const UsersContainer = ({ news }) => {
  return (
    <>
      {news &&
        news.map((item, id) => {
          return (
            <User
              key={(id = { id })}
              id={item.id}
              created_at={item.created_at}
              type={item.type}
              author={item.author}
              title={item.title}
            />
          );
        })}
    </>
  );
};

export default UsersContainer;
