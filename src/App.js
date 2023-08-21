// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Homepage from './Components/Homepage';
import Booklist from './Components/Booklist';
import Pagenot from './Components/Pagenot';
// import { globalStyle } from './Styles/globalStyle';
import Form from './Components/Form';
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/login';
import Navbar from './Components/Navbar';
import AuthWrapper from './context/authContext';
import EditBook from './Components/EditBook';
import UpdateProfile from './Pages/UpdateProf';
import Cartbox from './Components/Cartbox';
import { CartContext } from './context/cartContext';
import Footer from './Components/Footer';
// import AddBook from './Components/AddBook';
// import Cookies from "js-cookie";

function App() {

  const theme= createTheme({
      components:{
        MuiButton:{
          styleOverrides:{
            root:{
              backgroundColor:"red",
            }
          }
        }
      }
  })

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <useCartContext>
    <useAuthContext>
    <ToastContainer/>
    <div>
    <Navbar/>
    </div>
      <Routes>
      <Route
      path="/login"
      element={<Login />}
    ></Route>
        <Route path="/" element = {<Homepage/>}  ></Route>
        <Route path="/edit-book/:id" element = {<EditBook/>}  ></Route>
        <Route path="/edit-book" element = {<EditBook/>}  ></Route>
        <Route path='/books' element = {<Booklist/>}></Route>
        <Route path='/form' element = {<Form/>}></Route>
        <Route path='/updateprof' element = {<UpdateProfile/>}></Route>
        <Route path='/cart' element = {<Cartbox/>}></Route>
        <Route path='*' element = {<Pagenot/>}></Route>

      </Routes>
      <div>
      <Footer/>
      </div>
      </useAuthContext>
      </useCartContext>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
