import { useSelector } from "react-redux";
import { useState } from "react";

function OrderContainer(){
    
function addPizza(){
    console.log('in add pizza');
}

function clicked(){

    let pizzas= useSelector((store)=> store.pizzas)
    const [isclicked,setIsClicked]=useState(false)
console.log('In the order page',pizzas);
    if(isclicked===false){
        return (
            <div className="pizzaContainer">
            {/* <img  src='images/pizza_photo.png' /> */}
          

            {
                pizzas.map((pizza)=>{
                    return (
                        
                            <div className="individualPizza">
                            <img className="pizzaPics" src={pizza.image_path} alt="" />
                            <p>{pizza.name}</p> 
                            <p>{pizza.description}</p>
                            <button onClick={addPizza} className="buttons">ADD</button>
                            </div>
                    )
                })
            }
          </div>
        )
    }
    else {
        <div className="pizzaContainer">
            {/* <img  src='images/pizza_photo.png' /> */}
          

            {
                pizzas.map((pizza)=>{
                    return (
                        
                            <div className="individualPizza">
                            <img className="pizzaPics" src={pizza.image_path} alt="" />
                            <p>{pizza.name}</p> 
                            <p>{pizza.description}</p>
                            <button className="buttons">Remove</button>
                            </div>
                    )
                })
            }
          </div>
          
    }
    
}

return(
    <div>
        {clicked()}
    </div>
   
  )
}
export default OrderContainer