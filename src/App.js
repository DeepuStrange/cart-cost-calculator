import axios from "axios";
import { useDispatch } from "react-redux";
import { useCallback,useEffect } from "react";
import { GetProducts } from "./Slice/EcommerceSlice";
import Cart from "./Slice/Cart";
import Home from "./Components/Home";

function App(){
  const dispatch = useDispatch();
  const FetchProducts = useCallback(async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    dispatch(GetProducts(data))
  },[dispatch]);
  useEffect(()=>{
FetchProducts();
  },[FetchProducts])
  return(
    <div style={{
      display:"flex",
      flexDirection:"row",
    }}>
      <Home></Home>
  <Cart></Cart>
    </div>
  )
}
export default App;