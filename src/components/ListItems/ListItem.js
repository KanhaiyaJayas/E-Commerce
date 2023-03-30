import AddToCartIcon from "../../assets/icons/add_cart.svg";
const ListItem = ({ data }) => {
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
        <button className={"cart-add"}>
          <span>Add to Card</span>
          <img src={AddToCartIcon} />
        </button>
      </div>
    </>
  );
};

export default ListItem;
