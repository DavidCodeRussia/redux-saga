import { takeEvery, put, call, fork, all, race, spawn } from '@redux-saga/core/effects';
import { GET_NEWS } from '../constants';
import { getLatestNews, getPopularNews } from '../../api';
import {
  setLatestNews,
  setPopularNews,
  setLatestNewsError,
  setPopularNewsError,
} from '../actions/actionCreator';

export function* handleLatestNews() {
  try {
    const { children } = yield call(getLatestNews, 'items');
    yield put(setLatestNews(children));
  } catch {
    yield put(setLatestNewsError('Error fetching latest news '));
  }
}

export function* handlePopularNews() {
  try {
    const { children } = yield call(getPopularNews);
    yield put(setPopularNews(children));
  } catch {
    yield put(setPopularNewsError('Error fetching popular news '));
  }
}

export function* handleNews() {
  yield spawn(handleLatestNews);
  yield spawn(handlePopularNews);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
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
