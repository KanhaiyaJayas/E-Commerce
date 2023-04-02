import AddToCartIcon from "../../assets/icons/add_cart.svg";
import { useState } from "react";
const ListItem = ({ data , updateItemTitle}) => {
  const [message , setMessage] = useState("Not added to the cart yet");



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
            <h3>{data?.title}</h3>
          </div>
        </div>
        <small className={"cart-message"}>
          {message}
        </small>
        <button className={"cart-add"} onClick={() =>{ updateItemTitle(data?.id)}}>
          <span>Add to Card</span>
          <img src={AddToCartIcon} />
        </button>
      </div>
    </>
  );
};

export default ListItem;
