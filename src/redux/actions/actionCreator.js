import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  GET_NEWS,
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_POPULAR_NEWS_ERROR,
  SET_LATEST_NEWS_ERROR,
} from '../constants';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const getNews = () => ({
  type: GET_NEWS,
});

export const setLatestNewsError = (payload) => ({
  type: SET_LATEST_NEWS_ERROR,
  payload,
});

export const setPopularNewsError = (payload) => ({
  type: SET_POPULAR_NEWS_ERROR,
  payload,
});
