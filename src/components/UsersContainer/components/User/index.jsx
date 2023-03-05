import React from 'react';
import styled from 'styled-components';

const User = ({ id, created_at, type, author, title }) => {
  return (
    <UsersWrapper>
      <div>
        id:<span>{id}</span>
      </div>

      <div>
        created_at:<span>{created_at}</span>{' '}
      </div>
      <div>
        type: <span>{type}</span>
      </div>
      <div>
        author: <span>{author}</span>
      </div>
      <div>
        title: <span>{title === null ? 'no title' : title}</span>
      </div>
    </UsersWrapper>
  );
};

const UsersWrapper = styled.div`
  border: 1px solid gray;
  background-color: rgb(255, 255, 255);
  color: #000;
  width: 50%;
  border-radius: 8px;
  margin: 0 0 2% 5%;
  padding: 5px;

  div {
    span {
      font-weight: 700;
    }
  }
`;

export default User;
