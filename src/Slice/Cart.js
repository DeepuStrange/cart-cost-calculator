import { useSelector,useDispatch } from "react-redux";
import { IncreaseByDecrease } from "./EcommerceSlice";

function Cart(){
    const dispatch = useDispatch();
    const {cart,TotalAmount} = useSelector((appstate)=>appstate);
    const changeqty = (id,qty)=>{
        dispatch(IncreaseByDecrease({
            id:id,
            qty : qty
        }))
    }
    return(
        <div style={{
            display:cart.length > 0 ? "flex" :"none",
            flexDirection:"column",
            margin: 10,
            backgroundColor: "#ececec",
            padding: 10,

        }}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                width:"100%"
            }}>
                <b>Cart</b>
                <b>TotalPrice : ${TotalAmount}</b>
            </div>
            <div style={{
                display:"flex",
                width:"100%",
                flexDirection:"column"
            }}> 
                {
                    cart.length > 0 ? (cart.map((C)=>(
                        <div key={C.id}
                        style={{
                            display:"flex",
                            border:"1px solid black",
                            justifyContent:"space-between",
                            padding:10,
                            margin:10
                        }}>
                            <div style={{
                                display:"flex",
                                justifyContent:"space-between",
                                gap:20
                            }}>
                            <img src={C.image}
                            alt="img"
                            style={{
                                objectFit:"fill",
                                width:100,
                                height:100
                            }}></img>
                                <div style={{
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"space-around",
                                }}>
                                    <span>{C.title}</span>
                                    <b>${C.price}</b>
                                </div>
                            </div>
                            <div style={{
                                        display:"flex",
                                        flexDirection:"row",
                                        alignItems:"center",
                                        gap:5
                                    }}>
                                        <button onClick={()=>changeqty(C.id,C.qty - 1)}>-</button>
                                        <span>{C.qty}</span>
                                        <button onClick={()=>changeqty(C.id,C.qty + 1)}>+</button>
                                    </div>
                        </div>
                    ))) : (
                        <div>
                            <h1>Empty Cart</h1>
                        </div>
                    )
                }
            </div>
            
        </div>
    )
}
export default Cart;