import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';

//import { Cast } from './Cast/Cast';
//import { HomePage } from './Pages/HomePage';
//import { MoviesPage } from './Pages/MoviesPage';
//import { OneMoviePage } from './Pages/OneMoviePage';
//import { Reveiws } from './Reveiws/Reveiws';


const Cast = lazy(() => import('./Cast/Cast'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const OneMoviePage = lazy(() => import('./Pages/OneMoviePage'));
const Reveiws = lazy(() => import('./Reveiws/Reveiws'));




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
