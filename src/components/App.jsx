import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Header } from './Header/Header';
import { HomePage } from './Pages/HomePage';
import { MoviesPage } from './Pages/MoviesPage';
import { OneMoviePage } from './Pages/OneMoviePage';
import { Reveiws } from './Reveiws/Reveiws';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<OneMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reveiws" element={<Reveiws />} /> 
        </Route>
      </Route>
    </Routes>
  );
};
