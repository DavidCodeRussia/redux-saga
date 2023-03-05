import React from 'react';
import styled from 'styled-components';
import User from './components/User';

const UsersContainer = ({ news, title, error }) => {
  if (error?.length > 0) {
    // displayed error
    <div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>;
  }

  return (
    <UserContainerWrapper>
      {news?.length > 0 && <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>{title}</div>}
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
    </UserContainerWrapper>
  );
};

const UserContainerWrapper = styled.div`
  height: 88vh;
`;

export default UsersContainer;
