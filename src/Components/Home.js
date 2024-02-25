import { useDispatch,useSelector } from "react-redux";
import { ToCart,RemovFromCart } from "../Slice/EcommerceSlice";
// import Cart from "../Slice/Cart";
function Home(){
    const dispatch = useDispatch();
    const {Products,cart} = useSelector((appstate)=>appstate);
    console.log(Products);
    console.log(cart,"cart");
    if(Products.length === 0){
        return(
            <div>
                <h1>Loading.......!</h1>
            </div>
        )
    }else{
        return(
            
            <div style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                width:"auto",
                justifyContent:"space-evenly",
            }}>
                {Products.map((Prod)=>(
                    <div key={Prod.id}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:"space-between",
                        padding: 10,
                        border: "1px solid grey",
                        width: "20%",
                        marginTop: 10,
                        gap: 10,
                        
                    }}>
                        <img src={Prod.image}
                        alt="img"
                        style={{
                            // objectFit:"cover",
                            height:200,
                            width:"auto"
                        }}></img>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            flexWrap:"wrap",
                            justifyContent:"space-between",
                        }}>
                        <b>{Prod.title}</b>
                        <b>Price:${Prod.price}</b>
                        </div>
                        {cart.some((C)=>C.id === Prod.id) ? (
                            <button
                            style={{
                                border:0,
                                borderRadius:5,
                                color:"white",
                                backgroundColor:"red",
                                padding:5,
                            }}
                            onClick={()=>{
                                dispatch(RemovFromCart({
                                    id :Prod.id
                                }))
                            }}>RemoveFromCart</button>
                        ) : (
                            <button 
                            style={{
                                border:0,
                                color:"white",
                                borderRadius:5,
                                backgroundColor:"green",
                                padding:5,

                            }}
                            onClick={()=>{
                                dispatch(ToCart({
                                    id:Prod.id,
                                    title:Prod.title,
                                    image:Prod.image,
                                    qty:Prod.qty,
                                    price:Prod.price
                                }))
                            }}>addToCart</button>
                        )}
                    </div>
                    
                ))}
                {/* <Cart></Cart> */}
            </div>
        )
    }
}
export default Home;