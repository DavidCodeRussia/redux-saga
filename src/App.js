import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import LatestNews from './pages/latest-news';
import PopularNews from './pages/popular-news';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/popular-news" element={<PopularNews />} />
        </Route>
      </>,
    ),
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
