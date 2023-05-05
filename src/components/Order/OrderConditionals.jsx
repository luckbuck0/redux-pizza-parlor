import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";

function Conditionals(props){

    let pizza= props.pizza
    let pizzas= useSelector((store)=> store.pizzas)
    const [isclicked,setIsClicked]=useState(false)
    const dispatch=useDispatch()

const orderPizzaId=useSelector((store)=>store.orderedPizzaId)

console.log('Orderpizza id----->',orderPizzaId)

const addPizza= ()=>{
    console.log('in add pizza');
    setIsClicked(true)
    clicked()
    console.log('pizza id----->',pizza.id);
dispatch({
    type:'ADD_ORDER',
    payload:pizza.id
})
    
}

const unClick= ()=>{
    console.log('in add pizza');
    setIsClicked(false)
    clicked()
}


function clicked(){
console.log('In the order page',pizzas);
    if(isclicked===false){
        return (
            <button onClick={addPizza} className="buttons">ADD</button>
        )
    }
    else if (isclicked){
        return(
             <button onClick={unClick} className="buttons">Remove</button>
            
        )
    }
    
}

return(
    <div>
        {clicked()}
    </div>
   
  )
}
export default Conditionals;