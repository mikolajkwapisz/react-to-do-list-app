import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { useState } from "react";
import { DeleteContainer } from "../../components";

interface NavbarProps{
  setIsDeleteContainerVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setIsDeleteContainerVisible}: NavbarProps) => {
  const [isLogged, setIsLogged] = useState(true);

  function changeVisibility () {
    setIsDeleteContainerVisible( prev => !prev)
  }
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__nav--list">
          <Link to="/" className="navbar__nav--list--link">
            <AiFillHome 
              style={{ color: 'var(--color-orange)'}}/>
            <p>List</p>
          </Link>
        </li>
        <li className="navbar__nav--list">
          <Link to="/add" className="navbar__nav--list--link">
            <BsPencilFill 
              style={{ color: 'var(--color-orange)'}}/>
            <p>Add task</p>
          </Link>
        </li>
        <li className="navbar__nav--list">
          <div className="navbar__nav--list--link" onClick={changeVisibility}>
            {/* DELETE ALL LIST*/}
            <MdDeleteForever 
              style={{ color: 'var(--color-orange)'}}
              />
            <p>Clear tasks</p>
          </div>
        </li>
        <li className="navbar__nav--list"> 
          <div className='navbar__nav--list--link account'>
            {isLogged ? (
              <>
                <FaLock 
                  style={{ color: 'var(--color-orange)'}}/>
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
