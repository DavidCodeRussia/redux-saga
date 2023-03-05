import { takeEvery, put, call, fork, all, debounce, join } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from '../../api';
import {
  setLatestNews,
  setPopularNews,
  setLatestNewsError,
  setPopularNewsError,
  setLoading,
} from '../actions/actionCreator';
import { GET_LATEST_NEWS, GET_POPULAR_NEWS } from '../constants';

export function* handleLatestNews() {
  try {
    yield put(setLoading(true));
    const { children } = yield call(getLatestNews, 'items');
    yield put(setLatestNews(children));
    yield put(setLoading(false));
  } catch {
    yield put(setLatestNewsError('Error fetching latest news '));
  }
}

export function* handlePopularNews() {
  try {
    yield put(setLoading(true));
    const { children } = yield call(getPopularNews);
    yield put(setPopularNews(children));
    yield put(setLoading(false));
  } catch {
    yield put(setPopularNewsError('Error fetching popular news '));
  }
}

export function* watchPopularSaga() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}

export function* watchLatestSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export function* loadTets() {
  const { children } = yield call(getPopularNews);
  return children;
}

export default function* rootSaga() {
  yield all([fork(watchPopularSaga), fork(watchLatestSaga)]);
}

// takeEvery - срабатывает при каждом нажатии кнопки
// takeLatest - вызывает только последнюю переданную функцию
// takeLeading - вызывает только 1-ую сагу, автоматически отменяет вызов всех последующих. если 1-ая ещё находится в процессе выполнения
// select - помогает работать со стором и получать данные прямо в саге
// all, race - хорошо справляются с параллельным задачами. аналоги promise.all и promise.race

// Отличия fork от all заключается в том что, что fork дает полную независимость параллельным запросам и возвращает сразу
// response выполневшегося запроса. Когда all хоть и выполняет их параллельно, но дожидается выполнения всех запросов
// и только тогда возвращает результат. Если хоть один из запросов упадет all не вернет вообще ничего.

// spawn создает параллельную задачу в корне саги и не привязывает её к родителю (не блокирующий, как и fork)
// fork привязывает процессы к родителю
