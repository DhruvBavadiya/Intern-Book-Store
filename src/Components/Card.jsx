import React from 'react'
import { useAuthContext } from '../context/authContext';
import cartService from '../Service/cartService';
import { useCartContext } from '../context/cartContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';

const Card = (props) => {
  const book = props.book
  // const context = useAuthContext();
  const cartContext = useCartContext();
  const { userData, setUser, Signout } = useAuthContext();
  const { cartData, updateCart } = cartContext;
  // console.log(userData)

  const id = JSON.parse(Cookies.get("userInfo"))
  // console.log(id.id)

  const addItem = (book) => {
    // if (!userData || !userData.id) {
    //   // User data is not available, handle this case
    //   console.log("User data is not available");
    //   return;
    // }
  
    const payload = {
      bookId: book.id,
      userId: id.id,
      quantity: 1,
    };
  
    cartService
      .AddCartItem(payload)
      .then((res) => {
        if (res && res.status === 200) {
          updateCart();
          toast.success("Item added successfully!!", {
            position: "bottom-right",
          });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "bottom-right",
        });
      });
  };
  
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.img} class="card-img-top" alt="..." style={{ height: "447px" }} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text m-0">{props.category}</p>
          <p class="card-text">{props.description}</p>
          <a href="#" class="btn btn-primary"  onClick={() => addItem(book)} >Add to Cart</a>
        </div>
      </div>
    </div>
  )
}

export default Card
