import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { GET_POPULAR_NEWS } from '../../redux/constants';
import UsersContainer from '../../components/UsersContainer';

export const PopularNews = () => {
  const dispatch = useDispatch();
  const popularNews = useSelector((store) => store?.news?.popularNews);
  const loading = useSelector((store) => store?.news?.loading);
  const errorPopular = useSelector((store) => store?.errors?.popularNewsError);

  useEffect(() => {
    dispatch({ type: GET_POPULAR_NEWS });
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <UsersContainer news={popularNews} title={'Popular news'} error={errorPopular} />
      )}
    </div>
  );
};

export default PopularNews;
