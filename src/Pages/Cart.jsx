import React, { useEffect, useContext, useState } from 'react'
import { ShopContext, } from '../Context/ShopContext';

const Cart = () => {

    const {products, currency, cartItems} = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);


    useEffect(() => {

        const tempData = [];
        for(const items in cartItems){
            for(const item in cartItems[items]){
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size:item,
                        quantity:cartItems[items][item]
                    })
                }
            }
        }
        console.log(tempData);
    },[cartItems])

  return (
    <div>Cart</div>
  )
}

export default Cart