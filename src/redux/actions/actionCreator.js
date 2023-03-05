import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_POPULAR_NEWS_ERROR,
  SET_LATEST_NEWS_ERROR,
  SET_LOADING,
} from '../constants';

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setLatestNewsError = (payload) => ({
  type: SET_LATEST_NEWS_ERROR,
  payload,
});

export const setPopularNewsError = (payload) => ({
  type: SET_POPULAR_NEWS_ERROR,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
