import AddToCartIcon from "../../assets/icons/add_cart.svg";
import { useState } from "react";
import Modal from "../UI/Modal";
const ListItem = ({ data, onAdd,onRemove}) => {
  const [message, setMessage] = useState("Not added to the cart yet");
  const [showModal, setShowModal] = useState(false);

  // const [counter, setCounter] = useState(0);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const increaseCounter = event => {
    event.stopPropagation();
    onAdd(data.id)
    // setCounter((prevState) => {
    //   return prevState + 1;
    // });
  };

  const decreaseCounter = event => {
    event.stopPropagation()
    onRemove(data.id)
    // if (counter === 0) {
    //   return;
    // }
    // if(counter == 1) {
    //   onRemove(data.id)
    // }
    // setCounter((prevState) => {
    //   return prevState - 1;
    // });
  };
  return (
    <>
      <div className={"item-card"} onClick={handleModal}>
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
        <small className={"cart-message"}>{message}</small>
        {data.quantity < 1 ? (
          <button
            className={"cart-add card-add__modal"}
            onClick={increaseCounter}
          >
            <span>Add To Cart</span>
            <img src={AddToCartIcon} alt="Cart Icon" />
          </button>
        ) : (
          <div className="cart-addon card-addon__modal">
            <button onClick={(event) => decreaseCounter(event)}>
              <span>-</span>
            </button>
            <span>
              {data.quantity}
              </span>
            <button onClick={(event) => increaseCounter(event)}>
              <span>+</span>
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <>
          <Modal onClose={handleModal}>
            <div className="item-card__modal">
              <div className="img-wrap">
                <img
                  className={"img-fluid"}
                  src={`/Images/${data.thumbnail}`}
                  alt={data.title}
                />
              </div>
              <div className="meta">
                <h3>{data.title}</h3>
                <div className={"pricing"}>
                  <span>₹{data.discountedPrice}</span>
                  <small>
                    <strike>₹{data.price}</strike>
                  </small>
                </div>
                <p>{data.description}</p>
                {
                // counter 
               data.quantity < 1 ? (
                  <button
                    className={"cart-add card-add__modal"}
                    onClick={increaseCounter}
                  >
                    <span>Add To Cart</span>
                    <img src={AddToCartIcon} alt="Cart Icon" />
                  </button>
                ) : (
                  <div className="cart-addon card-addon__modal">
                    <button onClick={decreaseCounter}>
                      <span>-</span>
                    </button>
                    <span>
                      {data.quantity}
                      </span>
                    <button onClick={increaseCounter}>
                      <span>+</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default ListItem;
