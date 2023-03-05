import React from 'react';
import { useSelector } from 'react-redux';
import UsersContainer from '../../components/UsersContainer';

export const LatestNews = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews);
  const errorLatest = useSelector((store) => store?.errors?.latestNewsError);

  return (
    <div>
      <UsersContainer news={latestNews} title={'Latest news'} error={errorLatest} />
    </div>
  );
};

export default LatestNews;
