import React, { useContext } from 'react'
import { globalStyle } from '../Styles/globalStyle';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import GlobalSearch from './GlobalSearch';
import { AuthContext } from '../context/authContext';
const Navbar = () => {
    const isLoggedIn = Cookies.get("userInfo"); 
    const userContext = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout =()=>{
        userContext.Signout();
    }
    const handleclick=()=>{
      navigate("/")
    }
    return (
        <div>
        <nav style={globalStyle.navbar}>
        <div style={globalStyle.logo}>
        <img src="https://www.drupal.org/files/styles/grid-4-2x/public/logo-vert-250.png?itok=auyB2fmL" alt ="logo"style={globalStyle.img} onClick={handleclick}/>
        </div>
        <div>
  {isLoggedIn ? <GlobalSearch /> : <> </>}
</div>
        <div style={globalStyle.rightSection}>
        {isLoggedIn ? (
            <>
              <Link to="/books" style={globalStyle.link}>
                Books
              </Link>
              <Link to="/form" style={globalStyle.link}>
                Profile
              </Link>
              <FaShoppingCart style={globalStyle.cartIcon} />
              <button onClick={handleLogout} style={globalStyle.logoutButton}>
              Logout
            </button>
            
            </>
            
          ) : (
            <>
              <Link to="/" style={globalStyle.link}>
                Login
              </Link>
              <Link to="/form" style={globalStyle.link}>
                Register
              </Link>
              <FaShoppingCart style={globalStyle.cartIcon} />

            </>
          )}
        </div>
      </nav>

      
      </div>
    )
}

export default Navbar
