import React,{useState} from "react";
import {AdminOrder} from "./Orders";
import {AdminOrderDetails} from "./AdminOrderDetails";
import { width } from "@mui/system";

export function OrderApp() {
    const [propvalues, setPropValues] = React.useState({
        item: null,
        currentForm: "Order",
    });
    const toggleForm = (formName ,item) =>
    {
        setPropValues({
            item: item,
            currentForm: formName,
        });
    }
    return(
    <div style={{width: "100%"}}> 
    {
        propvalues.currentForm === "Order" ? <AdminOrder onFormSwitch={toggleForm}/> : <AdminOrderDetails data={propvalues.item} onFormSwitch={toggleForm}/>
    }
    </div>
    );
}