import { takeEvery, put, call, fork, all, race } from "@redux-saga/core/effects";
import { GET_NEWS } from "../constants";
import { getLatestNews, getPopularNews } from "../../api";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";

export function* handleLatestNews() {
  // workerSaga
  throw new Error();
  // const { children } = yield call(getLatestNews, "items");
  // yield put(setLatestNews(children));
}

export function* handlePopularNews() {
  const { children } = yield call(getPopularNews);
  yield put(setPopularNews(children));
}

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  // watcherSaga
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
// и только тогда возвращает результат. Есть хоть один из запросов упадет all не вернет вообще ничего.

// spawn создает параллельную задачу в корне саги и не привязывает её к родителю (не блокирующий, как и fork)
