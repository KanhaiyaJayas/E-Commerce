import AddToCartIcon from "../../assets/icons/add_cart.svg";
import { useState } from "react";
const ListItem = ({ data }) => {
  const [message , setMessage] = useState("Not added to the cart yet");

  const handleClick = () => {
    setMessage("Added to the cart");
    console.log("Clicked" , message)
  }

  return (
    <>
      <div className={"item-card"}>
        <img src={`/Images/${data?.thumbnail}`} className={"img-fluid"} />
        <div className={"item-card__information"}>
          <div className={"pricing"}>
            <span>{data?.discountedPrice}</span>
            <small>
              <strike>₹{data?.price}</strike>
            </small>
          </div>
          <div className={"title"}>
            <h3>T{data?.title}</h3>
          </div>
        </div>
        <small className={"cart-message"}>
          {message}
        </small>
        <button className={"cart-add"} onClick={handleClick}>
          <span>Add to Card</span>
          <img src={AddToCartIcon} />
        </button>
      </div>
    </>
  );
};

export default ListItem;
