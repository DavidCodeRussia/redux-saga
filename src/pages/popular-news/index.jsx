import React from 'react';
import { useSelector } from 'react-redux';
import UsersContainer from '../../components/UsersContainer';

export const PopularNews = () => {
  const popularNews = useSelector((store) => store?.news?.popularNews);
  const errorPopular = useSelector((store) => store?.errors?.popularNewsError);

  return (
    <div>
      <UsersContainer news={popularNews} title={'Popular news'} error={errorPopular} />
    </div>
  );
};

export default PopularNews;
