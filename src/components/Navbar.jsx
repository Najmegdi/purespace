
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';
import Header from './Header';

const Navbar = () => {
  const numItemsInCart = useSelector((state)=> state.cartState.numItemsInCart);
  const theme = useSelector((state) => state.userState.theme);
  const isDarkTheme = theme === 'dracula';

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          {/* Title */}
          <NavLink to='/'
            className='hidden lg:flex text-4xl items-center font-bold uppercase'>purespace
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1]  bg-base-200 shadow rounded-box w-52 p-0'>
              <NavLinks/>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex rounded-full w-[30rem] justify-center">
          <ul className="menu menu-horizontal p-0 flex justify-around w-full">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <label className='swap swap-rotate'>
            <input type="checkbox" onChange={handleTheme} defaultChecked={isDarkTheme}/>
            <BsSunFill className='swap-on h-4 w-4' />
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
          {/* CART LINK*/}
          <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4 bg-slate-950'>
            <div className="indicator">
              <BsCart3 className='h-6 w-6 text-white' />
              <span className='badge badge-sm badge-ghost indicator-item'>{numItemsInCart}</span>
            </div>
          </NavLink>
          <Header />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;