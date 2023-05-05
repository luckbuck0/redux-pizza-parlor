
import OrderConditionals from "./OrderConditionals";
import { useSelector } from "react-redux";
import { useState } from "react";


function Order(){


    let pizzas= useSelector((store)=> store.pizzas)
    const [isclicked,setIsClicked]=useState(false)


    return (
        <div className="outerContainer">
        <p className="text">Step 1:Select Your Pizza</p>
    <div>
        {
                pizzas.map((pizza)=>{
                    return (
                        
                            <div key={pizza.id} className="individualPizza">
                            <img className="pizzaPics" src={pizza.image_path} alt="" />
                            <p>{pizza.name}</p> 
                            <p>{pizza.description}</p>
                            <OrderConditionals
                            pizza={pizza}
                            />
                            </div>
                    )
                })
            }
            </div>
            {/* <OrderContainer /> */}
           <button onClick={() => { history.push('/customerInfo') }} className="nextButton">NEXT</button>
        </div>
    )
}

export default Order;