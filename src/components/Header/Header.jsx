import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export function Header() {
  return (
    <div className={css.conteiner}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? css.navItemActive : css.navItem;
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => {
            return isActive ? css.navItemActive : css.navItem;
          }}
        >
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
