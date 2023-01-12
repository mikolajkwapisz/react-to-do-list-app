import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__nav--list">
          <Link to="/" className="navbar__nav--list--link">
            <AiFillHome 
              style={{ color: 'avr(--color-light-grey)'}}/>
            <p>List</p>
          </Link>
        </li>
        <li className="navbar__nav--list">
          <Link to="/add" className="navbar__nav--list--link">
            <BsPencilFill 
              style={{ color: 'var(--color-light-grey)'}}/>
            <p>Add task</p>
          </Link>
        </li>
        <li className="navbar__nav--list">
          <div className="navbar__nav--list--link">
            {/* DELETE ALL LIST*/}
            <MdDeleteForever 
              style={{ color: 'var(--color-light-grey)'}}/>
            <p>Clear tasks</p>
          </div>
        </li>
        <li className="navbar__nav--list"> 
          <div className='navbar__nav--list--link'>
            {isLogged ? (
              <>
                <FaLock 
                  style={{ color: 'var(--color-light-grey)'}}/>
                <p>Account</p>
              </>
            ) : (
              <>
                <FaUnlockAlt 
                  style={{ color: 'var(--color-white)'}}/>
                <p>Log in</p>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
