import { UserContext } from "./UserContext";
import { useContext } from "react";

const Cart4 = (props) => {
    const bookval = props.bookval;
    const finalp = props.finalp;

    const {value, setValue} = useContext(UserContext);

    const handleAdd = (indiitem) => {
        setValue({"noqty":value.noqty + 1 , "fp": value.fp + indiitem.price, "booktem":[...value.booktem]});
        indiitem.totalp = indiitem.totalp + indiitem.price;
        indiitem.numq = indiitem.numq + 1;
    }

    const handleRem = (indiitem) => {
        if(indiitem.numq===1){
            setValue({"noqty":value.noqty-1 , "fp":value.fp-indiitem.price, "booktem": value.booktem.filter(rembook => rembook.id!==indiitem.id)});
        }
        else if(indiitem.numq > 1){
            indiitem.totalp = indiitem.totalp - indiitem.price;
            indiitem.numq = indiitem.numq - 1;
            setValue({"noqty":value.noqty-1 , "fp":value.fp-indiitem.price, "booktem": [...value.booktem]})
        }
        
    }

    return (
        <div className="bookcart ">
            <div><h2 className="bookcat">Cart</h2></div>
            <div className="headingcart"><b>
                <div className="d-inline-block justify-content-between">Book</div>
                <div className="d-inline-block justify-content-between">Title</div>
                <div className="d-inline-block justify-content-between">Price</div></b>
            </div>
            {bookval.map((indiitem) => (
                <div className="bookscart " key={indiitem.id}>
                    <div className="itemcart">
                      <img src={indiitem.photo} className="mt-2" alt="book"/>
                      <h2><button onClick={() => {handleAdd(indiitem)}}>+</button>{indiitem.title}<button onClick={() => {handleRem(indiitem)}}>-</button></h2>
                      <div className="iprice">Rs. {indiitem.price} X {indiitem.numq}</div>
                      <div className="pricecart">Rs. {indiitem.totalp}</div>
                    </div>
                </div>
            ))}
            <div className="headingcart">
                <div>Final Price</div>
                <div>Rs.{finalp}</div>
            </div>
        </div>
    );
}
 
export default Cart4;