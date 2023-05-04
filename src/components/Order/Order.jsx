
import OrderContainer from "./OrderConditionals";

function Order(){



    return (
        <div className="outerContainer">
        <p className="text">Step 1:Select Your Pizza</p>
       
            <OrderContainer />
           <button className="nextButton">NEXT</button>
        </div>
    )
}

export default Order;