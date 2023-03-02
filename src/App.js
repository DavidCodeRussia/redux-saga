import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount, getNews } from "./redux/actions/actionCreator";
import UsersContainer from "./components/UsersContainer";

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
  const news = useSelector((store) => store?.news?.latestNews);
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
      <UsersContainer news={news} />
    </div>
  );
};

export default App;
