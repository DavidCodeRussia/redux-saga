import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_LATEST_NEWS } from '../../redux/constants';
import UsersContainer from '../../components/UsersContainer';

export const LatestNews = () => {
  const dispatch = useDispatch();
  const latestNews = useSelector((store) => store?.news?.latestNews);
  const loading = useSelector((store) => store?.news?.loading);
  const errorLatest = useSelector((store) => store?.errors?.latestNewsError);

  useEffect(() => {
    dispatch({ type: GET_LATEST_NEWS });
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <UsersContainer news={latestNews} title={'Latest news'} error={errorLatest} />
      )}
    </div>
  );
};

export default LatestNews;
