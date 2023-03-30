import ListItem from "./components/ListItem";
function App() {

  return (
    <>
    <ListItem data ={{
    discountedPrice: 340,
    price: 450,
    title: "Title of One Item",
    thumbnail: "placeholder.png"
  }}/>
    <ListItem  data ={{
    discountedPrice: 400,
    price: 450,
    title: "Title of One Item",
    thumbnail: "placeholder.png"
  }}/>
    </>
  );
}

export default App;
