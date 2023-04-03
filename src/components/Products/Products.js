import { useState, useEffect } from "react";
import ListItem from "../ListItems/ListItem";
import axios from "axios";
import Loader from "../UI/loader";
const Products = () => {
  const [items, setItems] = useState([]);
  const [loader , setLoader] = useState(true);
  //get Data by fetch method
  // useEffect(() => {
  //   fetch('https://e-commerce-project-f5847-default-rtdb.firebaseio.com/items.json').then(response => response.json()).then(data => {
  //     console.log(data)
  //   }).catch(error => {
  //     console.log(error)
  //   });
  // })

  //frtch data by axios
  // useEffect(() => {
  //   axios
  //   .get(
  //     "https://e-commerce-project-f5847-default-rtdb.firebaseio.com/items.json"
  //   )
  //   .then((response) => {
  //     const data = response.data;
  //     const transformData = data.map((item , index) => {
  //       return {...item , id: index}
  //     });
  //     setItems(transformData)
  //   })
  //   .catch((error) => console.log(error));
  // },[])

  useEffect(() => {
    async function fetchItmes() {
      try {
        const response = await axios.get(
          "https://e-commerce-project-f5847-default-rtdb.firebaseio.com/items.json"
        );
        const data = response.data;
        const transformData = data.map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });
        setItems(transformData);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
      finally {
        setLoader(false);
      }
    }

    fetchItmes();
  }, []);

  const updateItemTitle = async (itemId) => {
    try {
      let title = `Item with ID: ${itemId}`;
      await axios.patch(`https://e-commerce-project-f5847-default-rtdb.firebaseio.com/items/${itemId}.json`, {
        title: "Some Updated Title"
      })
      let data = [...items];
      let index = data.findIndex((item) => item.id === itemId);
      data[index]['title'] = title;
    }
   catch(error) {
    console.log('Error Updating The Data!!');
   }
  }

  // const [isLoggedIn , setIsLoggedIn] = useState(false)
  // useEffect(() => {
  //   const isTokenSet = localStorage.getItem('demo-token');
  //   setIsLoggedIn(isTokenSet);
  //   document.title = isTokenSet ? "Welcome USer" : "Please Login";
  // } , [isLoggedIn]);
  // console.log(isLoggedIn)
  // const handleLogin = () => {
  //   console.log("jdljldjl")
  //   localStorage.setItem("demo-token" , true)
  //   setIsLoggedIn(true)
  // }
  // const handleLogout = () => {
  //   localStorage.removeItem("demo-token");
  //   setIsLoggedIn(false)
  // }
  return (
    <>
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {items.map((item) => {
          return <ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>;
        })}
      </div>

      {/* <h1>{isLoggedIn ? "Welcome User" :"please Login"}</h1> */}
      {/* {isLoggedIn ? <button onClick={handleLogout}>
        Logout
      </button> : <button onClick={handleLogin}>
        Login
      </button> } */}
    </div>
   {loader &&  <Loader/>}
    </>
  );
};

export default Products;
