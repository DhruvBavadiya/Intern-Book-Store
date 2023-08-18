import React, { useContext } from 'react'
import { globalStyle } from '../Styles/globalStyle';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import GlobalSearch from './GlobalSearch';
import { AuthContext, useAuthContext } from '../context/authContext';
const Navbar = () => {
    const isLoggedIn = Cookies.get("userInfo"); 
    const userContext = useAuthContext()
    const navigate = useNavigate()
    const handleLogout =()=>{

        Cookies.remove("userInfo");
        navigate("/login")
        
    }
    const handleclick=()=>{
      navigate("/")
    }

    const handleCartClick = () => {
      console.log("Cart clicked");
      navigate("/cart")
      // Add your cart logic here
    };
    
    const handlenotCartClick = () => {
      alert("Login FIrst");
      // Add your cart logic here
    };
    
    
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
              <Link to="/updateprof" style={globalStyle.link}>
                Profile
              </Link>
              <FaShoppingCart style={globalStyle.cartIcon} 
              onClick={handleCartClick}
              />
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
              <FaShoppingCart style={globalStyle.cartIcon} 
              onClick={handlenotCartClick}
              />
              

            </>
          )}
        </div>
      </nav>

      
      </div>
    )
}

export default Navbar
