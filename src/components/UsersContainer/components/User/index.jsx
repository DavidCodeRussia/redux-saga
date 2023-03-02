import React from "react";
import s from "./User.module.scss";
const User = ({ id, created_at, type, author, title }) => {
  return (
    <div className={s.wrapper}>
      <div>
        id:<span>{id}</span>
      </div>

      <div>
        created_at:<span>{created_at}</span>{" "}
      </div>
      <div>
        type: <span>{type}</span>
      </div>
      <div>
        author: <span>{author}</span>
      </div>
      <div>
        title: <span>{title === null ? "no title" : title}</span>
      </div>
    </div>
  );
};

export default User;
