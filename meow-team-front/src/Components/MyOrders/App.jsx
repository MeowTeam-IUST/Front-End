import React,{useState} from "react";
import { MyOrders } from "./MyOrders";
import { MyOrdersdetails } from "./MyOrdersDetails";

export function MyOrderApp() {
    const [propvalues, setPropValues] = useState({
        item: null,
        currentForm: "MyOrders",
    });
    const toggleForm = (formName ,item) =>
    {
        setPropValues({
            item: item,
            currentForm: formName,
        });
    }
    return(
    <div>
    {
        propvalues.currentForm === "MyOrders" ? <MyOrders onFormSwitch={toggleForm}/> : <MyOrdersdetails data={propvalues.item} onFormSwitch={toggleForm}/>
    }
    </div>
    );
}