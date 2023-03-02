import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount, getNews } from './redux/actions/actionCreator';
import UsersContainer from './components/UsersContainer';

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
  const latestNews = useSelector((store) => store?.news?.latestNews);
  const popularNews = useSelector((store) => store?.news?.popularNews);
  const errorLatest = useSelector((store) => store?.errors?.latestNewsError);
  const errorPopular = useSelector((store) => store?.errors?.popularNewsError);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleIncrease}>+ 1</button>
      <button onClick={handleDecrease}>- 1</button>
      <button onClick={handleNews}>Get News</button>

      <h1>{count}</h1>

      {errorLatest?.length > 0 ? (
        <div style={{ color: 'red', fontWeight: 'bold' }}>{errorLatest}</div>
      ) : (
        <UsersContainer news={latestNews} title={'latestNews'} />
      )}

      {errorPopular?.length > 0 ? (
        <div style={{ color: 'red', fontWeight: 'bold' }}>{errorPopular}</div>
      ) : (
        <UsersContainer news={popularNews} title={'popularNews'} />
      )}
    </div>
  );
};

export default App;
