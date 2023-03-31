import { useState , useEffect} from "react";
import ListItem from "../ListItems/ListItem";
const Products = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Title of this Item 1",
      price: 450,
      discountedPrice: 340,
      thumbnail: "placeholder.png",
    },
    {
      id: 1,
      title: "Title of this Item 1",
      price: 100,
      discountedPrice: 340,
      thumbnail: "placeholder.png",
    },
    {
      id: 3,
      title: "Title of this Item 1",
      price: 100,
      discountedPrice: 340,
      thumbnail: "placeholder.png",
    },
    {
      id: 4,
      title: "Title of this Item 1",
      price: 100,
      discountedPrice: 340,
      thumbnail: "placeholder.png",
    },
  ]);

  const [isLoggedIn , setIsLoggedIn] = useState(false)
  useEffect(() => {
    const isTokenSet = localStorage.getItem('demo-token');
    setIsLoggedIn(isTokenSet);
    document.title = isTokenSet ? "Welcome USer" : "Please Login";
  } , [isLoggedIn]);
  console.log(isLoggedIn)
  const handleLogin = () => {
    console.log("jdljldjl")
    localStorage.setItem("demo-token" , true)
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    localStorage.removeItem("demo-token");
    setIsLoggedIn(false)
  }
  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {items.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </div>
     
      <h1>{isLoggedIn ? "Welcome User" :"please Login"}</h1>
      {isLoggedIn ? <button onClick={handleLogout}>
        Logout
      </button> : <button onClick={handleLogin}>
        Login
      </button> }
      
    </div>
  );
};

export default Products;
