import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrder } from "../Redux/products/action";
import "./checkOut.css"
export const CheckOutPage=()=>{
    const orderList=useSelector((store)=>store.ecommerceData.orders)
    const dispatch=useDispatch()
    let totalCost=0
    for(var i=0;i<orderList.length;i++)
    {
        totalCost+=Number(orderList[i].price)
       
    }
    console.log(totalCost)
useEffect(()=>{
      dispatch(fetchOrder())
  },[dispatch])
console.log(orderList)
    return(
        <div className="checkContainer">
            <div><h1>checkout Page</h1></div>
            <div><h1>Total Cost {totalCost}</h1></div>
        <div className="checkPageBody">
            {orderList &&orderList.map((e,i)=>{
          return <div className="checkCard" key={i} ><p>{e.name}</p><p>{e.year}</p><p>{e.price}₹</p><div className="checkimg"><img  src={e.photoLink} alt={"img"}/></div>
          </div>
        })}
        </div>
        </div>
    )
}