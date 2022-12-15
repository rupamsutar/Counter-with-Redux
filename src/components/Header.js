import classes from './Header.module.css';
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../store/auth';

const Header = () => {
  const auth = useSelector(state => state.auth.authState);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  const nav = (
    <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && nav}      
    </header>
  );
};

export default Header;
