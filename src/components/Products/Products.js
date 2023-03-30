import ListItem from "../ListItems/ListItem";
const Products = () => {
  const items = [
    {
      id: 0,
      discountedPrice: 340,
      price: 450,
      title: "Title of One Item",
      thumbnail: "placeholder.png",
    },
    {
      id: 1,
      discountedPrice: 340,
      price: 450,
      title: "Title of One Item",
      thumbnail: "placeholder.png",
    },
  ];
  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        <ListItem
          data={items[0]}
        />
        <ListItem
          data={items[1]}
        />
      </div>
    </div>
  );
};

export default Products;
