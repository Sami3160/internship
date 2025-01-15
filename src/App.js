import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import react from 'react';
import { Route, Routes } from 'react-router';
import SingleMovieDetails from './views/SingleMovieDetails';

const Home = react.lazy(() => import('./views/Home'))

function App() {
  console.log(process.env.REACT_APP_BASE_IMAGE_URL)
  console.log("process.env.REACT_APP_BASE_IMAGE_URL")
  return (
    <div className="App">
      <Navbar />
      <div>

        <Routes>
        <Route path="/" element={<react.Suspense fallback={<div>...</div>}>
            <Home />
          </react.Suspense>} />
          <Route path="/home" element={<react.Suspense fallback={<div>...</div>}>
            <Home />
          </react.Suspense>} />
          <Route path="/moviesdetails" element={<SingleMovieDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
